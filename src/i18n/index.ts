import i18n from 'i18next'
import zh from './zh.json'
import en from './en.json'

i18n.init({
  // we init with resources
  resources: {
    en: {
      translations: en
    },
    zh: {
      translations: zh
    }
  },
  fallbackLng: "zh",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
})

export default i18n
