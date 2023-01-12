const mongoose = require("mongoose")

async function connection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/movies')
        console.log('exitaso');

        const Cat = mongoose.model('Cat', {name: String})
        const kitty = new Cat({name: 'mishu'})
        kitty.save().then(()=> console.log('gato creado'))

    } catch (error) {
        console.log(error);
    }
}

connection()