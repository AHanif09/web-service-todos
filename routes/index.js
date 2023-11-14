const express = require('express');
const route = express.Router()

const userRoute = require("./user.route")
const todoRoute = require("./todo.route")
const authRoute = require("./auth.route")

route.get("/", (req, res) => {
    res.json("Selamat datang di todo web service")
})

route.use("/auth", authRoute)
route.use("/register", userRoute)
route.use("/todos", todoRoute)
// route.use("/user", userRoute)

module.exports = route