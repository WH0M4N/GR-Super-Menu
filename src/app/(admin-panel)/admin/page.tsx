"use client";

import AddFoodDialog from "@/app/components/admin-panel/food/AddFood";
import FoodTable from "@/app/components/admin-panel/food/FoodTable";
import AddGameDialog from "@/app/components/admin-panel/game/AddGame";
import GameTable from "@/app/components/admin-panel/game/GameTable";
import { Box, Button, Typography } from "@mui/material";

export default function AdminPanelPage() {
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
        <FoodTable />
        <AddFoodDialog />
        <GameTable />
        <AddGameDialog />
      </Box>
    </Box>
  );
}
