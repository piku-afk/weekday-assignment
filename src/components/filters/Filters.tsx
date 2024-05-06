import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";

import BasePay from "./fields/BasePay";
import CompanyName from "./fields/CompanyName";
import Location from "./fields/Location";
import MinExp from "./fields/MinExp";
import RemotePolicy from "./fields/RemotePolicy";
import Role from "./fields/Role";
import TechStack from "./fields/TechStack";

const GridItem: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Grid item md={3} sm={4} xs={6}>
      {children}
    </Grid>
  );
};

const Filters = () => {
  return (
    <Grid container sx={{ mb: 2 }} spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ fontSize: 18, lineHeight: "26px", fontWeight: 500, mb: 1 }}>
          Filters
        </Typography>
      </Grid>

      <GridItem>
        <MinExp />
      </GridItem>

      <GridItem>
        <CompanyName />
      </GridItem>

      <GridItem>
        <Location />
      </GridItem>

      <GridItem>
        <RemotePolicy />
      </GridItem>

      <GridItem>
        <TechStack />
      </GridItem>

      <GridItem>
        <Role />
      </GridItem>

      <GridItem>
        <BasePay />
      </GridItem>
    </Grid>
  );
};

export default Filters;
