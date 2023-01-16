const express = require('express')
const router = express.Router();
const User = require('../models/user')


// localhost:<port>/ping
router.get('/', (req, res) => {
    res.send('pong')
})
router.get('/pong', (req, res) => {
    res.send('pang')
})

module.exports = router

router.post('/', async (req, res) => {
    console.log(req.body);
    res.json(req.body)

    let user = new User(req.body);
    await user.save().then((res) => console.log('usuario ingresado en BBDD', res))


});

// localhost:<port>/find
router.get('/find', async (req, res) => {
    let user = await User.findOne({ userName: req.body.userName }).then(res => res.json())
    if (user) {
        console.log(req.body);
        console.log(user);
        res.status(200).send(`El usuario ${user} ya está registrado`);
    } else {
        res.status(400).send(`El usuario ${user} no está registrado`);
    }
})
