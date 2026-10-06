import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { tripsData, countriesData } from '../data/travelData';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن

export default function Trips() {
  const { language } = useLanguage();
  const { countryId } = useParams();

  const filteredTrips = countryId 
    ? tripsData.filter(trip => trip.countryId.toLowerCase() === countryId.toLowerCase()) 
    : tripsData;

  const currentCountry = countryId 
    ? countriesData.find(c => c.id === countryId.toLowerCase()) 
    : null;

  const t = {
    EN: {
      subtitle: "Curated Expeditions",
      title: currentCountry ? `Trips in ${currentCountry.nameEn}` : "All Trips",
      desc: "Immerse yourself in our meticulously designed travel architectures.",
      viewDetails: "Request Itinerary"
    },
    AR: {
      subtitle: "رحلات مختارة",
      title: currentCountry ? `الرحلات في ${currentCountry.nameAr}` : "جميع الرحلات",
      desc: "انغمس في تصاميم رحلاتنا المصممة بدقة وعناية.",
      viewDetails: "طلب مسار الرحلة"
    }
  }[language];

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t.subtitle}</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">
            {t.title}
          </h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t.desc}</p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredTrips.map((trip, index) => (
          <Reveal key={trip.id} delay={index * 150}>
            <div className="group cursor-pointer flex flex-col justify-between h-full">
              <div>
                <div className="aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-5 relative">
                  <img src={trip.image} alt={trip.titleEn} className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <span className="absolute top-4 right-4 bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-sm text-xs font-mono px-3 py-1 uppercase tracking-editorial text-obsidian dark:text-parchment">
                    {language === 'EN' ? trip.durationEn : trip.durationAr}
                  </span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase tracking-editorial text-ashGray">
                    {language === 'EN' ? trip.countryEn : trip.countryAr}
                  </span>
                </div>
                <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery mb-2">
                  {language === 'EN' ? trip.titleEn : trip.titleAr}
                </h3>
                <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed mb-4">
                  {language === 'EN' ? trip.descEn : trip.descAr}
                </p>
              </div>
              <div className="pt-2 border-t border-graphite/10 dark:border-graphite/30 flex justify-between items-center mt-auto">
                <Link to={`/trip/${trip.id}`} className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium group-hover:text-graphite transition-colors">
                  {t.viewDetails} &rarr;
                </Link>
                <span className="text-xs font-mono text-ashGray">Ref. 0{trip.id}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}