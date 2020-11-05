const motionsplan = require('../js/andersen-test.js');
var assert = require('assert');

describe('AndersenTest', function() {
  describe('getVO22400Meter', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fitness = motionsplan.AndersenTest("female", 300);
      assert.equal(fitness.getFitnessLevel(), 22.363);
    });
  });
});
