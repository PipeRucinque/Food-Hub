const bcrypt = require("bcrypt");
const { User, validateBody } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    console.log('funcionando server/src/routes/users.js');
    console.log(req.body);
    res.json(req.body)


//   let user = await User.findOne({ email: req.body.email });
//   if (user) return res.status(400).send("El usuario ya está registrado");
//   user = new User(req.body);
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(user.password, salt);
//   user.password = hash;
//   await user.save();
//   const token = user.generateToken();
//   res.header("x-auth-token", token).send("Usuario autentificado");


// app.post('/add', (req, res) => {
//     const todo = new Todo({text: req.body.text, completed: false})
//     todo.save()
//     .then((reqBody) => console.log('To do insertado', reqBody))
//     .catch((error) => {
//         console.log('Error en el post', error.message)
//         res.status(400).json({responde: 'Failed al insertar nuevo TO DO'})
//     })
//     console.log(req.body.text);
//     res.redirect('/')
//})

});

module.exports = router;