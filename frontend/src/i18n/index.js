import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: localStorage.getItem('cedarstone_lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export function setLanguage(lang) {
  i18n.changeLanguage(lang);
  localStorage.setItem('cedarstone_lang', lang);
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

export default i18n;
