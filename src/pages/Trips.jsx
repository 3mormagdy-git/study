import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tripsData, countriesData } from 'data/travelData';
import Reveal from 'components/Reveal';
import TripCard from 'components/TripCard';

export default function Trips() {
  const { t } = useTranslation();
  const { countryId } = useParams();

  const filteredTrips = countryId
    ? tripsData.filter(trip => trip.countryId.toLowerCase() === countryId.toLowerCase())
    : tripsData;

  const currentCountry = countryId
    ? countriesData.find(c => c.id === countryId.toLowerCase())
    : null;

  // دولة غير موجودة في الرابط: أعد المستخدم لقائمة الوجهات بدل عرض صفحة فارغة
  if (countryId && !currentCountry) {
    return <Navigate to="/destinations" replace />;
  }

  const title = currentCountry
    ? t('trips.titleCountry', { country: t(`countries.${currentCountry.id}`) })
    : t('trips.titleAll');

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t('trips.subtitle')}</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t('trips.desc')}</p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {filteredTrips.map((trip, index) => (
          /* the delay repeats per row so late cards never wait several seconds */
          <Reveal key={trip.id} delay={(index % 3) * 150}>
            <TripCard trip={trip} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
