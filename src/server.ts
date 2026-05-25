import express from "express";
import imageRoute from "./routes/image_route";

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the image route for handling image resizing requests
app.use("/api/images", imageRoute);

// Root route for basic API information
app.get("/", (_req, res) => {
  res.send(
    "Welcome to the Image Resizer API! Use /api/images to resize your images."
  );
});

// Handle 404 for undefined routes
app.use((_req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
