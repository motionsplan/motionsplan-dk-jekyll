const motionsplan = require('../js/walktest-rockport-16.js');
let assert = require('assert');

describe('Rockport walking test', function() {
  describe('getRockport()', function() {
    it('should return the correct number', function() {

      // min, sec, hr, sex, age, weight
      let hr = motionsplan.RockPortWalkingTest(12, 40, 125, "male", 30, 80);
      assert.equal(hr.getFitnessLevel(), 53.05626163068641);
      assert.equal(hr.getMaximalOxygenUptake(), 4.244500930454913);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.RockPortWalkingTest(12, 3, 125, "female", 30, 80);
      assert.equal(hr.getFitnessLevel(), 48.754616630686414);
      assert.equal(hr.getMaximalOxygenUptake(), 3.900369330454913);
    });
  });
});
