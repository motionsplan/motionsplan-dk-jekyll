const motionsplan = require('../js/bmr-nordic-1996.js');
var assert = require('assert');

describe('EnergyExpenditure', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.EnergyExpenditure(1, 32, 80, 2.2, true);

      assert.equal(b.getBasicMetabolicRate(), 7550);
      assert.equal(b.getPhysicalActivityLevel(), 2.5);      
      assert.equal(b.getTotalEnergyExpenditure(), 18875);

      var b = motionsplan.EnergyExpenditure(1, 32, 80, 2.2, false);

      assert.equal(b.getBasicMetabolicRate(), 7550);
      assert.equal(b.getPhysicalActivityLevel(), 2.2);      
      assert.equal(b.getTotalEnergyExpenditure(), 16610);
    });
  });
});
