import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن
import { countriesData } from '../data/travelData';

const initialFormData = {
  name: '', email: '', destination: countriesData[0].id, duration: '5-7', notes: '',
};

const durations = ['3-5', '5-7', '7-14'];

const inputClass = "w-full bg-parchment dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 px-4 py-3 text-sm text-obsidian dark:text-gallery focus:outline-none focus:border-obsidian dark:focus:border-gallery font-light transition-colors";
const labelClass = "text-xs uppercase tracking-caps text-ashGray font-mono block";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={100}><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t('contact.subtitle')}</span></Reveal>
        <Reveal delay={300}><h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">{t('contact.title')}</h1></Reveal>
        <Reveal delay={500}><p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t('contact.desc')}</p></Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <Reveal delay={300}>
            <div className="space-y-8 bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-8 md:p-10 transition-colors">
              <div>
                <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t('contact.directBureau')}</span>
                <h3 className="text-xl font-normal tracking-editorial text-obsidian dark:text-gallery">{t('contact.cairoDesk')}</h3>
                <p className="text-graphite dark:text-ashGray text-sm font-light mt-2">{t('contact.appointments')}</p>
              </div>
              <div className="space-y-4 border-t border-graphite/10 dark:border-graphite/30 pt-6">
                <div><span className="text-xs uppercase tracking-editorial text-ashGray block">{t('contact.emailLabel')}</span><a href="mailto:inquiries@aurajourneys.com" className="text-sm font-mono text-obsidian dark:text-parchment hover:underline">inquiries@aurajourneys.com</a></div>
                <div><span className="text-xs uppercase tracking-editorial text-ashGray block">{t('contact.phoneLabel')}</span><a href="tel:+2025550192" dir="ltr" className="text-sm font-mono text-obsidian dark:text-parchment hover:underline">+20 (0) 2 555 0192</a></div>
                <div><span className="text-xs uppercase tracking-editorial text-ashGray block">{t('contact.responseLabel')}</span><span className="text-sm font-light text-graphite dark:text-ashGray">{t('contact.responseValue')}</span></div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={500}>
            <div className="bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-8 md:p-12 transition-colors">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <span className="text-xs font-mono uppercase tracking-caps text-ashGray">{t('contact.successSub')}</span>
                  <h3 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery">{t('contact.successTitle', { name: formData.name })}</h3>
                  <p className="text-graphite dark:text-ashGray text-sm font-light max-w-md mx-auto">{t('contact.successDesc')}</p>
                  <button
                    onClick={() => { setFormData(initialFormData); setSubmitted(false); }}
                    className="mt-6 text-xs uppercase tracking-caps px-6 py-3 border border-obsidian dark:border-parchment text-obsidian dark:text-parchment hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all"
                  >
                    {t('contact.submitAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className={labelClass}>{t('contact.nameLabel')}</label>
                      <input id="contact-name" type="text" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder={t('contact.namePlaceholder')} className={inputClass} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className={labelClass}>{t('contact.emailAddrLabel')}</label>
                      <input id="contact-email" type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="omar@domain.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-destination" className={labelClass}>{t('contact.destLabel')}</label>
                      <select id="contact-destination" name="destination" value={formData.destination} onChange={handleChange} className={inputClass}>
                        {countriesData.map((country) => (
                          <option key={country.id} value={country.id}>{t(`countries.${country.id}`)}</option>
                        ))}
                        <option value="bespoke">{t('contact.bespokeOption')}</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-duration" className={labelClass}>{t('contact.durLabel')}</label>
                      <select id="contact-duration" name="duration" value={formData.duration} onChange={handleChange} className={inputClass}>
                        {durations.map((value) => (
                          <option key={value} value={value}>{t(`contact.durations.${value}`)}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-notes" className={labelClass}>{t('contact.notesLabel')}</label>
                    <textarea id="contact-notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder={t('contact.notesPlaceholder')} className={inputClass}></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite dark:hover:bg-parchment transition-all duration-300">{t('contact.submitBtn')}</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
