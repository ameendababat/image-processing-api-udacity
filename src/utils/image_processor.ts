import sharp from "sharp";

export async function resizeImage(
  inpPath: string,
  outPath: string,
  width: number,
  height: number
): Promise<void> {
  await sharp(inpPath).resize(width, height).toFile(outPath);
}
