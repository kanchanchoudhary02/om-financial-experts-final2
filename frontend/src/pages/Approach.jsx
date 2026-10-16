import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout, PageHero, SectionTitle, CTA } from '../components/Shared.jsx';
import { useLang, L } from '../i18n.jsx';

const steps = [
  [L('Listen and understand', 'सुनना और समझना', 'Sunna aur samajhna'), L('We talk about your family, income, priorities and worries before anything else.', 'सबसे पहले हम आपके परिवार, आय, प्राथमिकताओं और चिंताओं पर बात करते हैं।', 'Sabse pehle hum aapke parivaar, income, priorities aur chintaon par baat karte hain.')],
  [L('Review what you already have', 'जो आपके पास है उसकी समीक्षा', 'Jo aapke paas hai uska review'), L('Existing policies, savings, loans and commitments are checked so nothing is duplicated.', 'मौजूदा पॉलिसियाँ, बचत, लोन और प्रतिबद्धताएँ जाँची जाती हैं ताकि कुछ भी दोहराया न जाए।', 'Maujooda policies, savings, loans aur commitments check kiye jaate hain taaki kuch duplicate na ho.')],
  [L('Clarify your goals', 'अपने लक्ष्य स्पष्ट करें', 'Apne goals clear karein'), L('Education, marriage, health, retirement or wealth: we put goals in order and attach timelines.', 'शिक्षा, विवाह, स्वास्थ्य, रिटायरमेंट या संपत्ति: हम लक्ष्यों को क्रम में रखते हैं और समय-सीमा जोड़ते हैं।', 'Education, shaadi, health, retirement ya wealth: hum goals ko order me rakhte hain aur timelines jodte hain.')],
  [L('Compare suitable options', 'उपयुक्त विकल्पों की तुलना', 'Suitable options ki tulna'), L('We go through cost, terms, exclusions and risks, so you see the full picture.', 'हम लागत, शर्तें, अपवाद और जोखिम देखते हैं ताकि आपको पूरी तस्वीर दिखे।', 'Hum cost, terms, exclusions aur risks dekhte hain taaki aapko poori tasveer dikhe.')],
  [L('Stay in touch', 'संपर्क में रहें', 'Touch me rahein'), L('Needs change with life. You can come back to review and adjust at any time.', 'ज़िंदगी के साथ ज़रूरतें बदलती हैं। आप कभी भी समीक्षा और बदलाव के लिए वापस आ सकते हैं।', 'Zindagi ke saath zaroorat badalti hai. Aap kabhi bhi review aur adjust karne ke liye wapas aa sakte hain.')],
];

export default function Approach() {
  const { t, tr } = useLang();
  return (
    <Layout title={t('Our Approach', 'हमारा तरीका', 'Hamara Tarika')} desc={t('A five-step, need-based approach to insurance, investments and loans: listen, review, clarify goals, compare options and keep supporting you.', 'बीमा, निवेश और लोन के लिए पाँच चरणों वाला, ज़रूरत-आधारित तरीका: सुनना, समीक्षा, लक्ष्य स्पष्ट करना, विकल्पों की तुलना और लगातार सहयोग।', 'Insurance, investments aur loans ke liye paanch steps ka, need-based tarika: sunna, review, goals clear karna, options ki tulna aur lagatar support.')}>
      <PageHero eyebrow={t('Our approach', 'हमारा तरीका', 'Hamara tarika')} title={t('Understand first. Recommend after.', 'पहले समझें। फिर सुझाव दें।', 'Pehle samjhein. Phir suggest karein.')} desc={t('Need-based planning puts your life, responsibilities and budget at the centre of every conversation.', 'ज़रूरत-आधारित योजना हर बातचीत के केंद्र में आपका जीवन, ज़िम्मेदारियाँ और बजट रखती है।', 'Need-based planning har baatcheet ke centre me aapki life, responsibilities aur budget rakhti hai.')} />
      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow={t('Five steps', 'पाँच चरण', 'Paanch steps')} title={t('A clear process for an informed decision', 'सोच-समझकर निर्णय के लिए एक स्पष्ट प्रक्रिया', 'Soch-samajhkar faisle ke liye ek clear process')} />
          <ol className="steps">
            {steps.map(([a, b], i) => <li key={i}><span>0{i + 1}</span><div><h3>{tr(a)}</h3><p>{tr(b)}</p></div></li>)}
          </ol>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap split-2">
          <div>
            <span className="eyebrow">{t('Our mission', 'हमारा लक्ष्य', 'Hamara mission')}</span>
            <h2 className="h2">{t('The right protection, at a budget you can sustain.', 'सही सुरक्षा, ऐसे बजट में जो आप निभा सकें।', 'Sahi protection, aise budget me jo aap nibha sakein.')}</h2>
            <p>{t('We aim to understand your needs first and then explore the best-fit options within your means, with honest guidance and service that continues after the sale.', 'हमारा उद्देश्य पहले आपकी ज़रूरतें समझना है और फिर आपकी क्षमता के भीतर सबसे उपयुक्त विकल्प खोजना है, ईमानदार मार्गदर्शन और बिक्री के बाद भी जारी रहने वाली सेवा के साथ।', 'Hamara aim pehle aapki zaroorat samajhna hai aur phir aapki capacity ke andar best-fit options khojna hai, honest guidance aur sale ke baad bhi jaari rehne wali service ke saath.')}</p>
            <Link className="text-link" to="/contact">{t('Start with a conversation', 'बातचीत से शुरुआत करें', 'Baatcheet se shuruaat karein')} <ArrowRight size={15} /></Link>
          </div>
          <div className="photo-stack"><img src="/images/office-desk-wide.webp" alt={t('Consultation desk at the OM Financial Experts office', 'OM Financial Experts कार्यालय में परामर्श डेस्क', 'OM Financial Experts office me consultation desk')} width="1500" height="844" loading="lazy" /><span className="photo-tag">{t('Consultation desk', 'परामर्श डेस्क', 'Consultation desk')}</span></div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
