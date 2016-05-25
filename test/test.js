var expect = require('chai').expect;
var assert = require('chai').assert;

var app = require('../app');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
  describe('Name', function () {
    it('should get name from app', function(){
      assert.equal("App1", app.name);
      assert.equal("App2", app.getName());
    })
  })
});
