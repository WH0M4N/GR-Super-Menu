import prisma from "../../../lib/prisma";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  return Response.json(users);
}
