"use client";

// fetched specialist data
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import stethoscope from "@/assets/images/Stetoscope.png";
import gridSvg from "@/assets/svgs/grid.svg";

const Specialist = () => {
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/specialties`,
          { credentials: "include" },
        );
        const data = await res.json();
        setSpecialties(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!specialties.length) return null;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },

        background:
          "linear-gradient(180deg, rgba(244, 247, 254, 0.5) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(36, 153, 239, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(36, 153, 239, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center" }}>
          {/* Header */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{ textAlign: { xs: "center", md: "start" } }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              fontSize={{ xs: "1.5rem", md: "2.2rem" }}
              color="text.primary"
            >
              Explore Treatments Across Specialties
            </Typography>
            <Typography
              component="p"
              fontWeight={400}
              fontSize={{ xs: 16, md: 18 }}
              mt={1}
              color="text.secondary"
            >
              Experienced Doctors Across All Specialties
            </Typography>
          </Box>

          {/* Specialties Grid */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 3, md: 4 }}
            mt={6}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {specialties.slice(0, 6).map((specialty: any, index: number) => (
              <Box
                key={specialty.id}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={`/doctors?specialties=${specialty.title}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      width: "160px",
                      backgroundColor: "#fff",
                      border: "1px solid rgba(224, 224, 224, 0.6)",
                      borderRadius: "20px",
                      textAlign: "center",
                      p: { xs: 3, md: "40px 10px" },
                      boxShadow: "0px 10px 25px rgba(0,0,0,0.02)",
                      transition: "all 0.3s ease-in-out",
                      "& img": {
                        width: "55px",
                        height: "55px",
                        margin: "0 auto",
                        filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.05))",
                      },
                      "&:hover": {
                        borderColor: "primary.main",
                        boxShadow: "0px 15px 35px rgba(36, 153, 239, 0.12)",
                      },
                    }}
                  >
                    <Image
                      src={specialty.icon}
                      width={100}
                      height={100}
                      alt={specialty.title}
                    />
                    <Typography
                      fontWeight={600}
                      fontSize={17}
                      mt={2}
                      color="text.primary"
                    >
                      {specialty.title}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
          </Stack>

          {/* View All Button */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            mt={8}
          >
            <Link href="/doctors" passHref>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  px: 5,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                  fontWeight: 600,
                  borderWidth: "2px",
                  "&:hover": {
                    borderWidth: "2px",
                    backgroundColor: "rgba(36, 153, 239, 0.04)",
                  },
                }}
              >
                View ALL Specialties
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Specialist;
