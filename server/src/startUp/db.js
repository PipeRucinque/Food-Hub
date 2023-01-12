const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

module.exports = function () {
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true
    }).then(() => console.log('Conectado con BBDD'))
}