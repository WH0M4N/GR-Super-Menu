"use client";
import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import CustomFoodCard from "./shared/CustomFoodCard";
import { Food } from "@prisma/client";

interface Props {
  categories: string[];
  foods: Food[];
  onImageClick: (food: Food) => void;
}

const FoodItems = ({ categories, foods, onImageClick }: Props) => {
  const foodsByCategory = useMemo(() => {
    return foods.reduce(
      (acc, food) => {
        (acc[food.category] ??= []).push(food);
        return acc;
      },
      {} as Record<string, Food[]>,
    );
  }, [foods]);

  return (
    <>
      {categories.map((category) => {
        const categoryWithoutEmoji = category.replace(
          /\p{Extended_Pictographic}\uFE0F?$/u,
          "",
        );

        return (
          <Box
            key={category}
            id={`category-${category}`}
            sx={{
              width: "100%",
              maxWidth: 500,
              scrollMarginTop: "70px",
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.2rem",
                mt: 3,
                mb: 2,
                textAlign: "center",
              }}
            >
              {categoryWithoutEmoji}
            </Typography>

            {(foodsByCategory[category] ?? []).map((food, idx) => (
              <CustomFoodCard
                key={food.id}
                food={food}
                idx={idx}
                onImageClick={onImageClick}
              />
            ))}
          </Box>
        );
      })}
    </>
  );
};

export default FoodItems;
