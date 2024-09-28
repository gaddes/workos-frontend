import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { workosApi } from "./api/workos.api";

export const store = configureStore({
  reducer: {
    [workosApi.reducerPath]: workosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workosApi.middleware),
});

setupListeners(store.dispatch);
