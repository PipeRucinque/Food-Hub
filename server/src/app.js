require('dotenv').config()
const express = require('express')
const app = express()

require('./startUp/routes')(app)
require('./startUp/db')()


// para que se entienda este middleware, usar la sgte URL
//localhost:<port>/ping/pang
const ping = require('./startUp/ping')
app.use('/ping', ping)// EL '/ping' es el que esta en la URL



const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`FOOD-HUB (Server). Puerto ${port}`);
})