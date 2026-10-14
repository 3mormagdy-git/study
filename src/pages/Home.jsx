import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from 'components/Reveal';
import SmartImage from 'components/SmartImage';
import DestinationCard from 'components/DestinationCard';
import ContactForm, { CONTACT_EMAIL } from 'components/ContactForm';
import { countriesData } from 'data/travelData';

const featuredCountries = countriesData.filter((country) => country.featured);

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-24 transition-colors duration-300 relative overflow-hidden">

      {/* Hero — static editorial backdrop: an oversized, very faint wordmark
          (DESIGN.md: the brand name is the visual statement). No animation. */}
      <div className="relative border-b border-graphite/10 dark:border-graphite/30">
        <div
          aria-hidden="true"
          dir="ltr"
          className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none select-none flex justify-center"
        >
          <span className="block whitespace-nowrap font-light leading-[0.8] tracking-editorial text-[30vw] lg:text-[22vw] text-obsidian/[0.05] dark:text-parchment/[0.06] translate-y-[8%]">
            AURA
          </span>
        </div>

        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
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
                <Link to="/destinations" className="inline-flex items-center min-h-[48px] px-8 py-4 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all duration-300">
                  {t('home.exploreBtn')}
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={400}>
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite/10 dark:bg-graphite/30">
                <SmartImage
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
                  alt={t('home.heroAlt')}
                  loading="eager"
                  className="object-cover w-full h-full"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Destinations */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-caps text-ashGray font-mono">{t('home.featuredSub')}</span>
              <h2 className="text-3xl font-light tracking-editorial mt-2 mb-4 text-obsidian dark:text-gallery">{t('home.featuredTitle')}</h2>
              <p className="text-graphite dark:text-ashGray font-light leading-relaxed">{t('home.featuredDesc')}</p>
            </div>
            <Link to="/destinations" className="text-lg md:text-xl text-obsidian dark:text-gallery hover:text-graphite dark:hover:text-ashGray transition-colors py-2">
              {t('home.viewAll')}
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {featuredCountries.map((country, index) => (
            <Reveal key={country.id} delay={(index % 4) * 150}>
              <DestinationCard country={country} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-graphite/10 dark:border-graphite/30 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs uppercase tracking-caps text-ashGray font-mono">{t('home.contactSub')}</span>
              <h2 className="text-3xl font-light tracking-editorial mt-2 mb-4 text-obsidian dark:text-gallery">{t('home.contactTitle')}</h2>
              <p className="text-graphite dark:text-ashGray font-light leading-relaxed max-w-md mb-8">{t('home.contactDesc')}</p>
              <div className="space-y-4 border-t border-graphite/10 dark:border-graphite/30 pt-6">
                <div>
                  <span className="text-xs uppercase tracking-editorial text-ashGray block">{t('contact.emailLabel')}</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-mono text-obsidian dark:text-parchment hover:underline break-all">{CONTACT_EMAIL}</a>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-editorial text-ashGray block">{t('contact.responseLabel')}</span>
                  <span className="text-sm font-light text-graphite dark:text-ashGray">{t('contact.responseValue')}</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="bg-gallery dark:bg-obsidian/40 border border-graphite/10 dark:border-graphite/30 p-6 sm:p-8 md:p-12 transition-colors">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
