import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppBridge, AppBridgeProvider } from "@saleor/app-sdk/app-bridge";
import "@saleor/macaw-ui/next/style";
import { ThemeProvider } from "@saleor/macaw-ui/next/theme";
import { Box } from "@saleor/macaw-ui/next";

const appBridge = new AppBridge();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppBridgeProvider appBridgeInstance={appBridge}>
        <Box padding={10}>
          <RouterProvider router={router} />
        </Box>
      </AppBridgeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
