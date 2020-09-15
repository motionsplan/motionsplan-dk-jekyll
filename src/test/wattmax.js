const motionsplan = require('../js/wattmax.js');
var assert = require('assert');

describe('Wattmax', function() {
  describe('getVmax()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.Wattmax(300, 40, 80, 30);
      assert.equal(hr.getFitnessLevel(), 42.4625);
      assert.equal(hr.getMaximalOxygenUptake(), 3.3970000000000002);
    });
  });
  describe('getVmax()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.Wattmax(300, 40, 80, 13, 25);
      assert.equal(hr.getFitnessLevel(), 51.15138888888889);
      assert.equal(hr.getMaximalOxygenUptake(), 4.092111111111111);
    });
  });
});
