const motionsplan = require('../js/running.js');
var assert = require('assert');

describe('RunningTest', function() {
  describe('getEstimatedFitnessLevel', function() {
    it('should return the correct number', function() {
      var r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getEstimatedFitnessLevel(60, 0, 10), 46.6);
    });
  });
});
