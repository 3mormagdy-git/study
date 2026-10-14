import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'context/AuthContext';
import { useTripLists } from 'context/TripListsContext';

// Guests are sent to sign in first; the chosen trip is carried through the
// redirect and added when the Booking page opens. Selecting is not reserving.
export default function BookNowButton({ tripId, className = '' }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { isBooked, addToBooking } = useTripLists();
  const navigate = useNavigate();

  const booked = Boolean(user) && isBooked(tripId);

  const handleClick = () => {
    if (!user) {
      navigate('/signin', { state: { redirect: { to: '/booking', state: { addTripId: tripId } } } });
      return;
    }
    addToBooking(tripId); // idempotent: repeated clicks never duplicate a trip
    navigate('/booking');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`min-h-[44px] px-6 py-3 text-xs uppercase tracking-caps transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-obsidian dark:focus-visible:ring-parchment focus-visible:ring-offset-2 ${
        booked
          ? 'border border-obsidian text-obsidian hover:bg-obsidian hover:text-gallery dark:border-parchment dark:text-parchment dark:hover:bg-parchment dark:hover:text-obsidian'
          : 'bg-obsidian text-gallery hover:bg-graphite dark:bg-parchment dark:text-obsidian dark:hover:bg-gallery'
      } ${className}`}
    >
      {booked ? t('trips.viewBooking') : t('trips.bookNow')}
    </button>
  );
}
