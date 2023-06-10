const mongoose = require("mongoose");

const todoappSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const todoapp = mongoose.model("todoapp", todoappSchema);

module.exports = todoapp;
