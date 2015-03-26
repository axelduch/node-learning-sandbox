var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Holy crap');
});

app.listen(8007);
