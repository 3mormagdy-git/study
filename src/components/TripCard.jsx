import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTripPrice } from 'data/travelData';
import { formatPrice } from 'utils/format';
import SmartImage from 'components/SmartImage';
import FavoriteButton from 'components/FavoriteButton';
import BookNowButton from 'components/BookNowButton';

const badgeClass =
  'absolute top-3 start-3 bg-gallery text-obsidian border border-obsidian rounded-[5px] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-caps pointer-events-none';

// Used by the Trips and Favorites pages. The image/title links and the two
// action buttons are siblings, so no interactive element is nested in another.
export default function TripCard({ trip }) {
  const { t, i18n } = useTranslation();
  const place = t(`places.${trip.placeId}`);
  const country = t(`countries.${trip.countryId}`);
  const price = getTripPrice(trip);
  const detailsPath = `/trip/${trip.id}`;

  return (
    <article className="group flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-5">
        <Link to={detailsPath} tabIndex={-1} aria-hidden="true" className="block w-full h-full">
          <SmartImage
            src={trip.image}
            fallbackSrc={trip.fallbackImage}
            alt={place}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
          />
        </Link>
        <span className={badgeClass}>&bull; {t('trips.duration')}</span>
        <FavoriteButton tripId={trip.id} place={place} className="absolute top-3 end-3" />
      </div>

      <Link to={detailsPath} className="block flex-grow">
        <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{country}</span>
        <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery mb-2">{place}</h3>
        <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed mb-4">
          {t('trips.description', { place })}
        </p>
      </Link>

      <div className="pt-3 border-t border-obsidian/20 dark:border-graphite/40">
        <div className="flex justify-between items-center gap-3 mb-4 font-mono text-xs uppercase tracking-caps">
          <span className="text-obsidian dark:text-parchment">
            {price !== null ? t('trips.from', { price: formatPrice(price, i18n.language) }) : t('trips.priceOnRequest')}
          </span>
          <span className="text-ashGray">{t('trips.ref')} {String(trip.id).padStart(2, '0')}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={detailsPath}
            className="min-h-[44px] flex-1 inline-flex items-center justify-center px-4 py-3 border border-obsidian dark:border-parchment text-obsidian dark:text-parchment text-xs uppercase tracking-caps text-center hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all duration-300"
          >
            {t('trips.viewDetails')}
          </Link>
          <BookNowButton tripId={trip.id} className="flex-1" />
        </div>
      </div>
    </article>
  );
}
