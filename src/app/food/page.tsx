export const dynamic = "force-dynamic";

import prisma from "../../../lib/prisma";
import FoodPageCore from "../components/FoodPageCore";

const FoodPage = async () => {
  const foods = await prisma.food?.findMany();

  return <FoodPageCore foods={foods} />;
};

export default FoodPage;
