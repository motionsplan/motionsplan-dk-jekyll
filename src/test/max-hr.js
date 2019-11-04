const motionsplan = require('../js/max-hr.js');
var assert = require('assert');

describe('EstimateMaxHr', function() {
  describe('getMaxHr', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var hr = motionsplan.EstimateMaxHr(40);
      assert.equal(hr.getMaxHr(), 180);
    });
  });
});
