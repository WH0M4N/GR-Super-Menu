export const dynamic = "force-dynamic";

import prisma from "../../../../lib/prisma";
import AdminPageCore from "./AdminPageCore";

export default async function AdminPanelPage() {
  const foods = await prisma.food.findMany();
  const games = await prisma.game.findMany();
  const loungeDrinks = await prisma.loungeDrink.findMany();

  return (
    <AdminPageCore foods={foods} games={games} loungeDrinks={loungeDrinks} />
  );
}
