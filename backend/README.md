# OM Financial Experts Backend (Resend + MongoDB)

This backend serves the existing frontend without requiring frontend changes. It supports the existing `POST /api/contact` payload used by Contact.jsx and JoinUs.jsx.

## Environment setup
1. Copy `.env.example` to `.env`.
2. Create a Resend API key at https://resend.com/api-keys and set `RESEND_API_KEY`.
3. Set `CONTACT_TO` to the inbox that should receive enquiries/applications.
4. Verify the sender domain in Resend, then set `CONTACT_FROM` to an address on that verified domain (for example, `OM Financial Experts <forms@yourdomain.com>`). Do not use a made-up sender domain.
5. Create a MongoDB Atlas database user and allow the backend host in Atlas Network Access. Paste the Atlas connection string into `MONGODB_URI`; set `MONGODB_DB=om_financial_experts`.
6. Set `FRONTEND_URL` to the exact production frontend origin(s), comma-separated. Local Vite origins 5173, 5174, and 5175 are already allowed.

## Run locally
```bash
cd backend
npm install
# copy .env.example to .env and fill in real values
npm run dev
```

## API endpoints
- `GET /` — API status
- `GET /api/health` — configuration/database status (does not reveal secrets)
- `POST /api/contact` — stores form submission in MongoDB and sends notification through Resend

The backend will not start if MongoDB is not configured or cannot connect, to avoid silently losing enquiries. Submissions are saved to `contact_enquiries`; documents include `emailStatus` (`pending`, `sent`, or `failed`) so email-delivery problems can be investigated. Both general contact forms and the Join Us career form use the same endpoint; the selected role arrives as `topic` from the current frontend.

## Deploy (Render or another Node host)
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Add the environment variables from `.env.example` in the host dashboard. Do not upload `.env` or expose `RESEND_API_KEY` in frontend environment variables.
- Set the frontend build variable `VITE_API_BASE_URL` to `https://om-financial-experts-final2.onrender.com` (without `/api`). The frontend uses `http://localhost:5000` only for local development and falls back to the production URL when building for production.

## Troubleshooting
- `emailConfigured: false`: check `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM` are all set.
- Resend 403/validation errors: verify the sender domain and ensure `CONTACT_FROM` uses that verified domain.
- MongoDB connection errors: check Atlas database username/password, URL-encode special characters in the password, and add the deployed backend IP or `0.0.0.0/0` to Network Access as appropriate for the host.
