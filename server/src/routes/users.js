const bcrypt = require("bcrypt");
const { User, validateBody } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    res.json(req.body)

    let user = new User(req.body);
    await user.save().then((res) => console.log('usuario ingresado en BBDD', res))


});

router.get('/', async (req, res) => {
    User.findOne({}, `userName`)
    .then((doc => {
        res.json(doc)
        console.log(doc);
    }))
    .catch((error) => {
        console.log('Error en el getAll', error.message)
        res.status(400).json({response: 'Failed en el get: getall'})
    })
    




    // app.get('/getall', (req, res) => {
    //     Todo.find({}, 'text completed') 
    //     .then((doc) => {
    //         res.json({response: 'success', data: doc})
    //     }).catch((error) => {
    //         console.log('Error en el getAll', error.message)
    //         res.status(400).json({response: 'Failed en el get: getall'})
    //     })
    // })


})



module.exports = router;