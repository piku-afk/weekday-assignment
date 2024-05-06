import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

import { FilterType } from "../../../App";

const Location = () => {
  const { register } = useFormContext<FilterType>();

  return <TextField fullWidth size="small" placeholder="Location" {...register("location")} />;
};

export default Location;
