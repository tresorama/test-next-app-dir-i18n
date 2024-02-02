export const defaultLocale = "en" as const;
export const locales = ['en', 'it'] as const;
export const i18n = { defaultLocale, locales } as const;

export type Locale = (typeof locales)[number];