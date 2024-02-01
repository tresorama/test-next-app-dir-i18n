/** @type {import('next-translate').I18nConfig} */
const i18nConfig = {
  locales: ['en', 'it'],
  defaultLocale: "en",
  pages: {
    "/[lang]": ["home"],
    "/[lang]/static-page": ["static-page"],
    "/[lang]/dynamic-page": ["dynamic-page"],
    "/[lang]/client-page": ["client-page"]
  },
  // customize from where texts are fetched
  // instead of default `/locales/<locale>/<namespace>.json`
  // loadLocaleFrom: async (locale, namespace) => {
  //   if (locale === 'it') return import(`./messages/it.json`).then(m => m.default[namespace]);
  //   return import(`./messages/en.json`).then(m => m.default[namespace]);
  // }
};

module.exports = i18nConfig;