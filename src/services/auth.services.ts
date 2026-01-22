import { authKey } from "@/constants/authkey";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

const isBrowser = typeof window !== "undefined";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  if (!isBrowser) return;
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  if (!isBrowser) return "";

  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  }
  return "";
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUser = () => {
  if (!isBrowser) return;
  return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1"}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
