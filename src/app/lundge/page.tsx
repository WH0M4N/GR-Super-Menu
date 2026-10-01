export const dynamic = "force-dynamic";

import prisma from "../../../lib/prisma";
import LoungePageCore from "../components/LoungePageCore";

const LoungePage = async () => {
  const loungeDrinks = await prisma.loungeDrink.findMany();

  return <LoungePageCore loungeDrinks={loungeDrinks} />;
};

export default LoungePage;
