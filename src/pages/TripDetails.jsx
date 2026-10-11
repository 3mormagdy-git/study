import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { tripsData } from '../data/travelData';
import Reveal from '../components/Reveal'; // 👈 استيراد الأنيميشن

export default function TripDetails() {
  const { t } = useTranslation();
  const { tripId } = useParams();
  const navigate = useNavigate();

  const trip = tripsData.find((item) => item.id.toString() === tripId);

  useEffect(() => {
    if (!trip) navigate('/trips');
  }, [trip, navigate]);

  if (!trip) return null;

  const place = t(`places.${trip.placeId}`);
  const country = t(`countries.${trip.countryId}`);
  const duration = t('trips.duration');
  const highlights = t('tripDetails.highlightsList', { returnObjects: true });

  return (
    <div className="min-h-screen bg-parchment dark:bg-charcoalDeep text-obsidian dark:text-parchment pt-32 pb-24 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Reveal delay={100}>
          <Link to={`/trips/${trip.countryId}`} className="text-xs uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors">
            {t('tripDetails.back')}
          </Link>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <Reveal delay={200}>
          <span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-3">
            {country} &bull; {duration}
          </span>
        </Reveal>
        <Reveal delay={400}>
          <h1 className="text-4xl md:text-6xl font-light tracking-editorial text-obsidian dark:text-gallery">
            {place}
          </h1>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <Reveal delay={500}>
          <div className="w-full aspect-[21/9] overflow-hidden bg-graphite/10 dark:bg-graphite/30">
            <img src={trip.image} alt={place} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <Reveal delay={300}>
            <div className="space-y-8">
              <div className="border-t border-graphite/20 dark:border-graphite/40 pt-4"><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t('tripDetails.location')}</span><span className="text-sm font-medium text-obsidian dark:text-gallery">{country}</span></div>
              <div className="border-t border-graphite/20 dark:border-graphite/40 pt-4"><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t('tripDetails.duration')}</span><span className="text-sm font-medium text-obsidian dark:text-gallery">{duration}</span></div>
              <div className="border-t border-graphite/20 dark:border-graphite/40 pt-4"><span className="text-xs uppercase tracking-caps text-ashGray font-mono block mb-1">{t('tripDetails.reference')}</span><span className="text-sm font-mono text-obsidian dark:text-gallery">AJ-{trip.id.toString().padStart(4, '0')}</span></div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8 space-y-12">
          <Reveal delay={400}>
            <section>
              <h2 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery mb-4">{t('tripDetails.overview')}</h2>
              <p className="text-graphite dark:text-ashGray text-lg font-light leading-relaxed">{t('trips.description', { place })}</p>
            </section>
          </Reveal>

          <Reveal delay={600}>
            <section>
              <h2 className="text-2xl font-light tracking-editorial text-obsidian dark:text-gallery mb-4">{t('tripDetails.highlights')}</h2>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-obsidian dark:bg-parchment rounded-full shrink-0 me-4"></span>
                    <span className="text-graphite dark:text-ashGray font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>

      <Reveal delay={400}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
          <div className="bg-obsidian dark:bg-gallery text-parchment dark:text-obsidian p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors duration-300">
            <div className="space-y-2 max-w-xl mb-8 md:mb-0">
              <span className="text-xs uppercase tracking-caps text-ashGray dark:text-graphite font-mono">{t('tripDetails.ctaSub')}</span>
              <h2 className="text-3xl font-light tracking-editorial text-gallery dark:text-obsidian">{t('tripDetails.ctaTitle')}</h2>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-parchment dark:bg-obsidian text-obsidian dark:text-gallery text-xs uppercase tracking-caps hover:bg-gallery dark:hover:bg-graphite transition-all duration-300">
              {t('tripDetails.ctaBtn')}
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
