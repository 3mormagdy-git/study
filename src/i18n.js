import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';

const STORAGE_KEY = 'aura_language';

function getSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'AR' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
}

// حفظ اللغة وتغيير اتجاه الصفحة بالكامل عند كل تغيير
function applyLanguage(lng) {
  document.documentElement.lang = lng;
  document.documentElement.dir = i18n.dir(lng);
  try {
    localStorage.setItem(STORAGE_KEY, lng === 'ar' ? 'AR' : 'EN');
  } catch {
    // التخزين غير متاح (مثلاً في وضع التصفح الخاص) — نتجاهل الخطأ
  }
}

i18n.on('languageChanged', applyLanguage);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React يقوم بالحماية من XSS بنفسه
  },
});

export default i18n;
