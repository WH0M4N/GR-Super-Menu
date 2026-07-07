"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function GamePageHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
              display: "flex",
              alignItems: "center",
              bgcolor: "background.paper",

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
            !کلیک کن تا بگم چی بازی کنی
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
