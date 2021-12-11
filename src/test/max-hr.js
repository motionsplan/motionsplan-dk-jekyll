const motionsplan = require('../js/max-hr.js');
let assert = require('assert');

describe('EstimateMaxHr', function() {
  describe('getMaxHr', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let hr = motionsplan.EstimateMaxHr(40);
      assert.equal(hr.getMaxHr(), 180);
    });
  });
});
