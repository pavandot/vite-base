import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(initReactI18next)
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/{{ns}}/translation.json',
        },
        ns: ['common', 'authors'],
    })

export default i18n
