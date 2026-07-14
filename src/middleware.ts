import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../lib/auth";

export async function middleware(req: NextRequest) {
  console.log("🔥 Middleware:", req.nextUrl.pathname);

  const token = req.cookies.get("admin-session")?.value;

  // Allow access to the login page
  if (req.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  // No cookie -> go to login
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Invalid cookie -> go to login
  const valid = await verifyToken(token);

  if (!valid) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
