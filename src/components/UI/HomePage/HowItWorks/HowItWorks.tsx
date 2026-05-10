"use client";

import femaleDocImg from "@/assets/how-it-works-img.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import searchIcon from "@/assets/icons/search-icon.png";
import Image from "next/image";

import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    icon: searchIcon,
    title: "Find a Doctor",
    description:
      "Search by specialty, symptoms or location to find the right doctor for your needs.",
  },
  {
    icon: doctorIcon,
    title: "View Profile",
    description:
      "Check doctor’s experience, qualifications and patient reviews before booking.",
  },
  {
    icon: appointmentIcon,
    title: "Book Appointment",
    description:
      "Choose a convenient time slot and confirm your online or in-clinic appointment instantly.",
  },
  {
    icon: charityIcon,
    title: "Consult & Get Care",
    description:
      "Meet your doctor, discuss your health concerns and receive a personalized treatment plan.",
  },
];

const HowItWorks = () => {
  return (
    <Container sx={{ my: { xs: 8, md: 16 } }}>
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Box
          suppressHydrationWarning={true}
          sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 6, md: 8 } }}
        >
          <Typography variant="h6" color="primary.main" fontWeight={600} mb={1}>
            How it Works
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            fontSize={{ xs: "1.8rem", md: "2.5rem" }}
          >
            4 Easy Steps to Book Your Appointment
          </Typography>
        </Box>
      </motion.div>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
      >
        {/* Left Side: Image (Fixing the hide issue) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={femaleDocImg}
              alt="doctor image"
              width={450}
              height={450}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </Box>

        {/* Right Side: Steps Cards */}
        <Box sx={{ flex: 1.5, width: "100%" }}>
          <Stack
            direction="row"
            flexWrap="wrap"
            sx={{
              gap: 2.5,
              justifyContent: "center",
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 10px)",
                    md: "calc(50% - 10px)",
                  },
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "15px",
                  p: { xs: 3, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    backgroundColor: "rgba(21, 134, 253, 0.05)",
                    width: "fit-content",
                    p: 1.5,
                    borderRadius: "12px",
                  }}
                >
                  <Image src={step.icon} alt="icon" width={40} height={40} />
                </Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  fontSize="1.1rem"
                  mb={1}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  lineHeight={1.5}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default HowItWorks;
