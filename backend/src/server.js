import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const configuredOrigins = (process.env.FRONTEND_URL || '')
  .split(',').map((value) => value.trim().replace(/\/+$/, '')).filter(Boolean);
const allowedOrigins = new Set([
  'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175',
  'http://127.0.0.1:5173', 'http://127.0.0.1:5174', 'http://127.0.0.1:5175',
  ...configuredOrigins,
]);

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin.replace(/\/+$/, ''))) return callback(null, true);
    return callback(new Error('This website is not allowed to access the contact API.'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 204,
}));
app.use(express.json({ limit: '30kb' }));

const clean = (value, max = 2000) => String(value ?? '').trim().slice(0, max);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

let mongoClient;
let enquiriesCollection;
let mongoReady = false;

async function connectMongo() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required. Configure MongoDB Atlas in backend environment variables.');
  mongoClient = new MongoClient(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  });
  await mongoClient.connect();
  const db = process.env.MONGODB_DB ? mongoClient.db(process.env.MONGODB_DB) : mongoClient.db();
  enquiriesCollection = db.collection('contact_enquiries');
  await enquiriesCollection.createIndex({ createdAt: -1 });
  await enquiriesCollection.createIndex({ emailStatus: 1, createdAt: -1 });
  mongoReady = true;
  console.log('MongoDB connected. Contact forms will be stored in contact_enquiries.');
}

app.get('/', (_req, res) => res.json({ ok: true, service: 'OM Financial Experts API' }));
app.get('/api/health', (_req, res) => res.status(mongoReady ? 200 : 503).json({
  ok: mongoReady,
  service: 'OM Financial Experts API',
  emailConfigured: Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO && process.env.CONTACT_FROM),
  databaseConfigured: Boolean(process.env.MONGODB_URI),
  databaseConnected: mongoReady,
}));

// Basic in-memory protection against repeated submissions from one IP.
const requests = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  if (recent.length >= 5) { requests.set(ip, recent); return true; }
  recent.push(now);
  requests.set(ip, recent);
  return false;
}

