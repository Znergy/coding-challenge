'use strict';

var request = require('request'),
    assert = require('assert'),
    base_url = 'http://localhost:4000';

describe('Code Challenge Application', function () {
  // Get Single Item
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
});