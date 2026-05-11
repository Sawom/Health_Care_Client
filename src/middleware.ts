import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/register"];

const commonPrivateRoutes = ["/dashboard/change-password", "/doctors"];

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

  // ১. লগআউট থাকলে লগইন/রেজিস্টার এ যেতে দাও, অন্যথায় লগইনে পাঠাও
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // যদি ইউজার ড্যাশবোর্ড বা প্রাইভেট রুটে যেতে চায়
      if (
        pathname.startsWith("/dashboard") ||
        commonPrivateRoutes.includes(pathname)
      ) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      // পাবলিক রুটের জন্য যেও (যেমন: হোমপেজ)
      return NextResponse.next();
    }
  }

  // ২. টোকেন ডিকোড করা
  let decodedData: any = null;
  if (accessToken) {
    try {
      decodedData = jwtDecode(accessToken);
    } catch (err) {
      // টোকেন ইনভ্যালিড হলে কুকি ডিলিট করে লগইনে পাঠানো ভালো
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("accessToken");
      return response;
    }
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
  if (commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // ৫. রোল ভিত্তিক প্রাইভেট রুট চেক
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  // যদি কোনো কন্ডিশন না মিলে এবং রুটটি প্রাইভেট হয় তবেই হোমে পাঠাও
  if (
    pathname.startsWith("/dashboard") ||
    commonPrivateRoutes.includes(pathname)
  ) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
