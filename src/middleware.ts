import { composeMiddleware } from "@/middlewares/utils.chain";
import { handleLogging } from "@/middlewares/handle-logging";

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

  //
  // // Match only internationalized pathnames
  // matcher: ['/', '/(de|en)/:path*']
};

export const middleware = composeMiddleware([
  handleLogging,
  // handleI18n,
]);