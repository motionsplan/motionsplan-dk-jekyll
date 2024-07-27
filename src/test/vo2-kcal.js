const motionsplan = require('../js/vo2-kcal.js');
let assert = require('assert');

describe('VO2Kcal', function() {
  describe('getPercentFatUtilized', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2RERKcal(0.9);
      assert.equal(fitness.getPercentFatUtilized(), 33.33333333333332);
    });
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2RERKcal(1.0);
      assert.equal(fitness.getPercentFatUtilized(), 0);
    });
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2RERKcal(0.7);
      assert.equal(fitness.getPercentFatUtilized(), 100);
    });
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2RERKcal(0.75);
      assert.equal(fitness.getPercentFatUtilized(), 83.33333333333333);
    });
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2RERKcal(0.80);
      assert.equal(fitness.getPercentFatUtilized(), 66.66666666666664);
    });
  });
  describe('getPercentCHOUtilized', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.VO2RERKcal(0.9);
      assert.equal(fitness.getPercentCHOUtilized(), 66.66666666666669);

    });
  });
  describe('getKcalExpenditure', function() {
    it('should return the correct number', function() {

      let fitness = motionsplan.VO2RERKcal(0.9);
      assert.equal(fitness.getKcalExpenditure(2.5, 20, 0), 246.19);
    });
  });
});
