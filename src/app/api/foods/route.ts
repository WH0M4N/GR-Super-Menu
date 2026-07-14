import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { verifyAdmin } from "../../../../lib/auth";

export async function POST(req: NextRequest) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    if (body.isWeeklyOffer) {
      await prisma.food.updateMany({
        data: {
          isWeeklyOffer: false,
        },
      });
    }

    const food = await prisma.food.create({
      data: {
        title: body.title,
        desc: body.desc,
        category: body.category,
        image: body.image,
        baseTaste: body.baseTaste,
        isWeeklyOffer: body.isWeeklyOffer,
        price: Number(body.price),
      },
    });

    return NextResponse.json(food, { status: 201 });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to create food." },
      { status: 500 },
    );
  }
}
