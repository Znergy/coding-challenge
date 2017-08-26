'use strict';

var express = require('express');
var router = express.Router();

// Get All items
router.get('/todolists', function (req, res, next) {
  res.send('Get all items working');
});

// Get Single item
router.get('/todolists/:id', function (req, res, next) {
  res.send('Get single item working');
});

// add item
router.post('/todolists', function (req, res, next) {
  res.send('post working');
});

// update item
router.put('/todolists/:id', function (req, res, next) {
  res.send('put working');
});

// delete item
router.delete('/todolists/:id', function (req, res, next) {
  res.send('delete working');
});

module.exports = router;