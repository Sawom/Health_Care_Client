"use client";

import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardHomePage = () => {
  const router = useRouter();
  const userInfo: any = getUserInfo();

  useEffect(() => {
    if (userInfo && userInfo.role) {
      const role = userInfo.role.toLowerCase().replace("_", "-");
      router.push(`/dashboard/${role}/profile`);
    } else {
      // if there is no user, redirect to login
      router.push("/login");
    }
  }, [userInfo, router]);

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <h1 className="text-2xl font-semibold">Redirecting to your profile...</h1>
    </div>
  );
};

export default DashboardHomePage;
