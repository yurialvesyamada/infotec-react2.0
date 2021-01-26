
module.exports = function () {

    this.getProdutos = function (connection, callback) {
        connection.query("SELECT * FROM produto", callback);
    }
    this.getPedidos = function (connection, callback) {
        connection.query("SELECT produto.descricao, pedidos.nome_cliente FROM produto INNER JOIN pedidos ON produto.idproduto=pedidos.produto", callback);
    }
    this.salvarPedido = function (pedido, connection) {
        connection.query("INSERT INTO pedidos set?", pedido);
    }

    return this;
}




