let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let mongoose = require('mongoose')
let port = 4000
// let morgan = require('morgan')
// let config = require('config')

// console.log('NODE_ENV: ' + process.env.NODE_ENV)
// console.log(config.DBHost)

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/app_${process.env.NODE_ENV}`, {
  useMongoClient: true
})

// middleware
app.use(bodyParser.json())
app.use('/api/v1', require('./app/routes/todolist'))
app.use((err, req, res, next) => res.status(422).send({ error: err.message }))

app.listen(process.env.port || port, () => {
  console.log(`Now listening on port ${port}`)
})
