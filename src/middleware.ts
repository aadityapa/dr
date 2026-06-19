import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(hi|mr|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
