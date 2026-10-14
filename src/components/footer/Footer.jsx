import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-obsidian text-parchment pt-20 pb-12 border-t border-graphite/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-graphite/30">

        {/* Brand Info */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="text-xl font-medium tracking-caps uppercase text-gallery">
            Aura<span className="text-ashGray font-light">Journeys</span>
          </h2>
          <p className="text-ashGray text-sm max-w-sm font-light leading-relaxed">
            {t('footer.about')}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-xs uppercase tracking-caps text-ashGray font-mono">{t('footer.navigation')}</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link to="/destinations" className="inline-block py-1 hover:text-gallery transition-colors">{t('footer.destinations')}</Link>
            </li>
            <li>
              <Link to="/trips" className="inline-block py-1 hover:text-gallery transition-colors">{t('footer.trips')}</Link>
            </li>
            <li>
              <Link to="/services" className="inline-block py-1 hover:text-gallery transition-colors">{t('footer.services')}</Link>
            </li>
            <li>
              <Link to="/about" className="inline-block py-1 hover:text-gallery transition-colors">{t('footer.philosophy')}</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Inquiries */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-xs uppercase tracking-caps text-ashGray font-mono">{t('footer.inquiries')}</h3>
          <p className="text-sm text-ashGray font-light">
            {t('footer.inquiriesDesc')}
          </p>
          <Link
            to="/contact"
            className="inline-block text-xs uppercase tracking-caps px-6 py-3 border border-parchment text-parchment hover:bg-parchment hover:text-obsidian transition-all duration-300"
          >
            {t('footer.inquiryBtn')}
          </Link>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ashGray font-mono">
        <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        {/* لا توجد صفحات لهذه الروابط بعد، لذلك تُعرض كنص فقط */}
        <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
          <span>{t('footer.privacy')}</span>
          <span>{t('footer.terms')}</span>
        </div>
      </div>
    </footer>
  );
}
