const motionsplan = require('../js/bmr-pavlidou.js');
let assert = require('assert');

describe('BMRSchofield', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      let b = motionsplan.BMRPavlidou("male", 32, 80, 180);
      assert.equal(b.getBasicMetabolicRate(), 7956.9162400000005);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRPavlidou("female", 32, 80, 180);
      assert.equal(b.getBasicMetabolicRate(), 6915.606879999999);
    });
  });
});
