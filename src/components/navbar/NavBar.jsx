import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'context/AuthContext';
import { useTheme } from 'context/ThemeContext';
import { useTripLists } from 'context/TripListsContext';
import { HeartIcon } from 'components/Icons';

const iconLinkClass =
  'relative inline-flex items-center justify-center w-10 h-10 text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors';
const countClass =
  'absolute top-0 end-0 min-w-[16px] h-4 px-1 rounded-full bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian font-mono text-[10px] leading-4 text-center';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { favoriteIds, bookingIds } = useTripLists();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.destinations'), path: '/destinations' },
    { name: t('nav.trips'), path: '/trips' },
  ];

  const favoritesLabel = `${t('nav.favorites')} (${favoriteIds.length})`;
  const bookingLabel = `${t('nav.booking')} (${bookingIds.length})`;

  // The desktop bar needs ~1024px once the account links appear, so the
  // hamburger menu is used below the `lg` breakpoint (it was `md`, which
  // overflowed on tablets).
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 dark:bg-charcoalDeep/90 backdrop-blur-md border-b border-graphite/10 dark:border-graphite/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="shrink-0 text-xl tracking-editorial font-light text-obsidian dark:text-gallery">
          AURA <span className="lg:hidden xl:inline text-xs uppercase tracking-caps font-mono text-ashGray">Journeys</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 rtl:space-x-reverse">
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

        {/* Desktop controls */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-5 rtl:space-x-reverse">
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
          >
            {t('nav.languageToggle')}
          </button>

          <button
            onClick={toggleTheme}
            className="text-xs font-mono uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
          >
            {theme === 'dark' ? t('nav.light') : t('nav.dark')}
          </button>

          {user ? (
            <div className="flex items-center space-x-2 xl:space-x-4 rtl:space-x-reverse">
              <Link to="/favorites" className={iconLinkClass} aria-label={favoritesLabel} title={favoritesLabel}>
                <HeartIcon />
                {favoriteIds.length > 0 && <span className={countClass} aria-hidden="true">{favoriteIds.length}</span>}
              </Link>
              <Link to="/booking" className="text-xs uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors whitespace-nowrap" aria-label={bookingLabel}>
                {t('nav.booking')}
                {bookingIds.length > 0 && <span className="ms-1.5 font-mono text-[10px] text-ashGray" aria-hidden="true">({bookingIds.length})</span>}
              </Link>
              <Link to="/profile" className="max-w-[8rem] truncate text-xs uppercase tracking-caps text-obsidian dark:text-parchment">
                {user.name || t('nav.profile')}
              </Link>
              <button onClick={logout} className="text-xs uppercase tracking-caps text-ashGray hover:text-obsidian dark:hover:text-gallery">
                {t('nav.logout')}
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link to="/signin" className="text-xs uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery">
                {t('nav.signIn')}
              </Link>
              <Link to="/signup" className="px-5 py-2.5 bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps hover:bg-graphite transition-all">
                {t('nav.signUp')}
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 inline-flex items-center justify-center text-obsidian dark:text-parchment focus:outline-none"
          aria-label={t('nav.toggleMenu')}
          aria-expanded={isOpen}
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

      {/* Mobile dropdown (scrolls if the screen is short; no shadow per DESIGN.md) */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto bg-parchment dark:bg-charcoalDeep border-b border-graphite/10 dark:border-graphite/30 px-6 py-6 space-y-4">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="py-3 text-sm uppercase tracking-caps text-graphite dark:text-ashGray hover:text-obsidian dark:hover:text-gallery transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-graphite/10 dark:border-graphite/30 flex flex-col">
            <button
              onClick={toggleLanguage}
              className="py-3 text-xs font-mono uppercase tracking-caps text-start text-graphite dark:text-ashGray"
            >
              {t('nav.languageToggleLong')}
            </button>

            <button
              onClick={toggleTheme}
              className="py-3 text-xs font-mono uppercase tracking-caps text-start text-graphite dark:text-ashGray"
            >
              {theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
            </button>

            {user ? (
              <div className="flex flex-col">
                <Link to="/favorites" className="py-3 text-xs uppercase tracking-caps text-obsidian dark:text-parchment">
                  {favoritesLabel}
                </Link>
                <Link to="/booking" className="py-3 text-xs uppercase tracking-caps text-obsidian dark:text-parchment">
                  {bookingLabel}
                </Link>
                <Link to="/profile" className="py-3 text-xs uppercase tracking-caps text-obsidian dark:text-parchment break-words">
                  {user.name || t('nav.profile')}
                </Link>
                <button onClick={logout} className="py-3 text-xs uppercase tracking-caps text-start text-ashGray">
                  {t('nav.logoutLong')}
                </button>
              </div>
            ) : (
              <div className="flex flex-col pt-2">
                <Link to="/signin" className="py-3 text-xs uppercase tracking-caps text-graphite dark:text-ashGray">
                  {t('nav.signInLong')}
                </Link>
                <Link to="/signup" className="mt-2 w-full py-3.5 text-center bg-obsidian text-gallery dark:bg-parchment dark:text-obsidian text-xs uppercase tracking-caps">
                  {t('nav.signUpLong')}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
