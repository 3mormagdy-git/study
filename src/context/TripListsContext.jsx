import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { tripsById } from 'data/travelData';

// Both lists are stored as { [userEmail]: [tripId, ...] } so every account
// keeps its own favorites and booking selection on this device.
const FAVORITES_KEY = 'aura_favorites';
const BOOKING_KEY = 'aura_booking';

function readStore(key) {
  try {
    const raw = JSON.parse(localStorage.getItem(key));
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
    const clean = {};
    Object.keys(raw).forEach((owner) => {
      if (!Array.isArray(raw[owner])) return;
      // Drop duplicates, non-numbers and ids that no longer exist.
      clean[owner] = [...new Set(raw[owner].map(Number))].filter((id) => tripsById.has(id));
    });
    return clean;
  } catch {
    return {};
  }
}

function writeStore(key, store) {
  try {
    localStorage.setItem(key, JSON.stringify(store));
  } catch {
    // Storage unavailable (e.g. private mode): the list still works for this session.
  }
}

function useUserIdList(storageKey, owner) {
  const [store, setStore] = useState(() => readStore(storageKey));

  // Keep several open tabs in sync. Writing happens in `update`, not in an
  // effect, so receiving this event never triggers another write.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === storageKey) setStore(readStore(storageKey));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [storageKey]);

  const ids = useMemo(() => (owner && store[owner]) || [], [store, owner]);

  const update = useCallback(
    (change) => {
      if (!owner) return;
      setStore((prev) => {
        const current = prev[owner] || [];
        const nextIds = change(current);
        if (nextIds === current) return prev;
        const next = { ...prev, [owner]: nextIds };
        writeStore(storageKey, next);
        return next;
      });
    },
    [owner, storageKey]
  );

  return [ids, update];
}

const TripListsContext = createContext(null);

export function TripListsProvider({ children }) {
  const { user } = useAuth();
  const owner = user && typeof user.email === 'string' && user.email.trim()
    ? user.email.trim().toLowerCase()
    : null;

  const [favoriteIds, updateFavorites] = useUserIdList(FAVORITES_KEY, owner);
  const [bookingIds, updateBooking] = useUserIdList(BOOKING_KEY, owner);

  const value = useMemo(() => {
    const normalize = (id) => {
      const numeric = Number(id);
      return tripsById.has(numeric) ? numeric : null;
    };
    const add = (id) => (list) => (list.includes(id) ? list : [...list, id]);
    const remove = (id) => (list) => (list.includes(id) ? list.filter((item) => item !== id) : list);

    return {
      favoriteIds,
      isFavorite: (id) => favoriteIds.includes(Number(id)),
      addFavorite: (id) => { const n = normalize(id); if (n !== null) updateFavorites(add(n)); },
      removeFavorite: (id) => { const n = normalize(id); if (n !== null) updateFavorites(remove(n)); },
      toggleFavorite: (id) => {
        const n = normalize(id);
        if (n === null) return;
        updateFavorites((list) => (list.includes(n) ? remove(n)(list) : add(n)(list)));
      },

      bookingIds,
      isBooked: (id) => bookingIds.includes(Number(id)),
      addToBooking: (id) => { const n = normalize(id); if (n !== null) updateBooking(add(n)); },
      removeFromBooking: (id) => { const n = normalize(id); if (n !== null) updateBooking(remove(n)); },
      clearBooking: () => updateBooking((list) => (list.length ? [] : list)),
    };
  }, [favoriteIds, bookingIds, updateFavorites, updateBooking]);

  return <TripListsContext.Provider value={value}>{children}</TripListsContext.Provider>;
}

export function useTripLists() {
  const context = useContext(TripListsContext);
  if (!context) throw new Error('useTripLists must be used inside TripListsProvider');
  return context;
}
