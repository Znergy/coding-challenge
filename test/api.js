const request = require('request'),
assert = require('assert'),
base_url = 'http://localhost:4000'

describe('Code Challenge Application', () => {
  // Get Single Item
  describe('GET /api/v1/todolists', () => {
    it('return with status 200', (done) => {
      request.get(`${base_url}/api/v1/todolists`, (err, res, body) => {
        if(err) {
          done(err)
          return
        }
        assert.equal(200, res.statusCode)
        done()
      })
    })
  })
})
