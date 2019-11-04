const motionsplan = require('../js/topunkttest.js');
var assert = require('assert');

describe('ToPunktTest', function() {
  describe('getMaximalOxygenUptake', function() {
    it('should return the correct number', function() {

      // age, weight, work1, hr1, work2, hr2
      var et = motionsplan.ToPunktTest(40, 80, 100, 120, 200, 160);
      assert.equal(et.getMaximalOxygenUptake(), 3.34);
      assert.equal(et.getFitnessLevel(), 41.7);
    });
  });
});
