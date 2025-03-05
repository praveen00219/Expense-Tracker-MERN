const Expense = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
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

    // Create and Save Expense
    const expense = new Expense({
      title,
      amount: amountValue,
      category,
      description,
      date,
    });

    await expense.save();
    res.status(200).json({ message: "Expense Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  Expense.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
