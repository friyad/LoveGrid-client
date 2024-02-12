import { localAPI } from "@/redux/api/apiSlice";

const extendedLocalAPI = localAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadPhoto: builder.mutation({
      query: (data: FormData) => ({
        url: "/api/upload-photo",
        method: "POST",
        body: data,
      }),
      transformResponse: (result: any) => {
        return {
          status: result.status,
          secure_url: result?.data?.secure_url,
          blurURL: result?.data?.blurURL,
        };
      },
    }),
  }),
});

export const { useUploadPhotoMutation } = extendedLocalAPI;
