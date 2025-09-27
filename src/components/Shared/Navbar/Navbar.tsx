"use client";
import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
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
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const userInfo = useUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "Consultation", href: "/consultation" },
    { label: "Health Plans", href: "#" },
    { label: "Medicine", href: "#" },
    { label: "Diagnostics", href: "#" },
    { label: "NGOs", href: "#" },
  ];

  // dynamic auth button
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false } // I use lazy loading concept. after received token this button will appear
  );

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
          <span className="mx-2">Health Care</span>
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
          {/* dasshboard */}
          {userInfo?.userId ? (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          ) : null}
        </Stack>

        {/* Desktop Logout/login Button */}
        <span className="hidden md:inline-flex">
          {userInfo?.userId ? (
            <Button color="error" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </span>

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
          sx: {
            width: "70%",
            p: 2,
            display: { xs: "block", md: "block", lg: "none" },
          },
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

          {/* dashboard  */}
          {userInfo?.userId ? (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          ) : null}

          {/* Desktop Logout/login Button */} 
          {userInfo?.userId ? (
            <Button color="error" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button component={Link} href="/login">
              Login
            </Button>
          )}
        </Stack>
      </Drawer>
    </Container>
  );
}
