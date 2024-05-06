import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

import { FilterType } from "../../../App";

const CompanyName = () => {
  const { register } = useFormContext<FilterType>();

  return (
    <TextField fullWidth size="small" placeholder="Company Name" {...register("companyName")} />
  );
};

export default CompanyName;
