"use client";

import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DoctorInformation from "./components/DoctorInformations";
import ProfileUpdateModal from "./components/ProfileUpdateModal";
import { toast } from "sonner";

// doctor profile
const DoctorProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, refetch } = useGetMYProfileQuery(undefined);
  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    // updateMYProfile(formData);
    try {
      // ২. মিউটেশন কল এবং unwrap ব্যবহার
      const res = await updateMYProfile(formData).unwrap();
      if (res) {
        toast.success("Profile photo updated successfully!");
        refetch(); // ৩. ছবি পাল্টানোর সাথে সাথে UI আপডেট করবে
      }
    } catch (err: any) {
      toast.error(err?.message || err?.data?.message || "Upload failed");
      console.error("Upload error:", err);
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
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
          {/* image */}
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
              src={
                data?.profilePhoto && data.profilePhoto.length > 0
                  ? data.profilePhoto
                  : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              }
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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

export default DoctorProfile;
