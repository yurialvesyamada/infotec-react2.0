var api = require('./api/config/server');

var rotaProdutos = require('./api/routes/produtos')(api);
var rotaPedidos = require('./api/routes/pedidos')(api);

api.listen(4000, function () {
    console.log("Servidor Ativo com Sucesso!");
});