import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes.js";

// dotenv.config();
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
  .connect("mongodb+srv://mmaithili15_db_user:AY5EXcDfN1eH0uOP@cluster0.rmrob2i.mongodb.net/personal-portfolio?retryWrites=true&w=majority&appName=Cluster0", {
  
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// ✅ Routes
app.use("/api", portfolioRoutes);

export default app; // <-- IMPORTANT for server.js
