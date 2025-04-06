const motionsplan = require('../js/bmr-gerrior-pal.js');
let assert = require('assert');

describe('GerriorPAL', function() {
  describe('getPAL(male)', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRGerriorPAL("male", 80);
      b.setIntense(10, 10);
      assert.equal(b.getPAL(6600), 1.1243939393939395);
    });
  });
  describe('getPAL(female)', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRGerriorPAL("female", 80);
      b.setIntense(10, 10);
      assert.equal(b.getPAL(6600), 1.1243939393939395);
    });
  });
});
