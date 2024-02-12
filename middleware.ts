// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const userRoutes = [
//   "/service",
//   "/dashboard",
//   "/dashboard/user",
//   "/dashboard/user/:page*",
//   "/dashboard/user/booking",
//   "/dashboard/user/wishlist",
// ];

// const adminRoutes = [
//   "/service",
//   "/dashboard",
//   "/dashboard/admin",
//   "/dashboard/admin/:page*",
//   "/dashboard/admin/users",
//   "/dashboard/admin/services",
// ];

// const superAdminRoutes = [
//   "/service",
//   "/dashboard",
//   "/dashboard/super_admin",
//   "/dashboard/super_admin/:page*",
//   "/dashboard/super_admin/admins",
//   "/dashboard/super_admin/categories",
// ];

// export async function middleware(request: NextRequest) {
  
//   if (!token) {
//     return NextResponse.redirect(new URL("/signin", request.url));
//   } else if (
//     token?.role === "user" &&
//     userRoutes.includes(request.nextUrl.pathname)
//   ) {
//     return NextResponse.next();
//   } else if (
//     token?.role === "admin" &&
//     adminRoutes.includes(request.nextUrl.pathname)
//   ) {
//     return NextResponse.next();
//   } else if (
//     token?.role === "super_admin" &&
//     superAdminRoutes.includes(request.nextUrl.pathname)
//   ) {
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// export const config = {
//   matcher: [
//     "/service",
//     "/dashboard",
//     "/dashboard/user",
//     "/dashboard/user/:page*",
//     "/dashboard/admin",
//     "/dashboard/admin/:page*",
//     "/dashboard/super_admin",
//     "/dashboard/super_admin/:page*",
//   ],
// };