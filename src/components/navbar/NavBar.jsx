import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // إغلاق القائمة تلقائياً عند الانتقال لأي صفحة جديدة على الموبايل
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: language === 'AR' ? 'الرئيسية' : 'Home', path: '/' },
    { name: language === 'AR' ? 'من نحن' : 'About', path: '/about' },
    { name: language === 'AR' ? 'الخدمات' : 'Services', path: '/services' },
    { name: language === 'AR' ? 'الوجهات' : 'Destinations', path: '/destinations' },
    { name: language === 'AR' ? 'الرحلات' : 'Trips', path: '/trips' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-md border-b border-graphite/10 dark:border-graphite/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* الشعار */}
        <Link to="/" className="text-xl tracking-editorial font-light text-obsidian dark:text-gallery">
          AURA <span className="text-xs uppercase tracking-caps font-mono text-ashGray">Journeys</span>
        </Link>

        {/* روابط سطح المكتب (Desktop Navigation) */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xs uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* أدوات التحكم الجانبية (اللغة وأزرار الدخول) */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
          >
            {language === 'EN' ? 'العربية' : 'EN'}
          </button>

          {user ? (
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link to="/profile" className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment">
                {user.name || 'Profile'}
              </Link>
              <button onClick={logout} className="text-xs uppercase tracking-caps text-ashGray hover:text-obsidian">
                {language === 'AR' ? 'خروج' : 'Logout'}
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link to="/signin" className="text-xs uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery">
                {language === 'AR' ? 'دخول' : 'Sign In'}
              </Link>
              <Link to="/signup" className="px-5 py-2.5 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all">
                {language === 'AR' ? 'حساب جديد' : 'Sign Up'}
              </Link>
            </div>
          )}
        </div>

        {/* زر قائمة الموبايل (Hamburger Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-obsidian dark:text-parchment focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* قائمة الموبايل المنسدلة (Mobile Dropdown Menu) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-parchment dark:bg-charcoalDeep border-b border-graphite/10 dark:border-graphite/30 px-6 py-8 space-y-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-graphite/10 dark:border-graphite/30 flex flex-col space-y-4">
            <button
              onClick={toggleLanguage}
              className="text-xs font-mono uppercase tracking-caps text-left rtl:text-right text-graphite dark:text-ashGray"
            >
              {language === 'EN' ? 'Switch to العربية' : 'Switch to EN'}
            </button>

            {user ? (
              <div className="flex flex-col space-y-3">
                <Link to="/profile" className="text-xs uppercase tracking-caps text-obsidian dark:text-parchment">
                  {user.name || 'Profile'}
                </Link>
                <button onClick={logout} className="text-xs uppercase tracking-caps text-left rtl:text-right text-ashGray">
                  {language === 'AR' ? 'تسجيل الخروج' : 'Logout'}
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link to="/signin" className="text-xs uppercase tracking-caps text-graphite dark:text-ashGray">
                  {language === 'AR' ? 'تسجيل الدخول' : 'Sign In'}
                </Link>
                <Link to="/signup" className="w-full py-3 text-center bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
                  {language === 'AR' ? 'إنشاء حساب' : 'Sign Up'}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}