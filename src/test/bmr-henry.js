const motionsplan = require('../js/bmr-henry.js');
let assert = require('assert');

describe('BMRSchofield', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRHenry("male", 32, 80, 180);
      assert.equal(b.getBasicMetabolicRate(), 7630.999999999999);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRHenry("female", 32, 80, 180);
      assert.equal(b.getBasicMetabolicRate(), 6910);
    });
  });
});
