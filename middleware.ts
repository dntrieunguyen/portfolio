import createMiddleware from "next-intl/middleware";
import { routing } from "@/app/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for static files and images
  if (
    pathname.includes(".png") ||
    pathname.includes(".jpg") ||
    pathname.includes(".jpeg") ||
    pathname.includes(".svg") ||
    pathname.includes(".gif") ||
    pathname.includes(".ico") ||
    pathname.includes(".webp") ||
    pathname.includes(".woff") ||
    pathname.includes(".glb")
  ) {
    return NextResponse.next();
  }

  // AUTH LOGIC FIRST
  const protectedRoutes = ["/course"];
  const localePattern = new RegExp(`^/(${routing.locales.join("|")})(/|$)`);
  const basePathname = pathname.replace(localePattern, "/");

  const isProtectedRoute = protectedRoutes.some((route) => {
    // Exact match for root, startsWith for others
    return route === "/" ? basePathname === "/" : basePathname.startsWith(route);
  });

  if (isProtectedRoute) {
    console.log("Protected route:", pathname);
  }

  // INTL LOGIC AFTER AUTH
  if (!localePattern.test(pathname)) {
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = `/${routing.defaultLocale}${pathname}`;
    return NextResponse.redirect(newUrl);
  }

  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
