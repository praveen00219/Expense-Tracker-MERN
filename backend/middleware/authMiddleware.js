const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to authenticate requests
const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error("Authorization token is required");
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user associated with the token
    const user = await User.findById(decoded.id);

    if (!user) {
      throw new Error("User not found");
    }

    // Attach the user to the request object
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Please authenticate" });
  }
};

module.exports = authMiddleware;
