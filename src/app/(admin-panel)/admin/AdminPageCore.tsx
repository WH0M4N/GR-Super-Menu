"use client";
import AddFood from "@/app/components/admin-panel/food/AddFood";
import FoodTable from "@/app/components/admin-panel/food/FoodTable";
import AddGame from "@/app/components/admin-panel/game/AddGame";
import GameTable from "@/app/components/admin-panel/game/GameTable";
import { Box } from "@mui/material";
import { Food, Game } from "@prisma/client";
import React from "react";

const AdminPageCore = ({ foods, games }: { foods: Food[]; games: Game[] }) => {
  return (
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
        <AddFood />
        <FoodTable foods={foods} />
        <AddGame />
        <GameTable games={games} />
      </Box>
    </Box>
  );
};

export default AdminPageCore;
