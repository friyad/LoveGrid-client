import { LoginInfo, SignUpInfo } from "@/types/authTypes";
import { api } from "../api/apiSlice";
import { handleAuthErr } from "@/utils/errorResponses";

export const authAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    handleSignUp: builder.mutation({
      query: (data: SignUpInfo) => ({
        url: "/signup",
        body: data,
        method: "POST",
        // cache: "no-cache",
      }),
      transformErrorResponse: handleAuthErr,
    }),
    handleOAuthSignUp: builder.mutation({
      query: (data: SignUpInfo) => ({
        url: "/oauth-signup",
        body: data,
        method: "POST",
        cache: "no-cache",
      }),
      transformErrorResponse: handleAuthErr,
    }),
    handleLogIn: builder.mutation({
      query: (data: LoginInfo) => ({
        url: "/signin",
        body: data,
        method: "POST",
        cache: "no-cache",
      }),
      transformErrorResponse: handleAuthErr,
    }),
  }),
});

export const {} = authAPI;
