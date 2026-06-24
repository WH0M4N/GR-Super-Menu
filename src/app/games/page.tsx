"use client";
import { games } from "@/data/mockData";
import BackgroundBox from "../components/shared/BackgroundBox";
import { Typography } from "@mui/material";
import GameItems from "../components/GameItems";
import GamePageHeader from "../components/GamePageHeader";
import WeeklyOffer from "../components/WeeklyOffer";

const GamePage = () => {
  const mostPlayedGame = games.find((game) => game.isWeeklyOffer);

  return (
    <BackgroundBox flip={true}>
      {/* Navbar style button and text for exploring games */}
      <GamePageHeader />
      {mostPlayedGame && <WeeklyOffer mostOrdered={mostPlayedGame} />}
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
      <GameItems games={games} />
    </BackgroundBox>
  );
};

export default GamePage;
