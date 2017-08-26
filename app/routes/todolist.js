const express = require('express')
const router = express.Router()
const TodoList = require('../models/todolist')

// get all lists
router.get('/todolists', (req, res, next) => {
  TodoList.find({}).then((todolists) => {
    res.send(todolists)
  })
})

// Get Single item
router.get('/todolists/:id', (req, res, next) => {
  res.send('Get single item working')
})

// add list
router.post('/todolists', (req, res, next) => {
  TodoList.create(req.body).then((todolist) => {
    res.send({ message: 'Todo List Added!', todolist })
  }).catch(next)
})

// update list
router.put('/todolists/:id', (req,res, next) => {
  TodoList.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    TodoList.findOne({_id: req.params.id}).then((todolist) => {
      res.send(todolist)
    })
  }).catch(next)
})

// delete item
router.delete('/todolists/:id', (req, res, next) => {
  res.send('delete working')
})

module.exports = router;
