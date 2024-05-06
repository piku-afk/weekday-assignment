import { matchSorter } from "match-sorter";
import { FilterType } from "src/App";

import {
  MinBasePayOptions,
  MinExperienceOptions,
  RemotePolicyOptions,
  RoleOptions,
} from "@constants/FilterValues";

import { JobDescription } from "@interfaces/job.interface";

export const applyFilters = (
  jobs: JobDescription[],
  filters: Partial<FilterType>,
): JobDescription[] => {
  let result = jobs;

  for (const filter of Object.keys(filters)) {
    const value = filters[filter as keyof typeof filters];
    if (value === undefined || value === null) continue;

    switch (filter) {
      case "minExp": {
        result = result.filter(
          (job) =>
            job.minExp >=
            (MinExperienceOptions[filters[filter] as keyof typeof MinExperienceOptions] ?? 0),
        );
        break;
      }

      case "companyName": {
        result = matchSorter(result, filters[filter] ?? "", { keys: ["companyName"] });
        break;
      }

      case "location": {
        result = matchSorter(result, filters[filter] ?? "", { keys: ["location"] });
        break;
      }

      case "remotePolicy": {
        result = matchSorter(
          result,
          filters[filter]
            ?.map((item) => RemotePolicyOptions[item as keyof typeof RemotePolicyOptions])
            .join(",") ?? "",
          { keys: ["location"] },
        );
        break;
      }

      case "techStack": {
        // TODO: do not know which key to use for filters
        break;
      }

      case "role": {
        result = matchSorter(
          result,
          filters[filter]?.map((item) => RoleOptions[item as keyof typeof RoleOptions]).join(" ") ??
            "",
          { keys: ["jobRole"] },
        );

        break;
      }

      case "minBasePay": {
        result = result.filter(
          (job) =>
            job.minJdSalary >= MinBasePayOptions[filters[filter] as keyof typeof MinBasePayOptions],
        );
        break;
      }
    }
  }

  return result;
};
