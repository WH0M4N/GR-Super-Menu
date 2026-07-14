import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("admin-session")?.value;
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  if (!token) {
    if (isLoginPage) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const valid = await verifyToken(token);

  if (!valid) {
    const response = NextResponse.redirect(new URL("/admin/login", req.url));
    response.cookies.delete("admin-session");
    return response;
  }

  if (isLoginPage) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
