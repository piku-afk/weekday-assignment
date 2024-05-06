import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useFormContext, useWatch } from "react-hook-form";

import { TechStackOptions } from "@constants/FilterValues";

import { FilterType } from "../../../App";

const TechStack = () => {
  const { control, setValue } = useFormContext<FilterType>();
  const techStack = useWatch({ control, name: "techStack" });

  return (
    <Autocomplete
      multiple
      size="small"
      id="tech-stack"
      options={TechStackOptions}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params} placeholder="Tech Stack" />}
      value={techStack ?? []}
      onChange={(_event, newValue) => {
        setValue("techStack", newValue);
      }}
    />
  );
};

export default TechStack;
