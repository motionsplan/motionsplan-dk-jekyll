const motionsplan = require('../js/jumpreach.js');
var assert = require('assert');

describe('JumpReach', function() {
  describe('getJumpReach()', function() {
    it('should return the correct number', function() {
      // formula = "harman", jump_height, body_mass, height = 0
      let jump_height = 60;
      let body_mass = 75;
      let height = 181;
      var hr = motionsplan.JumpReach("harman", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), 1604);
      assert.equal(hr.getPeakPower(), 8236);

      var hr = motionsplan.JumpReach("johnsonbahmamonde", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), 2470.7);
      assert.equal(hr.getPeakPower(), 5161.2);

      var hr = motionsplan.JumpReach("lewis", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), 1261.5484547769065);
      assert.equal(hr.getPeakPower(), "n/a");

      var hr = motionsplan.JumpReach("sayers", jump_height, body_mass, height);
      assert.equal(hr.getAveragePower(), "n/a");
      assert.equal(hr.getPeakPower(), 4984.5);
    });
  });
});
