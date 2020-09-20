const motionsplan = require('../js/daniels.js');
var assert = require('assert');

describe('Daniels', function() {
  describe('getVdot()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.RunningJackDaniels("5km", 0, 20, 0);
      assert.equal(hr.getVdot(), 49);
      
      assert.equal(hr.getVdotRunningForFitness(5000), 49.8);
    });
  });
});
