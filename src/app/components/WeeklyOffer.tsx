import { Box, Typography } from "@mui/material";
import React from "react";
import CustomFoodCard from "./shared/CustomFoodCard";
import CustomGameCard from "./shared/CustomGameCard";
import { Game } from "@/data/mockData";
import { Food } from "@prisma/client";

interface Props {
  mostOrdered: Food | Game;
}

const isGame = (item: Food | Game): item is Game => {
  return "playerCount" in item;
};

const WeeklyOffer = ({ mostOrdered }: Props) => {
  console.log("most played: ", mostOrdered);

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
            <CustomGameCard game={mostOrdered} idx={0} />
          ) : (
            <CustomFoodCard food={mostOrdered} idx={0} />
          )}
        </Box>
      )}
    </>
  );
};

export default WeeklyOffer;
