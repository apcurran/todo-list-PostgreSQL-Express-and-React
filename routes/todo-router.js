"use strict";

const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// POST new todo
router.post("/", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err);
    }
});

// GET all todos
router.get("/", async (req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo"
        );

        res.json(allTodos.rows);
    } catch (err) {
        console.error(err);
    }
});

// GET a specific todo
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err);
    }
});

// UPDATE a todo
router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );

        res.json("Todo was updated!");
    } catch (err) {
        console.error(err);
    }
});

// DELETE a todo
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json("Todo was deleted!");
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;