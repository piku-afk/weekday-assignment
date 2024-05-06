import { combineReducers, configureStore } from "@reduxjs/toolkit";

import jobListSlice from "./slices/jobList.slice";

const rootReducer = combineReducers({
  [jobListSlice.name]: jobListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
