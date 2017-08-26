const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoListSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Username field is required']
  },
  title: {
    type: String,
    required: [true, 'Title field is required']
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

TodoListSchema.pre('save', function (next) {
  let currentDate = new Date()
  if(!this.createdAt) {
    this.createdAt = currentDate.now
  }
  next();
})

const TodoList = mongoose.model('todolist', TodoListSchema);

module.exports = TodoList
