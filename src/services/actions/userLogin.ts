"use server";
import { FormValues } from "@/app/login/page";

// here we do not convert json to formdata so I use headers, stringify etc
export const userLogin = async (data: FormValues) => {
  const res = await fetch(`${process.env.PUBLIC_BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
