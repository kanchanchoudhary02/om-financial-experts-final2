import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, HeartPulse, GraduationCap, Landmark } from 'lucide-react';
import { Layout, SectionTitle, ServiceCard, CTA } from '../components/Shared.jsx';
import { services, SITE } from '../data.js';
import { useLang, L } from '../i18n.jsx';

const quick = [
  { to: '/services/life-insurance', icon: ShieldCheck, t: L('Protect My Family', 'परिवार को सुरक्षित करें', 'Parivaar ko Protect karein'), h: L('Family Protection', 'परिवार की सुरक्षा', 'Family Protection') },
  { to: '/services/health-insurance', icon: HeartPulse, t: L('Health Cover', 'हेल्थ कवर', 'Health Cover'), h: L('Health Insurance', 'स्वास्थ्य बीमा', 'Health Insurance') },
  { to: '/services/child-education-marriage', icon: GraduationCap, t: L('Child’s Future', 'बच्चे का भविष्य', 'Bachche ka Future'), h: L('Your Child’s Future', 'आपके बच्चे का भविष्य', 'Aapke bachche ka future') },
  { to: '/services/home-loan', icon: Landmark, t: L('Home or Personal Loan', 'होम या पर्सनल लोन', 'Home ya Personal Loan'), h: L('Loan Guidance', 'लोन मार्गदर्शन', 'Loan Guidance') },
];
const steps = [
  [L('Tell us your situation', 'अपनी स्थिति बताइए', 'Apni situation bataiye'), L('Share Your Family, Income and goals in your own words, in Hindi or English.', 'अपने परिवार, आय और लक्ष्यों के बारे में अपने शब्दों में बताइए, हिन्दी या अंग्रेज़ी में।', 'Apne parivaar, income aur goals ke baare me apne shabdon me bataiye, Hindi ya English me.')],
  [L('Understand the options', 'विकल्प समझिए', 'Options samjhiye'), L('We explain what each option does, what it costs and where it falls short.', 'हम समझाते हैं कि हर विकल्प क्या करता है, उसकी लागत क्या है और उसकी कमियाँ क्या हैं।', 'Hum samjhate hain ki har option kya karta hai, uski cost kya hai aur uski kamiyan kya hain.')],
  [L('Decide at your pace', 'अपनी रफ़्तार से फ़ैसला लीजिए', 'Apni raftaar se faisla lijiye'), L('Take the documents home, discuss with family and choose when you are ready.', 'दस्तावेज़ घर ले जाइए, परिवार से चर्चा कीजिए और जब तैयार हों तब चुनिए।', 'Documents ghar le jaaiye, family se discuss kijiye aur jab ready hon tab chuniye.')],
];

