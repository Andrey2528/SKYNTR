import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation';
import translationUK from './ua/translation';

// Імпортуємо модуль plural rules (якщо потрібно)
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(Backend) // або інший спосіб підвантаження перекладів
    .use(LanguageDetector) // автоматичне визначення мови
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            uk: { translation: translationUK },
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        // Важливо:
        react: {
            useSuspense: false,
        },
    });

export default i18n;
