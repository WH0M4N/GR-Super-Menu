"use client";
import { Game } from "@/data/mockData";
import { Box } from "@mui/material";
import CustomGameCard from "./shared/CustomGameCard";

interface Props {
  games: Game[];
}

const GameItems = ({ games }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        scrollMarginTop: "70px",
      }}
    >
      {games.map((game, index) => (
        <CustomGameCard key={game.id} game={game} idx={index} />
      ))}
    </Box>
  );
};

export default GameItems;
