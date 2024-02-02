'use client';
import { createI18nClient } from "@/i18n-lib/create-client";
import { defaultLocale, dictionaryGetters } from "./config";

export const {
  I18nClientProvider,
  i18nClientContext,
  useDictionary,
  useLocaleData,
} = createI18nClient(
  dictionaryGetters,
  defaultLocale
);