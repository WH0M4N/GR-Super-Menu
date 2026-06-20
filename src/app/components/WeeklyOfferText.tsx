import { Food, Game } from "@/data/mockData";
import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCard from "./shared/CustomCard";

interface Props {
  mostOrdered: Food | Game;
}

const WeeklyOfferText = ({ mostOrdered }: Props) => {
  return (
    <>
      {mostOrdered && (
        <Box
          id="most-ordered"
          sx={{
            width: "100%",
            maxWidth: 500,
            my: 3,
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

          <CustomCard cardItem={mostOrdered} idx={0} />
        </Box>
      )}
    </>
  );
};

export default WeeklyOfferText;
