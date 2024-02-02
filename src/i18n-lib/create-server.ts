import { NextRequest, NextResponse } from 'next/server';
import deepmerge from 'deepmerge';
import { createUtils } from './create-utils';

export const createI18nServer = <
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
  const { extractLocaleDataFromPathname, isSupportedLocale } = createUtils(locales);

  // middleware

  const middleware = (request: NextRequest) => {

    console.log({
      who: "midleware - handleInternalization",
      pathname: request.nextUrl.pathname
    });

    const { locale: pathnameLocale } = extractLocaleDataFromPathname(request.nextUrl.pathname);

    // if the url start with a locale that we support respect it...
    if (pathnameLocale) {
      console.log({ result: "url start with a locale that we support => respect url" });
      return NextResponse.next();
    }

    // otherwise redirect to default locale!
    // in that page the user can select a new language with <LanguageSwitcher />
    const newPath = `/${defaultLocale}${request.nextUrl.pathname}`;
    console.log({ result: "url DOES NOT start with a locale that we support => redirect to defaultLocale => " + newPath });
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = newPath;
    return NextResponse.redirect(newUrl);

  };

  // functions

  const getDictionary = async (locale: string) => {
    if (!isSupportedLocale(locale)) {
      throw new Error(`(i18n) - locale "${locale}" is not a locale that we support for i18n`);
    }
    if (!(locale in dictionaryGetters)) {
      throw new Error(`(i18n) - locale "${locale}" is supported but missing dictionary for that locale`);
    }
    const requestedDictionary = await dictionaryGetters[locale]();
    const defaultDictionary = (await dictionaryGetters[defaultLocale]()) as DefaultDictionary;
    const finalDictionary = deepmerge(defaultDictionary, requestedDictionary as any) as DefaultDictionary;
    return finalDictionary;
  };

  const getStaticParams = () => locales.map(locale => ({ locale }));

  return {
    middleware,
    getDictionary,
    getStaticParams,
  };

};