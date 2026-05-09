"use client";

import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.png";
import doctor3 from "@/assets/images/doctor3.png";
import stethoscope from "@/assets/images/Stetoscope.png";
import arrow from "@/assets/svgs/arrow.svg";
import gridSvg from "@/assets/svgs/grid.svg";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 6, md: 16 },
        gap: 4,
        alignItems: "center",
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1, position: "relative" }}>
        {/* Background Grid */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          sx={{
            position: "absolute",
            width: { xs: "300px", sm: "500px", md: "700px" },
            left: { xs: "-40px", md: "-90px" },
            top: { xs: "-60px", md: "-120px" },
            zIndex: -1,
            opacity: 0.6,
          }}
        >
          <Image src={gridSvg} alt="grid" priority />
        </Box>

        {/* Headings - Simple Inline Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={700}
            fontSize={{ xs: "1.8rem", md: "3.5rem" }}
            sx={{ lineHeight: 1.2 }}
          >
            Healthier Hearts
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={700}
            fontSize={{ xs: "1.8rem", md: "3.5rem" }}
            sx={{ lineHeight: 1.2 }}
          >
            Come From
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={700}
            color="primary.main"
            fontSize={{ xs: "1.8rem", md: "3.5rem" }}
            sx={{ lineHeight: 1.2 }}
          >
            Preventive Care
          </Typography>
        </motion.div>

        {/* Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              my: 4,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              color: "text.secondary",
              lineHeight: 1.7,
              maxWidth: "550px",
            }}
          >
            Clinical excellence must be the priority for any health care service
            provider. ARS Hospital ensures the best healthcare service comprise
            of professional (clinical) service excellence with outstanding
            personal service.
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Link href="/about" passHref>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.2,
                  borderWidth: "2px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { borderWidth: "2px" },
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Box>

      {/* Right Images */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: { xs: 6, md: 0 },
        }}
      >
        {/* Animated Arrow */}
        <Box
          component={motion.div}
          animate={{ x: [0, 8, 0], y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            left: { xs: "20px", md: "120px" },
            top: { xs: "-20px", md: "-40px" },
            zIndex: 2,
          }}
        >
          <Image src={arrow} width={80} height={80} alt="arrow" />
        </Box>

        {/* Doctors Row */}
        <Box sx={{ display: "flex", gap: { xs: 1, md: 2 } }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            mt={4}
            sx={{
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image src={doctor1} width={200} height={320} alt="doctor1" />
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image src={doctor2} width={200} height={300} alt="doctor2" />
          </Box>
        </Box>

        {/* Doctor 3 */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          sx={{
            position: "absolute",
            top: { xs: "180px", md: "220px" },
            left: { xs: "100px", md: "150px" },
            boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
            borderRadius: "12px",
            overflow: "hidden",
            border: "4px solid white",
          }}
        >
          <Image src={doctor3} width={200} height={200} alt="doctor3" />
        </Box>

        {/* Stethoscope */}
        <Box
          component={motion.div}
          animate={{ rotate: [0, 5, 0], y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          sx={{
            position: "absolute",
            bottom: { xs: "-30px", md: "-50px" },
            right: 0,
            zIndex: -1,
            opacity: 0.7,
          }}
        >
          <Image src={stethoscope} width={150} height={150} alt="stethoscope" />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
