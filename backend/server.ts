import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Simulated endpoint for ordering services or other backend needs
  app.post("/api/order", (req, res) => {
    const { name, email, service, details } = req.body;
    console.log("New Order Received on Backend:", { name, email, service, details });
    res.json({
      success: true,
      message: "Order received successfully by En-Tech S.C. backend."
    });
  });

  // Vite middleware for development / Static files for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
      root: path.join(process.cwd(), "frontend")
    });
    app.use(vite.middlewares);
    console.log("Vite dev server middleware mounted.");
  } else {
    // In production, serve the built files from frontend/dist
    const distPath = path.join(process.cwd(), "frontend", "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving production static assets from frontend/dist.");
  }

  // Bind to localhost instead of 0.0.0.0
  app.listen(PORT, "localhost", () => {
    console.log(`Backend server listening at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start backend server:", err);
});
