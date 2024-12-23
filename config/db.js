const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/FVHJFD').then(() => {
    console.log('Connected to db')
})


module.exports = connection;