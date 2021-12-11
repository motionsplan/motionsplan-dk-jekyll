const motionsplan = require('../js/strength.js');
let assert = require('assert');

describe('Strength', function() {
  describe('getIndex100', function() {
    it('should return the correct number', function() {
      // weigt, reps
      let rm = motionsplan.Strength(80, 80);
      assert.equal(rm.getIndex100(), 89);
    });
  });
});
