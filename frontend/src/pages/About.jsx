import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Quote } from 'lucide-react';
import { Layout, PageHero, SectionTitle, CTA } from '../components/Shared.jsx';
import { SITE } from '../data.js';
import { useLang, L } from '../i18n.jsx';

const values = [
  [L('Customer first', 'ग्राहक सबसे पहले', 'Customer first'), L('Every conversation starts with your real needs.', 'हर बातचीत आपकी असली ज़रूरतों से शुरू होती है।', 'Har baatcheet aapki asli zaroorat se shuru hoti hai.')],
  [L('Honesty', 'ईमानदारी', 'Honesty'), L('We explain terms, costs and limits clearly, including the parts that are less attractive.', 'हम शर्तें, लागत और सीमाएँ साफ़ बताते हैं, उन बातों सहित जो कम आकर्षक हैं।', 'Hum terms, costs aur limits saaf batate hain, un baaton samet jo kam attractive hain.')],
  [L('Respect for your budget', 'आपके बजट का सम्मान', 'Aapke budget ka samman'), L('We look at what you can afford to sustain, not the biggest plan on offer.', 'हम देखते हैं कि आप क्या निभा सकते हैं, न कि सबसे बड़ा प्लान।', 'Hum dekhte hain ki aap kya nibha sakte hain, na ki sabse bada plan.')],
  [L('Long-term relationship', 'लंबे समय का रिश्ता', 'Long-term relationship'), L('Support continues after the paperwork is done.', 'काग़ज़ी कार्रवाई पूरी होने के बाद भी सहयोग जारी रहता है।', 'Paperwork poora hone ke baad bhi support jaari rehta hai.')],
];

