const motionsplan = require('../js/bmr-mifflin.js');
let assert = require('assert');

describe('BMRBenedictHarris', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      let b = motionsplan.BMRMifflin("male", 32, 80, 181);

      assert.equal(b.getBasicMetabolicRate(), 7431.83);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRMifflin("female", 32, 80, 181);

      assert.equal(b.getBasicMetabolicRate(), 6737.286);
    });
  });
});
