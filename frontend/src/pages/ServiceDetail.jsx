import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { Layout, PageHero, ServiceCard } from '../components/Shared.jsx';
import { findService, services, wa } from '../data.js';
import { useLang, localizeService } from '../i18n.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const base = findService(slug);
  if (!base) return (
    <Layout title={t('Service not found', 'सेवा नहीं मिली', 'Service nahi mili')}>
      <section className="section"><div className="wrap center"><h1 className="h2">{t('Service not found', 'सेवा नहीं मिली', 'Service nahi mili')}</h1><p>{t('This page may have moved.', 'यह पेज हट गया हो सकता है।', 'Ye page hat gaya ho sakta hai.')}</p><Link className="btn btn-primary" to="/services">{t('See all services', 'सभी सेवाएँ देखें', 'Saari services dekhein')}</Link></div></section>
    </Layout>
  );
  const s = localizeService(base, lang);
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <Layout title={s.title} desc={s.intro}>
      <PageHero compact eyebrow={t('Our service', 'हमारी सेवा', 'Hamari service')} title={s.title} desc={s.short} />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <span className="eyebrow">{t('What we cover', 'हम क्या कवर करते हैं', 'Hum kya cover karte hain')}</span>
            {s.slug === 'income-protection' && <p className="protection-tagline">{t('Your income supports their dreams. Make sure their future stays protected.', 'आपकी आय उनके सपनों का सहारा है। सुनिश्चित करें कि उनका भविष्य सुरक्षित रहे।', 'Aapki income unke sapnon ka sahara hai. Pakka karein ki unka future protected rahe.')}</p>}
            <p className="detail-lead">{s.intro}</p>
            {s.slug === 'mutual-funds' && <div className="arn-inline"><strong>ARN - 366613</strong><span>{t('AMFI Registered Mutual Fund Distributor', 'AMFI पंजीकृत म्यूचुअल फंड डिस्ट्रीब्यूटर', 'AMFI Registered Mutual Fund Distributor')}</span><p>{t('Explore mutual funds with a clear understanding of SIPs, lump-sum investments and SWP. We can help you understand investment goals, time horizon, costs and market risks so you can make an informed decision. Mutual fund investments are subject to market risks; read all scheme-related documents carefully. Returns are not guaranteed.', 'SIP, एकमुश्त निवेश और SWP की स्पष्ट समझ के साथ म्यूचुअल फंड को जानें। हम आपको निवेश के लक्ष्य, समय-सीमा, लागत और बाज़ार जोखिम समझने में मदद कर सकते हैं ताकि आप सोच-समझकर निर्णय ले सकें। म्यूचुअल फंड निवेश बाज़ार जोखिमों के अधीन हैं; सभी स्कीम संबंधी दस्तावेज़ ध्यान से पढ़ें। रिटर्न की कोई गारंटी नहीं है।', 'SIP, lump-sum investment aur SWP ki clear samajh ke saath mutual funds ko jaanein. Hum aapko investment goals, time horizon, costs aur market risks samajhne me madad kar sakte hain taaki aap soch-samajhkar faisla le sakein. Mutual fund investments market risks ke adheen hain; saare scheme-related documents dhyan se padhein. Returns ki guarantee nahi hai.')}</p></div>}
            <h3 className="h3">{t('What we can go through together', 'हम साथ मिलकर क्या देख सकते हैं', 'Hum saath milkar kya dekh sakte hain')}</h3>
            <ul className="tick-list">{s.includes.map((x) => <li key={x}><CheckCircle2 size={19} /><span>{x}</span></li>)}</ul>
            <div className="note"><ShieldCheck size={22} /><p>{t('Suggestions depend on your circumstances. Approval, cover and investment outcomes are not guaranteed.', 'सुझाव आपकी परिस्थितियों पर निर्भर करते हैं। अप्रूवल, कवर और निवेश के परिणामों की गारंटी नहीं है।', 'Suggestions aapki circumstances par depend karte hain. Approval, cover aur investment outcomes ki guarantee nahi hai.')}</p></div>
          </div>
          <aside className="aside">
            <span className="eyebrow">{t('How to prepare', 'तैयारी कैसे करें', 'Taiyaari kaise karein')}</span>
            <p>{s.prepare}</p>
            <Link className="btn btn-primary" to={`/contact?service=${s.slug}`}>{t('Discuss this with us', 'इस पर हमसे चर्चा करें', 'Is par hamse charcha karein')} <ArrowRight size={16} /></Link>
            <a className="btn btn-outline" href={wa(`Hello OM Financial Experts, I would like to discuss ${base.title}.`)} target="_blank" rel="noreferrer"><MessageCircle size={16} /> {t('Ask on WhatsApp', 'WhatsApp पर पूछें', 'WhatsApp par poochhein')}</a>
          </aside>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="row-between"><h2 className="h2">{t('Other services', 'अन्य सेवाएँ', 'Doosri services')}</h2><Link className="text-link" to="/services"><ArrowLeft size={15} /> {t('All services', 'सभी सेवाएँ', 'Saari services')}</Link></div>
          <div className="svc-grid">{related.map((r) => <ServiceCard key={r.slug} s={r} />)}</div>
        </div>
      </section>
    </Layout>
  );
}
