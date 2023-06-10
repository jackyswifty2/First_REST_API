const express = require("express");
const router = express.Router();
const todoapp = require("../model/todoModel");

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await todoapp.find();
    if (todos.length === 0) {
      return res.status(404).json({ message: "No todos found." });
    }
    return res.status(200).json(todos);
  } catch (error) {
    console.error("Failed to get todos:", error);
    return res.status(500).json({ error: "Failed to get todos." });
  }
});

// Get a single todo by ID
router.get("/:id", async (req, res) => {
  try {
    const todo = await todoapp.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json(todo);
  } catch (error) {
    console.error("Failed to get todo:", error);
    return res.status(500).json({ error: "Failed to get todo." });
  }
});

// Create a new todo
router.post("/", async (req, res) => {
  try {
    const { userName, task } = req.body;

    // Validate request body
    if (!userName || !task) {
      return res
        .status(400)
        .json({ message: "userName and task are required fields" });
    }

    const todo = new todoapp(req.body);
    await todo.save();

    return res.status(201).json(todo);
  } catch (error) {
    console.error("Failed to create todo:", error);
    return res.status(400).json({ message: "Failed to create todo" });
  }
});

// Update a todo by ID
router.patch("/:id", async (req, res) => {
  try {
    const { userName, task } = req.body;

    // Validate request body
    if (!userName && !task) {
      return res
        .status(400)
        .json({ message: "userName or task must be provided for update" });
    }
    const todo = await todoapp.findByIdAndUpdate(
      req.params.id,
      { userName, task },
      {
        new: true,
      }
    );
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Delete a todo by ID
router.delete("/:id", async (req, res) => {
  try {
    const todo = await todoapp.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete todo" });
  }
});

module.exports = router;
