const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/email");

exports.signup = async (req, res) => {
  // const frontendUrl = process.env.FRONTEND_URL;
  const frontendUrl = "https://expense-tracker-mern-prvn.onrender.com";

  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    await sendEmail(
      email,
      "Verify Email",
      `Click here to verify: ${frontendUrl}/verify?token=${token}`
    );
    res
      .status(201)
      .json({ message: "User created. Please verify your email." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.logout = async (req, res) => {
  // You can add token invalidation logic here (e.g., add the token to a blacklist)
  res.status(200).json({ message: "Logged out successfully" });
};
