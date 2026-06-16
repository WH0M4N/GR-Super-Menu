"use client";
import { Box } from "@mui/material";
import wavyBg from "../images/uiPIu.jpg";

const FoodPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",

        backgroundImage: `url(${wavyBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0,
        },
      }}
    >
      FoodPage
    </Box>
  );
};

export default FoodPage;
