const motionsplan = require('../js/running-distance-vo2.js');
var assert = require('assert');

describe('RunningTest', function() {
  describe('getEstimatedFitnessLevel', function() {
    it('should return the correct number', function() {
      var r = motionsplan.RunningDistanceVO2();
      // m2, s2, km
      assert.equal(r.getEstimatedFitnessLevel(18, 30, 5), 62.981449999999995);
      assert.equal(r.getEstimatedFitnessLevel(32, 30, 10), 72.67986923076924);
      assert.equal(r.getEstimatedFitnessLevel(60, 0, 10), 46.9441);
    });
  });
  describe('getMET', function() {
    it('should return the correct number', function() {
      var r = motionsplan.RunningDistanceVO2();
      // m2, s2, km
      assert.equal(r.getMETBasedOnKmAndKmt(5, 16.2), 17.97988);
      assert.equal(r.getMETBasedOnKmAndKmt(10, 18.4), 20.7122);
    });
  });
  describe('getKilometersPrHour', function() {
    it('should return the correct number', function() {
      var r = motionsplan.RunningDistanceVO2();
      // m2, s2, km
      assert.equal(r.getKilometersPrHour(18, 30, 5), 16.216216216216214);
      assert.equal(r.getKilometersPrHour(32, 30, 10), 18.461538461538463);
    });
  });
  /*
  // Zacho reference test
  describe('getEstimatedFitnessLevel', function() {
    it('should return the correct number', function() {
      var r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getEstimatedFitnessLevel(60, 0, 10), 46.573621035715554);
    });
  });
  */
});
