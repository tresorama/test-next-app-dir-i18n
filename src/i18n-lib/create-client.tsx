'use client';
import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createUtils } from "./create-utils";

export const createI18nClient = <
  Dictionary extends unknown,
  DictionaryGetters extends Record<string, () => Promise<Dictionary>>,
  Locale extends (keyof DictionaryGetters) & string,
  DefaultLocale extends Locale,
>(
  dictionaryGetters: DictionaryGetters,
  defaultLocale: DefaultLocale,
) => {

  type DefaultDictionary = Awaited<ReturnType<(typeof dictionaryGetters)[DefaultLocale]>>;

  // utils

  const locales = Object.keys(dictionaryGetters) as Locale[];
  const { extractLocaleDataFromPathname } = createUtils(locales);

  // react context

  const { i18nClientContext, I18nClientProvider, useDictionary } = (() => {
    const ctx = createContext({} as DefaultDictionary);
    const I18nClientProvider = ({
      children,
      dictionary,
    }: {
      children: React.ReactNode,
      dictionary: DefaultDictionary,
    }) => {
      if (!dictionary) throw new Error("Missing dictionary in I18nClientProvider");
      return <ctx.Provider value={dictionary}>{children}</ctx.Provider>;
    };
    const useDictionary = () => useContext(ctx);

    return {
      i18nClientContext: ctx,
      I18nClientProvider,
      useDictionary
    };
  })();


  // useLocaleData 'hook'

  const useLocaleData = () => {
    const pathname = usePathname();

    const { pathnameWithoutLocale, locale } = extractLocaleDataFromPathname(pathname);
    if (!locale) throw new Error("Missing or unsupported locale in current pathname!");

    const router = useRouter();
    const changeLocale = (newLocale: Locale) => {
      const newPathname = `/${newLocale}${pathnameWithoutLocale}`;
      router.push(newPathname);
    };

    return {
      pathname,
      pathnameWithoutLocale,
      locale,
      currentLocale: locale,
      changeLocale,
    };
  };

  return {
    i18nClientContext,
    I18nClientProvider,
    useDictionary,
    useLocaleData,
  };

};