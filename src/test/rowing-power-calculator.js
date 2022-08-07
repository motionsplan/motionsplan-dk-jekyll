const motionsplan = require('../js/rowing-power-calculator.js');
let assert = require('assert');

describe('RowingVo2', function() {
  describe('getVO2', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RowingPowerCalculator();
      let pace = r.getPaceFromTimeAndDistance(2000, 7, 18);
      assert.equal(pace, 0.219);
      assert.equal(r.getWattsFromPace(pace), 266.5788479776043);
    });
  });
});
