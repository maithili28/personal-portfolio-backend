import express from "express";
import {
  addPortfolio,
  getPortfolioById,
} from "../controller/Portfolio.controller.js";

const router = express.Router();

router.post("/portfolio", addPortfolio);
router.get("/portfolio/:id", getPortfolioById);

export default router;
