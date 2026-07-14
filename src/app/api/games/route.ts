import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { verifyAdmin } from "../../../../lib/auth";

export async function POST(request: Request) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  if (body.isWeeklyOffer) {
    await prisma.game.updateMany({
      data: {
        isWeeklyOffer: false,
      },
    });
  }

  const game = await prisma.game.create({
    data: body,
  });

  return NextResponse.json(game, { status: 201 });
}
