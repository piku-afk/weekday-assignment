import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import jobListSlice from "./slices/jobList.slice";

const baseUrl = import.meta.env.VITE_API_HOST;

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  [jobListSlice.name]: jobListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware),
});
