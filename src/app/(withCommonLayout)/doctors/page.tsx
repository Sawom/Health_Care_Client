import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import { Box, Container } from "@mui/material";

interface PropType {
  searchParams: { specialties: string };
}

const Doctors = async ({ searchParams }: PropType) => {
  let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor`;

  if (searchParams.specialties) {
    url += `?specialties=${searchParams.specialties}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  const { data } = await res.json();

  return (
    <Container>
      <DashedLine />
      <ScrollCategory specialties={searchParams.specialties} />

      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
        {data?.length > 0 ? (
          data.map((doctor: Doctor, index: number) => (
            <Box key={doctor.id}>
              <DoctorCard doctor={doctor} />
              {index === data.length - 1 ? null : <DashedLine />}
            </Box>
          ))
        ) : (
          <Box>No Doctor Found With This Specialty</Box>
        )}
      </Box>
    </Container>
  );
};

export default Doctors;
