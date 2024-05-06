import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const Loader = () => {
  return (
    <Grid item xs={12}>
      <CircularProgress sx={{ mx: "auto", display: "block" }} />
    </Grid>
  );
};

export default Loader;
