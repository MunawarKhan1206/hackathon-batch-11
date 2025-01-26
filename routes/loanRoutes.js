const express = require("express");
const Loan = require("../models/Loan");
const router = express.Router();

// Create a new loan
router.post("/", async (req, res) => {
  const { category, subcategory, amount, period } = req.body;
  try {
    const loan = new Loan({ category, subcategory, amount, period });
    await loan.save();
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all loans
router.get("/", async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
