"use client";

import chooseUsImg from "@/assets/choose-us.png";
import awardIcon from "@/assets/svgs/award-icon.svg";
import callIcon from "@/assets/svgs/call-icon.svg";
import careIcon from "@/assets/svgs/care-icon.svg";
import equipmentIcon from "@/assets/svgs/medical-equipment-icon.svg";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const servicesData = [
  {
    imageSrc: awardIcon,
    title: "Award Winning Service",
    description: "Recognized for excellence with trusted healthcare solutions.",
  },
  {
    imageSrc: careIcon,
    title: "Best Quality Pregnancy Care",
    description: "Providing safe and reliable care for mothers and babies.",
  },
  {
    imageSrc: equipmentIcon,
    title: "Complete Medical Equipments",
    description: "Fully equipped with modern tools for accurate treatment.",
  },
  {
    imageSrc: callIcon,
    title: "Dedicated Emergency Care",
    description: "24/7 emergency support with immediate response.",
  },
];

const WhyUs = () => {
  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      {/* Title Section - Wrappped in motion.div instead of using component prop */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography variant="h6" color="primary.main" fontWeight={700}>
            Why Us
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            fontSize={{ xs: "2rem", md: "2.8rem" }}
          >
            Why Choose Us
          </Typography>
        </Box>
      </motion.div>

      {/* Main Content */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
      >
        {/* Left Side: Services List */}
        <Stack spacing={3} sx={{ flex: 1, width: "100%" }}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  backgroundColor: "rgba(245, 245, 245, 0.8)",
                  p: 3,
                  borderRadius:
                    index % 2 === 0
                      ? "10px 10px 100px 10px"
                      : "10px 100px 10px 10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#fff",
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Box
                  sx={{ backgroundColor: "#fff", p: 2, borderRadius: "12px" }}
                >
                  <Image
                    src={service.imageSrc}
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>

        {/* Right Side: Image */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={chooseUsImg}
              width={500}
              height={500}
              alt="Why Choose Us"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </Box>
      </Stack>
    </Container>
  );
};

export default WhyUs;
