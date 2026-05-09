"use client"; 

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import DoctorScheduleSlots from "./DoctorScheduleSlots";

const DoctorDetailsClient = ({ doctor, specialties, placeholder, id }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Container sx={{ minHeight: "100vh" }} />;

  return (
    <Container>
     
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        my={9}
        textAlign="center"
      >
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{ letterSpacing: "-0.04em" }}
        >
          Doctor&apos;s Profile
        </Typography>
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        sx={{
          my: 10,
          p: { xs: 2, md: 4 },
          bgcolor: "#fcfcfc",
          borderRadius: "40px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Stack
          sx={{ bgcolor: "white", p: { xs: 3, md: 5 }, borderRadius: "32px" }}
        >
          <Stack direction={{ xs: "column", lg: "row", md: "row" }} gap={6}>
            <Box
              sx={{
                width: { xs: "100%", lg: 320, md: 320 },
                height: 350,
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={doctor?.profilePhoto || placeholder}
                alt="doctor"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Stack flex={1} gap={2}>
              <Typography variant="h4" fontWeight={800}>
                {doctor?.name}
              </Typography>
              <Typography sx={{ color: "primary.main", fontWeight: 600 }}>
                {doctor?.designation}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                {specialties?.map((sp: string) => (
                  <Chip key={sp} label={sp} variant="outlined" />
                ))}
              </Stack>

              <Divider sx={{ my: 2, borderStyle: "dashed" }} />

              <Box>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, color: "#999" }}
                >
                  WORKING AT
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  {doctor?.currentWorkingPlace}
                </Typography>
              </Box>

              <Box
                sx={{ bgcolor: "#f9f9f9", p: 3, borderRadius: "16px", mt: 2 }}
              >
                <Typography fontWeight={700}>
                  Consultation Fee: {doctor?.appointmentFee} BDT
                </Typography>
              </Box>
            </Stack>
          </Stack>

          {/* Stats */}
          <Stack direction={{ xs: "column", md: "row" }} gap={2} sx={{ mt: 6 }}>
            <Box
              sx={{
                flex: 1,
                p: 3,
                border: "1px solid #f4f4f4",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Typography variant="caption" fontWeight={700}>
                EXPERIENCE
              </Typography>

              <Typography variant="h6" fontWeight={700}>
                {doctor?.experience}+ Years
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                p: 3,
                border: "1px solid #f4f4f4",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <Typography variant="caption" fontWeight={700}>
                QUALIFICATION
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {doctor?.qualification}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <DoctorScheduleSlots id={id} />
    </Container>
  );
};

export default DoctorDetailsClient;
