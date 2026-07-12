"use client";
import adminTheme from "@/theme/adminTheme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export default function AdminPanelPageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider theme={adminTheme}>
      <CssBaseline />

      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "586px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
          },
          marginX: "auto",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
