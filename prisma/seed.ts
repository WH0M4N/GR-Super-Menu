import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

import { foods } from "@/data/food";
import { games } from "@/data/game";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.food.deleteMany();
  await prisma.game.deleteMany();

  await prisma.food.createMany({
    data: foods,
  });

  await prisma.game.createMany({
    data: games.map((game) => ({
      ...game,
      genre: JSON.stringify(game.genre),
      playerCount: JSON.stringify(game.playerCount),
    })),
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
