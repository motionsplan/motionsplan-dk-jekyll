const motionsplan = require('../js/bmr-benedict-harris.js');
var assert = require('assert');

describe('BMRBenedictHarris', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.BMRBenedictHarris("male", 32, 80, 181);

      assert.equal(b.getBasicMetabolicRate(), 7737.8896);

      var b = motionsplan.BMRBenedictHarris("female", 32, 80, 181);

      assert.equal(b.getBasicMetabolicRate(), 6687.705599999999);
    });
  });
});
