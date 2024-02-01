import { MiddlewareFunction } from '@/middlewares/utils.chain';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n.config';

export const handleI18n: MiddlewareFunction = createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
});

