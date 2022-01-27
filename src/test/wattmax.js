const motionsplan = require('../js/wattmax.js');
let assert = require('assert');

describe('Wattmax', function() {
  describe('getVmax()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Wattmax(300, 40, 80, 30);
      assert.equal(hr.getFitnessLevel(), 42.4625);
      assert.equal(hr.getMaximalOxygenUptake(), 3.3970000000000002);
    });
  });
  describe('getWattmax() children', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Wattmax(150, 90, 40, 13, 25);
      assert.equal(hr.getFitnessLevel(), 50.237500000000004);
      assert.equal(hr.getMaximalOxygenUptake(), 2.0095);
    });
  });
});
