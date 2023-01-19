const { User, validateBody } = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

//http://localhost:<port>/login/
router.post('/', async (req, res) => {
    const { email } = req.body;
    const checkUser = await User.findOne({ email: email })

    res.send(checkUser)

    //if (!checkUser) return res.status(400).send("Email no registrado")

    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(req.body.password, salt);
    // req.body.password = hash;
    const checkPassword = await bcrypt.compare(req.body.password, checkUser.password)
    
    console.log('checkPassword', checkPassword);


    // if (checkUser) {
    //     let user = new User(req.body)
    //     const salt = await bcrypt.genSalt(10);
    //     const hash = await bcrypt.hash(user.password, salt);
    //     user.password = hash;

    //     const token = user.generateToken();
    //     res.header("x-auth-token", token).status(200).json(user)
    // } else {
    //     res.status(400).send("Email y password invalidos")
    // }


});

// router.get('/', async (req, res) => {
//     User.findOne({}, `userName`)
//     .then((doc => {
//         res.json(doc)
//         console.log(doc);
//     }))
//     .catch((error) => {
//         console.log('Error en el getAll', error.message)
//         res.status(400).json({response: 'Failed en el get: getall'})
//     })

// })
    




    // app.get('/getall', (req, res) => {
    //     Todo.find({}, 'text completed') 
    //     .then((doc) => {
    //         res.json({response: 'success', data: doc})
    //     }).catch((error) => {
    //         console.log('Error en el getAll', error.message)
    //         res.status(400).json({response: 'Failed en el get: getall'})
    //     })
    // })

module.exports = router;