"use client";
import { Box } from "@mui/material";
import wavyBg from "../../images/wavy.jpg";
import wavyBgFlip from "../../images/wavy-flip.jpg";
import { ReactNode } from "react";

const BackgroundBox = ({
  children,
  flip,
}: {
  children: ReactNode;
  flip?: boolean;
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${flip ? wavyBgFlip.src : wavyBg.src})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        position: "relative",
        px: { xs: 1, sm: 2, md: 5 },
        py: 5,
        overflowX: "hidden",

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
