import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Filters = () => {
  return (
    <Grid container sx={{ mb: 2 }} spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ fontSize: 18, lineHeight: "26px", fontWeight: 500, mb: 1 }}>
          Filters
        </Typography>
      </Grid>

    </Grid>
  );
};

export default Filters;
