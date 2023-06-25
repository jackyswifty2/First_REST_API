require("dotenv").config();
const mongoose = require("mongoose");


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })

  .then(() => {
    console.log("Connected to MongoDB");
    

  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });
