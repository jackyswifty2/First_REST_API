require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todoapp = require("./routes/todos");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/todos", todoapp);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })

  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });
