import { Food, Game } from "@/data/mockData";
import { Box, Typography } from "@mui/material";
import React from "react";
import CustomFoodCard from "./shared/CustomFoodCard";
import CustomGameCard from "./shared/CustomGameCard";

interface Props {
  mostOrdered: Food | Game;
}

const isGame = (item: Food | Game): item is Game => {
  return "players" in item;
};

const WeeklyOfferText = ({ mostOrdered }: Props) => {
  return (
    <>
      {mostOrdered && (
        <Box
          id="most-ordered"
          sx={{
            width: "100%",
            maxWidth: 500,
            my: 5,
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

          {isGame(mostOrdered) ? (
            <CustomGameCard cardItem={mostOrdered} idx={0} />
          ) : (
            <CustomFoodCard cardItem={mostOrdered} idx={0} />
          )}
        </Box>
      )}
    </>
  );
};

export default WeeklyOfferText;
