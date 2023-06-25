const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
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

const Todo = mongoose.model("todoModel", todoSchema);

module.exports = Todo;
