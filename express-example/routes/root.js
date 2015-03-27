var express = require('express');
var path = require('path');
var route = express.Router();
var test = require('./test.js');

route.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

route.use('/test', require('./test.js'));

module.exports = route;
