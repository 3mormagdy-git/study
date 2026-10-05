import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceOfferings = [
    {
      number: '01',
      title: 'Bespoke Itinerary Architecture',
      description: 'Completely tailored travel design built around your precise rhythms, preferences, and passions. From private access to historical sites to secluded sanctuary lodgings.',
      details: ['Deep discovery consultation', 'Multi-destination route curation', 'Exclusive private access arrangements'],
    },
    {
      number: '02',
      title: 'Private Expedition Leadership',
      description: 'Accompanied by seasoned local experts, historians, and naturalists who provide deep cultural context and ensure seamless, unhurried exploration.',
      details: ['Handpicked local guides & scholars', 'Private logistics & secure transit', 'Discreet, high-touch support'],
    },
    {
      number: '03',
      title: 'Sanctuary & Lodge Procurements',
      description: 'Access to the world’s most private boutique hotels, architectural villas, and eco-retreats that prioritize discretion, silence, and profound aesthetic beauty.',
      details: ['Preferred architectural stays', 'Private villa buyouts', 'Complimentary curated amenities'],
    },
  ];

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">
          Capabilities &bull; Expertise
        </span>
        <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">
          Our Services & Methodology
        </h1>
        <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">
          We approach travel design as an architectural discipline—balancing structure, space, and timing to create journeys of enduring resonance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {serviceOfferings.map((service, index) => (
          <div 
            key={service.number} 
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 ${
              index !== 0 ? 'border-t border-graphite/10 dark:border-graphite/30' : ''
            }`}
          >
            <div className="md:col-span-2">
              <span className="text-xs font-mono text-ashGray uppercase tracking-caps">
                Service {service.number}
              </span>
            </div>
            
            <div className="md:col-span-5 space-y-3">
              <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery">
                {service.title}
              </h3>
              <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="md:col-span-5 bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-6 md:p-8 space-y-4">
              <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-mono block">
                Included Elements
              </span>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-graphite dark:text-ashGray font-light flex items-center">
                    <span className="w-1.5 h-1.5 bg-obsidian dark:bg-parchment rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28">
        <div className="bg-obsidian dark:bg-gallery text-parchment dark:text-obsidian p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors duration-300">
          <div className="space-y-3 max-w-xl mb-8 md:mb-0">
            <span className="text-xs uppercase tracking-caps text-ashGray dark:text-graphite font-mono">Begin Your Consultation</span>
            <h2 className="text-3xl font-light tracking-editorial text-gallery dark:text-obsidian">Ready to craft your next expedition?</h2>
            <p className="text-ashGray dark:text-graphite text-sm font-light">Initiate a private dialogue with our travel architects.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-parchment dark:bg-obsidian text-obsidian dark:text-gallery text-xs uppercase tracking-caps hover:bg-gallery dark:hover:bg-graphite transition-all duration-300"
          >
            Start an Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
}