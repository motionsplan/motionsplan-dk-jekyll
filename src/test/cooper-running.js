const motionsplan = require('../js/cooper-running.js');
let assert = require('assert');

describe('CooperRunning', function() {
  describe('getVO22400Meter', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.CooperRunning();
      assert.equal(fitness.getVO22400MeterTest(12, 00), 43.75);
    });
  });
  describe('getCooper', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.CooperRunning();
      assert.equal(fitness.getVO212MinTest(3000), 55.781354795439306);
    });
  });
  describe('getDistance', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.CooperRunning();
      assert.equal(fitness.getDistanceFromVO2Max(55), 55.781354795439306);
    });
  });
});
