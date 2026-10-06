import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { tripsData } from '../data/travelData';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن

export default function TripDetails() {
  const { language } = useLanguage();
  const { tripId } = useParams();
  const navigate = useNavigate();

  const trip = tripsData.find((t) => t.id.toString() === tripId);

  useEffect(() => {
    if (!trip) navigate('/trips');
  }, [trip, navigate]);

  if (!trip) return null;

  const t = {
    EN: { back: "← Back to Trips", duration: "Duration", location: "Location", reference: "Reference Code", overview: "Expedition Overview", highlights: "Curated Highlights", highlightsList: [ "Private architectural tours with local historians.", "Exclusive access to secluded cultural sanctuaries.", "Bespoke dining experiences featuring regional gastronomy.", "Seamless private transit and dedicated concierge." ], ctaSub: "Begin Your Journey", ctaTitle: "Request This Itinerary", ctaBtn: "Start an Inquiry" },
    AR: { back: "← العودة إلى الرحلات", duration: "المدة", location: "الموقع", reference: "رمز الرحلة", overview: "نظرة عامة على الرحلة", highlights: "أبرز المعالم المختارة", highlightsList: [ "جولات معمارية خاصة مع مؤرخين محليين.", "وصول حصري إلى الملاذات الثقافية المنعزلة.", "تجارب طعام مخصصة تتميز بفن الطهو الإقليمي.", "تنقلات خاصة سلسة وخدمة كونسيرج مخصصة." ], ctaSub: "ابدأ رحلتك", ctaTitle: "طلب مسار هذه الرحلة", ctaBtn: "ابدأ استعلاماً" }
  }[language];

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Reveal delay={100}>
          <Link to={`/trips/${trip.countryId}`} className="text-xs uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
            {t.back}
          </Link>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <Reveal delay={200}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-3">
            {language === 'EN' ? trip.countryEn : trip.countryAr} &bull; {language === 'EN' ? trip.durationEn : trip.durationAr}
          </span>
        </Reveal>
        <Reveal delay={400}>
          <h1 className="text-4xl md:text-6xl font-light tracking-editorial text-obsidian dark:text-gallery">
            {language === 'EN' ? trip.titleEn : trip.titleAr}
          </h1>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={500}>
          <div className="w-full aspect-[21/9] md:aspect-[21/9] overflow-hidden bg-graphite/10 dark:bg-graphite/30">
            <img src={trip.image} alt={language === 'EN' ? trip.titleEn : trip.titleAr} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <Reveal delay={300}>
            <div className="space-y-8">
              <div className="border-t border-graphite/20 dark:border-graphite/40 pt-4"><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t.location}</span><span className="text-sm font-medium text-obsidian dark:text-gallery">{language === 'EN' ? trip.countryEn : trip.countryAr}</span></div>
              <div className="border-t border-graphite/20 dark:border-graphite/40 pt-4"><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t.duration}</span><span className="text-sm font-medium text-obsidian dark:text-gallery">{language === 'EN' ? trip.durationEn : trip.durationAr}</span></div>
              <div className="border-t border-graphite/20 dark:border-graphite/40 pt-4"><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t.reference}</span><span className="text-sm font-mono text-obsidian dark:text-gallery">AJ-{trip.id.toString().padStart(4, '0')}</span></div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8 space-y-12">
          <Reveal delay={400}>
            <section>
              <h2 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery mb-4">{t.overview}</h2>
              <p className="text-graphite dark:text-ashGray text-lg font-light leading-relaxed">{language === 'EN' ? trip.descEn : trip.descAr}</p>
            </section>
          </Reveal>

          <Reveal delay={600}>
            <section>
              <h2 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery mb-4">{t.highlights}</h2>
              <ul className="space-y-4">
                {t.highlightsList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`w-1.5 h-1.5 mt-2 bg-obsidian dark:bg-parchment rounded-full shrink-0 ${language === 'AR' ? 'ml-4' : 'mr-4'}`}></span>
                    <span className="text-graphite dark:text-ashGray font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>

      <Reveal delay={400}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
          <div className="bg-obsidian dark:bg-gallery text-parchment dark:text-obsidian p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors duration-300">
            <div className="space-y-2 max-w-xl mb-8 md:mb-0">
              <span className="text-xs uppercase tracking-caps text-ashGray dark:text-graphite font-mono">{t.ctaSub}</span>
              <h2 className="text-3xl font-light tracking-editorial text-gallery dark:text-obsidian">{t.ctaTitle}</h2>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-parchment dark:bg-obsidian text-obsidian dark:text-gallery text-xs uppercase tracking-caps hover:bg-gallery dark:hover:bg-graphite transition-all duration-300">
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}