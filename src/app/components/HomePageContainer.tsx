"use client";
import Menues from "./Menues";
import { Box, Typography } from "@mui/material";

const HomePageContainer = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ fontSize: "20px", m: 0 }}>!خوش اومدی</Typography>
      <Typography sx={{ fontSize: "20px", m: 0 }}>
        اول کدوم منو رو میخوای ببینی؟
      </Typography>
      <Menues />
    </Box>
  );
};

export default HomePageContainer;
