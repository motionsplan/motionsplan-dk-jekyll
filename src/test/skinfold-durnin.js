const motionsplan = require('../js/skinfold-durnin.js');
var assert = require('assert');

describe('SkinfoldDurnin', function() {
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.SkinfoldDurnin(10, 10, 20, 20, 80, "male");
      assert.equal(hr.getBodyFatPercent(), 21.10515057483525);
      assert.equal(hr.getFatFreeMass(), 63.1158795401318);
    });
  });
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.SkinfoldDurnin(10, 10, 20, 20, 80, "female");
      assert.equal(hr.getBodyFatPercent(), 29.462279114830324);
      assert.equal(hr.getFatFreeMass(), 56.43017670813574);

      var hr = motionsplan.SkinfoldDurnin(10, 10, 20, 20, 80, "female", 60);
      assert.equal(hr.getBodyFatPercent(), 35.67063411553147);
      assert.equal(hr.getFatFreeMass(), 51.46349270757482);
    });
  });
  describe('getDensity()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      // https://www.thecalculator.co/health/Body-Fat-Skinfold-By-Durnin-And-Womersley-Calculator-1111.html
      var hr = motionsplan.SkinfoldDurnin(18, 20, 22, 32, 89, "female", 30);
      assert.equal(hr.getFatSum(), 92);
      assert.equal(hr.getDensity(), 1.018188609311761);
    });
  });
  
});
