import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Clock, CalendarCheck } from 'lucide-react';
import { Layout, PageHero, SectionTitle, ServiceCard, CTA } from '../components/Shared.jsx';
import { services } from '../data.js';
import { useLang, L } from '../i18n.jsx';

const groups = [
  [L('Protect', 'सुरक्षा', 'Protect'), L('Protection for your family, health and investments', 'आपके परिवार, स्वास्थ्य और निवेश की सुरक्षा', 'Aapke parivaar, health aur investments ki protection'), ['income-protection', 'life-insurance', 'health-insurance', 'mutual-funds']],
  [L('Plan & grow', 'योजना और वृद्धि', 'Plan & grow'), L('Goals, savings and investments', 'लक्ष्य, बचत और निवेश', 'Goals, savings aur investments'), ['child-education-marriage', 'retirement-planning', 'wealth-creation', 'life-goals-planning']],
  [L('Borrow wisely', 'समझदारी से कर्ज़ लें', 'Borrow wisely'), L('Loan guidance before you apply', 'आवेदन से पहले लोन मार्गदर्शन', 'Apply karne se pehle loan guidance'), ['personal-loan', 'home-loan', 'business-loan']],
];

export default function Services() {
  const { t, tr } = useLang();
  return (
    <Layout title={t('Services', 'सेवाएँ', 'Services')} desc={t('Income protection, life and health insurance, mutual funds, retirement, child education planning, home, personal and business loan guidance in Deeg, Rajasthan.', 'डीग, राजस्थान में आय सुरक्षा, जीवन और स्वास्थ्य बीमा, म्यूचुअल फंड, रिटायरमेंट, बच्चों की शिक्षा की योजना, होम, पर्सनल और बिज़नेस लोन का मार्गदर्शन।', 'Deeg, Rajasthan me income protection, life aur health insurance, mutual funds, retirement, bachon ki education planning, home, personal aur business loan guidance.')}>
      <PageHero eyebrow={t('Our services', 'हमारी सेवाएँ', 'Hamari services')} title={t('Guidance for real-life financial decisions.', 'वास्तविक जीवन के वित्तीय फ़ैसलों के लिए मार्गदर्शन।', 'Real-life financial faislon ke liye guidance.')} desc={t('Pick an area below to see what we cover and how to prepare. Not sure where to start? Just tell us your concern.', 'नीचे कोई क्षेत्र चुनें और देखें कि हम क्या-क्या कवर करते हैं और तैयारी कैसे करें। समझ नहीं आ रहा कहाँ से शुरू करें? बस अपनी चिंता बताइए।', 'Neeche koi area chuniye aur dekhiye ki hum kya-kya cover karte hain aur taiyaari kaise karein. Samajh nahi aa raha kahan se shuru karein? Bas apni chinta bataiye.')} />
      {groups.map(([label, title, slugs], i) => (
        <section className={`section${i % 2 ? ' alt' : ''}`} key={slugs[0]}>
          <div className="wrap">
            <SectionTitle eyebrow={tr(label)} title={tr(title)} center={false} />
            <div className={`svc-grid services-page-grid ${i === 2 ? 'services-page-grid-three' : 'services-page-grid-four'}`}>{slugs.map((sl) => <ServiceCard key={sl} s={services.find((s) => s.slug === sl)} />)}</div>
          </div>
        </section>
      ))}

      <section className="section alt" id="work-with-us">
        <div className="wrap">
          <div className="work-banner">
            <span className="work-icon"><Briefcase size={30} aria-hidden="true" /></span>
            <div className="work-text">
              <span className="eyebrow">{t('Careers', 'करियर', 'Careers')}</span>
              <h2 className="h2">{t('Part / Full time Work with us', 'पार्ट / फुल टाइम हमारे साथ काम करें', 'Part / Full time Hamare saath kaam karein')}</h2>
              <p>{t('Want to build a career in financial services? Join OM Financial Experts as a Financial Consultant or Team Leader, on a part-time or full-time basis, with training and guidance from our team.', 'वित्तीय सेवाओं में करियर बनाना चाहते हैं? OM Financial Experts से फाइनेंशियल कंसल्टेंट या टीम लीडर के रूप में पार्ट-टाइम या फुल-टाइम जुड़ें, हमारी टीम के प्रशिक्षण और मार्गदर्शन के साथ।', 'Financial services me career banana chahte hain? OM Financial Experts se Financial Consultant ya Team Leader ke roop me part-time ya full-time judein, hamari team ke training aur guidance ke saath.')}</p>
              <div className="work-chips" aria-label="Available work types">
                <span className="work-chip"><Clock size={15} aria-hidden="true" /> {t('PART TIME', 'पार्ट टाइम', 'PART TIME')}</span>
                <span className="work-chip"><CalendarCheck size={15} aria-hidden="true" /> {t('FULL TIME', 'फुल टाइम', 'FULL TIME')}</span>
              </div>
              <Link className="btn btn-primary" to="/career-opportunities#join-application">{t('Apply now', 'अभी आवेदन करें', 'Abhi apply karein')} <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap notice-card">
          <h2 className="h2">{t('Not sure where to begin?', 'समझ नहीं आ रहा कहाँ से शुरू करें?', 'Samajh nahi aa raha kahan se shuru karein?')}</h2>
          <p>{t('You do not need to know the name of a product. Start with a question or a worry and we will help you find the right place to look. Never share OTPs, passwords or account numbers over WhatsApp, social media or the website form.', 'आपको किसी प्रोडक्ट का नाम जानने की ज़रूरत नहीं है। कोई सवाल या चिंता लेकर शुरुआत कीजिए, हम आपको सही दिशा खोजने में मदद करेंगे। WhatsApp, सोशल मीडिया या वेबसाइट फ़ॉर्म पर कभी OTP, पासवर्ड या अकाउंट नंबर साझा न करें।', 'Aapko kisi product ka naam jaanne ki zaroorat nahi hai. Koi sawaal ya chinta lekar shuru kijiye, hum aapko sahi disha khojne me madad karenge. WhatsApp, social media ya website form par kabhi OTP, password ya account number share na karein.')}</p>
          <Link className="btn btn-primary" to="/contact">{t('Talk to our team', 'हमारी टीम से बात करें', 'Hamari team se baat karein')} <ArrowRight size={16} /></Link>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
