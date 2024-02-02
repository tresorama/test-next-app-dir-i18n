import { createI18nClient } from "../create-client";
import { defaultLocale, dictionaryGetters } from "./config";

const {
  I18nClientProvider,
  i18nClientContext,
  useDictionary,
  useLocaleData,
} = createI18nClient(
  dictionaryGetters,
  defaultLocale
);

const Demo = () => {
  const dictionary = useDictionary();
  const localeData = useLocaleData();

  return (
    <div></div>
  );
};