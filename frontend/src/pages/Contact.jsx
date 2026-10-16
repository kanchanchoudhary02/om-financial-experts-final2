
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_BASE_URL } from '../api.js';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

import { Layout, PageHero, CTA } from '../components/Shared.jsx';
import { SITE, services, findService, wa } from '../data.js';
import { useLang, useServices } from '../i18n.jsx';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps?q=27.4792562,77.325201&z=17&hl=en';

const MAP_COORDINATES = '27.4792562,77.325201';

const MAP_EMBED_URL =
  `https://maps.google.com/maps?q=${MAP_COORDINATES}&z=17&output=embed`;

export default function Contact() {
  const { t } = useLang();
  const localServices = useServices();
  const [params] = useSearchParams();

  const preset = findService(params.get('service'))?.title || '';

  const [status, setStatus] = React.useState({
    type: '',
    msg: '',
  });

  const [sending, setSending] = React.useState(false);

  async function submit(e) {
    e.preventDefault();

    setSending(true);
    setStatus({ type: '', msg: '' });

    const form = e.currentTarget;
    const payload = Object.fromEntries(
      new FormData(form).entries()
    );

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.message ||
            t(
              'We could not send your enquiry. Please try again.',
              'हम आपकी पूछताछ नहीं भेज सके। कृपया फिर से कोशिश करें।',
              'Hum aapki enquiry nahi bhej sake. Kripya phir se koshish karein.'
            )
        );
      }

      setStatus({
        type: 'ok',
        msg: t(
          'Thank you. Your enquiry has been sent and our team will contact you soon.',
          'धन्यवाद। आपकी पूछताछ भेज दी गई है और हमारी टीम जल्द ही आपसे संपर्क करेगी।',
          'Dhanyavaad. Aapki enquiry bhej di gayi hai aur hamari team jald hi aapse contact karegi.'
        ),
      });

      form.reset();
    } catch (err) {
      setStatus({
        type: 'err',
        msg:
          err.message ||
          t(
            'Something went wrong. Please call or WhatsApp us directly.',
            'कुछ गड़बड़ हो गई। कृपया हमें सीधे कॉल या WhatsApp करें।',
            'Kuch gadbad ho gayi. Kripya hamein seedhe call ya WhatsApp karein.'
          ),
      });
    } finally {
      setSending(false);
    }
  }

  const lines = [
    [Phone, t('Mobile', 'मोबाइल', 'Mobile'), SITE.phone, `tel:${SITE.phone}`],
    [Phone, t('Office', 'कार्यालय', 'Office'), SITE.office, `tel:${SITE.office}`],
    [Phone, t('Alternate', 'वैकल्पिक', 'Alternate'), SITE.alt, `tel:${SITE.alt}`],
    [Mail, t('Email', 'ईमेल', 'Email'), SITE.email, `mailto:${SITE.email}`],
  ];

  const hello =
    'Hello OM Financial Experts, I would like to discuss my financial needs.';

  return (
    <Layout
      title={t('Contact', 'संपर्क', 'Contact')}
      desc={t(
        'Contact OM Financial Experts in Deeg, Rajasthan by phone, WhatsApp, email or the enquiry form.',
        'डीग, राजस्थान में OM Financial Experts से फ़ोन, WhatsApp, ईमेल या पूछताछ फ़ॉर्म के ज़रिए संपर्क करें।',
        'Deeg, Rajasthan me OM Financial Experts se phone, WhatsApp, email ya enquiry form ke zariye contact karein.'
      )}
    >
      <PageHero
        eyebrow={t('Contact Us', 'संपर्क करें', 'Contact Us')}
        title={t(
          'Let’s Talk About What Matters to You.',
          'आइए उस पर बात करें जो आपके लिए मायने रखता है।',
          'Aaiye us par baat karein jo aapke liye matter karta hai.'
        )}
        desc={t(
          'Share your goal or question. We will start by understanding your needs, with no pressure.',
          'अपना लक्ष्य या सवाल बताइए। हम बिना किसी दबाव के आपकी ज़रूरतें समझने से शुरुआत करेंगे।',
          'Apna goal ya sawaal bataiye. Hum bina kisi pressure ke aapki zaroorat samajhne se shuruaat karenge.'
        )}
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <h2 className="h2">
              {t('Reach Us Your Way', 'अपने तरीके से हमसे संपर्क करें', 'Apne tarike se hamse contact karein')}
            </h2>

            <p>
              {t(
                'Call, message or visit our office to discuss your financial needs.',
                'अपनी वित्तीय ज़रूरतों पर बात करने के लिए कॉल करें, संदेश भेजें या हमारे कार्यालय आएँ।',
                'Apni financial zaroorat par baat karne ke liye call karein, message bhejein ya hamare office aayein.'
              )}
            </p>

            {lines.map(([Icon, label, value, href]) => (
              <a key={href} className="contact-line" href={href}>
                <span><Icon size={19} /></span>
                <div>
                  <small>{label}</small>
                  <b>{value}</b>
                </div>
              </a>
            ))}

            <a
              className="contact-line"
              href={wa(hello)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><MessageCircle size={19} /></span>
              <div>
                <small>WhatsApp</small>
                <b>{t('Message Us', 'हमें संदेश भेजें', 'Hamein Message Karein')}</b>
              </div>
            </a>

            <div className="contact-line static">
              <span><MapPin size={19} /></span>
              <div>
                <small>
                  {t(
                    'Visit Our Office (Please Call First)',
                    'हमारे कार्यालय आएँ (कृपया पहले कॉल करें)',
                    'Hamare Office Aayein (Kripya Pehle Call Karein)'
                  )}
                </small>

                <p>{SITE.address}</p>

                <a
                  className="text-link"
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('Open Directions', 'रास्ता खोलें', 'Directions Kholein')}
                  <ArrowRight size={14} />
                </a>

                <div className="map-frame contact-map-small">
                  <iframe
                    title={t(
                      'OM Financial Experts Office Location',
                      'OM Financial Experts कार्यालय का स्थान',
                      'OM Financial Experts Office Location'
                    )}
                    src={MAP_EMBED_URL}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={submit}>
            <h3>{t('Send an Enquiry', 'पूछताछ भेजें', 'Enquiry Bhejein')}</h3>

            <p>
              {t(
                'We will call you back on the number you provide.',
                'हम आपके दिए नंबर पर वापस कॉल करेंगे।',
                'Hum aapke diye number par wapas call karenge.'
              )}
            </p>

            {status.msg && (
              <div
                className={status.type === 'ok' ? 'alert ok' : 'alert err'}
                role="status"
              >
                {status.msg}

                {status.type === 'err' && (
                  <>
                    {' '}
                    <a
                      href={wa(hello)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(
                        'Message Us on WhatsApp Instead.',
                        'इसके बजाय WhatsApp पर संदेश भेजें।',
                        'Iske bajaye WhatsApp par message karein.'
                      )}
                    </a>
                  </>
                )}
              </div>
            )}

            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              className="hp"
              aria-hidden="true"
            />

            <label>
              {t('Full Name', 'पूरा नाम', 'Poora Naam')}
              <input
                required
                name="name"
                autoComplete="name"
                placeholder={t('Your Name', 'आपका नाम', 'Aapka Naam')}
              />
            </label>

            <label>
              {t('Phone Number', 'फ़ोन नंबर', 'Phone Number')}
              <input
                required
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+\\(\\) \\-]{8,}"
                placeholder={t(
                  '10-Digit Mobile Number',
                  '10 अंकों का मोबाइल नंबर',
                  '10-Digit Mobile Number'
                )}
              />
            </label>

            <label>
              {t('Email (Optional)', 'ईमेल (वैकल्पिक)', 'Email (Optional)')}
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              {t(
                'What Would You Like to Discuss?',
                'आप किस बारे में बात करना चाहेंगे?',
                'Aap kis baare me baat karna chahenge?'
              )}

              <select name="topic" defaultValue={preset} key={preset}>
                <option value="">
                  {t('Select a Topic', 'विषय चुनें', 'Topic Chunein')}
                </option>

                {services.map((service, i) => (
                  <option key={service.slug} value={service.title}>
                    {localServices[i].title}
                  </option>
                ))}

                <option value="Something else">
                  {t('Something Else', 'कुछ और', 'Kuch Aur')}
                </option>
              </select>
            </label>

            <label>
              {t(
                'Your Message (Optional)',
                'आपका संदेश (वैकल्पिक)',
                'Aapka Message (Optional)'
              )}

              <textarea
                name="message"
                rows="4"
                placeholder={t(
                  'Your Goal or Question',
                  'आपका लक्ष्य या सवाल',
                  'Aapka Goal ya Sawaal'
                )}
              />
            </label>

            <button
              className="btn btn-primary full"
              type="submit"
              disabled={sending}
            >
              {sending
                ? t('Sending…', 'भेजा जा रहा है…', 'Bheja ja raha hai…')
                : t('Send Enquiry', 'पूछताछ भेजें', 'Enquiry Bhejein')}

              {!sending && <ArrowRight size={16} />}
            </button>
          </form>
        </div>
      </section>

      <section className="section map-section">
        <div className="wrap">
          <h2 className="h2">
            {t('Find Our Office', 'हमारा कार्यालय खोजें', 'Hamara Office Khojein')}
          </h2>

          <p>{SITE.address}</p>

          <a
            className="btn btn-outline map-open"
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Open in Google Maps', 'Google Maps में खोलें', 'Google Maps me Kholein')}
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}
