const motionsplan = require('../js/borg15.js');
var assert = require('assert');

describe('Borg15', function() {
  describe('getMaximalOxygenUptake', function() {
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      var et = motionsplan.Borg15(40, 80, 100);
      assert.equal(et.getMaximalOxygenUptake(), 2.503287576374745);
      assert.equal(et.getFitnessLevel(), 31.291094704684316);
    });
  });
});
