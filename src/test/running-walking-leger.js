const motionsplan = require('../js/running-walking-leger.js');
let assert = require('assert');

describe('RunningWalkdingEnergyExpenditureLeger', function() {
  describe('getASCM()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWalkingEnergyExpenditureLeger(80, 11);
      assert.equal(hr.getCaloriesPrKilometer(), 80.73883636363638);
      assert.equal(hr.getCaloriesPrMinute(), 14.802120000000002);
    });
  });
});
