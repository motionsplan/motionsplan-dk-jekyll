const motionsplan = require('../js/inol.js');
let assert = require('assert');

describe('INOL', function() {
  describe('getINOL()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.INOL(80);
      assert.equal(hr.getINOL(30), 1.5);
    });
  });
  describe('getReps()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.INOL(80);
      assert.equal(hr.getReps(1.5), 30);
    });
  });
});
