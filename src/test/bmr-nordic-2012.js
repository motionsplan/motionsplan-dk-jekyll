const motionsplan = require('../js/bmr-nordic-2012.js');
let assert = require('assert');

describe('BMRNordicNutritionRecommendations2012', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      let b = motionsplan.BMRNordicNutritionRecommendations2012("male", 32, 80);

      assert.equal(b.getRestingEnergyExpenditure(), 7216.000000000001);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRNordicNutritionRecommendations2012("male", 32, 80, 181);

      assert.equal(b.getRestingEnergyExpenditure(), 7324.6);
    });
  });
});
