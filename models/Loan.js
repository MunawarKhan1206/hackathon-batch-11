const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  category: String,
  subcategory: String,
  amount: Number,
  period: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Loan", LoanSchema);
