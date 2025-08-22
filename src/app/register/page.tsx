// react hook form used
"use client";
import assets from "@/assets";
import RForm from "@/components/Forms/RForm";
import Rinput from "@/components/Forms/Rinput";
import { registerPatient } from "@/services/actions/registerPatient";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/modifyPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

// backend form er data's format:
//  {
//   "password": "123456",
//   "patient": {
//     "email": "patient11@gmail.com",
//     "name": "Md. Fahim",
//     "contactNumber": "01111111111",
//     "address": "Dhaka, BD"
//   }
// }
// so we need to create this type data format

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <RForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              {/*  Tailwind responsive form layout */}
              <div className="flex flex-col gap-4 my-2">
                {/* name */}
                <div>
                  <Rinput
                    label="Name"
                    size="small"
                    fullWidth={true}
                    name="patient.name"
                  />
                </div>

                {/* Email & Password side by side on desktop */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* email */}
                  <div className="w-full md:w-1/2">
                    <Rinput
                      label="Email"
                      type="email"
                      size="small"
                      fullWidth={true}
                      name="patient.email"
                    />
                  </div>
                  {/* password */}
                  <div className="w-full md:w-1/2">
                    <Rinput
                      label="Password"
                      type="password"
                      size="small"
                      fullWidth={true}
                      name="password"
                    />
                  </div>
                </div>

                {/* Contact Number & Address side by side */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <Rinput
                      label="Contact Number"
                      type="tel"
                      size="small"
                      fullWidth={true}
                      name="patient.contactNumber"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <Rinput
                      label="Address"
                      type="text"
                      size="small"
                      fullWidth={true}
                      name="patient.address"
                    />
                  </div>
                </div>
              </div>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </RForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
