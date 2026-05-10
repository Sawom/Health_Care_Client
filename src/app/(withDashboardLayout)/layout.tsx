"use client";
// import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardDrawer = dynamic(
  () => import("@/components/Dashboard/DashboardDrawer/DashboardDrawer"),
  { ssr: false },
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // if (!isLoggedIn()) {
  //   return router.push("/login");
  // }
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // শুধুমাত্র ব্রাউজারে মাউন্ট হওয়ার পর চেক করবে
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setIsLoaded(true);
    }
  }, [router]);

  if (!isLoaded) {
    return null;
  }

  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout;
