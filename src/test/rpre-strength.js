const motionsplan = require('../js/rpe-strength.js');
var assert = require('assert');

describe('RPEStrength', function() {
  describe('getWant()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.RPEStrength(100, 10, 10);
      assert.equal(hr.getWantWeight(10, 10).toFixed(1), 100);
    });
  });
  describe('getWant()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.RPEStrength(100, 10, 10);
      assert.equal(hr.getWantWeight(4, 8), 114.41756172056039);
    });
  });
});
