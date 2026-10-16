# OM Financial Experts, v2 (redesign)

Folders: `frontend/` (React + Vite) and `backend/` (Express + Resend contact API).

## Run locally
Terminal 1: `cd backend && npm install`, copy `.env.example` to `.env`, add your Resend key, `npm run dev`
Terminal 2: `cd frontend && npm install && npm run dev`

## Deploy
- Frontend: build `npm run build`, publish `dist`. SPA rewrites are included (`vercel.json`, `public/_redirects`). Set `VITE_API_BASE_URL` to `https://om-financial-experts-final2.onrender.com` (without `/api`) in the production build environment.
- Backend: env vars `FRONTEND_URL`, `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` (sender on a verified Resend domain).

## Before going live (owner to confirm)
- Add your IRDAI / AMFI (ARN) registration details to the footer if you hold them.
- Confirm the career figures on the home page (10,000+ people, ₹1,500 Cr+ sum assured) are accurate and provable.
- Add the real website domain to `index.html` (og:url / canonical) once known.
- Service page URLs were shortened (e.g. `/services/home-loan`). Old long URLs will show "not found".

## Latest changes (language + services update)
- First visit shows a language popup (Hindi / English). The choice is saved in the browser; visitors can change it any time from the dropdown in the top bar.
- All pages are translated. Text sits next to each page as `t('English', 'हिन्दी')`, and in `frontend/src/i18n-services.js` for the 11 service pages.
- Service detail pages (incl. Income Protection): smaller, calmer typography (`.detail-lead`, `.protection-tagline`, `.page-hero.compact` in styles.css).
- Services page: new "Part / Full time Work with us" section linking to /join-us. The Join Us form now also asks Part Time / Full Time.
- Fixed a broken `JoinUs.jsx` (truncated text and duplicated closing tags).
- Please have a Hindi-speaking person proofread the Hindi text before going live.
