import { composeMiddleware } from "@/middlewares/utils.chain";
import { handleLogging } from "@/middlewares/handle-logging";
import { handleI18n } from "./i18n/i18n.middleware";

// TODO: migrate matcher to single midldeware instead of a global one
export const config = {
  matcher: [
    /*
 * Match all request paths except for the ones starting with:
 * - api (API routes)
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico (favicon file)
 */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],

  /*
  Alternative
  */
  // matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']

  //
  // // Match only internationalized pathnames
  // matcher: ['/', '/(de|en)/:path*']
};

export const middleware = composeMiddleware([
  handleLogging,
  handleI18n,
]);