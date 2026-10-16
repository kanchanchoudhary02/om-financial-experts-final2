import React from 'react';
import { Globe } from 'lucide-react';
import { services as baseServices } from './data.js';
import { serviceI18n } from './i18n-services.js';

/*
  Language support: 'hi' = Hindi (Devanagari), 'en' = English.
  Usage:  const { t } = useLang();   t('English text', 'हिन्दी टेक्स्ट')
  Choice is saved in localStorage so the popup appears only on a visitor's first visit.
*/
const KEY = 'omfe-lang';
const VALID = ['hi', 'en'];

const LangCtx = React.createContext(null);

const readStored = () => {
  try { const v = window.localStorage.getItem(KEY); return VALID.includes(v) ? v : null; } catch { return null; }
};

export function LangProvider({ children }) {
  const [saved, setSaved] = React.useState(readStored); // null = visitor has not chosen yet
  const lang = saved || 'en';

  const setLang = React.useCallback((l) => {
    if (!VALID.includes(l)) return;
    setSaved(l);
    try { window.localStorage.setItem(KEY, l); } catch { /* private mode: choice lasts for this visit only */ }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  }, [lang]);

  const value = React.useMemo(() => {
    const t = (en, hi) => (lang === 'hi' ? (hi ?? en) : en);
    // tr() reads a { en, hi } object (or a plain string) and returns the active language
    const tr = (o) => (o && typeof o === 'object' && !React.isValidElement(o) ? (o[lang] ?? o.en ?? '') : o);
    return { lang, chosen: Boolean(saved), setLang, t, tr };
  }, [lang, saved, setLang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => React.useContext(LangCtx);
export const L = (en, hi) => ({ en, hi });

/* Returns the service object in the active language (title, short, intro, includes, prepare). */
export function localizeService(s, lang) {
  if (!s || lang === 'en') return s;
  return { ...s, ...(serviceI18n[s.slug]?.[lang] || {}) };
}
export function useServices() {
  const { lang } = useLang();
  return React.useMemo(() => baseServices.map((s) => localizeService(s, lang)), [lang]);
}

/* Small language dropdown (shown in the top bar) so visitors can change language any time. */
export function LangSelect() {
  const { lang, setLang, t } = useLang();
  return (
    <label className="lang-select">
      <Globe size={14} aria-hidden="true" />
      <span className="sr-only">{t('Language', 'भाषा')}</span>
      <select value={lang} onChange={(e) => setLang(e.target.value)} aria-label={t('Language', 'भाषा')}>
        <option value="hi">हिन्दी</option>
        <option value="en">English</option>
      </select>
    </label>
  );
}

/* Popup shown on the first visit. The visitor must pick a language to continue. */
export function LanguageGate() {
  const { chosen, setLang } = useLang();
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    if (chosen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cardRef.current?.querySelector('button')?.focus();
    return () => { document.body.style.overflow = prev; };
  }, [chosen]);

  if (chosen) return null;

  const onKeyDown = (e) => {
    if (e.key !== 'Tab') return;
    const btns = [...cardRef.current.querySelectorAll('button')];
    const i = btns.indexOf(document.activeElement);
    e.preventDefault();
    btns[(i + (e.shiftKey ? btns.length - 1 : 1)) % btns.length].focus();
  };

  const options = [
    ['hi', 'हिन्दी', 'पूरी वेबसाइट हिन्दी में'],
    ['en', 'English', 'Browse the website in English'],
  ];

  return (
    <div className="lang-gate" role="dialog" aria-modal="true" aria-labelledby="lang-title" onKeyDown={onKeyDown}>
      <div className="lang-card" ref={cardRef}>
        <img className="lang-logo" src="/images/golden-lotus-financial-experts-logo.webp" alt="" width="64" height="64" />
        <h2 id="lang-title">अपनी भाषा चुनें<br /><span>Choose your language</span></h2>
        <p>आप बाद में भी ऊपर से भाषा बदल सकते हैं।<br />Aap baad me bhi upar se language badal sakte hain.</p>
        <div className="lang-options">
          {options.map(([code, label, sub]) => (
            <button key={code} type="button" className="lang-btn" onClick={() => setLang(code)}>
              <span><b>{label}</b><small>{sub}</small></span>
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
