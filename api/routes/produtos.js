
module.exports = function (api) {

    api.get('/produtos', function (req, res) {

        var connection = api.api.config.database();

        var query = api.api.models.conteudoModel;
        query.getProdutos(connection,
            function (error, results, fields) {
                console.log(error, results);
                res.render('produtos', { dados: results });
            });
    });
}