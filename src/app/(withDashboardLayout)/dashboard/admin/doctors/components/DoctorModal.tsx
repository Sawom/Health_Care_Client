import PHSelectField from "@/components/Forms/PHSelectField";
import RForm from "@/components/Forms/RForm";
import Rinput from "@/components/Forms/Rinput";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    values.doctor.experience = Number(values.doctor.experience); //string to number convert
    values.doctor.appointmentFee = Number(values.doctor.appointmentFee); //string to number convert
    const data = modifyPayload(values);
    try {
      const res = await createDoctor(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor created successfully!!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      appointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };

  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <RForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          <Rinput
            name="doctor.name"
            label="Name"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.email"
            type="email"
            label="Email"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="password"
            type="password"
            label="Password"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.contactNumber"
            label="Contract Number"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.address"
            label="Address"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.registrationNumber"
            label="Registration Number"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.experience"
            type="number"
            label="Experience"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <PHSelectField
            items={Gender}
            name="doctor.gender"
            label="Gender"
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.appointmentFee"
            type="number"
            label="appointmentFee"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.qualification"
            label="Qualification"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.currentWorkingPlace"
            label="Current Working Place"
            fullWidth={true}
            sx={{ mb: 2 }}
          />

          <Rinput
            name="doctor.designation"
            label="Designation"
            fullWidth={true}
            sx={{ mb: 2 }}
          />
        </div>

        <Button type="submit">Create</Button>
      </RForm>
    </PHFullScreenModal>
  );
};

export default DoctorModal;
