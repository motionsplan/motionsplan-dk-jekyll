const motionsplan = require('../js/water-intake.js');
let assert = require('assert');

describe('WaterIntake', function() {
  describe('getDailyWaterIntake()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.WaterIntake(80);
      assert.equal(hr.getDailyWaterIntake(), 2400);
    });
  });
});
