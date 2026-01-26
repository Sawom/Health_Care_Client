"use client";

import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ScrollCategory = ({ specialties }: { specialties: string }) => {
  const { data, isLoading } = useGetAllSpecialtiesQuery(undefined);
  const router = useRouter();

  // এরর ফিক্স: যদি specialties না থাকে, তবে initial value সেট হবে না
  const [value, setValue] = React.useState(specialties || "");

  // URL-এর সাথে স্টেট সিঙ্ক রাখার জন্য
  useEffect(() => {
    if (specialties) {
      setValue(specialties);
    }
  }, [specialties]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(`/doctors?specialties=${newValue}`);
  };

  if (isLoading) return null;

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        mb: 3,
      }}
    >
      <Tabs
        
        value={data?.some((s: any) => s.title === value) ? value : false}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile // mobile scrool
        aria-label="specialty tabs"
        sx={{
          "& .MuiTabs-indicator": {
            height: 3,
            borderRadius: "3px 3px 0 0",
          },
          "& .MuiTab-root": {
            textTransform: "none", 
            minWidth: { xs: 100, sm: 160 }, 
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 600,
            color: "text.secondary",
            "&.Mui-selected": {
              color: "primary.main", 
            },
          },
        }}
      >
        {data?.map((specialty: any) => (
          <Tab
            key={specialty.id}
            label={specialty.title}
            value={specialty.title}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ScrollCategory;
