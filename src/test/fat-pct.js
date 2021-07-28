const motionsplan = require('../js/fat-pct.js');
var assert = require('assert');

describe('CalculateFatPercent', function() {
  describe('getFatMass', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      var fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getBodyFatPercentHeitmannBMIEquation(), 21.668827160493827);
      assert.equal(fat.getFatMass(), 17.33506172839506);
    });
  });
  describe('getFatMassFromWormsleyDurninBMIIndexEq', function() {
    it('should return the correct number', function() {

      var fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getBodyFatPercentWomersleyDurninBMIEquation(), 20.616419753086426);
    });
  });
  describe('getFatPercentDuernebergBMIIndexEq', function() {
    it('should return the correct number', function() {
      var fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getBodyFatPercentDuerenbergBMIEquation(), 22.629629629629626);
    });
    it('should return the correct number', function() {
      var fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getBodyFatPercentDuerenbergBMIEquation(), 33.42962962962963);
    });
  });
  describe('getGallagher', function() {
    it('should return the correct number', function() {
      var fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getBodyFatPercentGallagher(), 21.407999999999998);
      assert.equal(fat.getBodyFatPercentGallagher("afro"), 20.208);
      assert.equal(fat.getBodyFatPercentGallagher("asian"), 22.992499999999996);
    });
    it('should return the correct number', function() {
      var fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getBodyFatPercentGallagher(), 33.507999999999996);
      assert.equal(fat.getBodyFatPercentGallagher("asian"), 35.092499999999994);
      assert.equal(fat.getBodyFatPercentGallagher("afro"), 32.30799999999999);
    });
  });
});
