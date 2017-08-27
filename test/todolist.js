process.env.NODE_ENV = 'test'

const mongoose = require("mongoose")
const Todolist = require('../app/models/todolist')
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const should = chai.should()

chai.use(chaiHttp)

describe('API Routes', () => {

  // wipe db prior to every test
  beforeEach((done) => {
    Todolist.remove({}, (err) => {
       done()
    })
  })

  describe('/GET todolist', () => {
    it('should GET all the todolists', (done) => {
      chai.request(app)
        .get('/api/v1/todolists')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            res.body.length.should.be.eql(0)
          done()
        })
    })
  })
  describe('/POST todolist', () => {
    it('should POST a todolist', (done) => {
      let todolist = {
          username: "ryanjones",
          title: "Side Project",
          category: "programming",
          tasks: ["code", "eat", "code"]
      }
      chai.request(app)
        .post('/api/v1/todolists')
        .send(todolist)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('todolist')
          res.body.should.have.property('message').eql('Todolist successfully added!')
          res.body.todolist.should.have.property('username')
          res.body.todolist.should.have.property('title')
          res.body.todolist.should.have.property('category')
          res.body.todolist.should.have.property('tasks')
          done()
        })
    })
  })
  describe('/POST todolist', () => {
    it('should NOT POST a todolist due to missing username field', (done) => {
      let todolist = {
          title: "Side Project",
          category: "programming",
          tasks: ["code", "eat", "code"]
      }
      chai.request(app)
        .post('/api/v1/todolists')
        .send(todolist)
        .end((err, res) => {
          res.should.have.status(422)
          res.body.should.be.a('object')
          res.body.should.have.property('errors')
          res.body.errors.should.have.property('username')
          res.body.errors.username.should.have.property('kind').eql('required')
          res.body.errors.username.should.have.property('message').eql('Username field is required')
          done()
        })
    })
  })
  describe('/GET/:id todolist', () => {
    it('should GET a todolist by the given id', (done) => {
      let todolist = new Todolist({ username: 'ryanjones', title: "project", category: "chores", tasks: ["clean"] })
      todolist.save((err, todolist) => {
        chai.request(app)
        .get(`/api/v1/todolists/${todolist.id}`)
        .send(todolist)
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('username')
            res.body.should.have.property('title')
            res.body.should.have.property('category')
            res.body.should.have.property('tasks')
            res.body.should.have.property('_id').eql(todolist.id)
          done()
        })
      })
    })
  })
  describe('/GET/:id todolist', () => {
    it('should GET a todolist by the given id but fail to a bad id', (done) => {
      let todolist = new Todolist({ username: 'ryanjones', title: "project", category: "chores", tasks: ["clean"] })
      todolist.save((err, todolist) => {
        chai.request(app)
        .get(`/api/v1/todolists/123`)
        .send(todolist)
        .end((err, res) => {
          res.should.have.status(422)
          res.body.should.be.a('object')
          res.body.should.have.property('name').eql('CastError')
          res.body.should.have.property('kind').eql('ObjectId')
          done()
        })
      })
    })
  })
  describe('/PUT/:id todolist', () => {
    it('should UPDATE a todolist given the id', (done) => {
      let todolist = new Todolist({ username: 'ryanjones', title: "project", category: "chores", tasks: ["clean"] })
      todolist.save((err, todolist) => {
        chai.request(app)
        .put(`/api/v1/todolists/${todolist.id}`)
        .send({ username: 'ryanjones', title: "homework", category: "school", tasks: ["econ"] })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('message').eql('Todolist successfully updated!')
          res.body.todolist.should.have.property('title').eql('homework')
          res.body.todolist.should.have.property('category').eql('school')
          res.body.todolist.should.have.property('tasks').eql(['econ'])
          done()
        })
      })
    })
  })
})
