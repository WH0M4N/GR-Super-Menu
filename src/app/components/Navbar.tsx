"use client";
import { Box, Typography } from "@mui/material";
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
      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            fontSize: "22px",
            fontWeight: "600",
            color: "#ffffff",
            mt: 1,
            mb: 3,
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
          textAlign: "center",
          padding: "4px 12px",
          display: "flex",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Typography sx={{ color: "rgba(255,255,255,0.75)", m: 0 }}>
          شنبه تا چهارشنبه ۱۴ تا ۱
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.75)", mt: "3px" }}>
          پنجشنبه و جمعه ۱۲ تا ۱
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
