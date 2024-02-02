export const locales = ['en', 'it'];
export const defaultLocale = 'en';
export const dictionaryGetters = {
  en: () => import("./dictionaries/en").then(m => m.default),
  it: () => import("./dictionaries/it").then(m => m.default),
};