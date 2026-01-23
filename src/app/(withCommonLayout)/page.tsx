import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/UI/HomePage/HeroSection/HeroSection"),
  { ssr: true },
);
const Specialist = dynamic(
  () => import("@/components/UI/HomePage/Specialist/Specialist"),
  { ssr: true },
);
const TopRatedDoctors = dynamic(
  () => import("@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors"),
  { ssr: true },
);
const WhyUs = dynamic(() => import("@/components/UI/HomePage/WhyUs/WhyUs"), {
  ssr: true,
});
const HowItWorks = dynamic(
  () => import("@/components/UI/HomePage/HowItWorks/HowItWorks"),
  { ssr: true },
);
const Stats = dynamic(() => import("@/components/UI/HomePage/Stats/Stats"), {
  ssr: true,
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
