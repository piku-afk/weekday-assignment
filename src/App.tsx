import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import Filters from "@components/filters/Filters";
import JobList from "@components/JobList";

const filterSchema = z.object({
  location: z.string(),
  companyName: z.string(),
  minExp: z.string().nullable(),
  minBasePay: z.string().nullable(),
  role: z.array(z.string()).nullable(),
  techStack: z.array(z.string()).nullable(),
  remotePolicy: z.array(z.string()).nullable(),
});

export type FilterType = z.infer<typeof filterSchema>;

const defaultFilters: FilterType = {
  location: "",
  companyName: "",
  minExp: null,
  minBasePay: null,
  role: [],
  techStack: [],
  remotePolicy: [],
};

const App = () => {
  const formMethods = useForm({
    mode: "onBlur",
    defaultValues: defaultFilters,
    resolver: zodResolver(filterSchema),
  });

  return (
    <Container component="main" sx={{ py: 4 }}>
      <Typography variant="h1" sx={{ fontSize: 24, lineHeight: "32px", fontWeight: 600, mb: 2 }}>
        Job Board
      </Typography>

      <FormProvider {...formMethods}>
        <Filters />
        <JobList />
      </FormProvider>
    </Container>
  );
};

export default App;