export default function About() {
  const { t, tr } = useLang();
  return (
    <Layout title={t('About Yogesh Kumar', 'योगेश कुमार के बारे में', 'Yogesh Kumar ke baare me')} desc={t('Meet Yogesh Kumar, MBA (Finance & Marketing), with 15+ years across banking and life insurance. Founder of OM Financial Experts, Deeg.', 'योगेश कुमार से मिलिए, MBA (फाइनेंस और मार्केटिंग), बैंकिंग और जीवन बीमा में 15+ वर्षों का अनुभव। OM Financial Experts, डीग के संस्थापक।', 'Yogesh Kumar se miliye, MBA (Finance & Marketing), banking aur life insurance me 15+ saal ka experience. OM Financial Experts, Deeg ke founder.')}>
      <PageHero eyebrow={t('About us', 'हमारे बारे में', 'Hamare baare me')} title={t('Experience, with a people-first approach.', 'अनुभव, लोगों को प्राथमिकता देने वाले नज़रिये के साथ।', 'Experience, people-first approach ke saath.')} desc={t('Meet Yogesh Kumar and the thinking behind OM Financial Experts.', 'योगेश कुमार और OM Financial Experts के पीछे की सोच से मिलिए।', 'Yogesh Kumar aur OM Financial Experts ke peeche ki soch se miliye.')} />
      <section className="section">
        <div className="wrap about-grid">
          <div className="about-photo">
            <img src="/images/yogesh-kumar.webp" alt={t('Yogesh Kumar', 'योगेश कुमार', 'Yogesh Kumar')} width="1078" height="1460" loading="lazy" />
            <div className="badge"><b>15+</b><span>{t('years of experience', 'वर्ष का अनुभव', 'saal ka experience')}</span></div>
          </div>
          <div>
            <span className="eyebrow">{t('Your guide', 'आपके मार्गदर्शक', 'Aapke guide')}</span>
            <h2 className="h2">{t('Yogesh Kumar', 'योगेश कुमार', 'Yogesh Kumar')}</h2>
            <p className="role">{t('MBA, Finance & Marketing', 'MBA, फाइनेंस और मार्केटिंग', 'MBA, Finance & Marketing')}</p>
            <p>{t('Yogesh has spent more than 15 years in financial services, including 11+ years in corporate roles across retail banking and life insurance. He has worked with ING Vysya Bank (now Kotak Mahindra Bank), Axis Bank, PNB MetLife, Max Life, SBI Life, Exide Life, HDFC Life and TATA AIA Life, most recently as Branch Manager at TATA AIA Life Insurance.', 'योगेश ने वित्तीय सेवाओं में 15 से अधिक वर्ष बिताए हैं, जिनमें रिटेल बैंकिंग और जीवन बीमा में 11+ वर्ष कॉरपोरेट भूमिकाओं में रहे। उन्होंने ING Vysya Bank (अब Kotak Mahindra Bank), Axis Bank, PNB MetLife, Max Life, SBI Life, Exide Life, HDFC Life और TATA AIA Life के साथ काम किया है, और हाल ही में TATA AIA Life Insurance में ब्रांच मैनेजर रहे।', 'Yogesh ne financial services me 15 se zyada saal bitaaye hain, jisme retail banking aur life insurance me 11+ saal corporate roles me rahe. Unhone ING Vysya Bank (ab Kotak Mahindra Bank), Axis Bank, PNB MetLife, Max Life, SBI Life, Exide Life, HDFC Life aur TATA AIA Life ke saath kaam kiya hai, aur haal hi me TATA AIA Life Insurance me Branch Manager rahe.')}</p>
            <p>{t('Today his focus is simple: help families make informed decisions by understanding their needs, existing protection, affordability and goals before any product is discussed.', 'आज उनका फ़ोकस सीधा है: किसी भी प्रोडक्ट पर चर्चा से पहले परिवारों की ज़रूरतें, मौजूदा सुरक्षा, वहन-क्षमता और लक्ष्य समझकर उन्हें सोच-समझे निर्णय लेने में मदद करना।', 'Aaj unka focus simple hai: kisi bhi product par charcha se pehle parivaaron ki zaroorat, maujooda protection, affordability aur goals samajhkar unhe soch-samjhe faisle lene me madad karna.')}</p>
            <div className="facts">
              <div><strong>8</strong><span>{t('organisations worked with', 'संस्थानों के साथ काम किया', 'organisations ke saath kaam kiya')}</span></div>
              <div><strong>4+</strong><span>{t('years as Branch Manager and above', 'वर्ष ब्रांच मैनेजर और उससे ऊपर के पद पर', 'saal Branch Manager aur usse upar ke post par')}</span></div>
              <div><strong>3</strong><span>{t('states with an advisor network under his leadership', 'राज्यों में उनके नेतृत्व में एडवाइज़र नेटवर्क', 'states me unke leadership me advisor network')}</span></div>
            </div>
            <Link className="btn btn-primary" to="/contact">{t('Connect with Yogesh', 'योगेश से जुड़ें', 'Yogesh se judein')} <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="wrap">
          <Quote size={34} />
          <blockquote>{t('We do not recommend what benefits us first. We begin by understanding what truly matters to you and your family.', 'हम वह सुझाव नहीं देते जिससे पहले हमें फ़ायदा हो। हम यह समझने से शुरुआत करते हैं कि आपके और आपके परिवार के लिए वास्तव में क्या मायने रखता है।', 'Hum wo suggest nahi karte jisse pehle humein fayda ho. Hum ye samajhne se shuruaat karte hain ki aapke aur aapke parivaar ke liye sach me kya matter karta hai.')}</blockquote>
          <p>OM FINANCIAL EXPERTS</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow={t('Visit us', 'हमसे मिलने आइए', 'Hamse milne aaiye')} title={t('Our office in Deeg', 'डीग में हमारा कार्यालय', 'Deeg me hamara office')} desc={t('Come in for a conversation. Please call before visiting so we can make time for you.', 'बातचीत के लिए आइए। आने से पहले कृपया कॉल करें ताकि हम आपके लिए समय निकाल सकें।', 'Baatcheet ke liye aaiye. Aane se pehle kripya call karein taaki hum aapke liye time nikaal sakein.')} />
          <div className="gallery">
            <figure><img src="/images/office-desk-side.webp" alt={t('Main consultation hall of the OM Financial Experts office', 'OM Financial Experts कार्यालय का मुख्य परामर्श हॉल', 'OM Financial Experts office ka main consultation hall')} width="1500" height="844" loading="lazy" /><figcaption><b>{t('Consultation hall', 'परामर्श हॉल', 'Consultation hall')}</b><span>{t('Where every conversation begins', 'जहाँ हर बातचीत शुरू होती है', 'Jahan har baatcheet shuru hoti hai')}</span></figcaption></figure>
            <figure><img src="/images/office-sofa.webp" alt={t('Seating area for clients', 'ग्राहकों के लिए बैठने की जगह', 'Clients ke liye baithne ki jagah')} width="1500" height="844" loading="lazy" /><figcaption><b>{t('Client lounge', 'क्लाइंट लाउंज', 'Client lounge')}</b><span>{t('Relaxed, unhurried seating', 'आरामदायक, बिना जल्दबाज़ी वाली बैठक', 'Aaramdayak, bina jaldbaazi wali baithak')}</span></figcaption></figure>
            <figure><img src="/images/awards.webp" alt={t('Trophies and awards displayed at the OM Financial Experts office', 'OM Financial Experts कार्यालय में सजे ट्रॉफ़ी और पुरस्कार', 'OM Financial Experts office me sajे trophies aur awards')} width="1500" height="844" loading="lazy" /><figcaption><b>{t('Awards & recognition', 'पुरस्कार और सम्मान', 'Awards & recognition')}</b><span>{t('Milestones on our journey', 'हमारे सफ़र के पड़ाव', 'Hamare safar ke milestones')}</span></figcaption></figure>
          </div>
          <div className="loc-card">
            <MapPin size={26} />
            <p>{SITE.address}</p>
            <a className="btn btn-outline" href={SITE.map} target="_blank" rel="noreferrer">{t('Open in Google Maps', 'Google Maps में खोलें', 'Google Maps me kholein')} <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionTitle eyebrow={t('What to expect', 'आप क्या उम्मीद करें', 'Aap kya expect karein')} title={t('Our principles', 'हमारे सिद्धांत', 'Hamare principles')} />
          <div className="values">{values.map(([a, b], i) => <div className="value" key={i}><span>0{i + 1}</span><h3>{tr(a)}</h3><p>{tr(b)}</p></div>)}</div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
}
