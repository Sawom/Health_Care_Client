"use client";

import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const DoctorsPage = () => {
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
        const response = await res.json();
        setDoctors(response?.data || []);
      } catch (error) {
        console.error("Error fetching doctors:", error);
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
        ) : doctors.length > 0 ? (
          doctors.map((doctor: Doctor, index: number) => (
            <Box key={doctor.id}>
              <DoctorCard doctor={doctor} />
              {index === doctors.length - 1 ? null : <DashedLine />}
            </Box>
          ))
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 10,
              bgcolor: "white",
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No Doctor Found With This Specialty
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default DoctorsPage;
