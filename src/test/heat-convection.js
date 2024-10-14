const motionsplan = require('../js/heat-convection.js');
const c = require('../js/heat-conduction.js');
let assert = require('assert');

describe('HeatLossFromConvection', function() {
  describe('getHeatLoss(couzens)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336363385966754, 31, 37, 41);
      assert.equal(hr.getHeatLoss(), 308.16494032326983);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336363385966754, 20, 37, 41);
      assert.equal(hr.getHeatLoss(), 873.1339975825978);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336, 31, 37, 12);
      assert.equal(hr.getHeatLoss(), 166.71447751928446);
    });
  });

  // Newton returns slightly higher values than couzens
  describe('getHeatLoss(newton)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336363385966754, 31, 37, 41, "newton");
      assert.equal(hr.getHeatLoss(), 360.9535759230176);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336363385966754, 20, 37, 41, "newton");
      assert.equal(hr.getHeatLoss(), 1022.7017984485498);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336, 31, 37, 12, "newton");
      assert.equal(hr.getHeatLoss(), 279.15553628829446);
    });
  });

  describe('compare conduction and convection', function() {
    it('should return the correct number', function() {
      // alan couzens with high speed
      let convection = motionsplan.HeatLossFromConvection(1.8336363385966754, 31, 37, 41);
      assert.equal(convection.getHeatLoss(), 308.16494032326983);
      // high speed should give a low d because the distance to loose the temperature should do this
      // Shorter distance makes the heat loss be much more
      // I need a way to come from the 41 km/h to how long the distance should be.
      // However, I have not seen any compelling formulas on this...

      let conduction = c.HeatLossFromConduction(1.8336, 31, 37, 1);
      assert.equal(conduction.getHeatLoss(), 26.250037632000005);
    });
  });
});
