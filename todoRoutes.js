const express = require("express");
const router = express.Router();
const db = require("./db");

// Get all todos
router.get("/", (req, res) => {
  db.all("SELECT * FROM todos", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Create a new todo
router.post("/", (req, res) => {
  const { task } = req.body;
  db.run("INSERT INTO todos (task) VALUES (?)", [task], err => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Todo created successfully!" });
    }
  });
});

// Get a specific todo
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM todos WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (row) {
      res.json(row);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  });
});

// Update a todo
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { task, completed } = req.body;
  db.run("UPDATE todos SET task = ?, completed = ? WHERE id = ?", [task, completed, id], err => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Todo updated successfully!" });
    }
  });
});

// Delete a todo
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.run("DELETE FROM todos WHERE id = ?", [id], err => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Todo deleted successfully!" });
    }
  });
});

module.exports = router;
