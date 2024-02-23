const express = require("express");
const router = express.Router();

// Login route
router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login route" });
});

// Signup route
router.post("/signup", (req, res) => {
  res.status(201).json({ message: "Signup route" });
});

module.exports = router;
