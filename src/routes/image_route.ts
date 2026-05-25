import express, { Request, Response } from "express";
import { resizeImage } from "../utils/image_processor";
import path from "path";
import fs from "fs";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  if (!filename) {
    return res.status(400).send("Filename is required");
  }

  if (!width || !height) {
    return res.status(400).send("Width and height are required");
  }

  const widthNumber = parseInt(width as string, 10);
  const heightNumber = parseInt(height as string, 10);

  if (
    isNaN(widthNumber) ||
    isNaN(heightNumber) ||
    widthNumber <= 0 ||
    heightNumber <= 0
  ) {
    return res.status(400).send("Width and height must be positive integers");
  }

  const input = path.resolve("src/assets/full", filename as string);
  const output = path.resolve(
    "src/assets/thumb",
    `${filename}-${widthNumber}x${heightNumber}.jpg`
  );

  fs.mkdirSync(path.dirname(output), { recursive: true });

  if (!fs.existsSync(input)) {
    return res.status(404).send("Input file not found");
  }

  try {
    if (!fs.existsSync(output)) {
      await resizeImage(input, output, widthNumber, heightNumber);
    }

    return res.sendFile(output);
  } catch (error) {
    console.error("Error resizing image:", error);
    return res.status(500).send("Error occurred while resizing image");
  }
});

export default router;
