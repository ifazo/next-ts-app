import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const buyerRoutes = [
  "/service",
  "/dashboard",
  "/dashboard/buyer",
  "/dashboard/buyer/:page*",
  "/dashboard/buyer/booking",
  "/dashboard/buyer/wishlist",
];

const sellerRoutes = [
  "/service",
  "/dashboard",
  "/dashboard/seller",
  "/dashboard/seller/:page*",
  "/dashboard/seller/admins",
  "/dashboard/seller/categories",
];

const adminRoutes = [
  "/service",
  "/dashboard",
  "/dashboard/admin",
  "/dashboard/admin/:page*",
  "/dashboard/admin/users",
  "/dashboard/admin/services",
];

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
  });
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  } else if (
    token?.role === "admin" &&
    adminRoutes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.next();
  } else if (
    token?.role === "seller" &&
    sellerRoutes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.next();
  } else if (
    token?.role === "buyer" &&
    buyerRoutes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/service",
    "/dashboard",
    "/dashboard/buyer",
    "/dashboard/buyer/:page*",
    "/dashboard/seller",
    "/dashboard/seller/:page*",
    "/dashboard/admin",
    "/dashboard/admin/:page*",
  ],
};
