import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Toast from '../components/Toast';
import { useAuth } from '../context/AuthContext';

// قاعدة بيانات الرحلات الشاملة والمتطابقة مع جميع الوجهات
export const allTripsData = [
  // --- اليابان (Japan) ---
  { 
    id: 't1', countryId: 'japan', title: 'Kyoto Zen & Temple Sanctuary', category: 'Culture', location: 'Kyoto, Japan', price: 3400, duration: '7 Days', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', 
    description: 'Immerse in centuries of architectural mastery and tranquil Zen gardens across Kyoto.' 
  },
  { 
    id: 't2', countryId: 'japan', title: 'Tokyo Neon & Modern Architecture', category: 'Urban', location: 'Tokyo, Japan', price: 3800, duration: '6 Days', 
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80', 
    description: 'Experience futuristic skyscrapers, vibrant nightlife, and culinary excellence in Tokyo.' 
  },

  // --- إيطاليا (Italy) ---
  { 
    id: 't3', countryId: 'italy', title: 'Dolomites Alpine Trekking', category: 'Adventure', location: 'Dolomites, Italy', price: 2800, duration: '7 Days', 
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80', 
    description: 'Hike through breathtaking limestone peaks and peaceful alpine meadows in northern Italy.' 
  },
  { 
    id: 't4', countryId: 'italy', title: 'Venice Canals & Historic Artistry', category: 'Heritage', location: 'Venice, Italy', price: 3100, duration: '5 Days', 
    image: 'https://images.unsplash.com/photo-1514896856898-595dcfeccedf?auto=format&fit=crop&w=800&q=80', 
    description: 'Gondola rides through timeless canals and private tours of Renaissance art galleries.' 
  },

  // --- المكسيك (Mexico) ---
  { 
    id: 't5', countryId: 'mexico', title: 'Oaxaca Culinary & Craft Heritage', category: 'Culinary', location: 'Oaxaca, Mexico', price: 2500, duration: '5 Days', 
    image: 'https://images.unsplash.com/photo-1512813266014-4d8235e18285?auto=format&fit=crop&w=800&q=80', 
    description: 'Discover rich indigenous traditions, vibrant markets, and world-renowned gastronomy.' 
  },
  { 
    id: 't6', countryId: 'mexico', title: 'Yucatan Mayan Ruins & Cenotes', category: 'Exploration', location: 'Yucatan, Mexico', price: 2700, duration: '6 Days', 
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80', 
    description: 'Explore ancient Mayan pyramids and swim in crystal-clear underground cenotes.' 
  },

  // --- مصر (Egypt) ---
  { 
    id: 't7', countryId: 'egypt', title: 'Nile Royal Cruise & Valley of Kings', category: 'History', location: 'Luxor & Aswan, Egypt', price: 2100, duration: '6 Days', 
    image: 'https://images.unsplash.com/photo-1539785878358-ac7b575405ce?auto=format&fit=crop&w=800&q=80', 
    description: 'Sail the majestic Nile river and explore timeless pharaonic monuments.' 
  },
  { 
    id: 't8', countryId: 'egypt', title: 'Sinai Desert Stargazing & Dahab Oasis', category: 'Adventure', location: 'Dahab & St. Catherine, Egypt', price: 1800, duration: '5 Days', 
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80', 
    description: 'Bedouin dinner under the stars, mountain trekking, and Red Sea diving.' 
  },

  // --- سويسرا (Switzerland) ---
  { 
    id: 't9', countryId: 'switzerland', title: 'Zermatt Glacial Luxury Retreat', category: 'Alpine', location: 'Zermatt, Switzerland', price: 4200, duration: '7 Days', 
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80', 
    description: 'Enjoy pristine mountain air, luxury chalets, and views of the iconic Matterhorn.' 
  },

  // --- بالي (Bali) ---
  { 
    id: 't10', countryId: 'bali', title: 'Ubud Spiritual & Jungle Sanctuary', category: 'Wellness', location: 'Ubud, Bali', price: 2600, duration: '8 Days', 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', 
    description: 'Yoga retreats, sacred water temples, and lush tropical rainforest immersion.' 
  }
];

