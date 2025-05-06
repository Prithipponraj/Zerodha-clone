const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

// Routes
const apiVersion = "/api/v1";
app.use(`${apiVersion}/holdings`, require("./routes/holdingsRoute"));
app.use(`${apiVersion}/positions`, require("./routes/positionsRoute"));
app.use(`${apiVersion}/user`, require("./routes/userRoute"));
app.use(`${apiVersion}/orders`, require("./routes/orderRoute"));

// Default root route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API! Use /api/v1/ for available endpoints.");
});

// Catch undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Start server and connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.error("Failed to connect to MongoDB");
  });

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