export default function Home() {
  const { t, tr } = useLang();
  const faqs = [
    [t('What should I bring to the first conversation?', 'पहली बातचीत में मुझे क्या लाना चाहिए?', 'Pehli baatcheet me mujhe kya laana chahiye?'),
     t('A rough idea of your goals, monthly budget, existing policies or investments and family responsibilities is plenty. Please do not send account numbers, passwords or OTPs through the website or WhatsApp.', 'अपने लक्ष्यों, मासिक बजट, मौजूदा पॉलिसियों या निवेश और पारिवारिक ज़िम्मेदारियों का मोटा अंदाज़ा काफ़ी है। कृपया वेबसाइट या WhatsApp पर अकाउंट नंबर, पासवर्ड या OTP न भेजें।', 'Apne goals, monthly budget, maujooda policies ya investments aur family responsibilities ka rough idea kaafi hai. Kripya website ya WhatsApp par account number, password ya OTP na bhejein.')],
    [t('I am not sure what I need. Can you still help?', 'मुझे नहीं पता कि मुझे क्या चाहिए। क्या आप फिर भी मदद कर सकते हैं?', 'Mujhe pata nahi mujhe kya chahiye. Kya aap phir bhi madad kar sakte hain?'),
     t('Yes. Start with your concern, for example “what if something happens to me” or “my child’s college in 10 years”. We will work out which area to look at first.', 'जी हाँ। अपनी चिंता से शुरुआत कीजिए, जैसे “अगर मुझे कुछ हो गया तो?” या “10 साल बाद बच्चे का कॉलेज”। हम तय करेंगे कि पहले किस क्षेत्र को देखना है।', 'Ji haan. Apni chinta se shuru kijiye, jaise “agar mujhe kuch ho gaya to?” ya “10 saal baad bachche ka college”. Hum tay karenge ki pehle kis area ko dekhna hai.')],
    [t('Are returns on insurance or mutual funds guaranteed?', 'क्या बीमा या म्यूचुअल फंड के रिटर्न की गारंटी होती है?', 'Kya insurance ya mutual funds ke returns ki guarantee hoti hai?'),
     t('Not all of them. Benefits, charges, exclusions and market risk depend on the specific product. We will point you to the official documents so you can read the terms before deciding.', 'सभी की नहीं। लाभ, शुल्क, अपवाद और बाज़ार जोखिम उस विशेष प्रोडक्ट पर निर्भर करते हैं। हम आपको आधिकारिक दस्तावेज़ दिखाएँगे ताकि फ़ैसले से पहले आप शर्तें पढ़ सकें।', 'Sabki nahi. Benefits, charges, exclusions aur market risk us specific product par depend karte hain. Hum aapko official documents dikhayenge taaki faisle se pehle aap terms padh sakein.')],
    [t('How do I reach the team?', 'टीम से कैसे संपर्क करूँ?', 'Team se kaise contact karun?'),
     t('Fill in the contact form, call us on ' + SITE.phone + ', message us on WhatsApp or visit the office in Deeg. Please call before visiting.', 'संपर्क फ़ॉर्म भरिए, ' + SITE.phone + ' पर कॉल कीजिए, WhatsApp पर संदेश भेजिए या डीग में हमारे कार्यालय आइए। आने से पहले कृपया फ़ोन कर लें।', 'Contact form bhariye, ' + SITE.phone + ' par call kijiye, WhatsApp par message bhejiye ya Deeg me hamare office aaiye. Aane se pehle kripya call kar lein.')],
  ];

  return (
    <Layout>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">{t('Financial guidance in Deeg, Rajasthan', 'डीग, राजस्थान में वित्तीय मार्गदर्शन', 'Deeg, Rajasthan me financial guidance')}</span>
            <h1>{t(<>Protect your family. Plan your goals. <em>Stay within your budget.</em></>, <>अपने परिवार को सुरक्षित करें। अपने लक्ष्यों की योजना बनाएँ। <em>अपने बजट में रहें।</em></>, <>Apne parivaar ko protect karein. Apne goals plan karein. <em>Budget ke andar rahein.</em></>)}</h1>

            <p className="hero-body">{t('Life and health insurance, mutual funds, retirement and education planning, and loans, explained in simple Hindi or English. No pressure and no jargon, just a clear conversation about what suits your family.', 'जीवन और स्वास्थ्य बीमा, म्यूचुअल फंड, रिटायरमेंट और शिक्षा की योजना, और लोन, सब कुछ आसान हिन्दी या अंग्रेज़ी में समझाया जाता है। कोई दबाव नहीं, कोई कठिन शब्द नहीं, बस आपके परिवार के लिए क्या सही है, इस पर साफ़ बातचीत।', 'Life aur health insurance, mutual funds, retirement aur education planning, aur loans, sab kuch aasaan Hindi ya English me samjhaya jaata hai. Koi pressure nahi, koi jargon nahi, bas aapke parivaar ke liye kya sahi hai, us par saaf baatcheet.')}</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/contact">{t('Talk to us', 'हमसे बात करें', 'Hamse baat karein')} <ArrowRight size={17} /></Link>
              <a className="btn btn-ghost" href={`tel:${SITE.phone}`}><Phone size={16} /> {SITE.phone}</a>
            </div>
            <ul className="hero-points">
              <li><CheckCircle2 size={16} /> {t('15+ years in banking and life insurance', 'बैंकिंग और जीवन बीमा में 15+ वर्षों का अनुभव', 'Banking aur life insurance me 15+ saal ka experience')}</li>
              <li><CheckCircle2 size={16} /> {t('Advice that starts with your needs, not a product', 'ऐसी सलाह जो प्रोडक्ट से नहीं, आपकी ज़रूरत से शुरू होती है', 'Aisi salaah jo product se nahi, aapki zaroorat se shuru hoti hai')}</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="portrait"><img src="/images/yogesh-kumar.webp" alt={t('Yogesh Kumar, founder of OM Financial Experts', 'योगेश कुमार, OM Financial Experts के संस्थापक', 'Yogesh Kumar, OM Financial Experts ke founder')} width="1078" height="1460" fetchpriority="high" /></div>
            <div className="portrait-card"><b>{t('Yogesh Kumar', 'योगेश कुमार', 'Yogesh Kumar')}</b><small>{t('MBA, Finance & Marketing', 'MBA, फाइनेंस और मार्केटिंग', 'MBA, Finance & Marketing')}</small></div>
          </div>
        </div>
      </section>

      <section className="quick">
        <div className="wrap">
          <p className="quick-label">{t('What are you planning for?', 'आप किसकी योजना बना रहे हैं?', 'Aap kis cheez ki planning kar rahe hain?')}</p>
          <div className="quick-grid">
            {quick.map(({ to, icon: I, t: title, h }) => (
              <Link key={to} to={to} className="quick-tile"><I size={24} /><div><b>{tr(title)}</b><small>{tr(h)}</small></div><ArrowRight size={16} /></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-grid">
          <div><strong>15+</strong><span>{t('years in financial services', 'वर्ष वित्तीय सेवाओं में', 'saal financial services me')}</span></div>
          <div><strong>11+</strong><span>{t('years in banking and insurance companies', 'वर्ष बैंकिंग और बीमा कंपनियों में', 'saal banking aur insurance companies me')}</span></div>
          <div><strong>10,000+</strong><span>{t('people guided in financial planning', 'लोगों को वित्तीय योजना में मार्गदर्शन', 'logon ko financial planning me guidance')}</span></div>
          <div><strong>₹1,500 Cr+</strong><span>{t('sum assured across career', 'पूरे करियर में सम एश्योर्ड', 'poore career me sum assured')}</span></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow={t('What we help with', 'हम किसमें मदद करते हैं', 'Hum kis me madad karte hain')} title={t('Support for the decisions that matter most', 'सबसे ज़रूरी फ़ैसलों में सहयोग', 'Sabse zaroori faislon me support')} desc={t('From protecting your income to buying a home, we help you understand the choices and their trade-offs.', 'अपनी आय सुरक्षित करने से लेकर घर खरीदने तक, हम आपको विकल्प और उनके फ़ायदे-नुकसान समझने में मदद करते हैं।', 'Apni income protect karne se lekar ghar kharidne tak, hum aapko choices aur unke trade-offs samajhne me madad karte hain.')} />
          <div className="svc-grid home-services-grid">{services.slice(0, 6).map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
          <div className="center mt"><Link className="btn btn-outline" to="/services">{t(`See all ${services.length} services`, `सभी ${services.length} सेवाएँ देखें`, `Saari ${services.length} services dekhein`)} <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split-2">
          <div className="photo-stack">
            <img src="/images/office-reception.webp" alt={t('Reception and consultation desk at the OM Financial Experts office in Deeg', 'डीग में OM Financial Experts कार्यालय का रिसेप्शन और परामर्श डेस्क', 'Deeg me OM Financial Experts office ka reception aur consultation desk')} width="1500" height="844" loading="lazy" />
            <span className="photo-tag">{t('Our Office, Deeg', 'हमारा कार्यालय, डीग', 'Hamara Office, Deeg')}</span>
          </div>
          <div>
            <span className="eyebrow">{t('How it works', 'यह कैसे काम करता है', 'Ye kaise kaam karta hai')}</span>
            <h2 className="h2">{t('We listen first. The product comes later.', 'हम पहले सुनते हैं। प्रोडक्ट बाद में आता है।', 'Hum pehle sunte hain. Product baad me aata hai.')}</h2>
            <ol className="steps-mini">
              {steps.map(([a, b], i) => <li key={i}><span>{i + 1}</span><div><h3>{tr(a)}</h3><p>{tr(b)}</p></div></li>)}
            </ol>
            <Link className="text-link" to="/our-approach">{t('Read about our approach', 'हमारे तरीके के बारे में पढ़ें', 'Hamare tarike ke baare me padhein')} <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow={t('Common questions', 'आम सवाल', 'Aam sawaal')} title={t('Before you get in touch', 'संपर्क करने से पहले', 'Contact karne se pehle')} />
          <div className="faq">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>
      <section className="section alt"><div className="wrap"><SectionTitle eyebrow={t('From our blog', 'हमारे ब्लॉग से', 'Hamare blog se')} title={t('Financial insights for better decisions', 'बेहतर फ़ैसलों के लिए वित्तीय जानकारी', 'Behtar faislon ke liye financial insights')} desc={t('Explore practical guides on insurance, savings, investments and financial planning.', 'बीमा, बचत, निवेश और वित्तीय योजना पर व्यावहारिक गाइड पढ़ें।', 'Insurance, savings, investments aur financial planning par practical guides padhein.')} /><div className="center"><Link className="btn btn-outline" to="/blog">{t('Read Our Blog', 'हमारा ब्लॉग पढ़ें', 'Hamara Blog padhein')} <ArrowRight size={16} /></Link></div></div></section>
      <CTA />
    </Layout>
  );
}
