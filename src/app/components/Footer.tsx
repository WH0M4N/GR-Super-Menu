"use client";
import { IoCallOutline } from "react-icons/io5";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "8px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IoCallOutline size={28} color="rgba(255,255,255,0.75)" />

        <Typography
          sx={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "18px",
          }}
        >
          ۰۲۱-۲۲۳۶۸۹۷۳
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <RiTelegram2Line size={28} color="rgba(255,255,255,0.75)" />
        <FaInstagram size={28} color="rgba(255,255,255,0.75)" />
      </Box>
    </Box>
  );
};

export default Footer;
