import prisma from "../../../../lib/prisma";
import AdminPageCore from "./AdminPageCore";

export default async function AdminPanelPage() {
  const foods = await prisma.food?.findMany();
  const games = await prisma.game?.findMany();

  return <AdminPageCore foods={foods} games={games} />;
}
