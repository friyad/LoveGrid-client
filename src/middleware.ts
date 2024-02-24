import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isIncluded } from "./utils/globalUtils";

export async function middleware(request: NextRequest) {
  const token: any = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const publicPaths = ["/login", "/signup"];
  const userPaths = ["/user/"];
  const adminPaths = ["/dashboard"];

  // prevent accessing public pages while logged in
  if (token && isIncluded(publicPaths, pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // prevent accessing user only pages from unauthenticated users
  if (!token && isIncluded(userPaths, pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // prevent accessing admin only pages from user & unauthenticated users
  if (isIncluded(adminPaths, pathname)) {
    if (token && token.role.includes("admin")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/user/profile", request.url));
  }

  // And other routes is accessable in any situation
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard/:path*",
    "/user/:path*",
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
