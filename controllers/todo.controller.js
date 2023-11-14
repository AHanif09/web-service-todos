const Todo = require('../models/todo');

module.exports = {
    getAllTodo: async (req, res) => {
        const user = req.user

        const todos = await Todo.find({userID: user.id}).populate("userID", ["_id", "name"])

        res.json({
        message: "menampilkan data todo",
        data: todos
        })
    },

    getTodoById: async (req, res) => {
        const id = req.params.id;

        try {
            const todo = await Todo.findById(id);

            if (!todo) {
                return res.status(404).json({ message: "Todo tidak ditemukan" });
            }

            res.json({
                message: "Menampilkan data todo",
                data: todo
            });
        } catch (error) {
            res.status(500).json({ message: "Terjadi kesalahan pada server" });
        }
    },

    createTodo: async (req, res) => {
        let data = req.body

        await Todo.create(data)

        res.json({
        message: "berhasil membuat data todo"
        })
    },

    deleteTodo: async (req, res) => {
        const id = req.params.id;

        await Todo.findByIdAndDelete(id);

        res.json({
            message: "Todo berhasil dihapus"
        });
    },

    deleteAllTodos: async (req, res) => {
        const user = req.user;

        await Todo.deleteMany({ userID: user.id });

        res.json({
            message: "Semua Todo berhasil dihapus"
        });
    },

    updateTodo: async (req, res) => {
        const id = req.params.id;
        let data = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });

        res.json({
            message: "Todo berhasil diperbarui",
            data: updatedTodo
        });
    },
}