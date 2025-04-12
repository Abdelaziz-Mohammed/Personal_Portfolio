import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json';
import ar from './locales/ar.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: 'en', // default language
  fallbackLng: 'en',
  // debug: true, // disable it in production
  resources: {
    en: {
      translation: en
    },
    ar: {
      translation: ar
    },
  }
});

export default i18n;