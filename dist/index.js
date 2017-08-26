'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res, next) {
  res.send("It's Alive!");
});

app.listen(process.env.port || 4000, function () {
  console.log('Now listening on port 4000');
});