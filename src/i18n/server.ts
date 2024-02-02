import { createI18nServer } from "@/i18n-lib/create-server";
import { defaultLocale, dictionaryGetters } from "./config";

export const {
  getDictionary,
  middleware: handleInternalization,
  getStaticParams,
} = createI18nServer(
  dictionaryGetters,
  defaultLocale
);

