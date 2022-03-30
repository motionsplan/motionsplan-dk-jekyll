const motionsplan = require('../js/running.js');
let assert = require('assert');

describe('RunningTest', function() {
  describe('getKilometersPrHour', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getKilometersPrHour(3, 12, 0), 15);
    });
  });
  describe('getKilometersPrHour', function() {
    it('hundredele should return correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getKilometersPrHour(0.010, 0, 1, 0), 36);
      assert.equal(r.getKilometersPrHour(0.001, 0, 0, 10), 36);
    });
  });
  describe('getTimePrKilometer', function() {
    it('should return the correct number', function() {
      let r = motionsplan.Running();
      // m2, s2, km
      assert.equal(r.getTimePrKilometer(3, 12, 0), "4:00");
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
      // 
      assert.equal(r.convertMinPerKmToDistanceForDuration(4, 0, 4, 0), 1000);

      // pace, duration
      assert.equal(r.convertMinPerKmToDistanceForDuration(10, 0, 1, 0), 100);
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
