"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import BackButton from "./BackButton";

export default function GamePageHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        mt: "-20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          px: 1.5,
        }}
      >
        <BackButton />

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
              border: "1px solid #FFD54F",
              display: "flex",
              alignItems: "center",
              bgcolor: "background.paper",
            }}
          >
            !کلیک کن تا بگم چی بازی کنی
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
