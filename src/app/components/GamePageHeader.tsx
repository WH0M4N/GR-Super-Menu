"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function GamePageHeader() {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: "1%",
        right: "1%",
        zIndex: 2,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        px: 2,
        py: 1,

        bgcolor: "background.default",
        borderBottom: "1px solid rgba(255,213,79,.3)",
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
      }}
    >
      <Link
        href="/game-picker"
        style={{
          display: "flex",
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            color: "white",
            border: "1px solid #806a25",
            animation: "glow 3s ease-in-out infinite",

            "@keyframes glow": {
              "0%": {
                borderColor: "#806a25",
                boxShadow: "0 0 0 rgba(255, 213, 79, 0)",
              },
              "50%": {
                borderColor: "#FFD54F",
                boxShadow: "0 0 12px rgba(255, 213, 79, 0.7)",
              },
              "100%": {
                borderColor: "#806a25",
                boxShadow: "0 0 0 rgba(255, 213, 79, 0)",
              },
            },
          }}
        >
          !کلیک کن
        </Button>
      </Link>

      <Typography
        component="h1"
        sx={{
          fontSize: "0.95rem",
          fontWeight: 700,
          textAlign: "right",
        }}
      >
        نمی‌دونی چی بازی کنی؟
      </Typography>
    </Box>
  );
}
