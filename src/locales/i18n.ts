import * as Localization from 'expo-localization'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './translations/en'
import pt from './translations/pt'

export const languageResources = {
  en: { translation: en },
  pt: { translation: pt },
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: Localization.getLocales()[0].languageCode,
    fallbackLng: 'en',
    resources: languageResources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
