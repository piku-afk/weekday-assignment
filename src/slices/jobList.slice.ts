import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { JobDescription } from "../interfaces/job.interface";

export interface JobListState {
  jobs: JobDescription[];
  meta: {
    total: number;
  };
}

const initialState: JobListState = {
  jobs: [],
  meta: {
    total: 0,
  },
};

export const jobListSlice = createSlice({
  name: "jobList",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<JobListState["jobs"]>) => {
      state.jobs = [...state.jobs, ...action.payload];
    },

    setMeta: (state, action: PayloadAction<JobListState["meta"]>) => {
      state.meta = action.payload;
    },
  },
});

export const { setJobs, setMeta } = jobListSlice.actions;

export default jobListSlice;
