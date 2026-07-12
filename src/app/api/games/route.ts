import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
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
