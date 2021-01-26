var mysql = require('mysql');

var connMySQL = function () {
    console.log("Conectado com Sucesso!");
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'yuri',
        password: '898522',
        database: 'infotec'
    });
}

module.exports = function () {
    return connMySQL;
}