import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal/Reveal";

const TopRatedDoctors = async () => {
  const placeholder =
    "https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor?page=1&limit=3`,
    { next: { revalidate: 30 } }, // Safety for Next.js caching
  );

  const response = await res.json();
  const doctors = response?.data || [];

  return (
    <section
      suppressHydrationWarning={true}
      className="relative my-10 py-20 px-4 sm:px-6 lg:px-10"
      style={{
        backgroundColor: "rgba(20,20,20,0.05)",
        clipPath: "polygon(0 0, 100% 3%, 100% 100%, 0 97%)",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={700}
          fontSize={{ xs: "1.8rem", md: "2.5rem" }}
        >
          Our Top Rated Doctors
        </Typography>
        <Typography
          component="p"
          fontSize={18}
          fontWeight={400}
          sx={{ mt: 2, color: "text.secondary" }}
        >
          Access to expert physicians and surgeons, advanced technologies{" "}
          <br className="hidden md:block" />
          and top-quality surgery facilities right here.
        </Typography>
      </Box>

      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {doctors.map((doctor: any, index: number) => (
            <Reveal key={doctor.id} index={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 280, // Fixed height for consistency
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

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" fontWeight={600} noWrap>
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.main"
                    fontWeight={500}
                  >
                    {doctor.qualification}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {doctor.designation}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={2}
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    📍 {doctor.address}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    pb: 3,
                  }}
                >
                  <Link
                    href={`/doctors/${doctor?.id}`}
                    style={{ width: "60%" }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ borderRadius: "8px", textTransform: "none" }}
                    >
                      Book
                    </Button>
                  </Link>
                  <Link href={`/doctors/${doctor.id}`} style={{ width: "48%" }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: "8px", textTransform: "none" }}
                    >
                      Profile
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Reveal>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Link href="/doctors" passHref>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "10px",
                px: 5,
                borderWidth: "2px",
                fontWeight: 600,
                "&:hover": { borderWidth: "2px" },
              }}
            >
              View ALL Doctors
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  );
};

export default TopRatedDoctors;
