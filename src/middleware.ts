import { composeMiddleware } from "@/middlewares/utils.chain";
import { handleLogging } from "@/middlewares/handle-logging";
import { handleInternalization } from "./i18n/i18n.middleware";

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

  //
  // // Match only internationalized pathnames
  // matcher: ['/', '/(de|en)/:path*']
};

export const middleware = composeMiddleware([
  handleLogging,
  handleInternalization,
]);