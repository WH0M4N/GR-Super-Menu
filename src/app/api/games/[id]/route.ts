import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { verifyAdmin } from "../../../../../lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  if (body.isWeeklyOffer) {
    await prisma.game.updateMany({
      data: {
        isWeeklyOffer: false,
      },
    });
  }

  const game = await prisma.game.update({
    where: {
      id: Number(id),
    },
    data: body,
  });

  return NextResponse.json(game);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  await prisma.game.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({ success: true });
}
