const express = require("express");
const app = express();

// Use port from Docker or default to 3000
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from CMPS 4131 Dockerized Node App 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
