import debounce from "lodash.debounce";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useGetJobListMutation } from "@apis/jobList.api";

import { setJobs, setMeta } from "@slices/jobList.slice";

import { useStoreDispatch, useStoreSelector } from "./useStore";

// number of jobs per page
const LIMIT = 30;

export const useJobList = () => {
  const [offset, setOffset] = useState(0);
  const { jobs, meta } = useStoreSelector((state) => state.jobList);
  const [getJobList, { isLoading, data, isError, error }] = useGetJobListMutation();

  const dispatch = useStoreDispatch();

  const { total } = meta;
  const hasMore = jobs.length < total;

  const debouncedGetJobList = useMemo(() => debounce(getJobList, 500), [getJobList]);

  useEffect(() => {
    debouncedGetJobList({ limit: LIMIT, offset });

    return () => {
      debouncedGetJobList.cancel();
    };
  }, [offset, debouncedGetJobList]);
  return { isLoading, isError, error, hasMore, lastElementRef };
};
