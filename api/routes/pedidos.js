
module.exports = function (api) {

    api.get('/pedidos', function (req, res) {

        var connection = api.api.config.database();

        var query = api.api.models.conteudoModel;
        query.getPedidos(connection,
            function (error, results, fields) {
                console.log(error, results);
                res.render('pedidos', { dados: results });
            });
    });
}