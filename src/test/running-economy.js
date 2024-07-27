const motionsplan = require('../js/running-economy.js');
let assert = require('assert');

describe('RunningEconomy', function() {
  describe('getRunningEconomy', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(3.5, 12.5);

      assert.equal(r.getRunningEconomyInMlPrKgPrKm(70), 240);
    });
  });
  describe('getOxygenPrKgPrMin', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(3.5, 12.5);

      assert.equal(r.getMlOxygenPrKgPrMin(70), 50);
    });
  });
  
  describe('getOxygenPrKm', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(3.5, 12.5);

      assert.equal(r.getOxygenPrKm(), 60);
    });
  });

  describe('getOxygenPrKm', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(4, 10);
      assert.equal(r.getRunningEconomyInLPrKm(), 24);
    });
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(3.5, 12.5);
      assert.equal(r.getRunningEconomyInLPrKm(), 16.8);
    });
  });
});
