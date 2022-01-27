const motionsplan = require('../js/bmr-schofield.js');
let assert = require('assert');

describe('BMRSchofield', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRSchofield("male", 32, 80);
      assert.equal(b.getBasicMetabolicRate(), 7493);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRSchofield("male", 32, 80);
      assert.equal(b.getBasicMetabolicRate(), 7493);
    });
  });
});
