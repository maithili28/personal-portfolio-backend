import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes.js";

dotenv.config();
const app = express();

// CORS setup
const allowedOrigins = [
  "http://localhost:5173",
  "https://Portfolio-env.eba-nkk2djex.ap-south-1.elasticbeanstalk.com",
];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// API routes
app.use("/api", portfolioRoutes);

// Serve React frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "frontend_build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend_build", "index.html"));
});

export default app;
