import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from 'components/Reveal'; // تأكد من المسار حسب مشروعك

export default function About() {
  const { t } = useTranslation();
  
  const principlesData = t('about.principles', { returnObjects: true });
  const principles = Array.isArray(principlesData) ? principlesData : [];

  const statsData = t('about.statsList', { returnObjects: true });
  const stats = Array.isArray(statsData) ? statsData : [];

  const teamData = t('about.teamList', { returnObjects: true });
  const team = Array.isArray(teamData) ? teamData : [];
  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">
            {t('about.subtitle')}
          </span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-6xl font-light tracking-editorial mb-6 max-w-3xl leading-tight text-obsidian dark:text-gallery">
            {t('about.title')}
          </h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed text-lg">
            {t('about.desc')}
          </p>
        </Reveal>
      </div>

      {/* Main Image */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <Reveal delay={400}>
          <div className="aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-graphite/10 dark:bg-graphite/30 relative">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80" 
              alt={t('about.imgAlt')} 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" 
            />
            <div className="absolute bottom-6 start-6 bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-sm px-5 py-2.5 text-xs uppercase tracking-editorial font-mono text-obsidian dark:text-parchment">
              {t('about.imgCaption')}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Principles Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="border-t border-graphite/10 dark:border-graphite/30 pt-16">
          <Reveal delay={200}>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-12">
              {t('about.tenetTitle')}
            </span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((principle, index) => (
              <Reveal key={principle.number || index} delay={(index * 200) + 300}>
                <div className="space-y-4">
                  <span className="text-xs font-mono text-ashGray uppercase tracking-caps block">
                    {t('about.tenet')} {principle.number}
                  </span>
                  <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery">
                    {principle.title}
                  </h3>
                  <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {stats.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28 border-t border-graphite/10 dark:border-graphite/30 pt-16">
          <Reveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <Reveal key={index} delay={index * 100 + 300}>
                  <div className="space-y-2">
                    <span className="text-4xl md:text-5xl font-light tracking-editorial text-obsidian dark:text-gallery">
                      {stat.value}
                    </span>
                    <span className="text-xs font-mono text-ashGray uppercase tracking-caps block">
                      {stat.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      )}

      {/* Team Section */}
      {team.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28 border-t border-graphite/10 dark:border-graphite/30 pt-16">
          <Reveal delay={200}>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-12">
              {t('about.teamTitle')}
            </span>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <Reveal key={index} delay={index * 200 + 300}>
                <div className="space-y-5">
                  <div className="aspect-[3/4] overflow-hidden bg-graphite/10 dark:bg-graphite/30 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-ashGray uppercase tracking-caps mt-2">
                      {member.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Quote Section */}
      <Reveal delay={300}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 border-t border-graphite/10 dark:border-graphite/30 pt-20">
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block">
            {t('about.noteLabel')}
          </span>
          <blockquote className="text-2xl md:text-3xl font-light tracking-editorial leading-relaxed text-obsidian dark:text-gallery">
            {t('about.quote')}
          </blockquote>
          <div className="pt-4">
            <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-medium block mb-1">
              {t('about.board')}
            </span>
            <span className="text-xs font-mono text-ashGray">
              Aura Journeys
            </span>
          </div>
        </div>
      </Reveal>

    </div>
  );
}