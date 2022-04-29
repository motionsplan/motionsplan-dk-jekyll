const motionsplan = require('../js/flyer-handicap.js');
let assert = require('assert');

// https://www.running2win.com/calculator/WeightAgeGradingCalculator.asp

describe('FlyerHandicap', function() {
  describe('getAgeFactor() young', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(15, 50, 'male');
      assert.equal(hr.getAdjustedTime('5K', 0, 20, 0), '0:20:0');
    });
  });
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(25, 80, 'male');
      assert.equal(hr.getAdjustedTime('5K', 0, 20, 0), '0:18:39');
    });
  });
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let weight = 80;
      let hr = motionsplan.FlyerHandicap(45, weight, 'male');
      assert.equal(hr.getAdjustedTime('5K', 0, 20, 0), '0:17:2');
    });
  });
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(65, 100, 'male');
      assert.equal(hr.getAdjustedTime('5K', 0, 20, 0), '0:14:34');
    });
  });
});
