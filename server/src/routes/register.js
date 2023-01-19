const bcrypt = require("bcrypt");
const { User, validateBody } = require("../models/user");
const express = require("express");
const router = express.Router();

//http://localhost:<port>/registerform/
router.post('/', async (req, res) => {
    const { email } = req.body;
    const checkUser = await User.findOne({ email: email })

    if (!checkUser) {
        let user = new User(req.body)
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        
        await user.save().then((response) => {
            console.log('usuario ingresado en BBDD', response)
            return response
        })
        const token = user.generateToken();
        res.header("x-auth-token", token).status(200).json(user)
    } else {
        console.log(`El email ${checkUser.email} ya existe`);
        return res.status(400).json({ message: `El email ${checkUser.email} ya existe` })
    }

});

module.exports = router;