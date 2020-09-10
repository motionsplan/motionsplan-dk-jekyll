const motionsplan = require('../js/bmr-nordic-2012.js');
var assert = require('assert');

describe('EnergyExpenditure', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.REE2012(1, 32, 80, 2.2, true);

      assert.equal(b.getRestingEnergyExpenditure(), 7216.000000000001);
      assert.equal(b.getPhysicalActivityLevel(), 2.5);      
      assert.equal(b.getTotalEnergyExpenditure(), 18040.000000000004);

      var b = motionsplan.REE2012(1, 32, 80, 2.2, false);

      assert.equal(b.getRestingEnergyExpenditure(), 7216.000000000001);
      assert.equal(b.getPhysicalActivityLevel(), 2.2);    
      assert.equal(b.getTotalEnergyExpenditure(), 15875.200000000003);
      
      assert.equal(b.getRestingEnergyExpenditureHeight(181), 7324.6);
    });
  });
});
