import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext'; // 👈 استيراد Auth

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { user } = useAuth(); // 👈 جلب بيانات المستخدم

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // قاموس الترجمة الخاص بالـ Navbar
  const t = {
    EN: {
      destinations: "Destinations", trips: "Trips", services: "Services", about: "About",
      inquire: "Inquire", signIn: "Sign In", signUp: "Sign Up", hello: "Hello"
    },
    AR: {
      destinations: "الوجهات", trips: "الرحلات", services: "الخدمات", about: "فلسفتنا",
      inquire: "استعلام", signIn: "دخول", signUp: "إنشاء حساب", hello: "أهلاً"
    }
  }[language];

  const navLinks = [
    { name: t.destinations, path: '/destinations' },
    { name: t.trips, path: '/trips' },
    { name: t.services, path: '/services' },
    { name: t.about, path: '/about' },
  ];
`
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-md border-b border-graphite/10 dark:border-graphite/30 py-4' : 'bg-transparent py-6'
      }`}
      dir={language === 'AR' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-sans text-xl font-medium tracking-caps text-obsidian dark:text-parchment uppercase">
          Aura<span className="text-ashGray font-light">Journeys</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm tracking-editorial uppercase transition-colors ${
              location.pathname === link.path ? 'text-obsidian dark:text-gallery font-semibold' : 'text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery'
            }`}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-5 rtl:space-x-reverse">
          <button onClick={toggleLanguage} className="text-xs font-mono font-medium hover:text-obsidian dark:hover:text-gallery transition-colors">
            {language === 'EN' ? 'AR' : 'EN'}
          </button>

          <button onClick={toggleTheme} className="p-1 hover:text-graphite transition-all">
            {theme === 'light' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>

          {/* Auth & Inquire Section */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse border-l border-graphite/20 dark:border-graphite/50 pl-5 rtl:pl-0 rtl:pr-5">
            {user ? (
              /* إذا كان مسجلاً الدخول: يظهر اسمه ويذهب للبروفايل، وزر Inquire يختفي ليكون الشكل أنظف */
              <Link to="/profile" className="flex items-center space-x-2 rtl:space-x-reverse text-xs uppercase tracking-caps px-4 py-2 bg-obsidian dark:bg-parchment text-gallery dark:text-obsidian hover:bg-graphite transition-all">
                <span>{t.hello}, {user.name}</span>
              </Link>
            ) : (
              /* إذا لم يكن مسجلاً: تظهر أزرار الدخول والتسجيل و Inquire */
              <>
                <Link to="/signin" className="text-xs uppercase tracking-caps hover:text-obsidian dark:hover:text-gallery transition-colors">
                  {t.signIn}
                </Link>
                <Link to="/signup" className="text-xs uppercase tracking-caps px-4 py-2 border border-obsidian dark:border-parchment hover:bg-obsidian hover:text-gallery dark:hover:bg-parchment dark:hover:text-obsidian transition-all">
                  {t.signUp}
                </Link>
                <Link to="/contact" className="text-xs uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery ml-2 rtl:mr-2">
                  {t.inquire}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}