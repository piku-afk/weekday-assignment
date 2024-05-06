import { ApiEndpoints } from "../constants/ApiEndpoints";
import { JobListRequest, JobListResponse } from "../interfaces/job.interface";
import { rootApi } from "../store";

const jobListApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobList: builder.mutation<JobListResponse, JobListRequest>({
      query: (params) => ({
        url: ApiEndpoints.jobList,
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const { useGetJobListMutation } = jobListApi;
