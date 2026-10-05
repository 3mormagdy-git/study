import React from 'react';

export default function About() {
  const principles = [
    {
      number: 'I',
      title: 'Intentional Silence',
      description: 'We believe true luxury is found in space, quietude, and the absence of noise. Every itinerary is paced to allow for reflection and genuine absorption.',
    },
    {
      number: 'II',
      title: 'Architectural Rhythms',
      description: 'We design journeys with the balance and structure of architectural masterworks—harmonizing transit, exploration, and absolute rest.',
    },
    {
      number: 'III',
      title: 'Cultural Reverence',
      description: 'We prioritize deep, respectful engagement with local artisans, historians, and custodians of heritage, ensuring our presence supports local longevity.',
    },
  ];

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">
          Manifesto &bull; Philosophy
        </span>
        <h1 className="text-4xl md:text-6xl font-light tracking-editorial mb-6 max-w-3xl leading-tight text-obsidian dark:text-gallery">
          Designing travel as an art form of deliberate pacing.
        </h1>
        <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed text-lg">
          Aura Journeys was founded on a singular premise: that modern travel has grown overly hurried, loud, and formulaic. We exist to restore depth, beauty, and privacy to the art of exploration.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="aspect-[21/9] overflow-hidden bg-graphite/10 dark:bg-graphite/30 relative">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
            alt="Philosophy and Nature"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-6 left-6 bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-sm px-5 py-2.5 text-xs uppercase tracking-editorial font-mono text-obsidian dark:text-parchment">
            Alpine Solitude &bull; Field Study
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="border-t border-graphite/10 dark:border-graphite/30 pt-16">
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-12">
            Guiding Tenets
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((principle) => (
              <div key={principle.number} className="space-y-4">
                <span className="text-xs font-mono text-ashGray uppercase tracking-caps block">
                  Tenet {principle.number}
                </span>
                <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery">
                  {principle.title}
                </h3>
                <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 border-t border-graphite/10 dark:border-graphite/30 pt-20">
        <span className="text-xs uppercase tracking-caps text-ashGray font-mono">Editorial Note</span>
        <blockquote className="text-2xl md:text-3xl font-light tracking-editorial leading-relaxed text-obsidian dark:text-gallery">
          "We do not measure the success of a journey by the number of sights seen, but by the quiet resonance left within the traveler long after returning home."
        </blockquote>
        <div className="pt-4">
          <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium block">The Curatorial Board</span>
          <span className="text-xs font-mono text-ashGray">Aura Journeys</span>
        </div>
      </div>
    </div>
  );
}