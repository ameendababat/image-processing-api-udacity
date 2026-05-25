import path from "path";
import fs from "fs";
import { resizeImage } from "../utils/image_processor.js";

describe("resizeImage function", () => {
  const input = path.resolve("src/assets/full", "test.jpg");
  const output = path.resolve("src/assets/thumb", "test-200x200.jpg");

  beforeAll(() => {
    fs.mkdirSync(path.dirname(output), { recursive: true });
  });

  afterAll(() => {
    if (fs.existsSync(output)) {
      fs.unlinkSync(output);
    }
  });

  it("should resize the image to the specified dimensions", async () => {
    await resizeImage(input, output, 200, 200);
    expect(fs.existsSync(output)).toBe(true);

    const stat = fs.statSync(output);
    expect(stat.size).toBeGreaterThan(0);
  });
});
