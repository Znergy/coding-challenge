'use strict';

var express = require('express');
var router = express.Router();
var TodoList = require('../models/todolist');

// get all lists
router.get('/todolists', function (req, res, next) {
  TodoList.find({}).then(function (todolists) {
    res.send(todolists);
  });
});

// Get Single item
router.get('/todolists/:id', function (req, res, next) {
  res.send('Get single item working');
});

// add list
router.post('/todolists', function (req, res, next) {
  TodoList.create(req.body).then(function (todolist) {
    res.send({ message: 'Todo List Added!', todolist: todolist });
  }).catch(next);
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