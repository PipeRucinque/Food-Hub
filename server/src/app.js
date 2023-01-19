require('dotenv').config()
const express = require('express')
const app = express()

require('./startUp/routes')(app)
require('./startUp/db')()

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`FOOD-HUB (Server). Puerto ${port}`);
})