import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // carregar arquivos JSON
  .use(LanguageDetector) // detectar idioma do navegador
  .use(initReactI18next) // integrar com React
  .init({
    fallbackLng: 'en', // idioma padrão
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false, // React já faz escape
    },
    backend: {
      loadPath: '/languages/{{lng}}.json', // caminho dos arquivos JSON
    },
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
