import { useCallback, useEffect, useRef, useState } from "react";

import { useGetJobListMutation } from "@apis/jobList.api";

import { setJobs, setMeta } from "@slices/jobList.slice";

import { useStoreDispatch, useStoreSelector } from "./useStore";

// number of jobs per page
const LIMIT = 30;

export const useJobList = () => {
  const [offset, setOffset] = useState(0);
  const observer = useRef<IntersectionObserver>();
  const { jobs, meta } = useStoreSelector((state) => state.jobList);
  const [getJobList, { isLoading, data, isError, error }] = useGetJobListMutation();

  const dispatch = useStoreDispatch();

  const { total } = meta;
  const hasMore = jobs.length < total;

  useEffect(() => {
    const request = getJobList({ limit: LIMIT, offset });

    return () => {
      request.abort();
    };
  }, [offset, getJobList]);

  useEffect(() => {
    if (!data) return;

    const { totalCount, jdList } = data;

    dispatch(setJobs(jdList));
    dispatch(setMeta({ total: totalCount }));
  }, [data, dispatch]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prev) => prev + LIMIT);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore],
  );

  return { isLoading, isError, error, hasMore, lastElementRef };
};
