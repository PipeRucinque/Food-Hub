const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })




module.exports = function (app) {
    app.get('/', (req, res) => {
        res.json({response: 'success'})
    })
    app.get('/ping', (req, res) => {
        res.send('pong')
    })
    app.post('/login', jsonParser, (req, res) => {
        console.log(req.body);
        if (req.body.userName === 'pipe' && req.body.password === 'pipe123') {
            res.json({response: 'eeeeexitooo'})
        } else {
            res.json({response: 'loser!!!'})
        }
        
    })
}

