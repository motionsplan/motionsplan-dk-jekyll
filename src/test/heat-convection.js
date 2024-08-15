const motionsplan = require('../js/heat-convection.js');
let assert = require('assert');

describe('HeatLossFromConvection', function() {
  describe('getHeatLoss', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336363385966754, 31, 37, 41);
      assert.equal(hr.getHeatLoss(), 308);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336363385966754, 20, 37, 41);
      assert.equal(hr.getHeatLoss(), 873);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromConvection(1.8336, 31, 37, 12);
      assert.equal(hr.getHeatLoss(), 167);
    });

  });
});