app.post('/api/contact', async (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({ message: 'Invalid form submission.' });
  }
  if (clean(req.body.website, 100)) return res.status(200).json({ message: 'Enquiry sent successfully.' });
  if (isRateLimited(req.ip || req.socket.remoteAddress || 'unknown')) {
    return res.status(429).json({ message: 'Too many submissions. Please try again after 15 minutes.' });
  }

  const name = clean(req.body.name, 120);
  const phone = clean(req.body.phone, 40);
  const email = clean(req.body.email, 160);
  const topic = clean(req.body.topic || req.body.joinRole, 180) || 'General enquiry';
  const message = clean(req.body.message, 3000);
  const education = clean(req.body.education, 100);
  const ageGroup = clean(req.body.ageGroup, 40);
  const address = clean(req.body.address, 800);
  const workType = clean(req.body.workType, 40);
  const currentOccupation = clean(req.body.currentOccupation, 120);
  const joinRole = clean(req.body.joinRole, 120);
  if (!name || !phone) return res.status(400).json({ message: 'Please enter your name and phone number.' });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }
  if (!mongoReady || !enquiriesCollection) {
    return res.status(503).json({ message: 'The enquiry service is temporarily unavailable. Please try again later.' });
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO || !process.env.CONTACT_FROM) {
    console.error('Missing one or more required Resend environment variables.');
    return res.status(503).json({ message: 'Email service is not configured yet. Please contact the website administrator.' });
  }

  const enquiry = {
    name, phone, email: email || null, topic, message, education: education || null, ageGroup: ageGroup || null, address: address || null, workType: workType || null, currentOccupation: currentOccupation || null, joinRole: joinRole || null,
    formType: /financial consultant|team leader|part.?time|full.?time/i.test(topic) || Boolean(education || ageGroup || address) ? 'career-application' : 'contact-enquiry',
    emailStatus: 'pending', createdAt: new Date(), source: 'website',
  };

  let insertedId;
  try {
    const saved = await enquiriesCollection.insertOne(enquiry);
    insertedId = saved.insertedId;
  } catch (error) {
    console.error('MongoDB save failed:', error.message);
    return res.status(503).json({ message: 'We could not save your enquiry right now. Please try again shortly.' });
  }

  const html = `<div style="font-family:Arial,sans-serif;color:#1c3555;max-width:650px;margin:auto;unicode-bidi:plaintext">
    <div style="background:#173b68;color:#fff;padding:22px 26px"><h2 style="margin:0">${enquiry.formType === 'career-application' ? 'New career application' : 'New website enquiry'}</h2><p>OM Financial Experts</p></div>
    <div style="padding:24px;border:1px solid #dce6f0">
      <p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Phone:</b> ${escapeHtml(phone)}</p>
      <p><b>Email:</b> ${escapeHtml(email || 'Not provided')}</p><p><b>Role / Topic:</b> ${escapeHtml(topic)}</p>
      ${enquiry.formType === 'career-application' ? `<p><b>Work Type:</b> ${escapeHtml(workType || 'Not provided')}</p><p><b>Current Occupation:</b> ${escapeHtml(currentOccupation || 'Not provided')}</p><p><b>Education:</b> ${escapeHtml(education || 'Not provided')}</p><p><b>Age Group:</b> ${escapeHtml(ageGroup || 'Not provided')}</p><p><b>Address:</b><br>${escapeHtml(address || 'Not provided').replace(/\n/g, '<br>')}</p>` : ''}
      <p><b>Message:</b><br>${escapeHtml(message || 'No additional message provided').replace(/\n/g, '<br>')}</p>
      <p style="color:#667">Received: ${new Date().toISOString()}</p>
    </div></div>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM,
        to: [process.env.CONTACT_TO],
        subject: `${enquiry.formType === 'career-application' ? 'Career application' : 'Website enquiry'}: ${topic} — ${name}`,
        html,
        ...(email ? { reply_to: email } : {}),
      }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      await enquiriesCollection.updateOne({ _id: insertedId }, { $set: { emailStatus: 'failed', emailError: clean(result.message || result.name || `Resend HTTP ${response.status}`, 300) } });
      console.error('Resend API rejected email:', response.status, result);
      return res.status(502).json({ message: 'Your details were recorded, but the email could not be sent. Please try again later or contact us directly.' });
    }
    await enquiriesCollection.updateOne({ _id: insertedId }, { $set: { emailStatus: 'sent', resendEmailId: result.id || null, emailSentAt: new Date() } });
    return res.status(200).json({ message: 'Enquiry sent successfully.' });
  } catch (error) {
    console.error('Resend request failed:', error.message);
    await enquiriesCollection.updateOne({ _id: insertedId }, { $set: { emailStatus: 'failed', emailError: clean(error.message, 300) } }).catch(() => {});
    return res.status(502).json({ message: 'Your details were recorded, but email delivery is temporarily unavailable. Please try again later.' });
  }
});

app.use((err, _req, res, _next) => {
  if (err.message?.includes('not allowed to access')) return res.status(403).json({ message: err.message });
  if (err instanceof SyntaxError && 'body' in err) return res.status(400).json({ message: 'Invalid JSON request body.' });
  console.error('Request error:', err.message);
  return res.status(400).json({ message: 'Invalid request.' });
});

async function start() {
  await connectMongo();
  app.listen(PORT, () => console.log(`OM Financial Experts API running on port ${PORT}`));
}
start().catch(async (error) => {
  console.error('Backend startup failed:', error.message);
  if (mongoClient) await mongoClient.close().catch(() => {});
  process.exit(1);
});

async function shutdown() {
  if (mongoClient) await mongoClient.close().catch(() => {});
  process.exit(0);
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
