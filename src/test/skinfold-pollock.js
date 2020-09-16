const motionsplan = require('../js/skinfold-pollock.js');
var assert = require('assert');

describe('SkinfoldPollock', function() {
  describe('getBodyPercentFatMale()', function() {
    it('should return the correct number', function() {

      // weight, age
      var hr = motionsplan.SkinfoldPollock(60, 40);
      assert.equal(hr.getBodyFatPercentMale(10, 20, 30), 19.086711863250343);
      assert.equal(hr.getFatFreeMass(), 48.54797288204979);
    });
  });
  describe('getBodyPercentFatFemale()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.SkinfoldPollock(60, 40);
      assert.equal(hr.getBodyFatPercentFemale(10, 20, 30), 24.76089554675241);
      assert.equal(hr.getFatFreeMass(), 45.143462671948555);
    });
  });
});
