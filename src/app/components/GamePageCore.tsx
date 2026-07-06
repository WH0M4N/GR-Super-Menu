"use client";
import { Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import GameItems from "./GameItems";
import GamePageHeader from "./GamePageHeader";
import BackgroundBox from "./shared/BackgroundBox";
import WeeklyOffer from "./WeeklyOffer";
import { GameUI } from "./GamePicker";
import ImageDialog from "./ImageDialog";

const GamePageCore = ({ games }: { games: GameUI[] }) => {
  const [selectedGame, setSelectedGame] = useState<GameUI | null>(null);
  console.log("selected game: ", selectedGame);

  const mostPlayedGame = useMemo(
    () => games.find((game) => game.isWeeklyOffer),
    [games],
  );

  return (
    <BackgroundBox flip={true}>
      <ImageDialog
        image={selectedGame?.image ?? ""}
        isOpen={!!selectedGame}
        setOpen={() => setSelectedGame(null)}
        title={selectedGame?.title ?? ""}
      />

      <GamePageHeader />
      {mostPlayedGame && (
        <WeeklyOffer
          mostOrdered={mostPlayedGame}
          onImageClick={setSelectedGame}
        />
      )}
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "1.2rem",
          mb: 1,
          textAlign: "center",
        }}
      >
        🕹️ بازی ها
      </Typography>

      <GameItems games={games} onImageClick={setSelectedGame} />
    </BackgroundBox>
  );
};

export default GamePageCore;
