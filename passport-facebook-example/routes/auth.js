var express = require('express');
var route = express.Router();

route.use('/facebook', require('./auth/facebook.js'));

module.exports = route;
