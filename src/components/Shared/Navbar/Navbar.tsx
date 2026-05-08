"use client";
import { getUserInfo } from "@/services/auth.services";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  Drawer,
  AppBar,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const userInfo = getUserInfo();
  // console.log(userInfo);

  // dynamic auth button
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false },
    // I use lazy loading concept. after received token this button will appear
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "Doctors", href: "/doctors" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff !important",
        backgroundImage: "none !important",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
        color: "black",
        py: 1,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            href="/"
            fontWeight={700}
            sx={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            A
            <Box component="span" color="primary.main">
              RS
            </Box>
            <Box
              component="span"
              sx={{ ml: 1, fontWeight: 400, fontSize: "1.2rem" }}
            >
              Health Care
            </Box>
          </Typography>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            gap={4}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item.label}
              </Typography>
            ))}

            {userInfo?.email ? (
              <Typography
                component={Link}
                href="/dashboard"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 500,
                  "&:hover": { color: "primary.main" },
                }}
              >
                Dashboard
              </Typography>
            ) : null}

            <AuthButton />
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "black" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: "280px", p: 3 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h6" fontWeight={700}>
            MENU
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack spacing={3}>
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
                fontWeight: 500,
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.label}
            </Typography>
          ))}

          {userInfo?.email ? (
            <Typography
              component={Link}
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "1.1rem",
                fontWeight: 500,
              }}
            >
              Dashboard
            </Typography>
          ) : null}

          <Box pt={2} borderTop="1px solid #eee">
            <AuthButton />
          </Box>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
