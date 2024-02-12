import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isIncluded = (rootPaths: string[], pathname: string) => {
  if (rootPaths.includes(pathname)) {
    return true;
  }
  const isStartWithExist = rootPaths.find((path) => pathname.startsWith(path));
  if (isStartWithExist) {
    return true;
  }
  return false;
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const publicPaths = ["/login", "/signup"];
  const userPaths = [];
  const adminPaths = [];

  // prevent accessing public pages while logged in
  if (token && isIncluded(publicPaths, pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // prevent accessing user only pages from unauthenticated users
  // if (token && publicPaths.includes(pathname)) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // prevent accessing admin only pages from user & unauthenticated users

  // And other routes is accessable in any situation
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
