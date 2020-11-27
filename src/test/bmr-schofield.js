const motionsplan = require('../js/bmr-schofield.js');
var assert = require('assert');

describe('BMRSchofield', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight
      var b = motionsplan.BMRSchofield("male", 32, 80);
      assert.equal(b.getBasicMetabolicRate(), 7493);

      var b = motionsplan.BMRSchofield("male", 32, 80);
      assert.equal(b.getBasicMetabolicRate(), 7493);
    });
  });
});
