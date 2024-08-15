const motionsplan = require('../js/heat-from-biking.js');
let assert = require('assert');

describe('HeatFromBiking', function() {
  describe('getHeatLoss', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatFromBiking(275, 23);
      assert.equal(hr.getHeat(), 921);
    });

  });
});
