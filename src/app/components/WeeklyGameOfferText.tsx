import { Game } from "@/data/mockData";
import { Box, Typography } from "@mui/material";
import React from "react";
import CustomGameCard from "./shared/CustomGameCard";

interface Props {
  mostOrdered: Game;
}

const WeeklyGameOfferText = ({ mostOrdered }: Props) => {
  return (
    <>
      {mostOrdered && (
        <Box
          id="most-ordered"
          sx={{
            width: "100%",
            maxWidth: 500,
            mb: 3,
            mt: 8,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "1.2rem",
              mb: 1,
              textAlign: "center",
            }}
          >
            ⭐ محبوب‌ترین هفته
          </Typography>

          <CustomGameCard cardItem={mostOrdered} idx={0} />
        </Box>
      )}
    </>
  );
};

export default WeeklyGameOfferText;
