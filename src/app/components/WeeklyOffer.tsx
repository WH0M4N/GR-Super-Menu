import { Box, Typography } from "@mui/material";
import React from "react";
import CustomGameCard from "./shared/CustomGameCard";
import { Game } from "@/data/mockData";
import { Food } from "@prisma/client";
import CustomFoodCard from "./shared/CustomFoodCard";

interface Props {
  mostOrdered: Food | Game;
  onImageClick: (food: Food) => void;
}

const isGame = (item: Food | Game): item is Game => {
  return "playerCount" in item;
};

const WeeklyOffer = ({ mostOrdered, onImageClick }: Props) => {
  console.log("most played: ", mostOrdered);

  return (
    <>
      {mostOrdered && (
        <Box
          id="most-ordered"
          sx={{
            width: "100%",
            maxWidth: 500,
            mt: 5,
            mb: 1,
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
            <CustomFoodCard
              onImageClick={onImageClick}
              food={mostOrdered}
              idx={0}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default WeeklyOffer;
