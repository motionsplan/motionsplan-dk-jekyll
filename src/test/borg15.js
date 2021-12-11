const motionsplan = require('../js/borg15.js');
let assert = require('assert');

describe('Borg15', function() {
  describe('getMaximalOxygenUptake', function() {
    it('should return the correct number', function() {

      // gender, age, weight, work, hr
      let et = motionsplan.Borg15(40, 70, 120);
      assert.equal(et.getMaximalOxygenUptake(), 2.5184606356968215);
      assert.equal(et.getFitnessLevel(), 35.97800908138316);
    });
  });
});
