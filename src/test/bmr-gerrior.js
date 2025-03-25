const motionsplan = require('../js/bmr-gerrior.js');
let assert = require('assert');

describe('Gerrior', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRGerrior("male", 32, 80, 180);
      assert.equal(b.getBasicMetabolicRate(), 7545.34872);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRGerrior("female", 32, 80, 180);
      assert.equal(b.getBasicMetabolicRate(), 6581.48036);
    });
  });
  describe('getTee(1)', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRGerrior("female", 32, 80, 180);
      assert.equal(b.getTEE(1), 9269.22724);
    });
  });
  describe('getTee(2)', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRGerrior("female", 32, 80, 180);
      assert.equal(b.getTEE(1.45), 13152.022702);
    });
  });
  describe('getTee(2)', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRGerrior("male", 32, 80, 180);
      assert.equal(b.getTEE(1.54), 15474.453176);
    });
  });
});
