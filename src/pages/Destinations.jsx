import React from 'react';
import { useTranslation } from 'react-i18next';
import { countriesData } from 'data/travelData';
import Reveal from 'components/Reveal';
import DestinationCard from 'components/DestinationCard';

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

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {countriesData.map((country, index) => (
          <Reveal key={country.id} delay={(index % 3) * 150}>
            <DestinationCard country={country} featured={index === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
