const motionsplan = require('../js/steptest-queens-college.js');
let assert = require('assert');

describe('SteptestQueensCollege', function() {
  describe('getFitnessLevel', function() {
    it('should return the correct number', function() {
      // weigt, reps, 
      let rm = motionsplan.SteptestQueensCollege("male", 120);
      assert.equal(rm.getFitnessLevel(), 60.93);
    });
  });
});
