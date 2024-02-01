// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';
import { locales, defaultLocale } from './i18n.config';

export const handleI18n = createI18nMiddleware({
  locales,
  defaultLocale,
});