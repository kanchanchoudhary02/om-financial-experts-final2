import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ShieldCheck, GraduationCap, Hourglass, TrendingUp, Umbrella, HeartPulse, PiggyBank, HandCoins,
  Home as HomeIcon, Briefcase, Target, Phone, Mail, MapPin, Menu, X, ArrowRight, MessageCircle,
} from 'lucide-react';
import { SITE, wa } from '../data.js';
import { useLang, LangSelect, localizeService } from '../i18n.jsx';

const ICONS = { shield: ShieldCheck, education: GraduationCap, retire: Hourglass, wealth: TrendingUp, life: Umbrella, health: HeartPulse, fund: PiggyBank, loan: HandCoins, home: HomeIcon, business: Briefcase, goal: Target };
export const Icon = ({ name, size = 22 }) => { const C = ICONS[name] || ShieldCheck; return <C size={size} aria-hidden="true" />; };

function useDocTitle(title, desc) {
  React.useEffect(() => {
    document.title = title ? `${title} | OM Financial Experts, Deeg` : 'OM Financial Experts, Deeg | Insurance, Mutual Funds & Loans Guidance';
    if (desc) document.querySelector('meta[name="description"]')?.setAttribute('content', desc);
  }, [title, desc]);
}

function Header() {
  const { t } = useLang();
  const [open, setOpen] = React.useState(false);
  const loc = useLocation();
  React.useEffect(() => setOpen(false), [loc.pathname]);
  React.useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <div className="topbar-message">
            <span className="topbar-arn"><strong>ARN - 366613</strong><span>{t('AMFI Registered Mutual Fund Distributor', 'AMFI पंजीकृत म्यूचुअल फंड डिस्ट्रीब्यूटर', 'AMFI Registered Mutual Fund Distributor')}</span></span>
          </div>
          <div className="topbar-links">
            <a href={`tel:${SITE.phone}`}><Phone size={13} /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="hide-sm"><Mail size={13} /> {SITE.email}</a>
            <LangSelect />
          </div>
        </div>
      </div>
      <header className="header">
        <div className="wrap nav-in">
          <Link to="/" className="brand" aria-label={t('OM Financial Experts home', 'OM Financial Experts होम', 'OM Financial Experts home')}>
            <img src="/images/golden-lotus-financial-experts-logo.webp" alt="" height="62" />
            <span><b>OM Financial Experts</b><small>{t('Deeg, Rajasthan', 'डीग, राजस्थान', 'Deeg, Rajasthan')}</small></span>
          </Link>
          <button className="menu-btn" aria-label={open ? t('Close menu', 'मेन्यू बंद करें', 'Menu band karein') : t('Open menu', 'मेन्यू खोलें', 'Menu kholein')} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <nav className={`nav${open ? ' open' : ''}`} aria-label={t('Main', 'मुख्य मेन्यू', 'Main menu')}>
            <NavLink to="/" end>{t('Home', 'होम', 'Home')}</NavLink>
            <NavLink to="/about">{t('About', 'हमारे बारे में', 'About')}</NavLink>
            <NavLink to="/services">{t('Services', 'सेवाएँ', 'Services')}</NavLink>
            <NavLink to="/our-approach">{t('Our Approach', 'हमारा तरीका', 'Hamara Tarika')}</NavLink>
            <NavLink to="/our-commitment">{t('Our Commitment', 'हमारी प्रतिबद्धता', 'Hamara Commitment')}</NavLink>        
              {/* <NavLink to="/blog">Blog</NavLink> */}
            <Link className="nav-cta join-trigger" to="/join-us">{t('Join us', 'हमसे जुड़ें', 'Hamse Judein')} <ArrowRight size={15} /></Link>
            <NavLink to="/contact" className="nav-cta">{t('Talk to us', 'हमसे बात करें', 'Hamse Baat Karein')} <ArrowRight size={15} /></NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="footer-brand"><img src="/images/golden-lotus-financial-experts-logo.webp" alt="" height="84" /><b>OM Financial Experts</b></Link>
          <p>{t('Your needs, your budget and your family’s priorities. Every conversation starts here.', 'आपकी ज़रूरतें, आपका बजट और आपके परिवार की प्राथमिकताएँ। हर बातचीत यहीं से शुरू होती है।', 'Aapki zaroorat, aapka budget aur aapke parivaar ki priorities. Har baatcheet yahin se shuru hoti hai.')}</p>
          <div className="social">
            <a href={SITE.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
                       <a href={SITE.map} target="_blank" rel="noreferrer">Google</a>
          </div>
        </div>
        <div>
          <h4>{t('Explore', 'देखें', 'Explore')}</h4>
          <Link to="/about">{t('About Yogesh Kumar', 'योगेश कुमार के बारे में', 'Yogesh Kumar ke baare me')}</Link>
          <Link to="/services">{t('Services', 'सेवाएँ', 'Services')}</Link>
          <Link to="/our-approach">{t('Our Approach', 'हमारा तरीका', 'Hamara Tarika')}</Link>
          <Link to="/our-commitment">{t('Our Commitment', 'हमारी प्रतिबद्धता', 'Hamara Commitment')}</Link>        
              <Link to="/blog">{t('Blog', 'ब्लॉग', 'Blog')}</Link>
          <Link to="/join-us">{t('Join Us', 'हमसे जुड़ें', 'Join Us')}</Link>
          <Link to="/contact">{t('Contact', 'संपर्क', 'Contact')}</Link>
        </div>
        <div>
          <h4>{t('Contact', 'संपर्क', 'Contact')}</h4>
          <a href={`tel:${SITE.phone}`}>{t('Mobile', 'मोबाइल', 'Mobile')}: {SITE.phone}</a>
          <a href={`tel:${SITE.office}`}>{t('Office', 'कार्यालय', 'Office')}: {SITE.office}</a>
          <a href={`tel:${SITE.alt}`}>{t('Alternate', 'वैकल्पिक', 'Alternate')}: {SITE.alt}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.map} target="_blank" rel="noreferrer" className="footer-addr"><MapPin size={14} /> {SITE.address}</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} OM Financial Experts. {t('All rights reserved.', 'सर्वाधिकार सुरक्षित।', 'All rights reserved.')}</span>
        <span>{t('Insurance and investments are subject to eligibility, policy terms and market risk. Please read all scheme and policy documents carefully.', 'बीमा और निवेश पात्रता, पॉलिसी की शर्तों और बाज़ार जोखिम के अधीन हैं। कृपया सभी स्कीम और पॉलिसी दस्तावेज़ ध्यान से पढ़ें।', 'Insurance aur investments eligibility, policy terms aur market risk ke adheen hain. Kripya saare scheme aur policy documents dhyan se padhein.')}</span>
      </div>
    </footer>
  );
}

