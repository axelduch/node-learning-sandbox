var express = require('express');
var path = require('path');
var route = express.Router();
var passport = require( 'passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var envConfig = require('../env.json');

// configure passport
passport.use(new FacebookStrategy({
    clientID: envConfig.FB_APP_ID,
    clientSecret: envConfig.FB_APP_SECRET,
    callbackURL: envConfig.FB_APP_CALLBACK_URL

}, function(accessToken, refreshToken, profile, done) {
    done(null, {name: 'It worked! :)'});
}));

route.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

route.use('/auth', require('./auth.js'));

module.exports = route;
