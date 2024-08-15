const motionsplan = require('../js/heat-conduction.js');
let assert = require('assert');

describe('HeatLossFromConduction', function() {
  describe('getHeatLoss', function() {
    it('should return the correct number', function() {
      // I think this should return less
      // Originally Couzens hardcoded the values with 37 and 0,
      // But they align better with Bolzmann, if changing the values to allow actual numbers.
      let hr = motionsplan.HeatLossFromConduction(1.8336, 37, 31);
      assert.equal(hr.getHeatLoss(), 5.2500075264);
    });
    it('should return the correct number', function() {
      // I think this should return less
      // Originally Couzens hardcoded the values with 37 and 0,
      // But they align better with Bolzmann, if changing the values to allow actual numbers.
      let hr = motionsplan.HeatLossFromConduction(1.8336, 37, 31, 1);
      assert.equal(hr.getHeatLoss(), 26.250037632000005);
    });
    it('should return the correct number', function() {
      // I think this should return less
      // Originally Couzens hardcoded the values with 37 and 0,
      // But they align better with Bolzmann, if changing the values to allow actual numbers.
      let hr = motionsplan.HeatLossFromConduction(2, 34, 23, 5);
      assert.equal(hr.getHeatLoss(), 10.498488);
    });
  });
});
