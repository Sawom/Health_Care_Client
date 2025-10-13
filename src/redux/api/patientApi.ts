import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IPatient } from "@/types/patient/patientType";

export const patientApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create patient
    createPatient: build.mutation({
      query: (data) => ({
        url: "/user/create-patient",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.patient],
    }),

    // get all patient
    getAllAdmins: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/patient",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IPatient[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.patient],
    }),




  }),
});
