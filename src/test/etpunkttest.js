const motionsplan = require('../js/etpunkttest.js');
var assert = require('assert');

describe('EtPunktTest', function() {
  describe('getMaximalOxygenUptake', function() {
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      var et = motionsplan.EtPunktTest(1, 40, 80, 100, 130);
      assert.equal(et.getMaximalOxygenUptake(), 2.472604533834944);
      assert.equal(et.getFitnessLevel(), 30.9075566729368);
    });
  });
});
