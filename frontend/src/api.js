const configuredApiBase =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV
    ? 'http://localhost:5000'
    : 'https://om-financial-experts.onrender.com');

export const API_BASE_URL = configuredApiBase
  .trim()
  .replace(/\/+$/, '')
  .replace(/\/api$/i, '');
