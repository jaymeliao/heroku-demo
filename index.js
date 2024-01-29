const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5050

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send(`<h1 style="color:blue;">hello</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
