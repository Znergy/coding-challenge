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

// get single list
router.get('/todolists/:id', function (req, res, next) {
  TodoList.findOne({ _id: req.params.id }).then(function (todolist) {
    res.send(todolist);
  }).catch(next);
});

// add list
router.post('/todolists', function (req, res, next) {
  TodoList.create(req.body).then(function (todolist) {
    res.send({ message: 'Todo List Added!', todolist: todolist });
  }).catch(next);
});

// update list
router.put('/todolists/:id', function (req, res, next) {
  TodoList.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    TodoList.findOne({ _id: req.params.id }).then(function (todolist) {
      res.send(todolist);
    });
  }).catch(next);
});

// delete list
router.delete('/todolists/:id', function (req, res, next) {
  TodoList.findByIdAndRemove({ _id: req.params.id }).then(function (todolist) {
    res.send({ message: 'Todo List Succesfully Deleted', todolist: todolist });
  }).catch(next);
});

module.exports = router;