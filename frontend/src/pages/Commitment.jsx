import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { Layout, PageHero, SectionTitle, CTA } from '../components/Shared.jsx';
import { useLang, L } from '../i18n.jsx';

const pledges = [
  [L('Our mission', 'हमारा मिशन', 'Hamara mission'), L('Understand the need, respect the budget and guide customers towards informed decisions.', 'ज़रूरत को समझना, बजट का सम्मान करना और ग्राहकों को सोच-समझकर निर्णय की ओर मार्गदर्शन देना।', 'Zaroorat ko samajhna, budget ka samman karna aur customers ko soch-samajhkar faisle ki taraf guide karna.')],
  [L('Our vision', 'हमारा विज़न', 'Hamara vision'), L('Families who feel financially secure and prepared for the goals that matter to them.', 'ऐसे परिवार जो आर्थिक रूप से सुरक्षित महसूस करें और अपने ज़रूरी लक्ष्यों के लिए तैयार हों।', 'Aise parivaar jo financially secure mehsoos karein aur apne zaroori goals ke liye taiyaar hon.')],
  [L('Our promise', 'हमारा वादा', 'Hamara vaada'), L('Honest communication, realistic expectations, respect for your choices and service beyond the sale.', 'ईमानदार संवाद, यथार्थवादी अपेक्षाएँ, आपके चुनावों का सम्मान और बिक्री के बाद भी सेवा।', 'Honest communication, realistic expectations, aapke choices ka samman aur sale ke baad bhi service.')],
];
const values = [
  [L('Customers First', 'ग्राहक सबसे पहले', 'Customers First'), L('Every recommendation starts with the customer’s real needs.', 'हर सुझाव ग्राहक की असली ज़रूरतों से शुरू होता है।', 'Har suggestion customer ki asli zaroorat se shuru hota hai.')],
  [L('Honesty And Transparency', 'ईमानदारी और पारदर्शिता', 'Honesty aur Transparency'), L('Clear information and straightforward terms.', 'स्पष्ट जानकारी और सीधी-सादी शर्तें।', 'Clear information aur seedhi-saadi terms.')],
  [L('Respect For Your Budget', 'आपके बजट का सम्मान', 'Aapke Budget ka Samman'), L('Explaining options without creating unnecessary financial pressure.', 'बिना अनावश्यक आर्थिक दबाव बनाए विकल्प समझाना।', 'Bina unnecessary financial pressure banaye options samjhana.')],
  [L('Goal-Based Planning', 'लक्ष्य-आधारित योजना', 'Goal-Based Planning'), L('Preparing for education, retirement and future milestones.', 'शिक्षा, रिटायरमेंट और भविष्य के पड़ावों की तैयारी।', 'Education, retirement aur future milestones ki taiyaari.')],
  [L('Service Beyond The Sale', 'बिक्री के बाद भी सेवा', 'Sale ke baad bhi Service'), L('Building relationships through trust and clear communication.', 'भरोसे और स्पष्ट संवाद से रिश्ते बनाना।', 'Bharose aur clear communication se rishte banana.')],
  [L('Responsible Guidance', 'ज़िम्मेदार मार्गदर्शन', 'Responsible Guidance'), L('Helping customers understand benefits, limitations and risks.', 'ग्राहकों को लाभ, सीमाएँ और जोखिम समझने में मदद करना।', 'Customers ko benefits, limitations aur risks samajhne me madad karna.')],
];

