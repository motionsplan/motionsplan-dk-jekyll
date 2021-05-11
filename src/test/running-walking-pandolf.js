const motionsplan = require('../js/running-walking-pandolf.js');
var assert = require('assert');

describe('RunningWalkdingEnergyExpenditurePandolf', function() {
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditurePandolf(80, 4);
      assert.equal(hr.getCaloriesPrKilometer(), 57.641476386103335);
      assert.equal(hr.getCaloriesPrMinute(), 3.842765092406889);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditurePandolf(80, 4, 5);
      assert.equal(hr.getCaloriesPrKilometer(), 91.07990191395334);
      assert.equal(hr.getCaloriesPrMinute(), 6.071993460930223);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditurePandolf(80, 4, 0, 20);
      assert.equal(hr.getCaloriesPrKilometer(), 68.29002261074604);
      assert.equal(hr.getCaloriesPrMinute(), 4.552668174049736);
    });
  });
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditurePandolf(80, 4, 5, 20);
      assert.equal(hr.getCaloriesPrKilometer(), 110.08805452055854);
      assert.equal(hr.getCaloriesPrMinute(), 7.339203634703903);
    });
  });
});
