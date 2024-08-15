const motionsplan = require('../js/energy-expenditure.js');
let assert = require('assert');

describe('EnergyExpenditure', function() {
  describe('getRER()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(2, 2);
      assert.equal(hr.getRER(), 1);
    });
  });
  describe('getEnergyExpenditureInJoule', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(2, 1.83);
      assert.equal(hr.getEnergyExpenditureInJoule(), 691.5550000000001);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(1.89, 1.89);
      assert.equal(hr.getEnergyExpenditureInJoule(), 665.595);
    });
  });
  describe('getEnergyExpenditureInJoule(weir)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(2, 1.83, "weir");
      assert.equal(hr.getEnergyExpenditureInJoule(), 690.91);
    });    
  });
  describe('getEnergyExpenditureInJoule(brockway)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(2, 1.83, "brockway");
      assert.equal(hr.getEnergyExpenditureInJoule(), 690.2216666666666);
    });    
  });
  describe('getEnergyExpenditureInJoule(brouwer)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(2, 1.83, "brouwer");
      assert.equal(hr.getEnergyExpenditureInJoule(), 692.4237016666666);
    });    
  });
  describe('getEnergyExpenditureInJoule(peronnetandmassicotte)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(2, 1.83, "peronnetandmassicotte");
      assert.equal(hr.getEnergyExpenditureInJoule(), 710.62);
    });    
  });
  describe('getEnergyExpenditureInJoule(lusk)', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.EnergyExpenditure(2, 1.83, "lusk");
      assert.equal(hr.getEnergyExpenditureInJoule(), 690.4083333333333);
    });    
  });

  /*
  describe('getFatPercent()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getFatPercent(), 0.5);
    });
  });
  describe('getCaloriesFromFat()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getCaloriesFromFat(), 4.864);
    });
  });
  describe('getCHOPercent()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getCHOPercent(), 0.5);
    });
  });
  describe('getCaloriesFromCHO()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RER(2, 1.7);
      assert.equal(hr.getCaloriesFromCHO(), 4.864);
    });
  });
  */
});
