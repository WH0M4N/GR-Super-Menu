"use client";
import { Box } from "@mui/material";
import brickWal from "../images/anastase-maragos-lZzlMYL7Q0Y-unsplash.jpg";
import { ReactNode } from "react";

const BrickWallBg = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",

        backgroundImage: `url(${brickWal.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BrickWallBg;
