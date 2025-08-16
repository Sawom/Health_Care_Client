"use client";
import femaleDocImg from "@/assets/how-it-works-img.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import searchIcon from "@/assets/icons/search-icon.png";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 my-16">
      {/* Heading Section */}
      <div className="text-center md:text-left">
        <p className="text-[#1586FD] text-lg font-medium mb-2">How it Works</p>
        <h1 className="text-3xl md:text-4xl font-semibold">
          4 Easy Steps to Book Your Appointment
        </h1>
        <p className="text-lg mt-3">
          Connect with top doctors, book consultations and get the right medical
          care without any hassle.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={femaleDocImg}
            alt="doctor image"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Image src={searchIcon} alt="search-icon" />
            <h2 className="text-lg font-medium mt-4">Find a Doctor</h2>
            <p className="text-sm mt-2 text-gray-600">
              Search by specialty, symptoms or location to find the right doctor
              for your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Image src={doctorIcon} alt="doctor-icon" />
            <h2 className="text-lg font-medium mt-4">View Profile</h2>
            <p className="text-sm mt-2 text-gray-600">
              Check doctor’s experience, qualifications and patient reviews
              before booking.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Image src={appointmentIcon} alt="appointment-icon" />
            <h2 className="text-lg font-medium mt-4">Book Appointment</h2>
            <p className="text-sm mt-2 text-gray-600">
              Choose a convenient time slot and confirm your online or in-clinic
              appointment instantly.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Image src={charityIcon} alt="charity-icon" />
            <h2 className="text-lg font-medium mt-4">Consult & Get Care</h2>
            <p className="text-sm mt-2 text-gray-600">
              Meet your doctor, discuss your health concerns and receive a
              personalized treatment plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
