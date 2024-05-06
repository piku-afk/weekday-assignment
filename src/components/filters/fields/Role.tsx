import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useFormContext, useWatch } from "react-hook-form";

import { RoleOptions } from "@constants/FilterValues";

import { FilterType } from "../../../App";

const Role = () => {
  const { control, setValue } = useFormContext<FilterType>();
  const role = useWatch({ control, name: "role" });

  return (
    <Autocomplete
      multiple
      size="small"
      id="role"
      options={Object.keys(RoleOptions)}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params} placeholder="Role" />}
      value={role ?? []}
      onChange={(_event, newValue) => {
        setValue("role", newValue);
      }}
    />
  );
};

export default Role;
