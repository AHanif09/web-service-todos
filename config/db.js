require("dotenv").config()

const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/todo"

const db = mongoose.connect(DB_URL)

module.exports = db