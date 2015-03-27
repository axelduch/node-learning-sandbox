var express = require('express');
var path = require('path');
var route = express.Router();
var multer = require('multer');
var multerOptions = {
    dest: path.join(__dirname, '../uploads')
};
var middleware = multer(multerOptions);
var postCallbacks = [middleware, result];

function result(req, res) {
    console.log('upload');
        console.log(req.body);
        console.log(req.files);
    console.log('/upload');

    res.status(204).end();
}


route.post('/', postCallbacks);

module.exports = route;
