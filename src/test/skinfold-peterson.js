const motionsplan = require('../js/skinfold-peterson.js');
var assert = require('assert');

describe('SkinfoldPeterson', function() {
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.SkinfoldPeterson(10, 10, 20, 20, 180, 80, "male", 20);
      assert.equal(hr.getBodyFatPercent(), 22.17558);
      assert.equal(hr.getFatFreeMass(), 62.259536);
    });
  });
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.SkinfoldPeterson(10, 10, 20, 20, 180, 80, "female", 20);
      assert.equal(hr.getBodyFatPercent(), 27.208785901234574);
      assert.equal(hr.getFatFreeMass(), 58.23297127901234);
    });
  });
});
