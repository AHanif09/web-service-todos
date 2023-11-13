require("dotenv").config()
const User = require("../models/user")
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (req, res) => {
        const userLogin = req.body 

        try {
        const user = await User.findOne({email: userLogin.email})
        if (!user) throw new Error("invalid user")
        console.log(user.password, userLogin.password);

        if (user.password !== userLogin.password) throw new Error("invalid user")
        const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY || "superSoldier$66")
    
        res.json({
            message: "login berhasil",
            userId: user._id,
            token,
        })
        } catch (error) {
        res.json(error.message)
        }
    },

    regis: (req, res) => {
        
    }
}