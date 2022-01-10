const motionsplan = require('../js/running.js');
let assert = require('assert');

describe('RunningTest', function() {
  describe('getKilometersPrHour', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getKilometersPrHour(12, 0, 3), 15);
    });
  });
  describe('getTimePrKilometer', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getTimePrKilometer(12, 0, 3), "4:00");
    });
  });
  describe('convertKmtToMinPerKm', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.convertKmtToMinPerKm(12), "5:00");
    });
  });
  describe('convertMinPerKmToKmt', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.convertMinPerKmToKmt(4, 0), 15);
    });
  });
  describe('convertMinPerKmToKmt', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.convertMinPerKmToDistanceForDuration(4, 0, 4, 0), 1000);
    });
  });
  describe('getDistanceFromTimeAndVelocity', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      assert.equal(r.getDistanceFromTimeAndVelocity(5, 0, 12), 1);
    });
  });
  describe('getTimeFromDistanceAndVelocity', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      assert.equal(r.getTimeFromDistanceAndVelocity(1, 12), 5);
    });
  });
});
