const motionsplan = require('../js/vvo2max-hrc.js');
let assert = require('assert');

describe('VVO2maxHRC', function() {
  describe('getHRC', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VVO2maxHRC(150, 1000, 6, 0);
      assert.equal(fitness.getHRC(), 0.9);
    });
  });
  describe('getVVO2maxPrMin', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VVO2maxHRC(150, 1000, 6, 0);
      assert.equal(fitness.getVVO2maxPrMin(200), 222.22222222222223);
    });
  });
});
