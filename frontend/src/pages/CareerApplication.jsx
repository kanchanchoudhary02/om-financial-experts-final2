import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Layout, PageHero } from '../components/Shared.jsx';
import { CONTACT_API_URL } from '../api.js';
import { useLang } from '../i18n.jsx';

export default function CareerApplication() {
  const { t } = useLang();
  const [status, setStatus] = React.useState({ type: '', msg: '' });
  const [sending, setSending] = React.useState(false);

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', msg: '' });
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const topic = `${values.workType || 'Career'} Application — ${values.joinRole || 'Financial Consultant'}`;
    const payload = { ...values, topic, message: values.message || `Application for ${values.joinRole}; work type: ${values.workType}` };
    delete payload.website;
    try {
      const response = await fetch(CONTACT_API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || t('We could not send your application. Please try again.', 'हम आपका आवेदन नहीं भेज सके। कृपया फिर से कोशिश करें।', 'Hum aapka application nahi bhej sake. Kripya phir se koshish karein.'));
      setStatus({ type: 'ok', msg: t('Thank you for your interest. Your application has been sent successfully.', 'आपकी रुचि के लिए धन्यवाद। आपका आवेदन सफलतापूर्वक भेज दिया गया है।', 'Aapki ruchi ke liye dhanyavaad. Aapka application safaltapoorvak bhej diya gaya hai.') });
      form.reset();
    } catch (error) {
      setStatus({ type: 'err', msg: error.message || t('Something went wrong. Please try again or contact us directly.', 'कुछ गड़बड़ हो गई। कृपया फिर कोशिश करें या हमसे सीधे संपर्क करें।', 'Kuch gadbad ho gayi. Kripya phir koshish karein ya hamse seedhe contact karein.') });
    } finally { setSending(false); }
  }

  return <Layout title={t('Part-time & Full-time Opportunities', 'पार्ट-टाइम और फुल-टाइम अवसर', 'Part-time aur Full-time opportunities')} desc={t('Explore part-time and full-time work opportunities with OM Financial Experts.', 'OM Financial Experts के साथ पार्ट-टाइम और फुल-टाइम काम के अवसर देखें।', 'OM Financial Experts ke saath part-time aur full-time kaam ke mauke dekhein.')}>
    <PageHero eyebrow={t('Career opportunities', 'करियर के अवसर', 'Career opportunities')} title={t('Part-time & Full-time Opportunities', 'पार्ट-टाइम और फुल-टाइम अवसर', 'Part-time aur Full-time opportunities')} desc={t('Choose the work arrangement that fits your schedule and career goals. Read about both options below, then submit your application.', 'अपने समय और करियर के लक्ष्यों के अनुसार काम का विकल्प चुनें। नीचे दोनों विकल्पों के बारे में पढ़ें और फिर आवेदन करें।', 'Apne schedule aur career goals ke hisaab se work option chunein. Neeche dono options padhein aur phir application submit karein.')} />
    <section className="section alt"><div className="wrap"><div className="career-grid">
      <article className="career-card"><span className="eyebrow">{t('Flexible opportunity', 'लचीला अवसर', 'Flexible opportunity')}</span><h3>{t('Part-time work', 'पार्ट-टाइम काम', 'Part-time work')}</h3><p>{t('A flexible option for students, working professionals and people who want to explore financial services alongside their existing responsibilities. Learn about client communication, financial products and relationship building with guidance from our team.', 'उन विद्यार्थियों, नौकरीपेशा लोगों और अन्य लोगों के लिए लचीला विकल्प जो अपनी मौजूदा ज़िम्मेदारियों के साथ वित्तीय सेवाओं में काम करना चाहते हैं। हमारी टीम के मार्गदर्शन में ग्राहक संवाद, वित्तीय उत्पाद और संबंध बनाना सीखें।', 'Students, working professionals aur un logon ke liye flexible option jo apni current responsibilities ke saath financial services me kaam karna chahte hain. Team ke guidance me client communication, financial products aur relationship building seekhein.')}</p></article>
      <article className="career-card"><span className="eyebrow">{t('Long-term opportunity', 'दीर्घकालिक अवसर', 'Long-term opportunity')}</span><h3>{t('Full-time work', 'फुल-टाइम काम', 'Full-time work')}</h3><p>{t('A regular work commitment for candidates interested in developing a long-term career in financial services, building client relationships and growing with the team through ongoing learning and professional support.', 'वित्तीय सेवाओं में दीर्घकालिक करियर बनाने, ग्राहकों से संबंध विकसित करने और लगातार सीखने व पेशेवर सहयोग के साथ टीम के साथ आगे बढ़ने के इच्छुक उम्मीदवारों के लिए नियमित काम का विकल्प।', 'Financial services me long-term career banane, client relationships develop karne aur ongoing learning aur professional support ke saath team ke saath grow karne ke ichhuk candidates ke liye regular work option.')}</p></article>
    </div></div></section>
    <section className="section career-section"><div className="wrap"><div id="join-application" className="contact-grid">
      <div><span className="eyebrow">{t('Apply now', 'अभी आवेदन करें', 'Abhi apply karein')}</span><h2 className="h2">{t('Part-time / Full-time Application Form', 'पार्ट-टाइम / फुल-टाइम आवेदन फ़ॉर्म', 'Part-time / Full-time application form')}</h2><p>{t('Share your contact details, preferred role and work type. Our team will review your application and contact you about the next steps.', 'अपनी संपर्क जानकारी, पसंदीदा भूमिका और काम का प्रकार साझा करें। हमारी टीम आपके आवेदन की समीक्षा करके अगले चरणों के लिए आपसे संपर्क करेगी।', 'Apni contact details, preferred role aur work type share karein. Hamari team application review karke next steps ke liye aapse contact karegi.')}</p></div>
      <form className="form" onSubmit={submit}><h3>{t('Apply for an Opportunity', 'अवसर के लिए आवेदन करें', 'Opportunity ke liye apply karein')}</h3><p>{t('Please complete all required fields.', 'कृपया सभी ज़रूरी फ़ील्ड भरें।', 'Kripya sabhi zaroori fields bharein.')}</p>
        {status.msg && <div className={status.type === 'ok' ? 'alert ok' : 'alert err'} role="status">{status.msg}</div>}
        <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />
        <label>{t('Full Name', 'पूरा नाम', 'Poora Naam')}<input required name="name" autoComplete="name" placeholder={t('Your Name', 'आपका नाम', 'Aapka Naam')} /></label>
        <label>{t('Phone Number', 'फ़ोन नंबर', 'Phone Number')}<input required name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{8,}" placeholder={t('10-Digit Mobile Number', '10 अंकों का मोबाइल नंबर', '10-Digit Mobile Number')} /></label>
        <label>{t('Email (Optional)', 'ईमेल (वैकल्पिक)', 'Email (Optional)')}<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label>{t('Work Type', 'काम का प्रकार', 'Work Type')}<select name="workType" defaultValue="" required><option value="" disabled>{t('Select part-time or full-time', 'पार्ट-टाइम या फुल-टाइम चुनें', 'Part-time ya full-time chunein')}</option><option value="Part-time">{t('Part-time', 'पार्ट-टाइम', 'Part-time')}</option><option value="Full-time">{t('Full-time', 'फुल-टाइम', 'Full-time')}</option></select></label>
        <label>{t('Current Occupation', 'वर्तमान व्यवसाय', 'Current Occupation')}<select name="currentOccupation" defaultValue="" required><option value="" disabled>{t('Select your current occupation', 'अपना वर्तमान व्यवसाय चुनें', 'Apna current occupation chunein')}</option><option value="Student">Student</option><option value="Salaried Employee">Salaried Employee</option><option value="Self-employed / Business">Self-employed / Business</option><option value="Homemaker">Homemaker</option><option value="Freelancer">Freelancer</option><option value="Looking for work">Looking for work</option><option value="Retired">Retired</option><option value="Other">Other</option></select></label>
        <label>{t('Education', 'शिक्षा', 'Education')}<select name="education" defaultValue="" required><option value="" disabled>{t('Select your education', 'अपनी शिक्षा चुनें', 'Apni education chunein')}</option><option value="Below 10th">Below 10th</option><option value="10th Pass">10th Pass</option><option value="12th Pass">12th Pass</option><option value="Diploma">Diploma</option><option value="Graduate">Graduate</option><option value="Postgraduate">Postgraduate</option><option value="Other">Other</option></select></label>
        <label>{t('Age Group', 'आयु वर्ग', 'Age Group')}<select name="ageGroup" defaultValue="" required><option value="" disabled>{t('Select your age group', 'अपना आयु वर्ग चुनें', 'Apna age group chunein')}</option><option value="Below 18">Below 18</option><option value="18–30">18–30</option><option value="31–45">31–45</option><option value="46–54">46–54</option><option value="55–65">55–65</option><option value="Above 65">Above 65</option></select></label>
        <label>{t('Full Address', 'पूरा पता', 'Full Address')}<textarea name="address" rows="3" autoComplete="street-address" required placeholder={t('House / street, area, city, state and PIN code', 'मकान / सड़क, क्षेत्र, शहर, राज्य और पिन कोड', 'House / street, area, city, state aur PIN code')} /></label>
        <label>{t('Message (Optional)', 'संदेश (वैकल्पिक)', 'Message (Optional)')}<textarea name="message" rows="4" placeholder={t('Tell us a little about yourself', 'हमें अपने बारे में थोड़ा बताइए', 'Hamein apne baare me thoda bataiye')} /></label>
        <button className="btn btn-primary full" type="submit" disabled={sending}>{sending ? t('Submitting…', 'जमा हो रहा है…', 'Submit ho raha hai…') : t('Submit Application', 'आवेदन जमा करें', 'Application Submit Karein')} {!sending && <ArrowRight size={16} />}</button>
      </form>
    </div></div></section>
  </Layout>;
}
