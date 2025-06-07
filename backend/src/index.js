import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

// Configure CORS with credentials
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Increase payload limits to support files up to 100MB
app.use(
  express.json({
    limit: "100mb",
    parameterLimit: 50000,
  })
);

app.use(
  express.urlencoded({
    limit: "100mb",
    parameterLimit: 50000,
    extended: true,
  })
);

// Cookie parser
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Production static file serving
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Global error handler for large payloads
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      error: "Invalid JSON payload",
      message: "Request body contains invalid JSON",
    });
  }

  if (error.type === "entity.too.large") {
    return res.status(413).json({
      error: "Payload too large",
      message: "File size exceeds 100MB limit",
    });
  }

  next(error);
});

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
