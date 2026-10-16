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

The contact form sends enquiries to the companion `om-financial-experts-backend` API. Configure `VITE_API_BASE_URL` in the frontend and the Resend variables in the backend before testing email delivery. Figures and professional experience are business-supplied and should be verified before publishing. Financial products are subject to eligibility, terms and market risks.
