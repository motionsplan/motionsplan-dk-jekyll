const motionsplan = require('../js/andersen-test.js');
let assert = require('assert');

describe('AndersenTest', function() {
  describe('getVO2Andersen', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.AndersenTest("female", 300, 40);
      assert.equal(fitness.getFitnessLevel(), 22.363);
      assert.equal(fitness.getVO2max(), 0.89452);
    });
  });
  describe('getVO22400Meter', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.AndersenTest("male", 1200, 70);
      assert.equal(fitness.getFitnessLevel(), 57.99199999999999);
      assert.equal(fitness.getVO2max(), 4.0594399999999995);
    });
  });
  describe('getVO22400Meter', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.AndersenTest("male", 1200, 70, 'aadland_2014');
      assert.equal(fitness.getFitnessLevel(), 56.942);
      assert.equal(fitness.getVO2max(), 3.9859400000000003);
    });
  });
});
