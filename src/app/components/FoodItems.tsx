"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import CustomFoodCard from "./shared/CustomFoodCard";
import { Food } from "@prisma/client";

interface Props {
  categories: string[];
  foods: Food[];
}

const FoodItems = ({ categories, foods }: Props) => {
  const foodIndexMap = new Map(foods?.map((food, index) => [food?.id, index]));

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

            {foods
              .filter((food) => food.category === category)
              .map((food) => (
                <CustomFoodCard
                  key={food.id}
                  food={food}
                  idx={foodIndexMap.get(food.id) ?? 0}
                />
              ))}
          </Box>
        );
      })}
    </>
  );
};

export default FoodItems;
