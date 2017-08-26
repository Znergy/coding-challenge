const request = require('request'),
assert = require('assert'),
base_url = 'http://localhost:4000'

describe('Code Challenge Application', () => {
  // Get All Lists
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
  /** GET Single List **/
  describe("GET /api/todolists/:id", () => {
    it("returns status code 200", (done) => {
      request.get(`${base_url}/api/v1/todolists/1`, (err, response, body) => {
        if(err) {
          done(err)
          return
        }
        assert.equal(200, response.statusCode)
        done()
      })
    })
  })
  /** POST/ADD list **/
  describe("POST /api/todolists", () => {
    it("returns status code 200", (done) => {
      request.post(`${base_url}/api/v1/todolists`, (err, response, body) => {
        if(err) {
          done(err)
          return
        }
        assert.equal(200, response.statusCode)
        done()
      })
    })
  })
  /** PUT/UPDATE List **/
  describe("PUT /api/todolists/:id", () => {
    it("returns status code 200", (done) => {
      request.put(`${base_url}/api/v1/todolists/1234`, (err, response, body) => {
        if(err) {
          done(err)
          return
        }
        assert.equal(200, response.statusCode)
        done()
      })
    })
  })
  /** DELETE List **/
  describe("DELETE /api/todolists/:id", () => {
    it("returns status code 200", (done) => {
      request.delete(`${base_url}/api/v1/todolists/1234`, (err, response, body) => {
        if(err) {
          done(err)
          return
        }
        assert.equal(200, response.statusCode)
        done()
      })
    })
  })
})




  // var formData = {
  //   username: 'ryanjones123',
  //   title: 'Side Project',
  //   category: 'programming',
  //   tasks: [ "code", "eat"]
  // }

  // // Add List
  // describe('POST /api/v1/todolists', () => {
  //   it('return with status 200', (done) => {
  //     request.post({url: `${base_url}/api/v1/todolists`, formData: formData}, (err, httpResponse, body) => {
  //       if (err) {
  //         return console.error('upload failed:', err)
  //       }
  //       console.log('Upload successful!  Server responded with:', body)
  //       done()
  //     })
  //   })
  // })
