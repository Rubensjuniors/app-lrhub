import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/languages/{{lng}}.json'
    },
    detection: {
      // 🔥 MUDANÇA AQUI: localStorage PRIMEIRO
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],

      // Opcional: especificar a chave do localStorage
      lookupLocalStorage: 'i18nextLng'
    }
  })

export default i18n
