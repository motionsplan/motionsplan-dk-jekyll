const motionsplan = require('../js/fat-pct.js');
var assert = require('assert');

describe('CalculateFatPercent', function() {
  describe('getFatMass', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getFatPercent(), 21.668827160493827);
      assert.equal(fat.getFatMass(), 17.33506172839506);
    });
  });
});
