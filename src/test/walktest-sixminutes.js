const motionsplan = require('../js/walktest-sixminutes.js');
var assert = require('assert');

describe('Six Minutes walking test', function() {
  describe('getRockport()', function() {
    it('should return the correct number', function() {
      // sex, age, height, weight, meter
      var hr = motionsplan.SixMinutesWalkingTest(1, 70, 170, 60, 500);
      assert.equal(hr.getReferenceMeter(), 520.9000000000001);
      assert.equal(hr.getPercent(), 95.98771357266268);

      var hr = motionsplan.SixMinutesWalkingTest(0, 70, 170, 60, 500);
      assert.equal(hr.getReferenceMeter(), 483.69999999999993);
      assert.equal(hr.getPercent(), 103.36985734959687);
    });
  });
  describe('getRockport() for repeated', function() {
    it('should return the correct number', function() {
      // sex, age, height, weight, meter
      var hr = motionsplan.SixMinutesWalkingTest(1, 70, 170, 60, 500);
      assert.equal(hr.getReferenceMeter(true), 659.5);
      assert.equal(hr.getPercent(true), 75.8150113722517);
    });
  });
});
