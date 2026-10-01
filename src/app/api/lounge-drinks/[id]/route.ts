import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { verifyAdmin } from "../../../../../lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id } = await params;

    if (body.isWeeklyOffer) {
      await prisma.loungeDrink.updateMany({
        data: {
          isWeeklyOffer: false,
        },
      });
    }

    const loungeDrink = await prisma.loungeDrink.update({
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

    return NextResponse.json(loungeDrink);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to update lounge drink." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;

    await prisma.loungeDrink.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to delete lounge drink." },
      { status: 500 },
    );
  }
}
