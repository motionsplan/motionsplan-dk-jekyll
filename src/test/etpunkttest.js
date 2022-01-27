const motionsplan = require('../js/etpunkttest.js');
let assert = require('assert');

describe('EtPunktTest', function() {
  describe('getMaximalOxygenUptake', function() {
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      let et = motionsplan.EtPunktTest(1, 44, 83, 110, 150);
      
      assert.equal(et.getMaximalOxygenUptake(), 5.197862011637572);
      assert.equal(et.getFitnessLevel(), 62.62484351370569);
    });
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      let et = motionsplan.EtPunktTest(1, 25, 83, 110, 150);
      
      assert.equal(et.getMaximalOxygenUptake(), 5.7298620116375725);
      assert.equal(et.getFitnessLevel(), 69.03448206792257);
    });
    it('should compare to health-calc', function() {

      // gender, age, weight, work, hr
      let et = motionsplan.EtPunktTest(0, 17, 66, 144, 150);
      
      assert.equal(et.getMaximalOxygenUptake(), 3.940058862288601);
      assert.equal(et.getFitnessLevel(), 59.69786154982729);
    });
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      let et = motionsplan.EtPunktTest(0, 25, 80, 152, 75);
      
      assert.equal(et.getMaximalOxygenUptake(), 2.8617764690399423);
      assert.equal(et.getFitnessLevel(), 35.77220586299928);
    });
  });
});
