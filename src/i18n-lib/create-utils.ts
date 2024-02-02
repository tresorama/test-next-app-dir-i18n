import acceptLanguageParser from 'accept-language-parser';

// utils
const removePrefix = (str: string, prefix: string[]) => prefix.reduce((acc, curr) => acc.replace(curr, ""), str);


export const createUtils = <Locale extends string>(locales: Locale[]) => {

  /**
   * - Type-Guard that check if a locale string is a locale that we want support
   * - A locale is supported if defined in `supportedLocales`
  */
  const isSupportedLocale = (locale: string): locale is Locale => {
    return locales.includes(locale as any);
  };

  /**
   * - Extract`locale` from pathname only if defined in `supportedLocales`
   * - If request is `/en/xxxx` and `supportedLocales = [ "en", "it" ]` it returns `"en"`
   * - If request is `/de/xxxx` and `supportedLocales = [ "en", "it" ]` it returns `undefined`
  */
  function extractSupportedLocaleFromPathname(pathname: URL['pathname']) {
    return locales.find(
      locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
  }

  /**
   * - Remove the leading locale from a pathname, only if we supported that locale
   * - A locale is supported if defined in `supportedLocales`
   * - If request is `/en/xxxx` and `supportedLocales = [ "en", "it" ]` it returns `"/xxxx"`
   * - If request is `/de/xxxx` and `supportedLocales = [ "en", "it" ]` it returns `"/de/xxxx"`
   */
  const removeSupportedLocaleFromPathname = (pathname: URL['pathname']) => {
    const pathnameWithoutLocale = removePrefix(pathname, locales.map(x => "/" + x));
    if (pathnameWithoutLocale === "") return "/";
    return pathnameWithoutLocale;
  };

  /**
   * Given a pathname get infos about how we treat that pathname
   */
  function extractLocaleDataFromPathname(pathname: URL['pathname']) {
    return {
      pathname,
      pathnameWithoutLocale: removeSupportedLocaleFromPathname(pathname),
      locale: extractSupportedLocaleFromPathname(pathname),
    };
  }



  /**
   * - Return the first`locale` defined in `Accept-Language` HTTP Request Header (if defined)
   * - Only `locale` defined in `supportedLocales` are considered valid
   * - If request has `it-IT,it;q=0.9,en;q=0.8` and `supportedLocales = [ "en", "it" ]` it returns `"it"`
   * - If request has `de-DE,de;q=0.9,en;q=0.8` and `supportedLocales = [ "en", "it" ]` it returns `"en"`
   * - If request has `de-DE,de;q=0.9,fr;q=0.8` and `supportedLocales = [ "en", "it" ]` it returns `null`
   * - If request is `/de/xxxx` and `supportedLocales = [ "en", "it" ]` it returns `false`
   */
  function getPreferredLocaleFromRequest(request: Request) {
    return getPreferredLocaleFromRequestHeader(request.headers);
  }

  function getPreferredLocaleFromRequestHeader(headers: Request['headers']) {
    const _headers = Object.fromEntries(headers.entries());
    if (_headers['accept-language']) {
      const userPreferredLocales = acceptLanguageParser.parse(_headers['accept-language']);
      const resolvedLocale = acceptLanguageParser.pick(locales, userPreferredLocales);
      if (resolvedLocale) return resolvedLocale;
    }
    return null;
  }

  return {
    isSupportedLocale,
    extractSupportedLocaleFromPathname,
    removeSupportedLocaleFromPathname,
    extractLocaleDataFromPathname,
    getPreferredLocaleFromRequest,
    getPreferredLocaleFromRequestHeader,
  };

}


