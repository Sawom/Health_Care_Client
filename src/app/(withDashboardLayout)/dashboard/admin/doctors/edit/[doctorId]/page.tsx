"use client";
import PHSelectField from "@/components/Forms/PHSelectField";
import RForm from "@/components/Forms/RForm";
import Rinput from "@/components/Forms/Rinput";

import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  //   console.log(params?.doctorId);
  const router = useRouter();

  const id = params?.doctorId;

  const { data, isLoading } = useGetDoctorQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation();
  //   console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);
    values.id = id;
    // console.log({ id: values.id, body: values });

    try {
      const res = await updateDoctor({ id: values.id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Doctor Updated Successfully!!!");
        router.push("/dashboard/admin/doctors");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };
  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>
      {isLoading ? (
        "Loading..."
      ) : (
        <RForm
          onSubmit={handleFormSubmit}
          defaultValues={data && defaultValues}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
            <Rinput name="name" label="Name" fullWidth={true} sx={{ mb: 2 }} />

            <Rinput
              name="email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <Rinput
              name="contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <Rinput
              name="address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <Rinput
              name="registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <Rinput
              name="experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <PHSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
            />

            <Rinput
              name="apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <Rinput
              name="qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <Rinput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />

            <Rinput
              name="designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </div>

          <Button type="submit">Update</Button>
        </RForm>
      )}
    </Box>
  );
};

export default DoctorUpdatePage;
