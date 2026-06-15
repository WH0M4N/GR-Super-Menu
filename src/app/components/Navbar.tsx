"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        color: "text.primary",
      }}
    >
      {/* Logo */}
      <Box sx={{ zIndex: 2 }}>
        <Image
          src={logo}
          alt="Game Republic logo"
          width={100}
          height={150}
          priority={true}
          style={{ marginTop: "30px" }}
        />
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "texty.primary",
            mt: 2,
          }}
        >
          گیم ریپابلیک
        </Typography>
      </Box>

      {/* Open & closing times */}
      <Box
        sx={{
          width: "100%",
          zIndex: 2,
          textAlign: "end",
          p: "4px 12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ color: "text.secondary" }}>
          شنبه تا چهارشنبه ۱۴ تا ۱
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: "3px" }}>
          پنجشنبه و جمعه ۱۲ تا ۱
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
