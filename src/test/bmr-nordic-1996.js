const motionsplan = require('../js/bmr-nordic-1996.js');
var assert = require('assert');

describe('BMRNordicNutritionRecommendations1996', function() {
  describe('getBasicMetabolicRate', function() {
    it('should return the correct number', function() {
      // sex, age, weight, pal, sport
      var b = motionsplan.BMRNordicNutritionRecommendations1996(1, 32, 80 );

      assert.equal(b.getBasicMetabolicRate(), 7550);

      var b = motionsplan.BMRNordicNutritionRecommendations1996(1, 32, 80);

      assert.equal(b.getBasicMetabolicRate(), 7550);
    });
  });
});
