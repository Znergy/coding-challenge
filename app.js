const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const config = require('config')
const todolist = require('./app/routes/todolist')
let port = 4000

mongoose.Promise = global.Promise
mongoose.connect(config.DBHost, {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
});

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))

app.get("/", (req, res) => res.json({message: "Welcome to Todo List Extravaganza"}))

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










// console.log('Database URL: ' + config.DBHost)
//
// mongoose.Promise = global.Promise
// mongoose.connect(dbUrl, {
//   useMongoClient: true
// })
//
// // middleware
// app.use(bodyParser.json())
// app.use('/api/v1', api)
// app.use((err, req, res, next) => res.status(422).send({ error: err.message }))
//
// let server = app.listen(port, () => {
//   console.log(`Now listening on port: ${port}`)
// })
//
// module.exports = server
