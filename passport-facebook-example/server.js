var express = require('express');
var app = express();

app.use('/', require('./routes/root.js'));

app.listen(8007);
