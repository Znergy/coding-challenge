'use strict';

var request = require('request'),
    assert = require('assert'),
    base_url = 'http://localhost:4000';

describe('Code Challenge Application', function () {
  // Get All Lists
  describe('GET /api/v1/todolists', function () {
    it('return with status 200', function (done) {
      request.get(base_url + '/api/v1/todolists', function (err, res, body) {
        if (err) {
          done(err);
          return;
        }
        assert.equal(200, res.statusCode);
        done();
      });
    });
  });
  /** GET Single List **/
  describe("GET /api/todolists/:id", function () {
    it("returns status code 200", function (done) {
      request.get(base_url + '/api/v1/todolists/1', function (err, response, body) {
        if (err) {
          done(err);
          return;
        }
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });
  /** POST/ADD list **/
  describe("POST /api/todolists", function () {
    it("returns status code 200", function (done) {
      request.post(base_url + '/api/todolists', function (err, response, body) {
        if (err) {
          done(err);
          return;
        }
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });
  /** PUT/UPDATE List **/
  describe("PUT /api/todolists/:id", function () {
    it("returns status code 200", function (done) {
      request.put(base_url + '/api/v1/todolists/1234', function (err, response, body) {
        if (err) {
          done(err);
          return;
        }
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });
  /** DELETE List **/
  describe("DELETE /api/todolists/:id", function () {
    it("returns status code 200", function (done) {
      request.delete(base_url + '/api/v1/todolists/1234', function (err, response, body) {
        if (err) {
          done(err);
          return;
        }
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });
});

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