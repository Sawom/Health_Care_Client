// fetched specialist data
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30, // update content after 30s automatically if changes
    },
  });

  const { data: specialties } = await res.json();
  //   console.log(specialties);
  return (
    <Container>
      <Box
        sx={{
          my: { xs: 8, md: 10 }, //  Mobile margin: xs:8, Desktop: md:10
          textAlign: "center",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "start" }, //  Mobile: center, Desktop: start
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            fontSize={{ xs: "1.5rem", md: "2rem" }} //  Mobile font smaller, Desktop bigger
          >
            Explore Treatments Across Specialties
          </Typography>
          <Typography
            component="p"
            fontWeight={300}
            fontSize={{ xs: 16, md: 18 }} //  Mobile font smaller, Desktop bigger
            mt={1}
          >
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>

        {/* Specialties Grid */}
        <Stack
          direction={{ xs: "column", sm: "row" }} //  Mobile: column, Desktop: row
          gap={{ xs: 3, md: 4 }} //  Mobile gap smaller, Desktop bigger
          mt={5}
          flexWrap="wrap" //  Mobile wrap for small screens
          justifyContent="center"
          alignItems="center"
        >
          {specialties.slice(0, 6).map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 150px" }, //  Mobile: full width, Desktop: fixed width
                maxWidth: "150px",
                backgroundColor: "rgba(245, 245, 245,1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                p: { xs: 3, md: "40px 10px" }, //  Mobile padding smaller
                "& img": {
                  width: { xs: "40px", md: "50px" }, //  Mobile image smaller
                  height: { xs: "40px", md: "50px" }, //  Mobile image smaller
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid rgba(36, 153, 239, 1)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.5s",
                },
              }}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt="specialty icon"
              />
              <Box>
                <Typography
                  component="p"
                  fontWeight={600}
                  fontSize={{ xs: 16, md: 18 }} //  Mobile font smaller
                  mt={2}
                >
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* View All Button */}
        <Button
          variant="outlined"
          sx={{
            mt: 3, //  Mobile margin top
          }}
        >
          View ALL
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
