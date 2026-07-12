import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const body = await req.json();
    const { id } = await params;

    const food = await prisma.food.update({
      where: {
        id: Number(id),
      },
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

    return NextResponse.json(food);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to update food." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    await prisma.food.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to delete food." },
      { status: 500 },
    );
  }
}
