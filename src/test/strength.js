const motionsplan = require('../js/strength.js');
var assert = require('assert');

describe('Strength', function() {
  describe('getIndex100', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Strength(80, 80);
      assert.equal(rm.getIndex100(), 89);
    });
  });
});
