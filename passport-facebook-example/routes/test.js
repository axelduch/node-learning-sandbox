var express = require('express');
var path = require('path');
var route = express.Router();

route.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/test.html'));
});

module.exports = route;
