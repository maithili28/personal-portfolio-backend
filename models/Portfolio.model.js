import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  about: String,
  skills: [String], // e.g. ["React", "Node.js", "AWS"]
  experience: String,
  projects: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Portfolio", portfolioSchema);
