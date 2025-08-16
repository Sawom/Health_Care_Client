import assets from "@/assets";
import chooseUsImg from "@/assets/choose-us.png";
import Image from "next/image";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description: "Recognized for excellence with trusted healthcare solutions.",
  },
  {
    imageSrc: assets.svgs.care,
    title: "Best Quality Pregnancy Care",
    description: "Providing safe and reliable care for mothers and babies.",
  },
  {
    imageSrc: assets.svgs.equipment,
    title: "Complete Medical Equipments",
    description: "Fully equipped with modern tools for accurate treatment.",
  },
  {
    imageSrc: assets.svgs.call,
    title: "Dedicated Emergency Care",
    description: "24/7 emergency support with immediate response.",
  },
];

const WhyUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title Section */}
      <div className="text-center">
        <h6 className="text-primary font-bold text-lg">Why Us</h6>
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 items-center">
        {/* Left Side Services */}
        <div className="space-y-5">
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-[10px_10px_100px_10px]">
            <div className="bg-white p-4 rounded-lg">
              <Image src={servicesData[0].imageSrc} width={50} alt="award" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">
                {servicesData[0].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {servicesData[0].description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-[10px_100px_10px_10px]">
            <div className="bg-white p-3 rounded-lg">
              <Image src={servicesData[1].imageSrc} width={50} alt="award" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {servicesData[1].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {servicesData[1].description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-[10px_10px_100px_10px]">
            <div className="bg-white p-3 rounded-lg">
              <Image src={servicesData[2].imageSrc} width={50} alt="award" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {servicesData[2].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {servicesData[2].description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-[10px_100px_10px_10px]">
            <div className="bg-white p-3 rounded-lg">
              <Image src={servicesData[3].imageSrc} width={50} alt="award" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                {servicesData[3].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {servicesData[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center">
          <Image src={chooseUsImg} width={400} alt="choose us" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
