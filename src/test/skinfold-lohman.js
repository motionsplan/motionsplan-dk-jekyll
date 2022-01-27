const motionsplan = require('../js/skinfold-lohman.js');
let assert = require('assert');

describe('SkinfoldLohman', function() {
  describe('getBodyPercentFat()', function() {
    it('should return the correct number', function() {

      // weight, age
      let hr = motionsplan.SkinfoldLohman(1, 10, 20);
      assert.equal(hr.getBodyFatPercent(), 23.05);
    });
  });
  describe('getBodyPercentFatFemale()', function() {
    it('should return the correct number', function() {
      // weight, age
      let hr = motionsplan.SkinfoldLohman(0, 10, 20);
      assert.equal(hr.getBodyFatPercent(), 23.4);
    });
  });
});
