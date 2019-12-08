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
  describe('getKilometersPrHour', function() {
    it('should return the correct number', function() {
      var r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getKilometersPrHour(12, 0, 3), 15);
    });
  });
  describe('getTimePrKilometer', function() {
    it('should return the correct number', function() {
      var r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getTimePrKilometer(12, 0, 3), "4:00");
    });
  });
  describe('convertKmtToMinPerKm', function() {
    it('should return the correct number', function() {
      var r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.convertKmtToMinPerKm(12), "5:00");
    });
  });
  describe('convertMinPerKmToKmt', function() {
    it('should return the correct number', function() {
      var r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.convertMinPerKmToKmt(4, 0), 15);
    });
  });
});
