"use server";

import { authKey } from "@/constants/authkey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setAccessToken = async (token: string, option?: any) => {
  
  const cookieStore = await cookies(); // cookies synchronous  in next 14or te
   cookieStore.set(authKey, token);  

   if (option && option.passwordChangeRequired) {
      redirect('/dashboard/change-password');
   }
   if (option && !option.passwordChangeRequired && option.redirect) {
      redirect(option.redirect);
   }
};

export default setAccessToken;