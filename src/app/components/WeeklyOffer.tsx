"use client";
import { Box, Typography } from "@mui/material";
import CustomGameCard from "./shared/CustomGameCard";
import { Food } from "@prisma/client";
import CustomFoodCard from "./shared/CustomFoodCard";
import { GameUI } from "./GamePicker";

type Props =
  | {
      mostOrdered: Food;
      onImageClick: (food: Food) => void;
    }
  | {
      mostOrdered: GameUI;
      onImageClick: (game: GameUI) => void;
    };

const isGame = (item: Food | GameUI): item is GameUI => {
  return "playerCount" in item;
};

const WeeklyOffer = ({ mostOrdered, onImageClick }: Props) => {
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
            <CustomGameCard
              onImageClick={onImageClick as (game: GameUI) => void}
              game={mostOrdered}
              idx={0}
            />
          ) : (
            <CustomFoodCard
              food={mostOrdered}
              idx={0}
              onImageClick={onImageClick as (food: Food) => void}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default WeeklyOffer;
