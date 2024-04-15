import { api } from "../api/apiSlice";
import { handleAuthErr } from "@/utils/errorResponses";
import { ICampaign } from "@/types/campaignTypes";

export const campaignAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    createCampaign: builder.mutation({
      query: (data: ICampaign) => ({
        url: "/campaign",
        body: data,
        method: "POST",
        credentials: "include",
      }),
      transformErrorResponse: handleAuthErr,
      invalidatesTags: ["campaigns"],
    }),
    getCampaigns: builder.query({
      query: (page: number) => ({
        url: "/campaigns",
        params: { page },
      }),
      providesTags: ["campaigns"],
    }),
    getSignleCampaign: builder.query({
      query: (id: string) => ({
        url: `/campaign/${id}`,
      }),
      providesTags: ["campaigns"],
    }),
  }),
});

export const {
  useCreateCampaignMutation,
  useLazyGetCampaignsQuery,
  useGetCampaignsQuery,
} = campaignAPI;
