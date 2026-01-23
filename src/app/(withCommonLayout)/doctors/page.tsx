import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import { Box, Container } from "@mui/material";

interface PropType {
  searchParams: Promise<{ specialties: string }>;
}

const Doctors = async ({ searchParams }: PropType) => {
  //  searchParams must with await
  const params = await searchParams;
  const specialties = params.specialties;

  let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor`;

  if (specialties) {
    url += `?specialties=${specialties}`;
  }

  // Safe Fetch
  let data: Doctor[] = [];
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });
    const response = await res.json();
    data = response?.data || [];
  } catch (err) {
    console.error("Fetch error during build:", err);
  }

  return (
    <Container>
      <DashedLine />
      <ScrollCategory specialties={specialties} />

      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
        {data.length > 0 ? (
          data.map((doctor: Doctor, index: number) => (
            <Box key={doctor.id}>
              <DoctorCard doctor={doctor} />
              {index === data.length - 1 ? null : <DashedLine />}
            </Box>
          ))
        ) : (
          <Box sx={{ textAlign: "center", py: 5 }}>
            No Doctor Found With This Specialty
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Doctors;
