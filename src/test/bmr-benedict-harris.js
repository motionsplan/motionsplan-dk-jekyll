const motionsplan = require('../js/bmr-benedict-harris.js');
var assert = require('assert');

describe('EnergyExpenditure', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.BMRBenedictHarris("male", 32, 80, 181, 190);

      assert.equal(b.getBasicMetabolicRate(), 1849.4);
      assert.equal(b.getPhysicalActivityLevel(), 1.9);      
      assert.equal(b.getTotalEnergyExpenditure(), 3513);

      var b = motionsplan.BMRBenedictHarris("female", 32, 80, 181, 190);

      assert.equal(b.getBasicMetabolicRate(), 1598.3999999999999);
      assert.equal(b.getPhysicalActivityLevel(), 1.9);      
      assert.equal(b.getTotalEnergyExpenditure(), 3036);
    });
  });
});
