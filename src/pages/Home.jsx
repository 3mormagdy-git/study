import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredDestinations = [
    {
      id: 1,
      title: 'Kyoto, Japan',
      category: 'Sanctuary & Tradition',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
      duration: '7 Days',
    },
    {
      id: 2,
      title: 'Dolomites, Italy',
      category: 'Alpine Solitude',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
      duration: '6 Days',
    },
    {
      id: 3,
      title: 'Oaxaca, Mexico',
      category: 'Culinary & Heritage',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKKAZocEd4RMQYE-cMJhoF29jR3USPUxDK07j3JXm8w&s=10',
      duration: '5 Days',
    },
  ];

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono">
            Curated Expeditions &bull; Vol. 04
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-editorial leading-tight text-obsidian dark:text-gallery">
            Travel designed for the curious mind and quiet soul.
          </h1>
          <p className="text-graphite dark:text-ashGray text-lg max-w-xl font-light leading-relaxed">
            We curate bespoke journeys to the world’s most profound landscapes and cultural sanctuaries. Eschewing the ordinary for the extraordinary.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <Link
              to="/destinations"
              className="px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all duration-300"
            >
              Explore Destinations
            </Link>
            <Link
              to="/about"
              className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment border-b border-obsidian dark:border-parchment pb-1 hover:text-graphite transition-all"
            >
              Our Philosophy &rarr;
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
              alt="Editorial Travel"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-editorial text-obsidian dark:text-parchment">
              Aegean Coast, Greece
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-graphite/10 dark:border-graphite/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono">Selected Itineraries</span>
            <h2 className="text-3xl font-light tracking-editorial mt-2 text-obsidian dark:text-gallery">Curated Horizons</h2>
          </div>
          <Link
            to="/destinations"
            className="mt-4 md:mt-0 text-xs uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
          >
            View All Destinations &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
            <div key={dest.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-4">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs uppercase tracking-editorial text-ashGray block mb-1">
                    {dest.category}
                  </span>
                  <h3 className="text-xl font-normal tracking-editorial text-obsidian dark:text-gallery">
                    {dest.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-graphite dark:text-ashGray border border-graphite/20 dark:border-graphite/40 px-2.5 py-1">
                  {dest.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}