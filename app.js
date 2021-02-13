const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs');
cors = require('cors');

app.use(cors());
app.use(express.json())

require('./src/models/User');
const Users = mongoose.model('usuarios')

/* db Connect */
require('./src/db/connect');

app.get('/usuarios', async (req, res) => {
    const usuariosResponse = await Users.find()
    const usuariosJson = await usuariosResponse

    return res.json(usuariosJson)
});

app.post('/usuarios', async (req, res) => {
    const validate = await Users.findOne({ email: req.body.email })
    if (validate) {
        return res.json({ message: "Alguém já tem este endereço de email. Tente usar outro nome" })
    } else {
        const newUser = new Users({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            telefone: req.body.telefone,
            tema: req.body.tema,
            mensagem: req.body.mensagem,
        });

        bcrypt.genSalt(10, (error, salt) => {
            /* Generate Hash with salt */
            bcrypt.hash(newUser.senha, salt, (error, hash) => {
                if (error) {
                    res.json({ message: "Error ao cadastrar usuario" })
                } else {
                    newUser.senha = hash
                    newUser.save()

                    res.json({ message: "Cadastro concluido com sucesso!", usuario: newUser })
                }
            })
        })
    }
});




app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    const usuario = await Users.findOne({ _id: id })

    usuario.nome = req.body.nome
    usuario.email = req.body.email
    usuario.senha = req.body.senha
    usuario.telefone = req.body.telefone
    usuario.tema = req.body.tema
    usuario.mensagem = req.body.mensagem
    usuario.save()
    res.json({ message: "Usuario alterado.", usuario: usuario })
})

app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    const usuario = await Users.findOneAndDelete({ _id: id });

    res.json({ message: "Usuario deletado com sucesso.", usuario: usuario })
});

app.listen(5000, function () {
    console.log("Servidor Ativo com Sucesso!");
});
