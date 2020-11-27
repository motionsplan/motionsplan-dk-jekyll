const motionsplan = require('../js/bmr-totalenergy-pal.js');
var assert = require('assert');

describe('TotalEnergyExpenditurePAL', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.TotalEnergyExpenditurePAL(7493, 2.2, 4, 4);
      assert.equal(b.getPhysicalActivityLevel(), 2.5000000000000004);
      assert.equal(b.getTotalEnergyExpenditure(), 18732.500000000004);
    });
  });
});
