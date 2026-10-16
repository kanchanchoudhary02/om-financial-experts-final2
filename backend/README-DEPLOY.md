# OM Financial Experts API deployment

Deploy the `backend` folder as a Node.js service (Node 18+). Set these environment variables:

- `MONGODB_URI` = MongoDB Atlas connection string
- `MONGODB_DB` = `om_financial_experts` (or your preferred database name)
- `RESEND_API_KEY` = your Resend API key
- `CONTACT_TO` = inbox that should receive enquiries
- `CONTACT_FROM` = verified sender, e.g. `OM Financial Experts <noreply@your-verified-domain.com>`
- `FRONTEND_URL` = production frontend origin, e.g. `https://your-domain.com` (multiple origins comma-separated)

The API endpoint is `POST /api/contact`; health check is `GET /api/health`. Career applications are saved to MongoDB `contact_enquiries` and the email includes role/work type, education, age group and address. Set `VITE_API_BASE_URL` in the frontend build environment to the deployed backend base URL (without `/api`).
