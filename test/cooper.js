const motionsplan = require('../assets/js/cooper.js');
var assert = require('assert');

describe('CooperClinicMortalityRiskIndex', function() {
  describe('getRiskPoint', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var cooper = motionsplan.CooperClinicMortalityRiskIndex(30, 60, 0, 0, 0, 24, 56);
      assert.equal(cooper.getRiskPoint(), 0);
      assert.equal(cooper.getAbsoluteRisk(), 1.8);
      assert.equal(cooper.getRelativeRisk(), 0.8);

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      // Should probably just refuse to calculate as the test is not designed for this
      // var cooper = motionsplan.CooperClinicMortalityRiskIndex(80, 60, 0, 0, 0, 24, 56);
      // assert.equal(cooper.getRiskPoint(), 10);
      // assert.equal(cooper.getAbsoluteRisk(), 11.8);
      //assert.equal(cooper.getRelativeRisk(), 0.7);
    });
  });
});
