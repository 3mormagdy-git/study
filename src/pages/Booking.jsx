import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tripsById, getTripPrice } from 'data/travelData';
import { formatNumber, formatPrice } from 'utils/format';
import { useTripLists } from 'context/TripListsContext';
import Reveal from 'components/Reveal';
import SmartImage from 'components/SmartImage';

export default function Booking() {
  const { t, i18n } = useTranslation();
  const { bookingIds, addToBooking, removeFromBooking, clearBooking } = useTripLists();
  const location = useLocation();
  const navigate = useNavigate();

  // A guest pressed "Book Now", signed in, and landed here: add that trip once.
  const pendingId = location.state && location.state.addTripId;
  useEffect(() => {
    if (pendingId !== undefined && pendingId !== null) {
      addToBooking(pendingId);
      navigate('/booking', { replace: true, state: null });
    }
  }, [pendingId, addToBooking, navigate]);

  const trips = bookingIds.map((id) => tripsById.get(id)).filter(Boolean);

  // Sum numbers, never formatted strings. Trips without a valid price are
  // listed as "price on request" and left out of the total.
  const prices = trips.map(getTripPrice);
  const total = prices.reduce((sum, price) => (price === null ? sum : sum + price), 0);
  const unpricedCount = prices.filter((price) => price === null).length;

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t('booking.subtitle')}</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">{t('booking.title')}</h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t('booking.desc')}</p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {trips.length === 0 ? (
          <div className="border border-graphite/20 dark:border-graphite/40 bg-gallery dark:bg-obsidian/40 p-10 md:p-16 text-center space-y-4">
            <h2 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery">{t('booking.emptyTitle')}</h2>
            <p className="text-graphite dark:text-ashGray text-sm font-light max-w-md mx-auto">{t('booking.emptyDesc')}</p>
            <Link to="/trips" className="inline-flex items-center min-h-[48px] mt-4 px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all">
              {t('booking.browse')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ul className="lg:col-span-8 border-t border-obsidian/20 dark:border-graphite/40">
              {trips.map((trip) => {
                const place = t(`places.${trip.placeId}`);
                const price = getTripPrice(trip);
                return (
                  <li key={trip.id} className="flex gap-4 sm:gap-6 py-6 border-b border-obsidian/20 dark:border-graphite/40">
                    <Link to={`/trip/${trip.id}`} tabIndex={-1} aria-hidden="true" className="block w-24 sm:w-36 shrink-0 aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30">
                      <SmartImage src={trip.image} fallbackSrc={trip.fallbackImage} alt={place} className="object-cover w-full h-full" />
                    </Link>
                    <div className="flex flex-col justify-between min-w-0 flex-1">
                      <div>
                        <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">
                          {t(`countries.${trip.countryId}`)} &bull; {t('trips.duration')}
                        </span>
                        <Link to={`/trip/${trip.id}`} className="text-xl sm:text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery hover:text-graphite dark:hover:text-ashGray transition-colors break-words">
                          {place}
                        </Link>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mt-4">
                        <span className="font-mono text-xs uppercase tracking-caps text-obsidian dark:text-parchment">
                          {price !== null ? formatPrice(price, i18n.language) : t('trips.priceOnRequest')}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromBooking(trip.id)}
                          aria-label={t('booking.removeAria', { place })}
                          className="min-h-[44px] px-1 text-xs uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
                        >
                          {t('booking.remove')}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <aside className="lg:col-span-4 self-start border border-obsidian dark:border-graphite/40 bg-gallery dark:bg-obsidian/40 p-6 md:p-8 space-y-6" aria-label={t('booking.summary')}>
              <span className="text-xs uppercase tracking-caps text-ashGray font-mono block">{t('booking.summary')}</span>
              <div className="flex justify-between items-baseline gap-4 text-sm font-light text-graphite dark:text-ashGray">
                <span>{t('booking.selected')}</span>
                <span className="font-mono">{formatNumber(trips.length, i18n.language)}</span>
              </div>
              <div className="flex justify-between items-baseline gap-4 pt-4 border-t border-obsidian/20 dark:border-graphite/40">
                <span className="text-xs uppercase tracking-caps font-mono text-obsidian dark:text-parchment">{t('booking.total')}</span>
                <span className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery" aria-live="polite">{formatPrice(total, i18n.language)}</span>
              </div>
              <p className="text-ashGray text-xs font-light leading-relaxed">{t('booking.perTraveler')}</p>
              {unpricedCount > 0 && (
                <p className="text-ashGray text-xs font-light leading-relaxed">
                  {t('booking.unpriced', { number: formatNumber(unpricedCount, i18n.language) })}
                </p>
              )}
              <p className="text-graphite dark:text-ashGray text-xs font-light leading-relaxed">{t('booking.note')}</p>
              <div className="flex flex-col gap-3 pt-2">
                <Link to="/contact" className="min-h-[48px] inline-flex items-center justify-center px-6 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all text-center">
                  {t('booking.contactBtn')}
                </Link>
                <button
                  type="button"
                  onClick={clearBooking}
                  className="min-h-[44px] px-6 py-3 border border-obsidian dark:border-parchment text-obsidian dark:text-parchment text-xs uppercase tracking-caps hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all"
                >
                  {t('booking.clear')}
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
