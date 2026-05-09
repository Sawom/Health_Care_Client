"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const statsData = [
  {
    count: "100+",
    label: "Expert Doctors",
    icon: <HealthAndSafetyIcon />,
    color: "#1586FD",
  },
  {
    count: "26+",
    label: "Expert Services",
    icon: <MedicalServicesIcon />,
    color: "#00E5FF",
  },
  {
    count: "10K+",
    label: "Happy Patients",
    icon: <PeopleIcon />,
    color: "#7C4DFF",
  },
  {
    count: "10+",
    label: "Award Winners",
    icon: <EmojiEventsIcon />,
    color: "#FFB300",
  },
];

const Stats = () => {
  return (
    <Container sx={{ my: { xs: 6, md: 10 } }}>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        sx={{ width: "100%" }}
      >
        {statsData.map((stat, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            sx={{
              width: {
                xs: "100%",
                sm: "210px",
                md: "210px",
              },
              p: 4,
              textAlign: "center",
              borderRadius: "24px",
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* Icon Wrapper */}
            <Box
              sx={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "18px",
                background: `${stat.color}10`,
                color: stat.color,
                mb: 2.5,
                "& svg": { fontSize: 32 },
              }}
            >
              {stat.icon}
            </Box>

            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                color: "#1A1A1A",
                mb: 0.5,
              }}
            >
              {stat.count}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={600}
              sx={{ fontSize: "1rem", opacity: 0.8 }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Stats;
