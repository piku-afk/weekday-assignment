import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useFormContext, useWatch } from "react-hook-form";

import { MinBasePayOptions } from "@constants/FilterValues";

import { FilterType } from "../../../App";

const BasePay = () => {
  const { control, setValue } = useFormContext<FilterType>();
  const minBasePay = useWatch({ control, name: "minBasePay" });

  return (
    <Autocomplete
      isOptionEqualToValue={(option, value) => {
        return option === value;
      }}
      size="small"
      id="base-pay"
      options={Object.keys(MinBasePayOptions)}
      renderInput={(params) => <TextField {...params} placeholder="Min Base Pay" />}
      value={minBasePay}
      onChange={(_event, newValue) => {
        setValue("minBasePay", newValue as string);
      }}
    />
  );
};

export default BasePay;
