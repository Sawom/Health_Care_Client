"use client";

import { Doctor } from "@/types/doctor";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1], // ektu smoother easing
    },
  },
};

const DoctorCard = ({ doctor, placeholder }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Hydration error theke bachte default structure return koro kintu animation chhara
    return (
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={2}
        sx={{ mb: 3, opacity: 0 }}
      >
        <Box sx={{ height: 240 }} />
      </Stack>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={2}
        sx={{
          mb: 3,
          width: "100%",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-6px)",
            "& .doctor-image": { transform: "scale(1.08)" },
          },
        }}
      >
        {/* --- Doctor Info Section --- */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          flex={1}
          gap={3}
          sx={{
            height: { md: 240 },
            bgcolor: "white",
            p: 3,
            borderRadius: "20px",
            border: "1px solid #f0f0f0",
            boxShadow: "0 2px 15px rgba(0,0,0,0.02)",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: 190 },
              height: 190,
              bgcolor: "#f9f9f9",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              className="doctor-image"
              sx={{
                transition: "transform 0.6s ease",
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                src={doctor?.profilePhoto || placeholder}
                alt={doctor?.name || "doctor"}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          <Stack flex={1} justifyContent="space-between">
            <Box>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ fontSize: "1.25rem", color: "#111" }}
              >
                {doctor?.name}
              </Typography>
              <Typography
                sx={{ color: "text.secondary", fontSize: "14px", mt: 0.5 }}
              >
                {doctor?.designation}
              </Typography>
              <Typography
                noWrap
                sx={{
                  color: "#777",
                  fontSize: "13px",
                  mt: 1.5,
                  fontWeight: 400,
                }}
              >
                {doctor?.doctorSpecialties?.length
                  ? "Specialties: " +
                    doctor.doctorSpecialties
                      .map((s: any) => s?.specialties?.title)
                      .join(", ")
                  : "General Practitioner"}
              </Typography>
            </Box>

            <Box sx={{ borderBottom: "1px dashed #eee", my: 2 }} />

            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                }}
              >
                <Typography
                  component="span"
                  sx={{ fontSize: "12px", fontWeight: 600, mr: 0.5 }}
                >
                  BDT
                </Typography>
                {doctor?.appointmentFee}
              </Typography>
              <Typography variant="caption">Incl. VAT</Typography>
            </Box>
          </Stack>
        </Stack>

        {/* --- Work & Experience Section --- */}
        <Stack
          sx={{
            height: { md: 240 },
            bgcolor: "white",
            width: { xs: "100%", md: "320px" },
            p: 3,
            borderRadius: "20px",
            border: "1px solid #f0f0f0",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#999",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Current Hospital
            </Typography>
            <Typography
              sx={{ fontWeight: 600, mt: 0.5, fontSize: "15px", color: "#333" }}
            >
              {doctor?.currentWorkingPlace}
            </Typography>
          </Box>

          <Box sx={{ borderBottom: "1px dashed #eee", my: 1.5 }} />

          <Stack gap={2.5}>
            <Box>
              <Typography
                sx={{
                  color: "#999",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Experience
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                {doctor?.experience}+{" "}
                <Typography
                  component="span"
                  sx={{ fontSize: "14px", fontWeight: 500 }}
                >
                  Years
                </Typography>
              </Typography>
            </Box>

            <Stack direction="row" gap={1.5}>
              <Link
                href={`/doctors/${doctor?.id}`}
                passHref
                style={{ flex: 1 }}
              >
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    py: 1,
                    borderColor: "#eee",
                    color: "#555",
                  }}
                >
                  Profile
                </Button>
              </Link>
              <Link
                href={`/doctors/${doctor?.id}`}
                passHref
                style={{ flex: 1 }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  disableElevation
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    py: 1,
                    fontWeight: 600,
                  }}
                >
                  Book Now
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default DoctorCard;
