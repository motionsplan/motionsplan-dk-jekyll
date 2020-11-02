const motionsplan = require('../js/etpunkttest.js');
var assert = require('assert');

describe('EtPunktTest', function() {
  describe('getMaximalOxygenUptake', function() {
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      var et = motionsplan.EtPunktTest(1, 25, 80, 130, 150);
      
      assert.equal(et.getMaximalOxygenUptake(), 4.424969496794249);
      assert.equal(et.getFitnessLevel(), 55.312118709928114);
    });
    it('should compare to health-calc', function() {

      // gender, age, weight, work, hr
      var et = motionsplan.EtPunktTest(0, 18, 66, 144, 150);
      
      assert.equal(et.getMaximalOxygenUptake(), 3.912058862288601);
      assert.equal(et.getFitnessLevel(), 59.27361912558486);
    });
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      var et = motionsplan.EtPunktTest(0, 25, 80, 152, 75);
      
      assert.equal(et.getMaximalOxygenUptake(), 2.8617764690399423);
      assert.equal(et.getFitnessLevel(), 35.77220586299928);
    });
  });
});
