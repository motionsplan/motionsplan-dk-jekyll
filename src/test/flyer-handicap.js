const motionsplan = require('../js/flyer-handicap.js');
let assert = require('assert');

// https://www.running2win.com/calculator/WeightAgeGradingCalculator.asp

describe('FlyerHandicap', function() {
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(15, 80, 'male');
      assert.equal(hr.computefun('5K', 0, 20, 0), '0:20:0');
    });
  });
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(25, 80, 'male');
      assert.equal(hr.computefun('5K', 0, 20, 0), '0:20:0');
    });
  });
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(45, 80, 'male');
      assert.equal(hr.computefun('5K', 0, 20, 0), '0:18:16');
    });
  });
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(65, 100, 'male');
      assert.equal(hr.computefun('5K', 0, 20, 0), '0:16:49');
    });
  });
});
