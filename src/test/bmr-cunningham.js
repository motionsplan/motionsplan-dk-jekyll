const motionsplan = require('../js/bmr-cunningham.js');
let assert = require('assert');

describe('BMRCunningham', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRCunningham(60);
      assert.equal(b.getBasicMetabolicRate(), 6025.5199999999995);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRCunningham(60, "nordic_nutrition_2012");
      assert.equal(b.getBasicMetabolicRate(), 6949.999999999999);
    });
  });
});
