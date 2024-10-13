const motionsplan = require('../js/heat-balance.js');
let assert = require('assert');

describe('HeatLossFromConduction', function() {
  describe('getHeatLoss', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatBalance();
      hr.setTotal(921);
      hr.setConvection(308);
      assert.equal(hr.getBalance(), 613);
      hr.setEvaporation(308);
      assert.equal(hr.getBalance(), 305);
      hr.setRadiation(308);
      assert.equal(hr.getBalance(), -3);
    });
  });
});
