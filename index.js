import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
  res.send("It's Alive!")
})

app.listen(process.env.port || 4000, () => {
  console.log('Now listening on port 4000')
})
