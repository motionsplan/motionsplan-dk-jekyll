const motionsplan = require('../js/fitness-index-23.js');
var assert = require('assert');

describe('FitnessIndex23', function() {
  describe('getIndex23', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fitness = motionsplan.FitnessIndex23(120, 30);
      assert.equal(fitness.getIndex23BasedOnFitnessLevel(10), 9.057971014492754);

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fitness = motionsplan.FitnessIndex23(180, 80);
      assert.equal(fitness.getIndex23BasedOnFitnessLevel(50), 53.67686527106817);

      var fitness = motionsplan.FitnessIndex23(180, 105);
      assert.equal(fitness.getFitnessLevelBasedOnVO2max(4000), 38.095238095238095);

      var fitness = motionsplan.FitnessIndex23(180, 105);
      assert.equal(fitness.getIndex23BasedOnVO2max(4000), 53.67686527106817);
    });
  });
});

