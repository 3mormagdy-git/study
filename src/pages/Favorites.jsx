import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Reveal from '../components/Reveal';
import Toast from '../components/Toast';

export default function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (user) {
      const savedFavs = JSON.parse(localStorage.getItem(`favorites_${user.email || user.id}`)) || [];
      setFavorites(savedFavs);
    }
  }, [user]);

  const removeFavorite = (tripId) => {
    if (!user) return;
    const updated = favorites.filter((trip) => trip.id !== tripId);
    setFavorites(updated);
    localStorage.setItem(`favorites_${user.email || user.id}`, JSON.stringify(updated));
    setToast({ message: 'Removed from favorites', type: 'info' });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 px-6 text-center">
        <h1 className="text-3xl font-light tracking-editorial mb-4">Please Sign In</h1>
        <p className="text-ashGray mb-6">You need to sign in to view your favorite journeys.</p>
        <Link to="/signin" className="px-6 py-3 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="max-w-7xl mx-auto mb-12">
        <Reveal>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">Saved Collection</span>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial">My Favorites</h1>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto">
        {favorites.length === 0 ? (
          <div className="text-center py-24 border border-graphite/10 dark:border-graphite/30">
            <h3 className="text-2xl font-light mb-4">No favorite journeys saved yet.</h3>
            <p className="text-ashGray mb-8">Explore our global atlas and heart your preferred expeditions.</p>
            <Link to="/trips" className="px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
              Explore All Trips
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {favorites.map((trip) => (
              <div key={trip.id} className="group relative border border-graphite/10 dark:border-graphite/30 bg-white/50 dark:bg-charcoalDeep/50 p-4">
                <div className="shutter-card aspect-[4/3] overflow-hidden mb-4 relative">
                  <img src={trip.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'} alt={trip.title} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => removeFavorite(trip.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    ❤️
                  </button>
                </div>
                <h3 className="text-xl font-normal tracking-editorial mb-2">{trip.title}</h3>
                <div className="flex justify-between items-center text-xs font-mono text-ashGray mb-4">
                  <span>{trip.duration}</span>
                  <span className="text-obsidian dark:text-gallery font-bold">{trip.price}</span>
                </div>
                <Link to={`/trips`} className="block w-full py-3 text-center bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}