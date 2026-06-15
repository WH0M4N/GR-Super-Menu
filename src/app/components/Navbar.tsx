"use client";
import { Box } from "@mui/material";
import React from "react";
import brickWall from "../images/anastase-maragos-lZzlMYL7Q0Y-unsplash.jpg";
import logo from "../images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        backgroundImage: `url(${brickWall.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        color: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Image
        src={logo}
        alt="Game Republic logo"
        width={100}
        height={150}
        priority={true}
        style={{ zIndex: 2, marginTop: "30px" }}
      />
    </Box>
  );
};

export default Navbar;
