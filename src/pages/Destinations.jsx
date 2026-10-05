import React, { useState } from 'react';

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sanctuary', 'Alpine', 'Heritage', 'Coastal'];

  const destinationsList = [
    {
      id: 1,
      title: 'Kyoto, Japan',
      category: 'Sanctuary',
      region: 'East Asia',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
      description: 'Ancient bamboo groves, meditative Zen gardens, and preserved traditional machiya architecture.',
      duration: '7 Days',
    },
    {
      id: 2,
      title: 'Dolomites, Italy',
      category: 'Alpine',
      region: 'Europe',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
      description: 'Dramatic limestone spires, high-altitude alpine meadows, and secluded mountain lodges.',
      duration: '6 Days',
    },
    {
      id: 3,
      title: 'Oaxaca, Mexico',
      category: 'Heritage',
      region: 'Latin America',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKKAZocEd4RMQYE-cMJhoF29jR3USPUxDK07j3JXm8w&s=10',
      description: 'A vibrant tapestry of indigenous textiles, culinary mastery, and historic colonial streets.',
      duration: '5 Days',
    },
    {
      id: 4,
      title: 'Aegean Coast, Greece',
      category: 'Coastal',
      region: 'Mediterranean',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      description: 'Secluded crystalline coves, whitewashed cliffside sanctuaries, and timeless maritime heritage.',
      duration: '8 Days',
    },
  ];

  const filteredDestinations = selectedCategory === 'All' 
    ? destinationsList 
    : destinationsList.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">
          Global Portfolio &bull; Catalog
        </span>
        <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">
          Destination Collection
        </h1>
        <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">
          Explore our handpicked selection of global sanctuaries, designed for travelers seeking genuine connection with local landscapes and cultures.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mt-10 border-b border-graphite/10 dark:border-graphite/30 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs uppercase tracking-caps px-5 py-2.5 transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian border-obsidian dark:border-parchment'
                  : 'bg-transparent text-graphite dark:text-ashGray border-graphite/20 dark:border-graphite/40 hover:border-obsidian dark:hover:border-gallery'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredDestinations.map((dest) => (
          <div key={dest.id} className="group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-5 relative">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-sm text-xs font-mono px-3 py-1 uppercase tracking-editorial text-obsidian dark:text-parchment">
                  {dest.duration}
                </span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs uppercase tracking-editorial text-ashGray">
                  {dest.region} &bull; {dest.category}
                </span>
              </div>
              <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery mb-2">
                {dest.title}
              </h3>
              <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed mb-4">
                {dest.description}
              </p>
            </div>
            <div className="pt-2 border-t border-graphite/10 dark:border-graphite/30 flex justify-between items-center">
              <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium group-hover:text-graphite transition-colors">
                Request Itinerary &rarr;
              </span>
              <span className="text-xs font-mono text-ashGray">Ref. 0{dest.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}