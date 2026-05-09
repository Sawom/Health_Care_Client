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
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
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
    image:
      "https://images.unsplash.com/photo-1581578731522-745d44d8b518?auto=format&fit=crop&q=80&w=1000",
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
    image:
      "https://images.unsplash.com/photo-1579152276532-8320d9e8046c?auto=format&fit=crop&q=80&w=1000",
    direction: "row",
  },
];

const ServicesPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a" }}>
      {/* --- Minimalist Header --- */}
      <Container maxWidth="md" sx={{ pt: 15, pb: 10, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 5,
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.5rem" },
              color: "primary.main",
            }}
          >
            EXCELLENCE IN CARE
          </Typography>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              mt: 2,
              fontSize: { xs: "2rem", md: "3.2rem" },
              letterSpacing: "-2px",
            }}
          >
            Medical Services Redefined
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: "primary.main",
              mx: "auto",
              mt: 4,
              borderRadius: 2,
            }}
          />
        </motion.div>
      </Container>

      {/* --- Content Sections --- */}
      <Container maxWidth="lg">
        <Stack spacing={20} sx={{ pb: 20 }}>
          {services.map((service, index) => (
            <Stack
              key={index}
              direction={{ xs: "column", md: service.direction as any }}
              alignItems="center"
              gap={{ xs: 6, md: 10 }}
            >
              {/* Image Side */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "circOut" }}
                sx={{ flex: 1.2, width: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 380, md: 580 },
                    width: "100%",
                    borderRadius: "32px",
                    overflow: "hidden",
                    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.12)",
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
                  x: service.direction === "row" ? 50 : -50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                sx={{ flex: 1 }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight={800}
                  sx={{
                    mb: 1.5,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: 3,
                  }}
                >
                  {service.subtitle}
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  sx={{
                    mb: 3,
                    lineHeight: 1.1,
                    color: "#111",
                    fontSize: { xs: "2.2rem", md: "2.8rem" },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    mb: 4,
                    lineHeight: 1.8,
                    fontWeight: 400,
                  }}
                >
                  {service.description}
                </Typography>

                {/* Key Points List */}
                <List sx={{ mb: 2 }}>
                  {service.points.map((point, pIndex) => (
                    <ListItem key={pIndex} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircleOutlineIcon
                          color="primary"
                          sx={{ fontSize: 22 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontSize: "1.05rem",
                          color: "#222",
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
          py: 5,
          bgcolor: "#fafafa",
          textAlign: "center",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ mb: 1, color: "#333" }}
          >
            Need Assistance with Our Services?
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ color: "primary.main", mb: 2 }}
          >
            Help Desk: +8801150000000
          </Typography>
          <Typography variant="body1" sx={{ color: "#777", fontWeight: 500 }}>
            Available 24/7 for emergency support and general inquiries.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;
