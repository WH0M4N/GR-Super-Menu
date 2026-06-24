"use client";
import GamePicker from "../components/GamePicker";
import { GAME_GENRES } from "@/data/mockData";
import BackgroundBox from "../components/shared/BackgroundBox";

const GamePickerPage = () => {
  const players = [2, 3, 4, 5, 6];

  return (
    <BackgroundBox>
      <GamePicker genres={GAME_GENRES} players={players} />
    </BackgroundBox>
  );
};

export default GamePickerPage;
