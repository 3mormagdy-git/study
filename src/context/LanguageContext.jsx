import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('aura_language') || 'EN';
  });

  useEffect(() => {
    // حفظ اللغة وتغيير اتجاه الصفحة بالكامل
    localStorage.setItem('aura_language', language);
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'AR' ? 'ar' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'AR' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}