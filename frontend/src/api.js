const configuredApiBase = import.meta.env.VITE_API_BASE_URL?.trim();
const fallbackApiBase = import.meta.env.DEV
  ? 'http://localhost:5000'
  : 'https://om-financial-experts-final2.onrender.com';
const configuredApiIsLocal =
  /^https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/|$)/i.test(configuredApiBase || '');

if (!import.meta.env.DEV && configuredApiIsLocal) {
  console.warn('Ignoring a localhost VITE_API_BASE_URL in production; using the production API URL.');
}

const apiBase =
  configuredApiBase && (import.meta.env.DEV || !configuredApiIsLocal)
    ? configuredApiBase
    : fallbackApiBase;

export const API_BASE_URL = apiBase
  .trim()
  .replace(/\/+$/, '')
  .replace(/\/api$/i, '');
