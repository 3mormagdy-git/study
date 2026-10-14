import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tripsById } from 'data/travelData';
import { useTripLists } from 'context/TripListsContext';
import Reveal from 'components/Reveal';
import TripCard from 'components/TripCard';

export default function Favorites() {
  const { t } = useTranslation();
  const { favoriteIds } = useTripLists();

  // Ids that no longer exist in the data are skipped rather than crashing the page.
  const trips = favoriteIds.map((id) => tripsById.get(id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t('favorites.subtitle')}</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">{t('favorites.title')}</h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t('favorites.desc')}</p>
        </Reveal>
      </div>

      {trips.length === 0 ? (
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border border-graphite/20 dark:border-graphite/40 bg-gallery dark:bg-obsidian/40 p-10 md:p-16 text-center space-y-4">
            <h2 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery">{t('favorites.emptyTitle')}</h2>
            <p className="text-graphite dark:text-ashGray text-sm font-light max-w-md mx-auto">{t('favorites.emptyDesc')}</p>
            <Link to="/trips" className="inline-flex items-center min-h-[48px] mt-4 px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all">
              {t('favorites.browse')}
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {trips.map((trip, index) => (
            <Reveal key={trip.id} delay={(index % 3) * 150}>
              <TripCard trip={trip} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
