const motionsplan = require('../js/treadmill.js');
let assert = require('assert');

describe('Treadmill', function() {
  describe('getKcal()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Treadmill(1, 10, 10, 0, 85);
      assert.equal(hr.getKcal(), 162.91666666666666);
    });
  });
  describe('getKj()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Treadmill(1, 10, 10, 0, 85);
      assert.equal(hr.getKj(), 681.6433333333333);
    });
  });
  describe('getKwh()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Treadmill(1, 10, 10, 0, 85);
      assert.equal(hr.getKwh(), 0.18934537037037036);
    });
  });
  describe('getMets()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Treadmill(1, 10, 10, 0, 85);
      assert.equal(hr.getMets(), 11.5);
    });
  });
  describe('getGradientCorrectedSpeed()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Treadmill(1, 10, 10, 0, 85);
      assert.equal(hr.getGradientCorrectedSpeed(), 10.45);
    });
  });
  describe('getGradientCorrectedDistance()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Treadmill(1, 10, 10, 0, 85);
      assert.equal(hr.getGradientCorrectedDistance(), 1.7416666666666667);
    });
  });
});
