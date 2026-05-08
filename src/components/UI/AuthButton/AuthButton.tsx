"use client";
import { baseApi } from "@/redux/api/baseApi";
import { useAppDispatch } from "@/redux/hook";
import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

// login logout button handled with conditional rendering
const AuthButton = () => {
  const userInfo = getUserInfo();
  // console.log(userInfo);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(baseApi.util.resetApiState());
    logoutUser(router);
    window.location.href = "/";
  };

  return (
    <>
      {userInfo?.email ? (
        <Button color="error" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
