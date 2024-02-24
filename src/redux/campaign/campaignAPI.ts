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
    }),
  }),
});

export const { useCreateCampaignMutation } = campaignAPI;
