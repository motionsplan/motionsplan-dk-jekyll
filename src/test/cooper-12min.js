const motionsplan = require('../js/cooper-12min.js');
let assert = require('assert');

describe('CooperRunning', function() {
  describe('getVO2Max', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.Cooper12Min();
      assert.equal(fitness.getVO2Max(3000), 55.781354795439306);
    });
  });
  describe('getVO2Max(cooper)', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.Cooper12Min();
      assert.equal(fitness.getVO2Max(3000, "cooper"), 55.765);
    });
  });
  describe('getVO2Max(bandyopadhyay)', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.Cooper12Min();
      assert.equal(fitness.getVO2Max(3000, "bandyopadhyay"), 51.99000000000001);
    });
  });
  describe('getDistance', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.Cooper12Min();
      assert.equal(fitness.getDistanceFromVO2Max(55), 2965.0499999999997);
    });
  });
});
