import { IMeta } from "@/types";
import { IPatient } from "@/types/patient/patientType";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

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
    getAllPatient: build.query({
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

    // soft delete an patient
    deletePatient: build.mutation({
      query: (id) => ({
        url: `/patient/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.patient],
    }),

    // get single patient
    getPatient: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/patient/${id}`,
      }),
      providesTags: [tagTypes.patient],
    }),

    // update an patient
    updatePatient: build.mutation({
      query: (data) => {
        return {
          url: `/patient/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.patient, tagTypes.user],
    }),
  }),
});

export const {
  useCreatePatientMutation,
  useGetAllPatientQuery,
  useDeletePatientMutation,
  useGetPatientQuery,
  useUpdatePatientMutation,
} = patientApi;
