import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from 'components/Reveal'; // 👈 استيراد الأنيميشن

export default function Services() {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true });

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <Reveal delay={100}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-2">{t('services.subtitle')}</span>
        </Reveal>
        <Reveal delay={300}>
          <h1 className="text-4xl md:text-5xl font-light tracking-editorial mb-6 text-obsidian dark:text-gallery">{t('services.title')}</h1>
        </Reveal>
        <Reveal delay={500}>
          <p className="text-graphite dark:text-ashGray max-w-2xl font-light leading-relaxed">{t('services.desc')}</p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {services.map((service, index) => (
          <Reveal key={service.number} delay={200}>
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 ${index !== 0 ? 'border-t border-graphite/10 dark:border-graphite/30' : ''}`}>
              <div className="md:col-span-2">
                <span className="text-xs font-mono text-ashGray uppercase tracking-caps">{t('services.service')} {service.number}</span>
              </div>
              <div className="md:col-span-5 space-y-3">
                <h3 className="text-2xl font-normal tracking-editorial text-obsidian dark:text-gallery">{service.title}</h3>
                <p className="text-graphite dark:text-ashGray text-sm font-light leading-relaxed">{service.description}</p>
              </div>
              <div className="md:col-span-5 bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-6 md:p-8 space-y-4 transition-colors">
                <span className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment font-mono block">{t('services.included')}</span>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-graphite dark:text-ashGray font-light flex items-center">
                      <span className="w-1.5 h-1.5 bg-obsidian dark:bg-parchment rounded-full me-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Banner */}
      <Reveal delay={300}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28">
          <div className="bg-obsidian dark:bg-gallery text-parchment dark:text-obsidian p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors duration-300">
            <div className="space-y-3 max-w-xl mb-8 md:mb-0">
              <span className="text-xs uppercase tracking-caps text-ashGray dark:text-graphite font-mono">{t('services.ctaSub')}</span>
              <h2 className="text-3xl font-light tracking-editorial text-gallery dark:text-obsidian">{t('services.ctaTitle')}</h2>
              <p className="text-ashGray dark:text-graphite text-sm font-light">{t('services.ctaDesc')}</p>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-parchment dark:bg-obsidian text-obsidian dark:text-gallery text-xs uppercase tracking-caps hover:bg-gallery dark:hover:bg-graphite transition-all duration-300">
              {t('services.ctaBtn')}
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
