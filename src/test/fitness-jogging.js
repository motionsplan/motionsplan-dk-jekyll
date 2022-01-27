const motionsplan = require('../js/fitness-jogging.js');
let assert = require('assert');

describe('Vo2MaxFitnessJog', function() {
  describe('getMaximalOxygenUptake', function() {
    it('should return the correct number', function() {

      // sex, age, weight, time, hr
      let et = motionsplan.VO2MaxJog(1, 25, 80, 9, 150);
      
      assert.equal(et.getFitnessLevel(), 53.89399999999999);
      assert.equal(et.getMaximalOxygenUptake(), 4.31152);
    });
    it('should return the correct number', function() {

      // sex, age, weight, time, hr
      let et = motionsplan.VO2MaxJog(1, 17, 80, 9, 150);
      
      assert.equal(et.getFitnessLevel(), 55.322);
      assert.equal(et.getMaximalOxygenUptake(), 4.42576);
    });

  });
});
