const motionsplan = require('../js/energy-expenditure-rer.js');
let assert = require('assert');

describe('EnergyExpenditure', function() {
  describe('getEnergyExpenditureInJoule', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditureRER(2, 1);
      assert.equal(hr.getEnergyExpenditureInJoule(), 705.8741258741259);
    });
  });
  describe('getEnergyExpenditureInJoule(garby)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditureRER(2, 1, "garby");
      assert.equal(hr.getEnergyExpenditureInJoule(), 699.3333333333334);
    });
  });
});
