const motionsplan = require('../js/fat-pct-navy.js');
let assert = require('assert');

describe('CalculateFatPercent', function() {
  describe('getFatMass', function() {
    it('should return the correct number', function() {
      // sex, h, waist, neck, hip = 0
      let fat = motionsplan.CalculateFatPercentNavy('man', 181, 100, 40);
      assert.equal(fat.getFatPercent(), 24.98923253563953);
    });
    it('should return the correct number', function() {
      // sex, h, waist, neck, hip = 0
      let fat = motionsplan.CalculateFatPercentNavy('woman', 181, 90, 30, 100);
      assert.equal(fat.getFatPercent(), 33.773169748191094);
    });
  });
});
