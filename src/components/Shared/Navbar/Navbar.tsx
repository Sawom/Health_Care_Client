"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "Consultation", href: "/consultation" },
    { label: "Health Plans", href: "#" },
    { label: "Medicine", href: "#" },
    { label: "Diagnostics", href: "#" },
    { label: "NGOs", href: "#" },
  ];

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Typography
          variant="h5"
          component={Link}
          href="/"
          fontWeight={600}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          A
          <Box component="span" color="primary.main">
            RS
          </Box>
          Health Care
        </Typography>

        {/* Desktop Menu */}
        <Stack
          direction="row"
          gap={4}
          sx={{
            display: { xs: "none", md: "flex" }, // hide in mobile
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.label}
              component={Link}
              href={item.href}
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        {/* Desktop Login Button */}
        <Button
          component={Link}
          href="/login"
          sx={{ display: { xs: "none", md: "inline-flex" } }}
        >
          Login
        </Button>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: "70%", p: 2 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" fontWeight={600}>
            Menu
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack spacing={3} mt={4}>
          {menuItems.map((item) => (
            <Typography
              key={item.label}
              component={Link}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "1.1rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.label}
            </Typography>
          ))}

          <Button
            variant="contained"
            component={Link}
            href="/login"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Button>
        </Stack>
      </Drawer>
    </Container>
  );
}
