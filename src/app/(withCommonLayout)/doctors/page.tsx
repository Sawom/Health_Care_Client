"use client";

import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoctorsClient = () => {
  const searchParams = useSearchParams();
  const specialties = searchParams.get("specialties") || "";

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        let url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor`;
        if (specialties) {
          url += `?specialties=${encodeURIComponent(specialties)}`;
        }

        const res = await fetch(url, { cache: "no-store" });
        const data = await res.json();
        setDoctors(data?.data || []);
      } catch (err) {
        console.error(err);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [specialties]);

  return (
    <Container>
      <DashedLine />
      <ScrollCategory specialties={specialties} />

      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light", borderRadius: 1 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress />
          </Box>
        ) : doctors.length ? (
          doctors.map((doctor, index) => (
            <Box key={doctor.id}>
              <DoctorCard doctor={doctor} />
              {index !== doctors.length - 1 && <DashedLine />}
            </Box>
          ))
        ) : (
          <Typography align="center" py={10}>
            No Doctor Found With This Specialty
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default DoctorsClient;
