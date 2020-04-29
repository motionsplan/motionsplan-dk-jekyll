const motionsplan = require('../assets/js/fitness-hr.js');
var assert = require('assert');

describe('CalculateFitnessFromHr', function() {
  describe('getMaximalOxygen', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fitness = motionsplan.CalculateFitnessFromHr(180, 60, 40);
      assert.equal(fitness.getMaximalOxygen(), 1.84);
      assert.equal(fitness.getFitnessLevel(), 45.9);
    });
  });
});

