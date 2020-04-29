const motionsplan = require('../assets/js/max-hr.js');
var assert = require('assert');

describe('EstimateMaxHr', function() {
  describe('getMaxHr', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var cooper = motionsplan.EstimateMaxHr(40);
      assert.equal(cooper.getMaxHr(), 180);
    });
  });
});
