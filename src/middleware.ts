import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const publicPaths = ["/", "/login", "/signup"];
  const userPaths = ["/", "/login", "/signup"];
  const adminPaths = ["/", "/login", "/signup"];

  // prevent accessing public pages while logged in
  if (token && publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // prevent accessing user only pages from unauthenticated users

  // prevent accessing admin only pages from user & guests users

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/signup",
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
