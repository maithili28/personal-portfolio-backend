import Portfolio from "../models/Portfolio.model.js";

// ➕ Add portfolio data
export const addPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    res.status(201).json({ message: "Portfolio saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save portfolio" });
  }
};

// 📥 Get portfolio data
export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.json(portfolio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch portfolio" });
  }
};


// get data with id 
// 📥 Get portfolio data by ID
export const getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.json(portfolio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch portfolio" });
  }
};