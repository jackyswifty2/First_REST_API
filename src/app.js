require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const todoapp = require("./routes/todos");
require("./config/db");
const app = express();
app.use(express.json());

app.use("/todos", todoapp);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
