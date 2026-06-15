"use client";
import Navbar from "./components/Navbar";
import HomePageContainer from "./components/HomePageContainer";
import { Box } from "@mui/material";
import brickWall from "./images/anastase-maragos-lZzlMYL7Q0Y-unsplash.jpg";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${brickWall.src})`,
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
        }}
      >
        <Navbar />
        <HomePageContainer />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
