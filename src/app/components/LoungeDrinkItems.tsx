"use client";

import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { LoungeDrink } from "@prisma/client";
import CustomLoungeDrinkCard from "./shared/CustomLoungeDrinkCard";

interface Props {
  categories: string[];
  loungeDrinks: LoungeDrink[];
  onImageClick: (drink: LoungeDrink) => void;
}

const LoungeDrinkItems = ({
  categories,
  loungeDrinks,
  onImageClick,
}: Props) => {
  const drinksByCategory = useMemo(() => {
    return loungeDrinks.reduce(
      (acc, drink) => {
        (acc[drink.category] ??= []).push(drink);
        return acc;
      },
      {} as Record<string, LoungeDrink[]>,
    );
  }, [loungeDrinks]);

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

            {(drinksByCategory[category] ?? []).map((drink, idx) => (
              <CustomLoungeDrinkCard
                key={drink.id}
                drink={drink}
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

export default LoungeDrinkItems;
