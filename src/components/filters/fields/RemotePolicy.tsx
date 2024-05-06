import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useFormContext, useWatch } from "react-hook-form";

import { RemotePolicyOptions } from "@constants/FilterValues";

import { FilterType } from "../../../App";

const RemotePolicy = () => {
  const { control, setValue } = useFormContext<FilterType>();
  const remotePolicy = useWatch({ control, name: "remotePolicy" });

  return (
    <Autocomplete
      multiple
      size="small"
      id="remote-policy"
      getOptionLabel={(option) => option}
      options={Object.keys(RemotePolicyOptions)}
      renderInput={(params) => <TextField {...params} placeholder="Remote" />}
      value={remotePolicy ?? []}
      onChange={(_event, newValue) => {
        setValue("remotePolicy", newValue);
      }}
    />
  );
};

export default RemotePolicy;
