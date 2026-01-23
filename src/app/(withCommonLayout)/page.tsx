"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/UI/HomePage/HeroSection/HeroSection"),
  { ssr: false },
);
const Specialist = dynamic(
  () => import("@/components/UI/HomePage/Specialist/Specialist"),
  { ssr: false },
);
const TopRatedDoctors = dynamic(
  () => import("@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors"),
  { ssr: false },
);
const WhyUs = dynamic(() => import("@/components/UI/HomePage/WhyUs/WhyUs"), {
  ssr: false,
});
const HowItWorks = dynamic(
  () => import("@/components/UI/HomePage/HowItWorks/HowItWorks"),
  { ssr: false },
);
const Stats = dynamic(() => import("@/components/UI/HomePage/Stats/Stats"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </>
  );
};

export default HomePage;
