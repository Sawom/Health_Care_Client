"use client";

import { Doctor } from "@/types/doctor";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const placeholder =
    "https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg";

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={2}
      sx={{
        mb: 2,
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* doctor info */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        flex={1}
        gap={3}
        sx={{
          height: { md: 235 },
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: 190 },
            height: 190,
            bgcolor: "#f0f0f0",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src={doctor?.profilePhoto ? doctor.profilePhoto : placeholder}
            alt="doctor image"
            width={190}
            height={190}
            style={{
              width: "100%",
              height: "190px",
              objectFit: "cover",
            }}
          />
        </Box>

        <Stack flex={1} justifyContent="space-between">
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              {doctor?.name}
            </Typography>
            <Typography
              sx={{ my: "2px", color: "secondary.main", fontSize: "14px" }}
            >
              {doctor?.designation}
            </Typography>
            <Typography
              noWrap
              sx={{ color: "secondary.main", fontSize: "13px", mt: 1 }}
            >
              {doctor?.doctorSpecialties?.length
                ? "Specialties in " +
                  doctor?.doctorSpecialties
                    ?.map((specialty: any) => specialty?.specialties?.title)
                    .join(", ")
                : "General Practitioner"}
            </Typography>
          </Box>

          <Box
            sx={{
              borderBottom: "2px dashed",
              borderColor: "secondary.light",
              my: { xs: 2, md: 0 },
            }}
          />

          <Box>
            <Typography
              variant="h6"
              sx={{ color: "primary.main", fontWeight: "600", lineHeight: 1 }}
            >
              Taka : {doctor?.appointmentFee}
            </Typography>
            <Typography variant="caption" color="secondary.main">
              Per consultation (incl. Vat)
            </Typography>
          </Box>
        </Stack>
      </Stack>

      {/*experience and others info*/}
      <Stack
        sx={{
          height: { md: 235 },
          bgcolor: "white",
          width: { xs: "100%", md: "320px" },
          p: 3,
          borderRadius: 2,
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography color="secondary.main" fontSize="14px">
            Working in
          </Typography>
          <Typography sx={{ fontWeight: "600", mt: "2px", fontSize: "15px" }}>
            {doctor?.currentWorkingPlace}
          </Typography>
        </Box>

        <Box
          sx={{
            borderBottom: "2px dashed",
            borderColor: "secondary.light",
            my: 2,
          }}
        />

        <Stack gap={2}>
          <Box>
            <Typography color="secondary.main" fontSize="14px">
              Total Experience
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "600", lineHeight: 1 }}>
              {doctor?.experience}+ Years
            </Typography>
          </Box>

          <Stack direction="row" gap={1.5} sx={{ width: "100%" }}>
            <Link href={`/doctors/${doctor.id}`} passHref style={{ flex: 1 }}>
              <Button variant="outlined" fullWidth size="small" sx={{ py: 1 }}>
                Details
              </Button>
            </Link>

            <Link href={`/doctors/${doctor?.id}`} passHref style={{ flex: 1 }}>
              <Button fullWidth size="small" sx={{ py: 1 }}>
                Consult
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DoctorCard;
