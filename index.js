import express from 'express'
import bodyParser from 'body-parser'

const app = express()

// middleware
app.use(bodyParser.json())
app.use('/api/v1', require('./routes/api'))
app.use((err, req, res, next) => res.status(422).send({ error: err.message }))

app.get('/', (req, res) => {
  res.send('working')
})

app.listen(process.env.port || 4000, () => {
  console.log('Now listening on port 4000')
})
