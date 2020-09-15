const motionsplan = require('../js/walktest-rockport-16.js');
var assert = require('assert');

describe('Rockport walking test', function() {
  describe('getRockport()', function() {
    it('should return the correct number', function() {

      // min, sec, hr, sex, age, weight
      var hr = motionsplan.RockPortWalkingTest(12, 40, 125, "male", 30, 80);
      //assert.equal(hr.getMaximalOxygenUptake(), 53.05394000000001);
      assert.equal(hr.getFitnessLevel(), 53.05626163068641);

      var hr = motionsplan.RockPortWalkingTest(12, 3, 125, "female", 30, 80);
      //assert.equal(hr.getMaximalOxygenUptake(), 48.752295000000004);
      assert.equal(hr.getFitnessLevel(), 48.754616630686414);

    });
  });
  describe('getMOL()', function() {
    it('should return the correct number', function() {

      // min, sec, hr, sex, age, weight
      var hr = motionsplan.RockPortWalkingTest(10, 0, 125, "male", 30, 80);
      assert.equal(hr.getMaximalOxygenUptakeMOL(), 4.70476);
      assert.equal(hr.getFitnessLevelMOL(), 58.8095);

      var hr = motionsplan.RockPortWalkingTest(10, 0, 125, "female", 30, 80);
      assert.equal(hr.getMaximalOxygenUptakeMOL(), 4.109259999999999);
      assert.equal(hr.getFitnessLevelMOL(), 51.36574999999999);
    });
  });
});
