const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDoListSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username field is required']
  },
  title: {
    type: String,
    required: [true, 'Name field is required']
  },
  category: {
    type: String,
    required: [true, 'Category field is required']
  },
  tasks: [],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

ToDoListSchema.pre('save', next => {
  let currentTime = new Date()
  if(!this.createdAt) {
    this.createdAt = currentTime
  }
  next()
})

const ToDoList = mongoose.model('todolist', ToDoListSchema);

module.exports = ToDoList
