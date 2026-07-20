export const dynamic = "force-dynamic";

import prisma from "../../../lib/prisma";
import GamePageCore from "../components/GamePageCore";

const GamePage = async () => {
  const games = (await prisma.game.findMany()).map((game) => ({
    ...game,
    genre: JSON.parse(game.genre),
    playerCount: JSON.parse(game.playerCount),
  }));

  return <GamePageCore games={games} />;
};

export default GamePage;
