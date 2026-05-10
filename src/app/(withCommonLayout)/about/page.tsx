"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  LocalHospital,
  HealthAndSafety,
  Psychology,
  Favorite,
  Visibility,
  CheckCircleOutline,
  AutoGraph,
} from "@mui/icons-material";

import Image from "next/image";
import aboutus from "@/assets/about.jpg";

// 1. Full Content JSON
const contentData = {
  hero: {
    title: "About Us",
    subtitle:
      "A Legacy of Trust, Innovation, and Compassionate Medical Service",
    bgImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053",
  },
  intro: {
    heading: "Redefining Medical Standards",
    description1:
      "ARS Health Care stands as a premier institution dedicated to the highest standards of medical excellence. We bridge the gap between world-class technology and personalized patient care, ensuring that every individual who walks through our doors feels heard and healed.",
    description2:
      "Our multidisciplinary approach combines state-of-the-art facilities with a heart for service. From digital diagnostic precision to advanced surgical interventions, we are committed to your long-term well-being and recovery.",
    stats: [
      {
        label: "Successful Surgeries",
        value: "12,000+",
        icon: <CheckCircleOutline />,
      },
      { label: "Expert Consultants", value: "85+", icon: <HealthAndSafety /> },
      { label: "Medical Staff", value: "450+", icon: <LocalHospital /> },
      { label: "Years of Excellence", value: "10+", icon: <AutoGraph /> },
    ],
  },
  departments: [
    {
      title: "Neurology",
      icon: <Psychology />,
      desc: "Expert care for brain and spinal disorders using advanced neuro-imaging and rehabilitation protocols.",
    },
    {
      title: "Cardiology",
      icon: <Favorite />,
      desc: "Complete heart care services including non-invasive diagnostics and emergency cardiac interventions.",
    },
    {
      title: "Urology",
      icon: <HealthAndSafety />,
      desc: "Advanced treatment for kidney and prostate health using minimally invasive surgical techniques.",
    },
    {
      title: "Orthopedic",
      icon: <AutoGraph />,
      desc: "Comprehensive bone and joint care, specialized in trauma and complex joint replacements.",
    },
    {
      title: "Dentistry",
      icon: <LocalHospital />,
      desc: "Modern oral health solutions focusing on precision orthodontics and cosmetic dental implants.",
    },
    {
      title: "Ophthalmology",
      icon: <Visibility />,
      desc: "Advanced vision care with the latest laser technology for cataract and vision correction surgeries.",
    },
  ],
  missionVision: {
    mission:
      "To deliver ethical, accessible, and high-quality healthcare that improves the lives of the global community through constant innovation.",
    vision:
      "To become the most trusted healthcare leader, recognized for clinical excellence and patient-first culture across the globe.",
  },
  qualityPolicies: [
    {
      title: "Patient First",
      text: "We prioritize patient needs and emotional well-being above all organizational goals.",
    },
    {
      title: "Clinical Excellence",
      text: "Adopting global evidence-based practices for superior and safer medical outcomes.",
    },
    {
      title: "Safety Protocols",
      text: "Strict adherence to international hygiene and zero-infection standards in all units.",
    },
    {
      title: "Staff Training",
      text: "Continuous professional development for our team to stay at the forefront of medical tech.",
    },
    {
      title: "Total Transparency",
      text: "Full honesty in medical diagnosis, treatment processes, and zero hidden financial costs.",
    },
    {
      title: "Digital Integration",
      text: "Utilizing AI-driven data to track patient recovery and optimize care delivery systems.",
    },
  ],
};

// 2. TypeScript Safe Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const AboutUs = () => {
  // to avoid Hydration Error and show content
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="bg-white min-h-screen" />;
  }

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <Image
          src={aboutus}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Banner"
        />

        <div className="absolute inset-0 bg-black/65"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">
            {contentData.hero.title}
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto font-light">
            {contentData.hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-slate-400 font-bold tracking-widest uppercase text-sm">
              Introduction
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
              {contentData.intro.heading}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed italic">
              {contentData.intro.description1}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {contentData.intro.description2}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-8"
          >
            {contentData.intro.stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white border border-slate-100 p-8 rounded-3xl text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow"
              >
                <div className="text-slate-300 mb-2 scale-125">{stat.icon}</div>
                <h3 className="text-3xl font-black text-slate-900">
                  {stat.value}
                </h3>
                <p className="text-slate-500 font-semibold uppercase text-[10px] tracking-widest mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-slate-50/50 py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Excellence Centers
            </h2>
            <div className="h-1 w-20 bg-slate-900 mx-auto rounded-full"></div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {contentData.departments.map((dept, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="text-slate-400 group-hover:text-slate-900 transition-colors duration-300 mb-6 scale-150 origin-left">
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-4">
                  {dept.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {dept.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-15  container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Mission & Vision
          </h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto rounded-full"></div>
        </div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="p-12 rounded-[1rem]  shadow-xl">
            <h4 className="text-xs uppercase tracking-widest font-bold  mb-4">
              The Purpose
            </h4>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-slate-700 text-xl font-light leading-relaxed tracking-tight">
              {contentData.missionVision.mission}
            </p>
          </div>

          <div className="p-12 rounded-[1rem]  shadow-xl">
            <h4 className="text-xs uppercase tracking-widest font-bold  mb-4">
              The Future
            </h4>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-slate-700 text-xl font-light leading-relaxed tracking-tight">
              {contentData.missionVision.vision}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quality Policy */}
      <section className="py-24 px-6 bg-white border-top border-slate-50">
        <div className="container mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Quality Assurance Policy
            </h2>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
              Standardized Healthcare Systems
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {contentData.qualityPolicies.map((policy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-default"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-slate-900 transition-all"></div>
                  <h4 className="font-black text-lg text-slate-800 uppercase tracking-tighter">
                    {policy.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-11">
                  {policy.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
