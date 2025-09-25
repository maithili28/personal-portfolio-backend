import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes.js";

dotenv.config();
const app = express();
// for testing
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

// ✅ Allow AWS domain + local dev
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

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
  
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// ✅ Routes
app.use("/api", portfolioRoutes);

export default app; // <-- IMPORTANT for server.js
