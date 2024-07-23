const motionsplan = require('../js/running-economy.js');
let assert = require('assert');

describe('RunningEconomy', function() {
  describe('getRunningEconomy', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(3.5, 12.5);

      assert.equal(r.getRunningEconomyInMlPrKgPrMin(70), 240);
    });
  });
  describe('ggetOxygenPrKgPrMin', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(3.5, 12.5);

      assert.equal(r.getOxygenPrKgPrMin(70), 50);
    });
  });

  describe('getOxygenPrKm', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RunningEconomy(3.5, 12.5);

      assert.equal(r.getOxygenPrKm(), 60);
    });
  });
});
