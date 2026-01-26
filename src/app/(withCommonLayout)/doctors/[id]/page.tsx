// ১. "use client" সরিয়ে দিলাম যাতে কোনো পেইন না থাকে
import DashedLine from "@/components/UI/Doctor/DashedLine";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DoctorScheduleSlots from "../components/DoctorScheduleSlots";

type PropTypes = {
  params: Promise<{ id: string }>; // ২. টাইপটা প্রমিজ হিসেবে দিলাম
};

const InfoBoxStyles = {
  background:
    "linear-gradient(to bottom, rgba(21,134,253,0.3), rgba(255,255,255,1) 100%)",
  width: "100%",
  p: 3,
  "& h6": { color: "primary.main" },
  "& p": { color: "secondary.main" },
};

const DoctorsProfilePage = async ({ params }: PropTypes) => {
  // ৩. নেক্সট ১৫ এর নিয়ম অনুযায়ী params কে await করলাম
  const { id } = await params;

  const placeholder =
    "https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg";

  // ৪. সার্ভার সাইড ফেচিং
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor/${id}`,
    {
      cache: "no-store",
    },
  );
  const { data: doctor } = await res.json();

  const specialties =
    doctor?.doctorSpecialties?.map((ds: any) => ds.specialties.title) || [];

  return (
    <Container>
      <Box my={5}>
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Doctor&apos;s Profile Details
        </Typography>
        <Typography
          textAlign="center"
          mt={2}
          sx={{ width: "70%", margin: "10px auto" }}
          variant="h6"
        >
          Compassionate and dedicated doctor...
        </Typography>
      </Box>

      <Box sx={{ my: 10, p: 3, bgcolor: "#f8f8f8" }}>
        <Stack sx={{ bgcolor: "white", p: 3 }}>
          <Stack direction={{ xs: "column", md: "row" }} gap={3}>
            <Box
              sx={{
                width: { xs: "100%", md: 281 },
                height: 281,
                bgcolor: "#808080",
              }}
            >
              <Image
                src={doctor?.profilePhoto || placeholder}
                alt="doctor image"
                width={281}
                height={281}
                style={{ height: "281px", objectFit: "cover" }}
              />
            </Box>
            <Stack flex={1}>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {doctor?.name}
                </Typography>
                <Typography sx={{ my: "2px", color: "secondary.main" }}>
                  {doctor?.designation}
                </Typography>
                <Stack direction="row" alignItems="center" gap={2} mt={1}>
                  <Typography>Specialties in</Typography>
                  <Box>
                    {specialties.map((sp: string) => (
                      <Chip
                        key={sp}
                        label={sp}
                        color="primary"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                </Stack>
              </Box>
              <DashedLine />
              <Box>
                <Typography sx={{ my: "2px" }}>Working at</Typography>
                <Typography>{doctor?.currentWorkingPlace}</Typography>
              </Box>
              <DashedLine />
              <Box>
                <Stack direction="row">
                  <Typography fontWeight={"bold"} sx={{ color: "#141414" }}>
                    Consultation Fee
                  </Typography>
                  <Stack sx={{ ml: 2 }}>
                    <Typography>
                      Taka : {doctor?.appointmentFee} (incl. Vat)
                    </Typography>
                    <Typography variant="caption">Per consultation</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={3}
            justifyContent={"space-between"}
            sx={{ my: 4 }}
          >
            <Box sx={InfoBoxStyles}>
              <Typography variant="h6">Total Experience</Typography>
              <Typography>{doctor?.experience}+ Years</Typography>
            </Box>
            <Box sx={InfoBoxStyles}>
              <Typography variant="h6">Qualification</Typography>
              <Typography>{doctor?.qualification}</Typography>
            </Box>
            <Box sx={InfoBoxStyles}>
              <Typography variant="h6">Average Rating</Typography>
              <Typography>{doctor?.averageRating}</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <DoctorScheduleSlots id={id} />
    </Container>
  );
};

export default DoctorsProfilePage;
