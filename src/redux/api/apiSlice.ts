import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const api = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://love-grid-server.vercel.app/api/v1",
  // }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://lovegrid-server.onrender.com/api/v1",
  // }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["campaigns"],
  endpoints: () => ({}),
});

export const localAPI = createApi({
  reducerPath: "localAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000`,
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
