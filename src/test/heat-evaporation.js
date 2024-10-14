const motionsplan = require('../js/heat-evaporation.js');
let assert = require('assert');

describe('HeatLossFromEvaporation', function() {
  describe('getHeatLoss(couzens)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromEvaporation(1.5, 80);
      assert.equal(hr.getHeatLoss(), 299.8502833211917);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromEvaporation(1.5, 40);
      assert.equal(hr.getHeatLoss(), 937.5);
    });
  });
  // hyperphysics is way off compared to couzens
  // dig more into this and why there is a big difference
  describe('getHeatLoss(hyperphysics)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromEvaporation(1.5, 80, "hyperphysics");
      assert.equal(hr.getHeatLoss(), 202.32333333333335);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatLossFromEvaporation(0.6, 80, "hyperphysics");
      assert.equal(hr.getHeatLoss(), 80.92933333333333);
    });
  });
});
