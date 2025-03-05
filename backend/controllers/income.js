const Income = require("../models/IncomeModel"); // Correct import

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    // Validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const amountValue = Number(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }

    const income = new Income({
      title,
      amount: amountValue, // Ensure it's stored as a number
      category,
      description,
      date,
    });

    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    console.error("Error adding income:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    console.error("Error fetching incomes:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedIncome = await Income.findByIdAndDelete(id);
    if (!deletedIncome) {
      return res.status(404).json({ message: "Income not found!" });
    }
    res.status(200).json({ message: "Income Deleted" });
  } catch (error) {
    console.error("Error deleting income:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
