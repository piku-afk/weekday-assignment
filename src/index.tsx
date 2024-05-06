import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";

import ErrorFallback from "@components/ErrorFallback";

import { store } from "./store";
import { theme } from "./theme";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <h1>Hello World</h1>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
