import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن

export default function Contact() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', destination: 'Kyoto, Japan', duration: '5-7 Days', notes: '',
  });

  const content = {
    EN: {
      subtitle: "Private Inquiry • Consultation", title: "Begin Your Dialogue", desc: "Every journey begins with a private conversation. Share your vision, rhythms, and preferences with our curatorial team.", directBureau: "Direct Bureau", cairoDesk: "Cairo & Global Desk", appointments: "Available for private appointments and bespoke itinerary reviews.", emailLabel: "Electronic Mail", phoneLabel: "Private Line", responseLabel: "Response Window", responseValue: "Within 24 architectural hours", nameLabel: "Full Name", namePlaceholder: "e.g. Omar", emailAddrLabel: "Email Address", destLabel: "Target Destination", durLabel: "Estimated Duration", notesLabel: "Specific Vision or Notes", notesPlaceholder: "Share any particular architectural interests, pacing preferences...", submitBtn: "Transmit Private Inquiry", successSub: "Inquiry Received", successTitle: "Thank you", successDesc: "Our curatorial director will review your preferences and initiate private contact shortly.", submitAnother: "Submit Another Inquiry"
    },
    AR: {
      subtitle: "استعلام خاص • استشارة", title: "ابدأ حوارك", desc: "كل رحلة تبدأ بمحادثة خاصة. شارك رؤيتك وإيقاعك وتفضيلاتك مع فريق التنظيم والترتيب لدينا.", directBureau: "المكتب المباشر", cairoDesk: "مكتب القاهرة والعالم", appointments: "متاح للمواعيد الخاصة ومراجعة مسارات الرحلات المصممة خصيصاً.", emailLabel: "البريد الإلكتروني", phoneLabel: "الخط الخاص", responseLabel: "نافذة الاستجابة", responseValue: "خلال ٢٤ ساعة", nameLabel: "الاسم الكامل", namePlaceholder: "مثال: عمر", emailAddrLabel: "البريد الإلكتروني", destLabel: "الوجهة المستهدفة", durLabel: "المدة المقدرة", notesLabel: "رؤية خاصة أو ملاحظات", notesPlaceholder: "شارك أي اهتمامات معمارية خاصة، أو تفضيلات وتفاصيل...", submitBtn: "إرسال الاستعلام الخاص", successSub: "تم استلام الاستعلام", successTitle: "شكراً لك", successDesc: "سيقوم مدير التنظيم بمراجعة تفضيلاتك والتواصل معك في أقرب وقت.", submitAnother: "إرسال استعلام آخر"
    }
  };

  const t = content[language];
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={100}><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t.subtitle}</span></Reveal>
        <Reveal delay={300}><h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">{t.title}</h1></Reveal>
        <Reveal delay={500}><p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t.desc}</p></Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <Reveal delay={300}>
            <div className="space-y-8 bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-8 md:p-10 transition-colors">
              <div>
                <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t.directBureau}</span>
                <h3 className="text-xl font-normal tracking-editorial text-obsidian dark:text-gallery">{t.cairoDesk}</h3>
                <p className="text-graphite dark:text-ashGray text-sm font-light mt-2">{t.appointments}</p>
              </div>
              <div className="space-y-4 border-t border-graphite/10 dark:border-graphite/30 pt-6">
                <div><span className="text-xs uppercase tracking-editorial text-ashGray block">{t.emailLabel}</span><span className="text-sm font-mono text-obsidian dark:text-parchment">inquiries@aurajourneys.com</span></div>
                <div><span className="text-xs uppercase tracking-editorial text-ashGray block">{t.phoneLabel}</span><span className="text-sm font-mono text-obsidian dark:text-parchment">+20 (0) 2 555 0192</span></div>
                <div><span className="text-xs uppercase tracking-editorial text-ashGray block">{t.responseLabel}</span><span className="text-sm font-light text-graphite dark:text-ashGray">{t.responseValue}</span></div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={500}>
            <div className="bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-8 md:p-12 transition-colors">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <span className="text-xs font-mono uppercase tracking-caps text-ashGray">{t.successSub}</span>
                  <h3 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery">{t.successTitle}, {formData.name}.</h3>
                  <p className="text-graphite dark:text-ashGray text-sm font-light max-w-md mx-auto">{t.successDesc}</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-xs uppercase tracking-caps px-6 py-3 border border-obsidian dark:border-parchment text-obsidian dark:text-parchment hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all">{t.submitAnother}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ... (باقي الفورم كما هو تماماً، لم يتغير فيه شيء) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.nameLabel}</label><input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t.namePlaceholder} className="w-full bg-parchment dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 px-4 py-3 text-sm text-obsidian dark:text-gallery focus:outline-none focus:border-obsidian dark:focus:border-gallery font-light transition-colors" /></div>
                    <div className="space-y-2"><label className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.emailAddrLabel}</label><input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="omar@domain.com" className="w-full bg-parchment dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 px-4 py-3 text-sm text-obsidian dark:text-gallery focus:outline-none focus:border-obsidian dark:focus:border-gallery font-light transition-colors" /></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.destLabel}</label>
                      <select name="destination" value={formData.destination} onChange={handleChange} className="w-full bg-parchment dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 px-4 py-3 text-sm text-obsidian dark:text-gallery focus:outline-none focus:border-obsidian dark:focus:border-gallery font-light transition-colors">
                        <option value="Kyoto, Japan">Kyoto, Japan</option><option value="Dolomites, Italy">Dolomites, Italy</option><option value="Oaxaca, Mexico">Oaxaca, Mexico</option><option value="Bespoke">Bespoke / Custom Route</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.durLabel}</label>
                      <select name="duration" value={formData.duration} onChange={handleChange} className="w-full bg-parchment dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 px-4 py-3 text-sm text-obsidian dark:text-gallery focus:outline-none focus:border-obsidian dark:focus:border-gallery font-light transition-colors">
                        <option value="3-5 Days">3-5 Days</option><option value="5-7 Days">5-7 Days</option><option value="7-14 Days">7-14 Days</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t.notesLabel}</label>
                    <textarea name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder={t.notesPlaceholder} className="w-full bg-parchment dark:bg-charcoalDeep border border-graphite/20 dark:border-graphite/40 px-4 py-3 text-sm text-obsidian dark:text-gallery focus:outline-none focus:border-obsidian dark:focus:border-gallery font-light transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-obsidian dark:bg-gallery text-gallery dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite dark:hover:bg-parchment transition-all duration-300">{t.submitBtn}</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}