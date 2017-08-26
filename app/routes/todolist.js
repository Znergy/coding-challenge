const express = require('express')
const router = express.Router()

// Get All items
router.get('/todolists', (req, res, next) => {
  res.send('Get all items working')
})

// Get Single item
router.get('/todolists/:id', (req, res, next) => {
  res.send('Get single item working')
})

// add item
router.post('/todolists', (req, res, next) => {
  res.send('post working')
})

// update item
router.put('/todolists/:id', (req, res, next) => {
  res.send('put working')
})

// delete item
router.delete('/todolists/:id', (req, res, next) => {
  res.send('delete working')
})

module.exports = router;
