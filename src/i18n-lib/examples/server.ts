import { createI18nServer } from "../create-server";
import { defaultLocale, dictionaryGetters } from "./config";

const {
  getDictionary,
  middleware,
} = createI18nServer(
  dictionaryGetters,
  defaultLocale
);

