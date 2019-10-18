const motionsplan = require('../assets/js/cooper.js');

var assert = require('assert');
describe('CooperClinicMortalityRiskIndex', function() {
  describe('getRiskPoint', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var cooper = motionsplan.CooperClinicMortalityRiskIndex(40, 120, 0, 4, 0, 24, 56);
      assert.equal(cooper.getRiskPoint(), 0.8);
      assert.equal(cooper.getRisk(), 1);
      assert.equal(cooper.getRisk3(), 4);
    });
  });
});
