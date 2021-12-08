const motionsplan = require('../js/fitness-bruce.js');
let assert = require('assert');

describe('BruceTest', function() {
  describe('getMaximalOxygen', function() {
    it('should return the correct number', function() {

      let fitness = motionsplan.BruceTest('man', 12);
      assert.equal(fitness.getMaximalOxygen(), 42.459999999999994);
    });
  });

  describe('getMaximalOxygen', function() {
    it('should return the correct number', function() {
    
      let fitness = motionsplan.BruceTest('woman', 12);
      assert.equal(fitness.getMaximalOxygen(), 48.660000000000004);
    });
  });
});
