var express = require('express');
var route = express.Router();
var test = require('./test.js');

route.use('/test', require('./test.js'));

module.exports = route;
