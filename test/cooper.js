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
    });
  });
});
