import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useFormContext, useWatch } from "react-hook-form";

import { MinExperienceOptions } from "@constants/FilterValues";

import { FilterType } from "../../../App";

const MinExp = () => {
  const { control, setValue } = useFormContext<FilterType>();
  const minExp = useWatch({ control, name: "minExp" });

  return (
    <Autocomplete
      size="small"
      id="min-exp"
      options={Object.keys(MinExperienceOptions)}
      renderInput={(params) => <TextField {...params} placeholder="Min Experience" />}
      value={minExp}
      onChange={(_event, newValue) => {
        setValue("minExp", newValue as string);
      }}
    />
  );
};

export default MinExp;
