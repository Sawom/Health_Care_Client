import RForm from "@/components/Forms/RForm";
import Rinput from "@/components/Forms/Rinput";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const validationSchema = z.object({
  name: z.string().optional(),
  contactNumber: z.string().optional(),
});

const AdminProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetDoctorQuery(id);
//   const { data: allSpecialties } = useGetAllSpecialtiesQuery(undefined);
//   const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();

//   useEffect(() => {
//     if (!isSuccess) return;

//     setSelectedSpecialtiesIds(
//       doctorData?.doctorSpecialties.map((sp: any) => {
//         return sp.specialitiesId;
//       })
//     );
//   }, [isSuccess]);

  const submitHandler = async (values: FieldValues) => {
    
    console.log({ id });
    

    // this field can not be changed
    // so we are excluding them from the update
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
      "profilePhoto",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    // updatedValues.specialties = specialties;

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
        <div className="flex flex-wrap gap-8 my-5">
          {/* update name */}
          <div className="w-full md:w-1/3">
            <Rinput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </div>
        </div>
      </RForm>
    </PHFullScreenModal>
  );
};

export default AdminProfileUpdateModal;
