const motionsplan = require('../js/heat-evaporation.js');
let assert = require('assert');

describe('HeatLossFromEvaporation', function() {
  describe('getHeatLoss', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromEvaporation(1.5, 80);
      assert.equal(hr.getHeatLoss(), 300);
    });
  });
  describe('getHeatLoss(hyperphysics)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromEvaporation(1.5, 80, "hyperphysics");
      assert.equal(hr.getHeatLoss(), 300);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromEvaporation(0.6, 80, "hyperphysics");
      assert.equal(hr.getHeatLoss(), 300);
    });
  });
});
