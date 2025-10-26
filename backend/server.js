// backend/server.js
const express = require("express");
const cors = require("cors");

const allowedOrigins = [
  'http://localhost:3000', 
  // For local development
  'https://sdgsbl-oaq2ordt7-pandeysakshii277-5369s-projects.vercel.app'
  // We will add your Vercel URL here later!
];

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000; // Or your local port number
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));