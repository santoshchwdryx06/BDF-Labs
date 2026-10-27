
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Route 1: Welcome message
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Node.js and Express Lab!");
});

// Route 2: About information
app.get("/about", (req, res) => {
  res.status(200).json({
    name: "Garikapati Sai Sri Santosh Kumar",
    section: "CSE (GEN-AI)"
  });
});

// Route 3: Current date and time
app.get("/time", (req, res) => {
  res.status(200).json({
    currentDateTime: new Date()
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
