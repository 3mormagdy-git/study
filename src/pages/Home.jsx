import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from 'components/Reveal';
import CinematicWorldMap from 'components/CinematicWorldMap'; // 👈 استيراد الخريطة السينمائية

const featuredImages = [
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512813266014-4d8235e18285?auto=format&fit=crop&w=800&q=80',
];

export default function Home() {
  const { t } = useTranslation();
  const featured = t('home.featured', { returnObjects: true });

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-24 transition-colors duration-300 relative overflow-hidden">

      {/* Hero Section مع دمج خريطة العالم السينمائية في الخلفية مباشرة */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* حقن الخريطة السينمائية هنا لتظهر بوضوح تحت محتوى الهيرو */}
        <CinematicWorldMap />

        {/* محتوى الهيرو في المقدمة (relative z-10) لضمان وضوحه التام وعدم تغطيته */}
        <div className="md:col-span-7 space-y-8 relative z-10">
          <Reveal delay={100}>
            <span className="text-xs uppercase tracking-caps text-ashGray font-mono">
              {t('home.subtitle')}
            </span>
          </Reveal>

          <Reveal delay={300}>
            <h1 className="text-4xl md:text-6xl font-light tracking-editorial leading-tight text-obsidian dark:text-gallery">
              {t('home.title')}
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="text-graphite dark:text-ashGray text-lg max-w-xl font-light leading-relaxed">
              {t('home.desc')}
            </p>
          </Reveal>

          <Reveal delay={700}>
            <div className="flex items-center space-x-6 rtl:space-x-reverse pt-4">
              <Link to="/destinations" className="px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all duration-300">
                {t('home.exploreBtn')}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 relative z-10">
          <Reveal delay={400}>
            <div className="relative aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
                alt={t('home.heroAlt')}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-graphite/10 dark:border-graphite/30 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-caps text-ashGray font-mono">{t('home.featuredSub')}</span>
              <h2 className="text-3xl font-light tracking-editorial mt-2 text-obsidian dark:text-gallery">{t('home.featuredTitle')}</h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((dest, index) => (
            <Reveal key={index} delay={index * 200}>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden bg-graphite/10 dark:bg-graphite/30 mb-4">
                  <img
                    src={featuredImages[index]}
                    alt={dest.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start mt-4">
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
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
