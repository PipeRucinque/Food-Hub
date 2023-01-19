const { User, validateBody } = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    const checkUser = await User.findOne({ email: email })
    if (!checkUser) {
        res.status(404).send("Usuario no registrado")
    } else {
        const checkPassword = await bcrypt.compare(req.body.password, checkUser.password)
        console.log(checkPassword);
        if (checkPassword) {
            const token = checkUser.generateToken();
            console.log(token);
            res.status(200).header("x-auth-token", token).header('Access-Control-Expose-Headers', 'x-auth-token').json({userName: checkUser.userName, email: checkUser.email})
        } else {
            res.status(401).send("Email y/o password invalidos")
        }
    }
});

module.exports = router;