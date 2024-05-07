import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { JobDescription } from "@interfaces/job.interface";

interface JobCardProps {
  job: JobDescription;
}

const JobCard = (params: JobCardProps) => {
  const { job } = params;

  return (
    <Card component="article" sx={{ my: 1 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid component="figure" item xs={2}>
            <img
              src={job.logoUrl}
              alt={job.companyName}
              style={{ width: 48, height: 48, borderRadius: 4 }}
            />
          </Grid>

          <Grid item xs={9}>
            <Typography variant="h3" sx={{ fontSize: 16, lineHeight: "24px" }}>
              {job.companyName}
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: 14, lineHeight: "22px", textTransform: "capitalize" }}
            >
              {job.jobRole}
            </Typography>
          </Grid>
        </Grid>

        <Typography sx={{ fontSize: 14, lineHeight: "22px", mt: 2, textTransform: "capitalize" }}>
          Location: {job.location}
        </Typography>
        <Typography sx={{ fontSize: 14, lineHeight: "22px" }}>
          Min Experience: {job.minExp ?? 0} years
        </Typography>
        <Typography sx={{ fontSize: 14, lineHeight: "22px", mb: 2 }}>
          Min Salary Range: {job.salaryCurrencyCode ?? "USD"} {job.minJdSalary ?? 0}k
        </Typography>

        <Typography
          sx={{
            mb: 2,
            fontSize: 12,
            lineHeight: "20px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {job.jobDetailsFromCompany}
        </Typography>

        <Button
          component="a"
          href={job.jdLink}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          variant="contained"
          sx={{ mb: 1.25 }}
        >
          Ease Apply
        </Button>
        <Button fullWidth variant="contained" color="secondary">
          Unlock Referral Asks
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
