const motionsplan = require('../js/jumpreach.js');
var assert = require('assert');

describe('JumpReach', function() {
  describe('getJumpReach()', function() {
    it('should return the correct number', function() {
      // formula = "harman", jump_height, body_mass, height = 0
      let jump_height = 60;
      let body_mass = 75;
      let height = 181;
      let hr;
      
      hr = motionsplan.JumpReach("harman", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), 1604);
      assert.equal(hr.getPeakPower(), 4592);

      hr = motionsplan.JumpReach("johnsonbahmamonde", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), 2470.7);
      assert.equal(hr.getPeakPower(), 5161.2);

      hr = motionsplan.JumpReach("lewis", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), 1261.5484547769065);
      assert.equal(hr.getPeakPower(), "n/a");

      hr = motionsplan.JumpReach("sayers_sj", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), "n/a");
      assert.equal(hr.getPeakPower(), 4984.5);

      hr = motionsplan.JumpReach("sayers_cmj", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), "n/a");
      assert.equal(hr.getPeakPower(), 4774.5);
    });
  });
});
