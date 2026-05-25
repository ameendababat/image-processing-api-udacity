import request from "supertest";
import app from "../server.js";

describe("GET /api/images/resize", () => {
  it("should return 400 if filename is not provided", async () => {
    const res = await request(app).get("/api/images?width=100&height=100");
    expect(res.status).toBe(400);
  });

  it("should return 400 if width or height is invalid - non-numeric", async () => {
    const res = await request(app).get(
      "/api/images?filename=fjord.jpg&width=abc&height=100"
    );
    expect(res.status).toBe(400);
    expect(res.text).toBe("Width and height must be positive integers");
  });

  it("should return 400 if width or height <= 0", async () => {
    const res = await request(app).get(
      "/api/images?filename=fjord.jpg&width=-100&height=100"
    );
    expect(res.status).toBe(400);
    expect(res.text).toBe("Width and height must be positive integers");
  });

  it("should return 404 if image does not exist", async () => {
    const res = await request(app).get(
      "/api/images?filename=nonexistent.jpg&width=100&height=100"
    );
    expect(res.status).toBe(404);
    expect(res.text).toBe("Input file not found");
  });

  it("should return 200 and serve image if valid params are provided", async () => {
    const res = await request(app).get(
      "/api/images?filename=fjord.jpg&width=100&height=100"
    );
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toContain("image/jpeg");
  });
});
