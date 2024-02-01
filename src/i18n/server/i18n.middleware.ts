import { NextResponse } from "next/server";
import {
  extractLocaleDataFromPathname,
  // getPreferredLocaleFromRequest,
  // pathnameHasSupportedLocale,
} from "../i18n.utils";
import { defaultLocale } from "../i18n.config";
import { type MiddlewareFunction } from "@/middlewares/utils.chain";

export const handleInternalization: MiddlewareFunction = async (request, next) => {

  console.log({
    who: "midleware - handleInternalization",
    pathname: request.nextUrl.pathname
  });

  const { currentLocale: pathnameLocale } = extractLocaleDataFromPathname(request.nextUrl.pathname);

  // is the url start with a locale that we support respect it...
  if (pathnameLocale) {
    console.log({ result: "url start with a locale that we support => respect url" });
    return next();
  }

  // redirect to default locale!
  // in that page the user can select a new language with
  // <LanguageSwitcher />
  const newPath = `/${defaultLocale}${request.nextUrl.pathname}`;
  console.log({ result: "url DOES NOT start with a locale that we support => redirect to defaultLocale => " + newPath });
  return NextResponse.redirect(new URL(newPath, request.nextUrl));

};

// export const handleInternalization2 = (request: NextRequest) => {

//   console.log({
//     what: "midleware - handleInternalization",
//     pathname: request.nextUrl.pathname
//   });

//   // if the url is like `/en/xxxx` and `en` is a locale that we support
//   // respect it
//   if (pathnameHasSupportedLocale(request.nextUrl.pathname)) {
//     console.log('pathnameHasSupportedLocale: true => return => respect url\'s locale');
//     return;
//   }


//   console.log('pathnameHasSupportedLocale: false');
//   // otherwise calculate "locale" based on :
//   //    - which locale we want to support
//   //    - and the preferrend language as expressed in the request
//   const preferredLocale = getPreferredLocaleFromRequest(request);
//   console.log('resolvedLocale: ', preferredLocale);
//   if (!preferredLocale) {
//     return;
//   }

//   // if (resolvedLocale === defaultLocale) {
//   //   console.log('resolvedLocale === defaultLocale => true , no need to prepend locale');
//   //   return;
//   // }

//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   const newUrl = request.nextUrl.clone();
//   newUrl.pathname = `/${resolvedLocale}${newUrl.pathname}`;
//   return NextResponse.redirect(newUrl);

// };