const { User, validateBody } = require("../models/user");
const auth = require('../middleware/auth')
const express = require("express");
const router = express.Router();

//http://localhost:<port>/login/
router.post('/', auth, async (req, res) => {
    console.log(req.user)
    res.send('likes')
});

module.exports = router;