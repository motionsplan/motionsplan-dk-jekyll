const motionsplan = require('../js/flyer-handicap.js');
let assert = require('assert');

// https://www.running2win.com/calculator/WeightAgeGradingCalculator.asp

describe('FlyerHandicap', function() {
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.FlyerHandicap(45, 80, 'm');
      assert.equal(hr.getAgeFactor(), 0.9099);
    });
  });
});
