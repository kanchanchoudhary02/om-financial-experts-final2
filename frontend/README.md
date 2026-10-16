# OM Financial Experts — React + Vite frontend

## Project structure
- `src/main.jsx` — app entry and route definitions only
- `src/pages/` — separate page source for Home, About, Services, Our Approach, Our Commitment, Contact and 404
- `src/components/Shared.jsx` — reusable header, footer, page hero, service card, CTA and shared service/contact data
- `src/styles.css` — responsive design system and page styling
- `public/images/` — supplied Golden Lotus Financial Experts logo and the supplied office, awards and profile photos, optimized as WebP where appropriate

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`
3. Run `npm run dev`
4. For a production build run `npm run build`

## Routes
- `/` Home
- `/about` About Us
- `/services` Services
- `/our-approach` Our Approach
- `/our-commitment` Our Commitment
- `/contact` Contact

The contact and career forms use the centralized contact API configuration. Set `VITE_API_BASE_URL` in the frontend build environment to `https://om-financial-experts-final2.onrender.com` (without `/api`) for production; local development defaults to `http://localhost:5000`. Configure the Resend variables in the backend before testing email delivery. Figures and professional experience are business-supplied and should be verified before publishing. Financial products are subject to eligibility, terms and market risks.
