"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: { xs: 2, md: 4 },
        }}
      >
        {/* Error Icon */}
        <Box sx={{ color: "#d32f2f", mb: 2 }}>
          <ErrorOutlineIcon sx={{ fontSize: { xs: 80, md: 120 } }} />
        </Box>

        {/* 404 Text in Red */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "5rem", sm: "8rem", md: "12rem" },
            fontWeight: 900,
            color: "#d32f2f", // Red color
            lineHeight: 1,
            textShadow: "4px 4px 10px rgba(211, 47, 47, 0.2)",
            mb: 2,
          }}
        >
          404
        </Typography>

        {/* Meaningful Message */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "text.primary",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          Lost in the Digital Wilderness?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 5,
            maxWidth: "600px",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.6,
          }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Do not worry, even the best
          navigators lose their way sometimes.
        </Typography>

        {/* Action Button */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              backgroundColor: "#d32f2f",
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#b71c1c",
                boxShadow: "0px 8px 20px rgba(211, 47, 47, 0.4)",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
