import { configureStore } from "@reduxjs/toolkit";
import { api, localAPI } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,

    [localAPI.reducerPath]: localAPI.reducer,
  },
  middleware: (gDM) => gDM().concat([api.middleware, localAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
