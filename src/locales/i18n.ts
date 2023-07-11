import { NativeModules, Platform } from 'react-native'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './translations/en'
import pt from './translations/pt'

export const languageResources = {
  en: { translation: en },
  pt: { translation: pt },
}

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: locale.substring(0, 2),
    fallbackLng: 'en',
    resources: languageResources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
