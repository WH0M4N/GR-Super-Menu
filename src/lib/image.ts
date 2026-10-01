import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const IMAGE_DIR = path.join(process.cwd(), "public", "images", "foods");

export async function saveOptimizedImage(base64Image: string) {
  if (!base64Image) {
    return null;
  }

  const matches = base64Image.match(
    /^data:image\/([a-zA-Z0-9.+-]+);base64,(.+)$/,
  );

  if (!matches) {
    throw new Error("Invalid image format");
  }

  const base64Data = matches[2];
  const buffer = Buffer.from(base64Data, "base64");

  await fs.mkdir(IMAGE_DIR, { recursive: true });

  const fileName = `${crypto.randomUUID()}.webp`;
  const outputPath = path.join(IMAGE_DIR, fileName);

  await sharp(buffer)
    .resize({
      width: 1200,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
    })
    .toFile(outputPath);

  return `/images/foods/${fileName}`;
}
