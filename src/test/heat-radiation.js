const motionsplan = require('../js/heat-radiation.js');
let assert = require('assert');

describe('HeatLossFromRadiation', function() {
  describe('getHeatLoss(couzens)', function() {
    it('should return the correct number', function() {
      // I think this should return less
      // Originally Couzens hardcoded the values with 37 and 0,
      // But they align better with Bolzmann, if changing the values to allow actual numbers.
      // TODO - Check with the running page
      let hr = motionsplan.HeatLossFromRadiation(1.8336363385966754, 37, 31);
      assert.equal(hr.getHeatLoss(), 57.20945376421628);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromRadiation(1.8336363385966754, 37, 0);
      assert.equal(hr.getHeatLoss(), 352.79163154600036);
    });
  });
  // Boltzmann
  describe('getHeatLoss(boltzmann)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromRadiation(1.8336, 37, 31, "boltzmann");
      assert.equal(hr.getHeatLoss(), 70.143365741145);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromRadiation(1.8336, 37, 0, "boltzmann");
      assert.equal(hr.getHeatLoss(), 371.7696812697646);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromRadiation(2, (307-273.15), (296-273.15), "boltzmann");
      assert.equal(hr.getHeatLoss(), 132.69876805628192);
    });
  });
});
