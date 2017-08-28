const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const config = require('config')
const todolist = require('./app/routes/todolist')
let port = 4000

console.log(`NODE_ENV: ${config.util.getEnv('NODE_ENV')}`)
console.log(`Database: ${config.DBHost}`)
console.log(`GitHub Repo: https://github.com/znergy/coding-challenge`)

mongoose.Promise = global.Promise
mongoose.connect(config.DBHost, {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
});

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'))
}

if(config.util.getEnv('NODE_ENV') !== 'prod') {
  todolist.populateDB()
}

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))

app.get("/", (req, res) => {
  res.sendFile('index.html')
})

app.route("/api/v1/todolists")
    .get(todolist.getTodolists)
    .post(todolist.postTodolist)

app.route("/api/v1/todolists/:id")
    .get(todolist.getTodolist)
    .delete(todolist.deleteTodolist)
    .put(todolist.updateTodolist)

app.listen(port)
console.log(`Listening on port: ${port}`)

module.exports = app
