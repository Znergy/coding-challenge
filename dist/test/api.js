'use strict';

var request = require('request'),
    assert = require('assert'),
    base_url = 'http://localhost:4000';

describe('Code Challenge Application', function () {
  // Get Single List
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
});