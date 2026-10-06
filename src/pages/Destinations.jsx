import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { countriesData } from '../data/travelData';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن

export default function Destinations() {
  const { language } = useLanguage();

  const t = {
    EN: {
      subtitle: "Global Portfolio • Catalog",
      title: "Destination Collection",
      desc: "Explore our handpicked selection of exactly 10 global sanctuaries, designed for travelers seeking genuine connection.",
      exploreBtn: "View 5 Exclusive Trips \u2192"
    },
    AR: {
      subtitle: "محفظة عالمية • كتالوج",
      title: "مجموعة الوجهات",
      desc: "استكشف مجموعتنا المختارة بعناية من 10 ملاذات عالمية، مصممة للمسافرين الباحثين عن تواصل حقيقي.",
      exploreBtn: "عرض 5 رحلات حصرية \u2190"
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
        {countriesData.map((country, index) => (
          /* إضافة تأخير متصاعد لكل بطاقة بناءً على ترتيبها */
          <Reveal key={country.id} delay={index * 150}>
            <Link to={`/trips/${country.id}`} className="group cursor-pointer flex flex-col justify-between block h-full">
              <div>
                <div className="aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-5 relative">
                  <img src={country.image} alt={country.nameEn} className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery mb-2">
                  {language === 'EN' ? country.nameEn : country.nameAr}
                </h3>
              </div>
              <div className="pt-2 border-t border-graphite/10 dark:border-graphite/30 flex justify-between items-center mt-2">
                <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium group-hover:text-graphite transition-colors">
                  {t.exploreBtn}
                </span>
                <span className="text-xs font-mono text-ashGray">0{index + 1}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}