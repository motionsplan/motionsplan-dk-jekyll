const motionsplan = require('../js/steptest-ymca.js');
let assert = require('assert');

describe('SteptestYMCA', function() {
  describe('getIndex100', function() {
    it('should return the correct number', function() {
      // weigt, reps, 
      let rm = motionsplan.SteptestYMCA("male", 120, 181, 84, 48);
      assert.equal(rm.getFitnessLevel(), 36.438);
    });
  });
});
