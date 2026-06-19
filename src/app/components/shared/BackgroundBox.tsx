"use client";
import { Box } from "@mui/material";
import wavyBg from "../../images/wavy.jpg";
import { ReactNode } from "react";

const BackgroundBox = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        backgroundImage: `url(${wavyBg.src})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        position: "relative",
        padding: "40px",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0,
        },

        "& > *": {
          zIndex: 1,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundBox;
