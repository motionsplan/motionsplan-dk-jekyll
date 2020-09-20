const motionsplan = require('../js/bmr-schofield.js');
var assert = require('assert');

describe('EnergyExpenditure', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.EnergyExpenditureSchofield(1, 32, 80, 2.2, true);

      assert.equal(b.getBasicMetabolicRate(), 7493);
      assert.equal(b.getPhysicalActivityLevel(), 2.5);      
      assert.equal(b.getTotalEnergyExpenditure(), 18732.5);

      var b = motionsplan.EnergyExpenditureSchofield(1, 32, 80, 2.2, false);

      assert.equal(b.getBasicMetabolicRate(), 7493);
      assert.equal(b.getPhysicalActivityLevel(), 2.2);      
      assert.equal(b.getTotalEnergyExpenditure(), 16484.600000000002);
    });
  });
});
