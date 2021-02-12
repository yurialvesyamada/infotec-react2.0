const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Users = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {               /* senha = telefone*/
        type: String,
        required: true
    },
    telefone: {               
        type: Number,
        required: true
    },
    tema: {
        type: String,
        required: true
    },
    mensagem: {
        type: String,
        required: true
    }

})
mongoose.model('usuarios', Users)


/*


*/