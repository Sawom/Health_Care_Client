import { IMeta } from "@/types";
import { IAdmin } from "@/types/admin/adminType";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create admin
    createAdmin: build.mutation({
      query: (data) => ({
        url: "/user/create-admin",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    // get all admins
    getAllAdmins: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/admin",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),

    // soft delete an admin
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `/admin/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    // get single admin
    getAdmin: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/admin/${id}`,
      }),
      providesTags: [tagTypes.admin],
    }),

    // update an admin
    updateAdmin: build.mutation({
      query: (data) => {
        return {
          url: `/admin/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAllAdminsQuery,
  useDeleteAdminMutation,
  useGetAdminQuery,
  useUpdateAdminMutation,
} = adminApi;
