const express = require("express");
const route = express.Router();

const {
    getAllTodo,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo,
    deleteAllTodos
} = require("../controllers/todo.controller");
const verifyToken = require("../middleware/auth");

route.get("/", verifyToken, getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.post("/", createTodo);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/", verifyToken, deleteAllTodos);
route.put("/:id", verifyToken, updateTodo);

module.exports = route;