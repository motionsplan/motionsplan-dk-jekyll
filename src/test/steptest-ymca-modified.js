const motionsplan = require('../js/steptest-ymca-modified.js');
let assert = require('assert');

describe('SteptestYMCAModified', function() {
  describe('getFitnessLevelHRR60', function() {
    it('should return the correct number', function() {
      // weigt, reps, 
      let rm = motionsplan.SteptestYMCAModified();
      assert.equal(rm.getFitnessLevel("HRR60", 120), 43.04999999999999);
    });
  });
  describe('getFitnessLevelHRR15', function() {
    it('should return the correct number', function() {
      // weigt, reps, 
      let rm = motionsplan.SteptestYMCAModified();
      assert.equal(rm.getFitnessLevel("HRR15", 30), 48.617999999999995);
    });
  });
  describe('getStepHeight', function() {
    it('should return the correct number', function() {
      // weigt, reps, 
      let rm = motionsplan.SteptestYMCAModified();
      assert.equal(rm.getStepHeight("male", 181), 34.752);
    });
  });

});
