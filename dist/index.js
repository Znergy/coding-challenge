'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var port = 4000;
// let morgan = require('morgan')
// let config = require('config')

// console.log('NODE_ENV: ' + process.env.NODE_ENV)
// console.log(config.DBHost)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/app_' + process.env.NODE_ENV, {
  useMongoClient: true
});

// middleware
app.use(bodyParser.json());
app.use('/api/v1', require('./app/routes/todolist'));
app.use(function (err, req, res, next) {
  return res.status(422).send({ error: err.message });
});

app.listen(process.env.port || port, function () {
  console.log('Now listening on port ' + port);
});