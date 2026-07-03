import prisma from "../../../lib/prisma";

export const dynamic = "force-dynamic"; // defaults to auto
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  const users = await prisma.food.findMany();
  return Response.json(users);
}
