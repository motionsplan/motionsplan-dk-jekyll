const motionsplan = require('../js/running-walking-energy.js');
var assert = require('assert');

describe('RunningWalkdingEnergyExpenditure', function() {
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditure(8);
//      assert.equal(hr.getCaloriesPrMinute(), 11.066666666666666);
//      assert.equal(hr.getCaloriesPrKilometer(), 83);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditure('walking', 80, 4);
      assert.equal(hr.getCaloriesPrKilometer(), 61.00000000000001);
      assert.equal(hr.getCaloriesPrMinute(), 4.066666666666667);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditure('walking', 80, 6);
      assert.equal(hr.getCaloriesPrKilometer(), 54);
      assert.equal(hr.getCaloriesPrMinute(), 5.4);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditure('walking', 80, 8);
      assert.equal(hr.getCaloriesPrKilometer(), 50.50000000000001);
      assert.equal(hr.getCaloriesPrMinute(), 6.733333333333334);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditure('running', 80, 8);
      assert.equal(hr.getCaloriesPrKilometer(), 90.50000000000003);
      assert.equal(hr.getCaloriesPrMinute(), 12.06666666666667);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditure('running', 80, 11);
      assert.equal(hr.getCaloriesPrKilometer(), 87.63636363636363);
      assert.equal(hr.getCaloriesPrMinute(), 16.066666666666663);
    });
  });
});
