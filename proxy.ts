import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip framework internals, API routes, and static assets.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Allow direct /1 routes to resolve without redirecting.
  if (pathname === "/1" || pathname.startsWith("/1/")) {
    return NextResponse.next();
  }

  // Serve clean URLs from the existing app/1 route tree.
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/1${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/:path*"],
};
