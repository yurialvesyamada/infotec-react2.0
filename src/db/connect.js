const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost/infotec', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Conectado com Sucesso")
        })
        .catch((error) => {
            console.log(`Connection Failed ${error}`)
        })
}

module.exports = connect()