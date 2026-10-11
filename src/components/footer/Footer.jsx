import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const t = {
    EN: {
      about: "Crafting intentional, bespoke travel experiences for those who seek depth, quiet luxury, and authentic cultural immersion.",
      navigation: "Navigation",
      destinations: "Destinations",
      trips: "Curated Trips",
      services: "Services & Bespoke",
      philosophy: "Our Philosophy",
      inquiries: "Inquiries",
      inquiriesDesc: "Begin your planning journey with a private consultation.",
      inquiryBtn: "Start an Inquiry",
      rights: "Aura Journeys. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    AR: {
      about: "نصمم تجارب سفر مدروسة ومخصصة لمن يبحثون عن العمق، والفخامة الهادئة، والانغماس الثقافي الحقيقي.",
      navigation: "التنقل",
      destinations: "الوجهات",
      trips: "رحلات مختارة",
      services: "الخدمات والتصميم الخاص",
      philosophy: "فلسفتنا",
      inquiries: "الاستعلامات",
      inquiriesDesc: "ابدأ التخطيط لرحلتك من خلال استشارة خاصة.",
      inquiryBtn: "ابدأ استعلاماً",
      rights: "أورا جيرنيز. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    }
  }[language];

  return (
    <footer className="bg-obsidian text-parchment pt-20 pb-12 border-t border-graphite/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-graphite/30">

        {/* Brand Info */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="text-xl font-medium tracking-caps uppercase text-gallery">
            Aura<span className="text-ashGray font-light">Journeys</span>
          </h2>
          <p className="text-ashGray text-sm max-w-sm font-light leading-relaxed">
            {t.about}
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-xs uppercase tracking-caps text-ashGray font-mono">{t.navigation}</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <Link to="/destinations" className="hover:text-gallery transition-colors">{t.destinations}</Link>
            </li>
            <li>
              <Link to="/trips" className="hover:text-gallery transition-colors">{t.trips}</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gallery transition-colors">{t.services}</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gallery transition-colors">{t.philosophy}</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Inquiries */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-xs uppercase tracking-caps text-ashGray font-mono">{t.inquiries}</h3>
          <p className="text-sm text-ashGray font-light">
            {t.inquiriesDesc}
          </p>
          <Link
            to="/contact"
            className="inline-block text-xs uppercase tracking-caps px-6 py-3 border border-parchment text-parchment hover:bg-parchment hover:text-obsidian transition-all duration-300"
          >
            {t.inquiryBtn}
          </Link>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ashGray font-mono">
        <p>&copy; {new Date().getFullYear()} {t.rights}</p>
        {/* لا توجد صفحات لهذه الروابط بعد، لذلك تُعرض كنص فقط */}
        <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
          <span>{t.privacy}</span>
          <span>{t.terms}</span>
        </div>
      </div>
    </footer>
  );
}
