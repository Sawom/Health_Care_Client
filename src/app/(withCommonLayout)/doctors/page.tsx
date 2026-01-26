"use client";

import DashedLine from "@/components/UI/Doctor/DashedLine";
import DoctorCard from "@/components/UI/Doctor/DoctorCard";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import { Doctor } from "@/types/doctor";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react"; 

// logic part in component
const DoctorsList = () => {
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
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [specialties]);

  return (
    <>
      <ScrollCategory specialties={specialties} />
      <Box sx={{ mt: 2, p: 3 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : doctors.length ? (
          doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <Typography align="center">No Doctor Found</Typography>
        )}
      </Box>
    </>
  );
};

// main page component which is handled by Suspense হ্যান্ডেল করবে
const DoctorsPage = () => {
  return (
    <Container>
      <DashedLine />
      {/* wrap with Suspense boundary */}
      <Suspense
        fallback={
          <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
            <CircularProgress />
          </Box>
        }
      >
        <DoctorsList />
      </Suspense>
    </Container>
  );
};

export default DoctorsPage;
