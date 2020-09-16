const motionsplan = require('../js/skinfold-slaughter.js');
var assert = require('assert');

describe('SkinfoldSlaughter', function() {
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {
      // weight, age
      var hr = motionsplan.SkinfoldSlaughter(1, 10, 20);
      assert.equal(hr.getBodyFatPercent(), 27.4);
    });
  });
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {
      // weight, age
      var hr = motionsplan.SkinfoldSlaughter(0, 10, 20);
      assert.equal(hr.getBodyFatPercent(), 25.700000000000006);
    });
  });
});
