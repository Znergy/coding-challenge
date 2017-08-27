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
    it('it should GET all the todolists', (done) => {
      chai.request(app)
        .get('/api/v1/todolists')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
          done()
        })
    })
  })
})
