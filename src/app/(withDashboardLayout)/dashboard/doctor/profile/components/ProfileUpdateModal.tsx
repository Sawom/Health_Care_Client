import PHSelectField from "@/components/Forms/PHSelectField";
import RForm from "@/components/Forms/RForm";
import Rinput from "@/components/Forms/Rinput";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { Gender } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import MultipleSelectChip from "./MultipleSelectChip";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const validationSchema = z.object({
  experience: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  apointmentFee: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  name: z.string().optional(),
  contactNumber: z.string().optional(),
  registrationNumber: z.string().optional(),
  gender: z.string().optional(),
  qualification: z.string().optional(),
  currentWorkingPlace: z.string().optional(),
  designation: z.string().optional(),
});

const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetDoctorQuery(id);
  const { data: allSpecialties } = useGetAllSpecialtiesQuery(undefined);
  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();

  useEffect(() => {
    if (!isSuccess) return;

    setSelectedSpecialtiesIds(
      doctorData?.doctorSpecialties.map((sp: any) => {
        return sp.specialtiesId;
      })
    );
  }, [isSuccess]);

  const submitHandler = async (values: FieldValues) => {
    const specialties = selectedSpecialtiesIds.map((specialtiesId: string) => ({
      specialtiesId,
      isDeleted: false,
    }));

    console.log({ id });
    // return;

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    updatedValues.specialties = specialties;

    try {
      updateDoctor({ body: updatedValues, id });
      await refetch();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
      <RForm
        onSubmit={submitHandler}
        defaultValues={doctorData}
        resolver={zodResolver(validationSchema)}
      >
        <Grid container spacing={2} sx={{ my: 5 }}>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="email"
              type="email"
              label="Email"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="contactNumber"
              label="Contract Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput name="address" label="Address" sx={{ mb: 2 }} fullWidth />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="registrationNumber"
              label="Registration Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="experience"
              type="number"
              label="Experience"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <PHSelectField
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="apointmentFee"
              type="number"
              label="ApointmentFee"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="qualification"
              label="Qualification"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>

          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="currentWorkingPlace"
              label="Current Working Place"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <Rinput
              name="designation"
              label="Designation"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
          <div className="w-full sm:w-full md:w-1/3 px-1">
            <MultipleSelectChip
              allSpecialties={allSpecialties}
              selectedIds={selectedSpecialtiesIds}
              setSelectedIds={setSelectedSpecialtiesIds}
            />
          </div>
        </Grid>

        <Button type="submit" disabled={updating}>
          Save
        </Button>
      </RForm>
    </PHFullScreenModal>
  );
};

export default ProfileUpdateModal;
