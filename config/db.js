require("dotenv").config()

const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || "mongodb+srv://hanifresearch01:hanif@cluster0.vhxgn1u.mongodb.net/todo"  //"mongodb://127.0.0.1:27017/todo"

const db = mongoose.connect(DB_URL)

module.exports = db