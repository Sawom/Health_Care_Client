"use client";

import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DoctorInformation from "./components/DoctorInformations";
import ProfileUpdateModal from "./components/ProfileUpdateModal";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetMYProfileQuery(undefined);
  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="w-full md:w-1/3">
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              height={300}
              width={400}
              src={data?.profilePhoto}
              alt="User Photo"
            />
          </Box>
          <Box my={3}>
            {updating ? (
              <p>Uploading...</p>
            ) : (
              <AutoFileUploader
                name="file"
                label="Choose Your Profile Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            )}
          </Box>

          <Button
            fullWidth
            endIcon={<ModeEditIcon />}
            onClick={() => setIsModalOpen(true)}
          >
            Edit Profile
          </Button>
        </div>
        <div className="w-full md:w-2/3">
          <DoctorInformation data={data} />
        </div>
      </div>
    </>
  );
};

export default Profile;
