import RForm from "@/components/Forms/RForm";
import Rinput from "@/components/Forms/Rinput";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import { useGetAdminQuery, useUpdateAdminMutation } from "@/redux/api/adminApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import React from "react";
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
  const { data: adminData, refetch, isSuccess } = useGetAdminQuery(id);

  const [updateAdmin, { isLoading: updating }] = useUpdateAdminMutation();

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

    try {
      updateAdmin({ body: updatedValues, id });
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
        defaultValues={adminData}
        resolver={zodResolver(validationSchema)}
      >
        <div className="flex flex-wrap gap-8 my-5">
          {/* update name */}
          <div className="w-full md:w-1/3">
            <Rinput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </div>
          {/* contact number */}
          <div className="w-full md:w-1/3">
            <Rinput
              name="contactNumber"
              label="Contract Number"
              sx={{ mb: 2 }}
              fullWidth
            />
          </div>
        </div>
        <Button type="submit" disabled={updating}>
          Save
        </Button>
      </RForm>
    </PHFullScreenModal>
  );
};

export default AdminProfileUpdateModal;
