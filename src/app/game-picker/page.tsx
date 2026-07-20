export const dynamic = "force-dynamic";

import { GAME_GENRES } from "@/data/game";
import GamePicker from "../components/GamePicker";
import BackgroundBox from "../components/shared/BackgroundBox";
import prisma from "../../../lib/prisma";

const GamePickerPage = async () => {
  const players = [2, 3, 4, 5, 6];
  const games = (await prisma.game.findMany()).map((game) => ({
    ...game,
    genre: JSON.parse(game.genre),
    playerCount: JSON.parse(game.playerCount),
  }));

  return (
    <BackgroundBox>
      <GamePicker genres={GAME_GENRES} players={players} games={games} />
    </BackgroundBox>
  );
};

export default GamePickerPage;
