// react hook form used
"use client";
import assets from "@/assets";
import { registerPatient } from "@/services/actions/registerPatient";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/modifyPayload";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

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

// at first we create *IPatientData* interface.
//  then we pass this as an object in another interface named IPatientRegisterFormData

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();

  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
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
          router.push("/");
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*  Tailwind responsive form layout */}
              <div className="flex flex-col gap-4 my-2">
                {/* Full width field */}
                <div>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    {...register("patient.name")}
                  />
                </div>

                {/* Email & Password side by side on desktop */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      size="small"
                      fullWidth
                      {...register("patient.email")}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      size="small"
                      fullWidth
                      {...register("password")}
                    />
                  </div>
                </div>

                {/* Contact Number & Address side by side */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <TextField
                      label="Contact Number"
                      type="tel"
                      variant="outlined"
                      size="small"
                      fullWidth
                      {...register("patient.contactNumber")}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <TextField
                      label="Address"
                      type="text"
                      variant="outlined"
                      size="small"
                      fullWidth
                      {...register("patient.address")}
                    />
                  </div>
                </div>
              </div>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
