import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

/**
 * This component is displayed when an error occurs within the React app and is caught by the ErrorBoundary component.
 * It provides a fallback UI to the user.
 */
const ErrorFallback = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: 24, mb: 1 }}>
        Something went wrong!
      </Typography>
      <Typography sx={{ fontSize: 14, mb: 4 }}>View console for more information</Typography>

      <Button variant="outlined" onClick={handleRetry}>
        Try Again
      </Button>
    </Container>
  );
};

export default ErrorFallback;
