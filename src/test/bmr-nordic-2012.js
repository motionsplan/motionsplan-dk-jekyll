const motionsplan = require('../js/bmr-nordic-2012.js');
var assert = require('assert');

describe('BMRNordicNutritionRecommendations2012', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.BMRNordicNutritionRecommendations2012(1, 32, 80);

      assert.equal(b.getRestingEnergyExpenditure(), 7216.000000000001);

      var b = motionsplan.BMRNordicNutritionRecommendations2012(1, 32, 80, 181);

      assert.equal(b.getRestingEnergyExpenditure(), 7324.6);
    });
  });
});
