const motionsplan = require('../js/bmr-bmr.js');
let assert = require('assert');

describe('BMRSchofield', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMR("male", 32, 80, 180, "henry");
      assert.equal(b.getBasicMetabolicRate(), 7630.999999999999);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMR("female", 32, 80, 180, "henry");
      assert.equal(b.getBasicMetabolicRate(), 6910);
    });
  });
});
