const motionsplan = require('../js/cooper-2400-meter.js');
let assert = require('assert');

describe('CooperRunning', function() {
  describe('getVO2Max', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.Cooper2400Meter();
      assert.equal(fitness.getVO2Max(12, 0), 43.75);
    });
  });
  describe('getVO2Max(burger)', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.Cooper2400Meter();
      assert.equal(fitness.getVO2Max(12, 0, "burger"), 49.002);
    });
  });
});
