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
});
