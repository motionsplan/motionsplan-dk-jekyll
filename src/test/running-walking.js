const motionsplan = require('../js/running-walking.js');
var assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.RunningWalking("running", 8, 80);
      assert.equal(hr.getCaloriesPrMinute(), 11.066666666666666);
      assert.equal(hr.getCaloriesPrKilometer(), 83);
      assert.equal(hr.getMET(), 8.3);
      var hr = motionsplan.RunningWalking("walking", 4.8, 80);
      assert.equal(hr.getCaloriesPrMinute(), 4.666666666666667);
      assert.equal(hr.getCaloriesPrKilometer(), 58.333333333333336);
      assert.equal(hr.getMET(), 3.5);
    });
  });
});