export default function Commitment() {
  const { t, tr } = useLang();
  return (
    <Layout title={t('Our Commitment', 'हमारी प्रतिबद्धता', 'Hamara Commitment')} desc={t('Our commitment: a financially aware and secure India, one family and one informed decision at a time. Sankalp 2047.', 'हमारी प्रतिबद्धता: एक आर्थिक रूप से जागरूक और सुरक्षित भारत, एक-एक परिवार और एक-एक सोच-समझे निर्णय के साथ। संकल्प 2047।', 'Hamara commitment: ek financially aware aur secure India, ek-ek parivaar aur ek-ek soch-samjhe faisle ke saath. Sankalp 2047.')}>
      <PageHero eyebrow={t('Our commitment', 'हमारी प्रतिबद्धता', 'Hamara commitment')} title={t('Building Financially Secure Families: Our Commitment', 'आर्थिक रूप से सुरक्षित परिवार बनाना: हमारी प्रतिबद्धता', 'Financially Secure Parivaar Banana: Hamara Commitment')} desc={t('A financially aware and secure India, one family and one informed decision at a time.', 'एक आर्थिक रूप से जागरूक और सुरक्षित भारत, एक-एक परिवार और एक-एक सोच-समझे निर्णय के साथ।', 'Ek financially aware aur secure India, ek-ek parivaar aur ek-ek soch-samjhe faisle ke saath.')} />
      <section className="section">
        <div className="wrap split-2">
          <div className="photo-stack">
            <img src="/images/office-team-area.webp" alt={t('The OM Financial Experts office, where client conversations take place', 'OM Financial Experts कार्यालय, जहाँ ग्राहकों से बातचीत होती है', 'OM Financial Experts office, jahan clients se baatcheet hoti hai')} width="1500" height="844" loading="lazy" />
            <span className="photo-tag"><HeartHandshake size={16} /> {t('People before products', 'प्रोडक्ट से पहले लोग', 'Products se pehle log')}</span>
          </div>
          <div>
            <span className="eyebrow">{t('Why we do this', 'हम यह क्यों करते हैं', 'Hum ye kyun karte hain')}</span>
            <h2 className="h2">{t('Helping families plan with clarity and confidence.', 'परिवारों को स्पष्टता और आत्मविश्वास के साथ योजना बनाने में मदद करना।', 'Parivaaron ko clarity aur confidence ke saath planning karne me madad karna.')}</h2>
            <p>{t('Every family starts from a different place. We explain options in plain language, respect each budget and encourage decisions based on real needs, not pressure or unrealistic promises.', 'हर परिवार अलग जगह से शुरू करता है। हम विकल्प सरल भाषा में समझाते हैं, हर बजट का सम्मान करते हैं और ऐसे निर्णयों को प्रोत्साहित करते हैं जो असली ज़रूरतों पर आधारित हों, दबाव या अवास्तविक वादों पर नहीं।', 'Har parivaar alag jagah se shuru karta hai. Hum options saral bhasha me samjhate hain, har budget ka samman karte hain aur aise faislon ko protsahit karte hain jo asli zaroorat par based hon, pressure ya unrealistic vaadon par nahi.')}</p>
            <p>{t('Our aim is not just to add customers. It is to help more families become financially aware and better prepared. And our support doesn’t end after the first meeting: you are welcome to ask questions and review your plan whenever life changes.', 'हमारा उद्देश्य सिर्फ़ ग्राहक जोड़ना नहीं है। यह है कि और अधिक परिवार आर्थिक रूप से जागरूक और बेहतर तैयार बनें। और हमारा सहयोग पहली मुलाकात के बाद खत्म नहीं होता: जब भी जीवन में बदलाव आए, आप सवाल पूछने और अपनी योजना की समीक्षा के लिए स्वागत हैं।', 'Hamara aim sirf customers jodna nahi hai. Ye hai ki zyada se zyada parivaar financially aware aur behtar taiyaar banein. Aur hamara support pehli mulaqat ke baad khatam nahi hota: jab bhi life me badlaav aaye, aap sawaal poochne aur apne plan ka review karne ke liye swagat hain.')}</p>
          </div>
        </div>
        <div className="wrap pledges">
          {pledges.map(([a, b], i) => <article key={i}><h3>{tr(a)}</h3><p>{tr(b)}</p></article>)}
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <SectionTitle eyebrow={t('Our Core Values', 'हमारे मूल मूल्य', 'Hamare Core Values')} title={t('The values behind our commitment', 'हमारी प्रतिबद्धता के पीछे के मूल्य', 'Hamare commitment ke peeche ke values')} />
          <div className="values six">{values.map(([a, b], i) => <div className="value" key={i}><span>0{i + 1}</span><h3>{tr(a)}</h3><p>{tr(b)}</p></div>)}</div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
