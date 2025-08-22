"use client";
import assets from "@/assets";
import RForm from "@/components/Forms/RForm";
import Rinput from "@/components/Forms/Rinput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard");
      } else {
        setError(res.message);
        // console.log(res);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 2,
            p: { xs: 3, md: 4 },
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login PH HealthCare
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  padding: "1px",
                  borderRadius: "2px",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <RForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              {/* Tailwind responsive */}
              <div className="flex flex-col md:flex-row gap-4 my-2">
                {/* email */}
                <div className="w-full md:w-1/2">
                  <Rinput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </div>
                {/* password */}
                <div className="w-full md:w-1/2">
                  <Rinput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </div>
              </div>

              <Typography
                mb={1}
                textAlign="end"
                component="p"
                fontWeight={300}
                fontSize={{ xs: "0.85rem", md: "1rem" }}
              >
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography
                component="p"
                fontWeight={300}
                fontSize={{ xs: "0.9rem", md: "1rem" }}
              >
                Don&apos;t have an account?
                <Link href="/register">Create an account</Link>
              </Typography>
            </RForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
