import { NextRequest, NextResponse } from "next/server";
import { saveOptimizedImage } from "../../../../lib/image";
import { verifyAdmin } from "../../../../../lib/auth";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const foods = await prisma.food.findMany({
      select: {
        id: true,
        title: true,
        image: true,
      },
    });

    const base64Images = foods.filter((food) =>
      food.image?.startsWith("data:image/"),
    );

    return NextResponse.json({
      totalFoods: foods.length,
      imagesToOptimize: base64Images.length,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to inspect images." },
      { status: 500 },
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const foods = await prisma.food.findMany({
      select: {
        id: true,
        title: true,
        image: true,
      },
    });

    let processed = 0;
    let skipped = 0;
    let failed = 0;

    const results: {
      id: number;
      title: string;
      image: string;
    }[] = [];

    for (const food of foods) {
      if (!food.image?.startsWith("data:image/")) {
        skipped++;
        continue;
      }

      try {
        const imageUrl = await saveOptimizedImage(food.image);

        if (!imageUrl) {
          skipped++;
          continue;
        }

        await prisma.food.update({
          where: {
            id: food.id,
          },
          data: {
            image: imageUrl,
          },
        });

        processed++;

        results.push({
          id: food.id,
          title: food.title,
          image: imageUrl,
        });
      } catch (err) {
        failed++;

        console.error(
          `Failed to optimize image for food ${food.id} (${food.title})`,
          err,
        );
      }
    }

    return NextResponse.json({
      message: "Image optimization completed.",
      totalFoods: foods.length,
      processed,
      skipped,
      failed,
      results,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to optimize images." },
      { status: 500 },
    );
  }
}
