import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // mobile: column, desktop: row
        my: { xs: 6, md: 16 },
        gap: 4,
        alignItems: "center",
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1, position: "relative" }}>
        {/* Background Grid */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "300px", sm: "500px", md: "700px" },
            left: { xs: "-40px", md: "-90px" },
            top: { xs: "-60px", md: "-120px" },
            zIndex: -1,
          }}
        >
          <Image src={assets.svgs.grid?.src || assets.svgs.grid} alt="grid" />
        </Box>

        {/* Headings */}
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          fontSize={{ xs: "1.8rem", md: "3rem" }}
        >
          Healthier Hearts
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          fontSize={{ xs: "1.8rem", md: "3rem" }}
        >
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
          fontSize={{ xs: "1.8rem", md: "3rem" }}
        >
          Preventive Care
        </Typography>

        {/* Paragraph */}
        <Typography sx={{ my: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum
          iusto consequatur eius, doloribus nesciunt facere aliquid eveniet et.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Button variant="contained">Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Box>
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
        {/* Arrow */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "50px", md: "200px" },
            top: { xs: "-10px", md: "-30px" },
          }}
        >
          <Image src={assets.svgs.arrow} width={80} height={80} alt="arrow" />
        </Box>

        {/* Doctors Row */}
        <Box sx={{ display: "flex", gap: { xs: 1, md: 2 } }}>
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={200}
              height={320}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={200}
              height={300}
              alt="doctor2"
            />
          </Box>
        </Box>

        {/* Doctor 3 */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "180px", md: "220px" },
            left: { xs: "100px", md: "150px" },
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={200}
            height={200}
            alt="doctor3"
          />
        </Box>

        {/* Stethoscope */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-30px", md: "-50px" },
            right: 0,
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={150}
            height={150}
            alt="stethoscope"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
