const motionsplan = require('../js/fitness-bruce.js');
var assert = require('assert');

describe('BruceTest', function() {
  describe('getMaximalOxygen', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fitness = motionsplan.BruceTest('man', 12);
      assert.equal(fitness.getMaximalOxygen(), 42.459999999999994);
      var fitness = motionsplan.BruceTest('woman', 12);
      assert.equal(fitness.getMaximalOxygen(), 48.660000000000004);
    });
  });
});
