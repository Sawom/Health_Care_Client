"use client";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export const Reveal = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    sx={{ height: "100%" }}
  >
    {children}
  </Box>
);
