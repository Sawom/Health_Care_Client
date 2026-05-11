"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import banner from "../../../assets/services/banner-service.jpg";
import img1 from "../../../assets/services/vCare.jpg";
import img2 from "../../../assets/services/homeCare.jpg";
import img3 from "../../../assets/services/lab.jpg";

const services = [
  {
    title: "Virtual Care & Remote Monitoring",
    subtitle: "Telemedicine 2.0",
    description:
      "Our advanced telemedicine ecosystem connects you with board-certified specialists regardless of your geographical location. We go beyond simple video calls, providing a comprehensive digital clinic experience where doctors can access your real-time health data and medical history securely.",
    points: [
      "24/7 On-demand specialist video consultations",
      "Instant digital prescriptions & automated follow-ups",
      "End-to-end patient data encryption for maximum privacy",
      "Direct chat support with medical assistants",
    ],
    image: img1,
    direction: "row",
  },
  {
    title: "Personalized Home Healthcare",
    subtitle: "In-Home Medical Care",
    description:
      "Avoid the stress of hospital visits with our elite home healthcare services. From geriatric support to post-operative recovery, our certified nursing teams and paramedics bring professional clinical care directly to your doorstep, ensuring comfort and peace of mind for your family.",
    points: [
      "Chronic disease management (Diabetes & Hypertension)",
      "Professional physiotherapy & rehabilitation programs",
      "At-home sample collection & vital monitoring",
      "Emergency nursing support & wound care management",
    ],
    image: img2,
    direction: "row-reverse",
  },
  {
    title: "Precision Lab & AI Diagnostics",
    subtitle: "Advanced Diagnostics",
    description:
      "Experience the next generation of pathology with our robotic laboratory technology. Every step—from sample processing to result generation—is fully automated to eliminate human error, providing you with faster, deeper, and more accurate clinical insights.",
    points: [
      "Advanced molecular & biochemical screenings",
      "AI-driven pathology analysis for precision results",
      "Digital access to radiology & lab reports within hours",
      "Seamless integration with doctor consultation portals",
    ],
    image: img3,
    direction: "row",
  },
];

const ServicesPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a", overflowX: "hidden" }}>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={banner}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Banner"
        />

        <div className="absolute inset-0 bg-black/65"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 md:px-6 w-full"
        >
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 italic break-words">
            Our Services
          </h1>
          <p className="text-white text-base md:text-2xl max-w-3xl mx-auto font-light break-words">
            Experience world-class healthcare with our technology-driven medical
            services tailored for your well-being.
          </p>
        </motion.div>
      </section>

      {/* --- Minimalist Header --- */}
      <Container
        maxWidth="md"
        sx={{
          pt: { xs: 8, md: 15 },
          pb: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: { xs: 2, md: 5 },
              fontWeight: 700,
              fontSize: { xs: "0.8rem", md: "1.5rem" },
              color: "primary.main",
              display: "block",
              wordBreak: "break-word",
            }}
          >
            EXCELLENCE IN CARE
          </Typography>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              mt: 2,
              fontSize: { xs: "1.8rem", md: "3.2rem" },
              letterSpacing: "-1px",
              lineHeight: 1.2,
              wordWrap: "break-word", // লম্বা টেক্সট ভেঙে নিচে যাবে
            }}
          >
            Medical Services Redefined
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: "primary.main",
              mx: "auto",
              mt: 3,
              borderRadius: 2,
            }}
          />
        </motion.div>
      </Container>

      {/* --- Content Sections --- */}
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 10, md: 20 }} sx={{ pb: { xs: 10, md: 20 } }}>
          {services.map((service, index) => (
            <Stack
              key={index}
              direction={{ xs: "column", md: service.direction as any }}
              alignItems="center"
              gap={{ xs: 4, md: 10 }}
            >
              {/* Image Side */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "circOut" }}
                sx={{ flex: 1.2, width: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 250, sm: 350, md: 580 },
                    width: "100%",
                    borderRadius: { xs: "16px", md: "32px" },
                    overflow: "hidden",
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                  />
                </Box>
              </Box>

              {/* Text Content Side */}
              <Box
                component={motion.div}
                initial={{
                  opacity: 0,
                  y: 30,
                  // এখানে সরাসরি অবজেক্ট না দিয়ে একটি নির্দিষ্ট ভ্যালু দিন
                  // অথবা নেগেটিভ/পজিটিভ ভ্যালু কন্ডিশনাললি হ্যান্ডেল করুন
                  x: service.direction === "row" ? 50 : -50,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                sx={{
                  flex: 1,
                  width: "100%",
                  // যদি মোবাইলে (xs) x-axis মুভমেন্ট না চান, তবে sx দিয়ে সেটি কন্ট্রোল করা ভালো
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight={800}
                  sx={{
                    mb: 1.5,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  {service.subtitle}
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  sx={{
                    mb: 2,
                    lineHeight: 1.2,
                    color: "#111",
                    fontSize: { xs: "1.75rem", md: "2.8rem" },
                    wordWrap: "break-word",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    mb: 3,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    textAlign: "justify", // টেক্সট সুন্দর দেখানোর জন্য
                    wordWrap: "break-word",
                  }}
                >
                  {service.description}
                </Typography>

                {/* Key Points List */}
                <List sx={{ mb: 2 }}>
                  {service.points.map((point, pIndex) => (
                    <ListItem key={pIndex} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleOutlineIcon
                          color="primary"
                          sx={{ fontSize: 20 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontSize: { xs: "0.9rem", md: "1.05rem" },
                          color: "#222",
                          sx: { wordBreak: "break-word" },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Container>

      {/* --- Simple Support Section --- */}
      <Box
        sx={{
          py: { xs: 3, md: 3 },
          px: 2,
          bgcolor: "#fafafa",
          textAlign: "center",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              mb: 1,
              color: "#333",
              fontSize: { xs: "1.5rem", md: "2.125rem" },
            }}
          >
            Need Assistance?
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              color: "primary.main",
              mb: 2,
              fontSize: { xs: "1.2rem", sm: "1.8rem", md: "3rem" },
              wordBreak: "break-all", // ফোন নম্বর বড় হলে ভেঙে যাবে
            }}
          >
            Help Desk: +8801150000000
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#777", fontWeight: 500, fontSize: "0.9rem" }}
          >
            Available 24/7 for emergency support and general inquiries.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;
