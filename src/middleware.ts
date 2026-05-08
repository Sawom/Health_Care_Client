import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/register"];

const commonPrivateRoutes = [
  // "/dashboard",
  "/dashboard/change-password",
  "/doctors",
];

const roleBasedPrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

// redirect to profile after login.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  // ১. যদি টোকেন না থাকে
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // ২. টোকেন ডিকোড করা
  let decodedData: any = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken);
  }
  const role = decodedData?.role;

  // ৩. স্পেশাল হ্যান্ডলিং: ইউজার যদি সরাসরি /dashboard এ হিট করে
  if (accessToken && pathname === "/dashboard") {
    if (role) {
      const formattedRole = role.toLowerCase().replace("_", "-");
      return NextResponse.redirect(
        new URL(`/dashboard/${formattedRole}/profile`, request.url),
      );
    }
  }

  // ৪. কমন প্রাইভেট রুট চেক (change-password, doctors ইত্যাদি)
  const isCommonRoute = commonPrivateRoutes.includes(pathname);
  if (accessToken && isCommonRoute) {
    return NextResponse.next();
  }

  // ৫. রোল ভিত্তিক প্রাইভেট রুট চেক
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  // যদি উপরের কোনো কন্ডিশন না মিলে
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
