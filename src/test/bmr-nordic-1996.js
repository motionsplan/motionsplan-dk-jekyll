const motionsplan = require('../js/bmr-nordic-1996.js');
let assert = require('assert');

describe('BMRNordicNutritionRecommendations1996', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      let b = motionsplan.BMRNordicNutritionRecommendations1996("male", 32, 80 );

      assert.equal(b.getBasicMetabolicRate(), 7550);
    });
  });
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      let b = motionsplan.BMRNordicNutritionRecommendations1996("male", 32, 80);

      assert.equal(b.getBasicMetabolicRate(), 7550);
    });
  });
});