export function Layout({ children, title, desc }) {
  const { t } = useLang();
  useDocTitle(title, desc);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <a className="float-wa" href={wa('Hello OM Financial Experts, I would like to discuss my financial needs.')} target="_blank" rel="noreferrer" aria-label={t('Chat on WhatsApp', 'WhatsApp पर चैट करें', 'WhatsApp par chat karein')}><svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.2 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.6 4.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.6.8.3 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg></a>
    </>
  );
}

export const SectionTitle = ({ eyebrow, title, desc, center = true }) => (
  <div className={`sec-title${center ? ' center' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {desc && <p>{desc}</p>}
  </div>
);

export const PageHero = ({ eyebrow, title, desc, compact = false }) => (
  <section className={`page-hero${compact ? ' compact' : ''}`}>
    <div className="wrap">
      <span className="eyebrow light">{eyebrow}</span>
      <h1>{title}</h1>
      {desc && <p>{desc}</p>}
    </div>
  </section>
);

const servicePhotos = {
  shield: 'photo-1450101499163-c8848c66ca85', education: 'photo-1503676260728-1c00da094a0b',
  retire: 'photo-1511632765486-a01980e01a18', wealth: 'photo-1460925895917-afdab827c52f',
  life: 'photo-1511895426328-dc8714191300', health: 'photo-1576091160399-112ba8d25d1d',
  fund: 'photo-1611974789855-9c2a0a7236a3', loan: 'photo-1554224155-6726b3ff858f',
  home: 'photo-1560518883-ce09059ee1e4', business: 'photo-1497366754035-f200968a6e72',
  goal: 'photo-1484480974693-6ca0a78fb36b',
};
const photoUrl = (k) => `https://images.unsplash.com/${servicePhotos[k] || servicePhotos.goal}?auto=format&fit=crop&w=900&q=80`;

export function ServiceCard({ s: base }) {
  const { lang, t } = useLang();
  const s = localizeService(base, lang);
  const fallback = `/images/services/${servicePhotos[s.icon] ? s.icon : 'goal'}.svg`;
  return (
    <Link to={`/services/${s.slug}`} className="svc-card">
      <span className="svc-photo">
        <img src={photoUrl(s.icon)} alt={`${s.title}, ${t('financial planning visual', 'वित्तीय योजना का चित्र', 'financial planning visual')}`} loading="lazy"
          onError={(e) => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = '1'; e.currentTarget.src = fallback; } }} />
        <span className="svc-icon"><Icon name={s.icon} /></span>
      </span>
      <span className="svc-body">
        <h3>{s.title}</h3>
        
        <p>{s.short}</p>
        <span className="svc-link">{t('Learn more', 'और जानें', 'Aur jaanein')} <ArrowRight size={15} /></span>
      </span>
    </Link>
  );
}

export function CTA() {
  const { t } = useLang();
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div>
          <h2>{t('Have a question? Let’s talk it through.', 'कोई सवाल है? आइए बात करते हैं।', 'Koi sawaal hai? Aaiye baat karte hain.')}</h2>
          <p>{t('Tell us what you are planning for. We will listen first, then explain the options that fit your needs and budget. You can share your questions without hesitation.', 'बताइए आप किसकी योजना बना रहे हैं। हम पहले आपकी बात सुनेंगे, फिर आपकी ज़रूरत और बजट के अनुसार विकल्प समझाएँगे। आप बिना झिझक अपने सवाल पूछ सकते हैं।', 'Bataiye aap kis cheez ki planning kar rahe hain. Hum pehle aapki baat sunenge, phir aapki zaroorat aur budget ke hisaab se options samjhayenge. Aap bina jhijhak apne sawaal pooch sakte hain.')}</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-gold" href={wa('Hello OM Financial Experts, I would like to discuss my financial needs.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> {t('WhatsApp us', 'WhatsApp करें', 'WhatsApp karein')}</a>
          <a className="btn btn-ghost" href={`tel:${SITE.phone}`}><Phone size={17} /> {t('Call', 'कॉल करें', 'Call karein')} {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
