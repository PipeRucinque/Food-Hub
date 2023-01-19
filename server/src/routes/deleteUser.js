const { User, validateBody } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    const checkUser = await User.findOneAndDelete({ email: email })
    if (!checkUser) {
        res.status(400).send("Usuario no encontrado")
    } else {
        res.status(200).json('Usuario eliminado de la BBDD')
    }
});

module.exports = router;