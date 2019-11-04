const motionsplan = require('../js/fat-pct-measurements.js');
var assert = require('assert');

describe('CalculateFatPercentMeasurements', function() {
  describe('getFatMass', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fat = motionsplan.CalculateFatPercentMeasurements();
      assert.equal(fat.getFatPercentMenUnder26(280, 850, 270), 16.791800000000002);
      assert.equal(fat.getFatPercentMenOver26(900, 850, 270), 20.182500000000005);
      assert.equal(fat.getFatPercentWomenUnder26(500, 700, 200), 24.244999999999997);
      assert.equal(fat.getFatPercentWomenOver26(700, 500, 300), 21.972);
    });
  });
});