export default function Trips() {
  const { countryId } = useParams();
  const { user } = useAuth();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (user) {
      const saved = JSON.parse(localStorage.getItem(`favorites_${user.email || user.id}`)) || [];
      setFavorites(saved);
    }
  }, [user]);

  const toggleFavorite = (trip, e) => {
    e.preventDefault();
    if (!user) {
      setToast({ message: 'Please sign in to save favorites.', type: 'error' });
      return;
    }
    const exists = favorites.some((f) => f.id === trip.id);
    let updated;
    if (exists) {
      updated = favorites.filter((f) => f.id !== trip.id);
      setToast({ message: 'Removed from favorites', type: 'info' });
    } else {
      updated = [...favorites, trip];
      setToast({ message: 'Added to favorites successfully', type: 'success' });
    }
    setFavorites(updated);
    localStorage.setItem(`favorites_${user.email || user.id}`, JSON.stringify(updated));
  };

  let filtered = allTripsData.filter((trip) => {
    const matchesCountry = countryId ? trip.countryId === countryId : true;
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          trip.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  if (sortBy === 'low-high') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'high-low') filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 px-6 md:px-12 transition-colors duration-300">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-7xl mx-auto mb-12">
        <Reveal>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">Expedition Archive</span>
          <h1 className="text-4xl md:text-6xl font-light tracking-editorial">
            {countryId ? `Expeditions in ${countryId.toUpperCase()}` : 'All Curated Trips'}
          </h1>
        </Reveal>

        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search by title or destination..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 px-4 py-3 bg-white/50 dark:bg-charcoalDeep/50 border border-graphite/20 dark:border-graphite/40 text-sm focus:outline-none"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full md:w-auto px-4 py-3 bg-white/50 dark:bg-charcoalDeep/50 border border-graphite/20 dark:border-graphite/40 text-sm focus:outline-none"
          >
            <option value="default">Sort by: Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-24 border border-graphite/10 dark:border-graphite/30">
            <h3 className="text-2xl font-light mb-2">No expeditions found</h3>
            <p className="text-ashGray">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((trip, index) => {
              const isFav = favorites.some((f) => f.id === trip.id);
              return (
                <Reveal key={trip.id} delay={index * 100}>
                  <div className="group border border-graphite/10 dark:border-graphite/30 bg-white/40 dark:bg-charcoalDeep/40 p-4 flex flex-col justify-between">
                    <div>
                      <div className="shutter-card aspect-[4/3] rounded mb-4 overflow-hidden relative">
                        <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
                        
                        {/* زر المفضلة الهندسي الفاخر */}
                        <button
                          onClick={(e) => toggleFavorite(trip, e)}
                          className={`absolute top-3 right-3 z-10 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                            isFav 
                              ? 'bg-obsidian text-parchment dark:bg-parchment dark:text-obsidian shadow-lg scale-105' 
                              : 'bg-black/40 text-white hover:bg-black/70'
                          }`}
                          aria-label="Save to favorites"
                        >
                          {isFav ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                            </svg>
                          )}
                        </button>
                      </div>

                      <span className="text-xs uppercase tracking-editorial text-ashGray block mb-1">{trip.location}</span>
                      <h3 className="text-xl font-normal tracking-editorial mb-3">{trip.title}</h3>
                      <p className="text-xs text-graphite dark:text-ashGray mb-4 line-clamp-2">{trip.description}</p>
                    </div>

                    <div className="pt-4 border-t border-graphite/10 dark:border-graphite/30 flex items-center justify-between">
                      <span className="text-xs font-mono">{trip.duration}</span>
                      <span className="font-mono font-medium">${trip.price}</span>
                      <Link to={`/trip/${trip.id}`} className="px-4 py-2 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
                        View
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}