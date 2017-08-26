'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// middleware
app.use(_bodyParser2.default.json());
app.use('/api/v1', require('./controllers/routes/api'));
app.use(function (err, req, res, next) {
  return res.status(422).send({ error: err.message });
});

app.get('/', function (req, res) {
  res.send('working');
});

app.listen(process.env.port || 4000, function () {
  console.log('Now listening on port 4000');
});