import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCountrySummary } from 'data/travelData';
import { formatNumber, formatPrice } from 'utils/format';
import SmartImage from 'components/SmartImage';

// One card used by both the Home page and the Destinations page.
// Every card links to /trips/<countryId>, the country-filtered trips list.
export default function DestinationCard({ country, featured = false }) {
  const { t, i18n } = useTranslation();
  const name = t(`countries.${country.id}`);
  const { count, fromPrice } = getCountrySummary(country.id);
  const badge = featured ? t('destinationCard.featured') : country.isNew ? t('destinationCard.new') : null;

  return (
    <Link to={`/trips/${country.id}`} className="group flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-5">
        <SmartImage
          src={country.image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
        />
        {badge && (
          <span className="absolute top-3 start-3 bg-gallery text-obsidian border border-obsidian rounded-[5px] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-caps">
            &bull; {badge}
          </span>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-medium tracking-editorial text-obsidian dark:text-gallery mb-2">{name}</h3>
      <div className="flex justify-between items-center gap-3 font-mono text-xs uppercase tracking-caps">
        <span className="text-ashGray">{t('destinationCard.tripsCount', { number: formatNumber(count, i18n.language) })}</span>
        {fromPrice !== null && (
          <span className="text-obsidian dark:text-parchment">
            {t('trips.from', { price: formatPrice(fromPrice, i18n.language) })}
          </span>
        )}
      </div>
      <div className="mt-auto pt-4">
        <span className="block pt-3 border-t border-obsidian/20 dark:border-graphite/40 text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium group-hover:text-graphite dark:group-hover:text-ashGray transition-colors">
          {t('destinationCard.view', { number: formatNumber(count, i18n.language) })}
        </span>
      </div>
    </Link>
  );
}
