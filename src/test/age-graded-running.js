const motionsplan = require('../js/age-graded-running.js');
let assert = require('assert');

describe('AgeGradedRunning', function() {
  describe('getAgeFactor()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.AgeGradedRunning(45, 'm');
      hr.calculate('3km', 0, 12, 0);
      assert.equal(hr.getAgeFactor(), 0.9099);
    });
  });
  describe('getAgePerformance()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.AgeGradedRunning(45, 'm');
      hr.calculate('3km', 0, 12, 0);
      assert.equal(hr.getAgePerformancePercent(), 67.16244764381922);
    });
  });
  describe('getAgePerformance()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.AgeGradedRunning(45, 'm');
      hr.calculate('3km', 0, 12, 0);
      assert.equal(hr.getBestTime(), '07:20');
    });
  });
  describe('getAgePerformance()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.AgeGradedRunning(45, 'm');
      hr.calculate('3km', 0, 12, 0);
      assert.equal(hr.getBestAgeTime(), '08:04');
    });
  });
  describe('getAgePerformance()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.AgeGradedRunning(45, 'm');
      hr.calculate('3km', 0, 12, 0);
      assert.equal(hr.getAgeTime(), '10:55');
    });
  });
});
