import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useFormContext, useWatch } from "react-hook-form";
import { FilterType } from "src/App";

import { useJobList } from "@hooks/useJobList";
import { useStoreSelector } from "@hooks/useStore";

import { applyFilters } from "@utils/applyFilters";

import JobCard from "./JobCard";
import Loader from "./Loader";

const JobList = () => {
  const { showBoundary } = useErrorBoundary();
  const jobs = useStoreSelector((state) => state.jobList.jobs);
  const { hasMore, error, isError, isLoading, lastElementRef } = useJobList();
  const { control } = useFormContext<FilterType>();
  const formData = useWatch({ control });

  const filteredJobs = useMemo(() => applyFilters(jobs, formData), [jobs, formData]);

  if (isError) {
    showBoundary(error);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ fontSize: 18, lineHeight: "26px", fontWeight: 500 }}>
          Results
        </Typography>
      </Grid>

      {filteredJobs.map((job, index, array) => {
        const isLastElement = array.length === index + 1;

        return (
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            key={job.jdUid + index}
            {...(isLastElement && { ref: lastElementRef })}
          >
            <JobCard job={job} />
          </Grid>
        );
      })}

      {(filteredJobs.length === 0 || hasMore) && isLoading && <Loader />}

      {filteredJobs.length === 0 && !isLoading && (
        <Grid item xs={12}>
          <Typography align="center">
            No job matches your current filters. Try broadening your search criteria or using
            different filters to see more opportunities.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default JobList;
