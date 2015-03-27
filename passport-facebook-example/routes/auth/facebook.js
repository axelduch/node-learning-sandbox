var express = require('express');
var route = express.Router();
var passport = require('passport');
var authenticate = passport.authenticate('facebook');
var authenticateCallback = passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
});

route.get('/', authenticate);
route.get('/callback', authenticateCallback);

module.exports = route;
