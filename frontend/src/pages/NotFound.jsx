import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Shared.jsx';
import { useLang } from '../i18n.jsx';

export default function NotFound() {
  const { t } = useLang();
  return (
    <Layout title={t('Page not found', 'पेज नहीं मिला', 'Page nahi mila')}>
      <section className="section"><div className="wrap center nf"><h1 className="h2">{t('Page not found', 'पेज नहीं मिला', 'Page nahi mila')}</h1><p>{t('The page may have moved. Let’s get you back on track.', 'यह पेज हट गया हो सकता है। चलिए आपको वापस सही जगह ले चलते हैं।', 'Ye page hat gaya ho sakta hai. Chaliye aapko wapas sahi jagah le chalte hain.')}</p><Link className="btn btn-primary" to="/">{t('Back to home', 'होम पर वापस जाएँ', 'Home par wapas jaayein')}</Link></div></section>
    </Layout>
  );
}
