"use client";

export const dynamic = "force-dynamic";

import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoctorsPage = () => {
  const searchParams = useSearchParams();
  const specialties = searchParams.get("specialties") || "";

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor`;
      if (specialties) {
        url += `?specialties=${encodeURIComponent(specialties)}`;
      }

      const res = await fetch(url, { cache: "no-store" });
      const data = await res.json();
      setDoctors(data?.data || []);
      setLoading(false);
    };

    fetchDoctors();
  }, [specialties]);

  return (
    <Container>
      <DashedLine />
      <ScrollCategory specialties={specialties} />

      <Box sx={{ mt: 2, p: 3 }}>
        {loading ? (
          <CircularProgress />
        ) : doctors.length ? (
          doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <Typography align="center">No Doctor Found</Typography>
        )}
      </Box>
    </Container>
  );
};

export default DoctorsPage;
