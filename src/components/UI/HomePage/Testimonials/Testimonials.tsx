"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Stack,
  Paper,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";

// Sample testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    comment:
      "The online consultation feature is a lifesaver! I was able to talk to a specialist within minutes from my home.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Dr. Robert Smith",
    role: "Neurologist",
    comment:
      "As a doctor, the dashboard and patient history management system are very intuitive and easy to use.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=robert",
  },
  {
    name: "Michael Chen",
    role: "Regular User",
    comment:
      "Affordable health packages and very transparent pricing. Highly recommend this platform to everyone.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#f8faff" }}>
      <Container>
        {/* Section Header */}
        <Box textAlign="center" mb={8}>
          <Typography color="primary" fontWeight={700} variant="h6">
            Testimonials
          </Typography>
          <Typography variant="h4" fontWeight={800} mt={1}>
            What Our Users Say
          </Typography>
          <Typography color="text.secondary" mt={2} maxWidth="600px" mx="auto">
            Real feedback from our patients and medical professionals about
            their experience with our platform.
          </Typography>
        </Box>

        {/* Testimonial Cards Layout - Responsive Flexbox */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            alignItems: "stretch", // Ensures equal height cards
          }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              component={motion.div}
              // Framer Motion Animation: Fade in and slide up
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }} // Floating effect on hover
              sx={{
                flex: "1 1 300px",
                maxWidth: "350px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e0e0e0",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {/* Rating Stars */}
                <Rating
                  value={item.rating}
                  readOnly
                  size="small"
                  sx={{ mb: 2 }}
                />

                {/* User Comment */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontStyle: "italic", flexGrow: 1, mb: 3 }}
                >
                  {item.comment}
                </Typography>

                {/* User Info Section */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={item.avatar}
                    sx={{ width: 50, height: 50, border: "2px solid #1586FD" }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="primary"
                      fontWeight={600}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
