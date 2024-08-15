const motionsplan = require('../js/rer.js');
let assert = require('assert');

describe('RER', function() {
  describe('getRER()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getRER(), 0.85);
    });
  });
  describe('getKcalMin()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getKcalMin(), 9.7244);
    });
  });
  describe('getFatPercent()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getFatPercent(), 0.5);
    });
  });
  describe('getCaloriesFromFat()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getCaloriesFromFat(), 4.8622);
    });
  });
  describe('getCHOPercent()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getCHOPercent(), 0.5);
    });
  });
  describe('getCaloriesFromCHO()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getCaloriesFromCHO(), 4.8622);
    });
  });
});
