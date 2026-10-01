"use client";
import FoodTable from "@/app/components/admin-panel/food/FoodTable";
import GameTable from "@/app/components/admin-panel/game/GameTable";
import LogoutButton from "@/app/components/LogoutButton";
import { Box } from "@mui/material";
import { Food, Game, LoungeDrink } from "@prisma/client";
import React from "react";
import LoungeDrinkTable from "../lounge/LoungeDrinkTable";

const AdminPageCore = ({
  foods,
  games,
  loungeDrinks,
}: {
  foods: Food[];
  games: Game[];
  loungeDrinks: LoungeDrink[];
}) => {
  return (
    <>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "end", pt: 2 }}
      >
        <LogoutButton />
      </Box>

      <Box
        sx={{
          p: 1,
          width: "100%",
          height: "100%",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: {
              xs: "column",
              // lg : "row"
            },
            justifyContent: "center",
            alignItems: {
              xs: "center",
              lg: "center",
            },
            gap: 1,
          }}
        >
          <FoodTable foods={foods} />
          <GameTable games={games} />
          <LoungeDrinkTable loungeDrinks={loungeDrinks} />
        </Box>
      </Box>
    </>
  );
};

export default AdminPageCore;
