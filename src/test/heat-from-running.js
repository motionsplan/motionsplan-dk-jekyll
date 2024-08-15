const motionsplan = require('../js/heat-from-running.js');
let assert = require('assert');

describe('HeatFromRunning', function() {
  describe('getHeatLoss', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.HeatFromRunning(80, 5, 0, 210);
      assert.equal(hr.getHeat(), 844);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.HeatFromRunning(80, 5, 5, 210);
      assert.equal(hr.getHeat(), 830);
    });
  });
});
