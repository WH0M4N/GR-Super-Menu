import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  await prisma.game.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({ success: true });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const body = await request.json();

  const game = await prisma.game.update({
    where: {
      id: Number(id),
    },
    data: body,
  });

  return NextResponse.json(game);
}
