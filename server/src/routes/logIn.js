const { User, validateBody } = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    const checkUser = await User.findOne({ email: email })
    if (!checkUser) {
        return res.status(404).json("Usuario no registrado")
    } else {
        const checkPassword = await bcrypt.compare(req.body.password, checkUser.password)
        if (checkPassword) {
            const token = checkUser.generateToken();
            return res.status(200).header("x-auth-token", token).header('Access-Control-Expose-Headers', 'x-auth-token').json({userName: checkUser.userName, email: checkUser.email})
        } else {
            return res.status(401).json("Email y/o password invalidos")
        }
    }
});

module.exports = router;