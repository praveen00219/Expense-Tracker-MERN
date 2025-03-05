const express = require("express");
const { Parser } = require("json2csv");
const Expense = require("../models/Expense");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Export expenses to CSV
router.get("/export", authMiddleware, async (req, res) => {
  try {
    // Fetch expenses for the logged-in user
    const expenses = await Expense.find({ userId: req.user.id });

    // Define CSV fields
    const fields = ["amount", "category", "date", "description"];
    const json2csvParser = new Parser({ fields });

    // Convert expenses to CSV
    const csv = json2csvParser.parse(expenses);

    // Set headers for file download
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=expenses.csv");

    // Send the CSV file
    res.status(200).end(csv);
  } catch (err) {
    res.status(500).json({ error: "Failed to export expenses" });
  }
});

module.exports = router;
