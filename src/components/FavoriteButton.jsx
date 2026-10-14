import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'context/AuthContext';
import { useTripLists } from 'context/TripListsContext';
import { HeartIcon } from 'components/Icons';

// Round hairline button (same language as DESIGN.md's back-to-top control).
// Inactive: white with an Obsidian outline. Active: inverted Obsidian.
export default function FavoriteButton({ tripId, place, className = '' }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { isFavorite, addFavorite, toggleFavorite } = useTripLists();
  const navigate = useNavigate();
  const location = useLocation();

  const active = Boolean(user) && isFavorite(tripId);
  const pendingId = location.state && location.state.addFavoriteId;

  // Guest clicked the heart, signed in, and came back: finish the action once.
  useEffect(() => {
    if (user && pendingId === tripId) {
      addFavorite(tripId);
      navigate(location.pathname + location.search, { replace: true, state: null });
    }
  }, [user, pendingId, tripId, addFavorite, navigate, location.pathname, location.search]);

  const handleClick = () => {
    if (!user) {
      navigate('/signin', {
        state: { redirect: { to: location.pathname + location.search, state: { addFavoriteId: tripId } } },
      });
      return;
    }
    toggleFavorite(tripId);
  };

  const label = t(active ? 'trips.removeFavorite' : 'trips.addFavorite', { place });

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={`w-11 h-11 inline-flex items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-obsidian dark:focus-visible:ring-parchment focus-visible:ring-offset-2 ${
        active
          ? 'bg-obsidian text-gallery border-obsidian dark:bg-parchment dark:text-obsidian dark:border-parchment'
          : 'bg-gallery text-obsidian border-obsidian hover:bg-obsidian hover:text-gallery dark:bg-charcoalDeep dark:text-parchment dark:border-parchment dark:hover:bg-parchment dark:hover:text-obsidian'
      } ${className}`}
    >
      <HeartIcon filled={active} />
    </button>
  );
}
