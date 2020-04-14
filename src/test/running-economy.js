const motionsplan = require('../js/running-economy.js');
var assert = require('assert');

describe('RunningEconomy', function() {
  describe('getRunningEconomy', function() {
    it('should return the correct number', function() {
      var r = motionsplan.RunningEconomy(70, 3.5);
      // m2, s2, km
      assert.equal(r.getRunningEconomy(12.5), 240);
    });
  });
  describe('getFitnessLevel', function() {
    it('should return the correct number', function() {
      var r = motionsplan.RunningEconomy(70, 3.5);
      // m2, s2, km
      assert.equal(r.getFitnessLevel(), 50);
    });
  });
});
