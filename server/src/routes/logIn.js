const { User, validateBody } = require("../models/user");
const express = require("express");
const router = express.Router();

//http://localhost:<port>/login/
router.get('/', async (req, res) => {
    res.send(req.body)
    console.log(req.body);
    

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