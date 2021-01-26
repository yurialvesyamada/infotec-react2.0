var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var api = express();
api.set('view engine', 'ejs');
api.set('views', '././api/views');

api.use(bodyParser.urlencoded({ extended: true }));

consign()

    .include('././api/routes')
    .then('././api/config/database.js')
    .include('././api/models')
    .into(api);

module.exports = api;
