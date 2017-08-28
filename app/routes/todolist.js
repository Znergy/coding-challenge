const mongoose = require('mongoose')
const Todolist = require('../models/todolist')
const List = require('../data/sample-data')
const async = require('async')

// get all todolists
function getTodolists(req, res) {
  Todolist.find({}, (err, todolists) => {
    err ? res.status(422).send(err) : res.json(todolists)
  })
}
// get single todolist
function getTodolist(req, res) {
  Todolist.findOne({_id: req.params.id}, (err, todolist) => {
    err ? res.status(422).send(err) : res.json(todolist)
  })
}
// add todolist
function postTodolist(req, res) {
  let newTodolist = new Todolist(req.body)
  newTodolist.save((err, todolist) => {
    err ? res.status(422).send(err) : res.json({message: 'Todolist successfully added!', todolist})
  })
}
// delete todolist
function deleteTodolist(req, res) {
  Todolist.remove({_id: req.params.id}, (err, result) => {
    res.json({message: 'Todolist successfully deleted!', result})
  })
}
// update todolist
function updateTodolist(req, res) {
  Todolist.findById({_id: req.params.id}, (err, todolist) => {
    if(err) res.status(422).send(err)
    Object.assign(todolist, req.body).save((err, todolist) => {
      err ? res.status(422).send(err) : res.json({message: 'Todolist successfully updated!', todolist})
    })
  })
}
// populate db
function populateDB() {
  Todolist.remove({}, () => {
    // wipe collection
  })

  async.parallel([
    (callback) => {
      let newTodolist = new Todolist({
        username: "ZippyTheZipster",
        title: "Work",
        category: "programming",
        tasks: ["code", "eat", "sleep"]
      })
      newTodolist.save((err, todolist) => {
        callback(null, todolist)
      })
    },
    (callback) => {
      let newTodolist = new Todolist({
        username: "TreeTrunk12",
        title: "Homework",
        category: "school",
        tasks: ["ECON project", "Spanish paper", "Math"]
      })
      newTodolist.save((err, todolist) => {
        callback(null, todolist)
      })
    },
    (callback) => {
      let newTodolist = new Todolist({
        username: "Wally",
        title: "Chores",
        category: "chores",
        tasks: ["Take out trash", "Wash dishes", "Laundry"]
      })
      newTodolist.save((err, todolist) => {
        callback(null, todolist)
      })
    }
  ], function(err, results) {
    console.log({message: 'Database has been populated!', todolists: results})
  })
}

// exporting functions to access in app.js
module.exports = { getTodolists, getTodolist, postTodolist, deleteTodolist, updateTodolist, populateDB }
