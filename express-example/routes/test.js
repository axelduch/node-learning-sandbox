var express = require('express');
var route = express.Router();

route.get('/', function (req, res) {
    res.send('Hi from test');
});

module.exports = route;
