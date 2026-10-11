import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { countriesData } from '../data/travelData';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن

export default function Destinations() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t('destinations.subtitle')}</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">
            {t('destinations.title')}
          </h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t('destinations.desc')}</p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {countriesData.map((country, index) => {
          const countryName = t(`countries.${country.id}`);
          return (
            /* إضافة تأخير متصاعد لكل بطاقة داخل الصف الواحد */
            <Reveal key={country.id} delay={(index % 3) * 150}>
              <Link to={`/trips/${country.id}`} className="group flex flex-col justify-between h-full">
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-5 relative">
                    <img src={country.image} alt={countryName} loading="lazy" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  </div>
                  <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery mb-2">
                    {countryName}
                  </h3>
                </div>
                <div className="pt-2 border-t border-graphite/10 dark:border-graphite/30 flex justify-between items-center mt-2">
                  <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium group-hover:text-graphite transition-colors">
                    {t('destinations.exploreBtn')}
                  </span>
                  <span className="text-xs font-mono text-ashGray">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
