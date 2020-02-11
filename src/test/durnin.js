const motionsplan = require('../js/skinfold-durnin.js');
var assert = require('assert');

describe('SkinfoldDurnin', function() {
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.SkinfoldDurnin(10, 10, 20, 20, 80, "male");
      assert.equal(hr.getBodyFatPercent(), 21.01813116574084);
      assert.equal(hr.getFatFreeMass(), 63.18549506740733);
    });
  });
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.SkinfoldDurnin(10, 10, 20, 20, 80, "female");
      assert.equal(hr.getBodyFatPercent(), 29.388296296763826);
      assert.equal(hr.getFatFreeMass(), 56.48936296258894);
    });
  });
});
