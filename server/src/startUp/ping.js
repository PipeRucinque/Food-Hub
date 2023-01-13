const express = require('express')
const router = express.Router();


//localhost:{port}/ping
router.get('/', (req, res) => {
    res.send('pong')
})
router.get('/pong', (req, res) => {
    res.send('pang')
})

module.exports = router