const motionsplan = require('../js/vo2-efficiency.js');
let assert = require('assert');

describe('VO2Kcal', function() {
  describe('getPercentFatUtilized', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.27, 1.0);
      assert.equal(fitness.getEnergyExpenditureInJoule(), 426.5452708000001);
    });

    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.80, 1.0);
      assert.equal(fitness.getEnergyExpenditureInJoule(), 569.7297386666668);
    });
  });
  
  describe('getPercentFatUtilized', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.27, 1.0);
      assert.equal(fitness.getGrossEfficiency(100), 23.44417037198575);
    });
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.80, 1.0);
      assert.equal(fitness.getGrossEfficiency(100), 17.552181887859508);
    });

  });
    
  describe('getPercentFatUtilized', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.5, 1.0);
      assert.equal(fitness.getDeltaEfficiency(50, 505.4, 100, 753.3), 20.169423154497785);
    });
  });

  describe('getPercentFatUtilized', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.27, 1.0);
      assert.equal(fitness.getCyclingEconomy(50), 2.3622047244094486);
    });
  });
  
  describe('getPercentFatUtilized', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.27, 1.0);
      assert.equal(fitness.getMetabolicRate(), 2.3622047244094486);
    });
  });

  describe('getPercentFatUtilized', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.27, 1.0);
      // velocity in m/s
      assert.equal(fitness.getgetMechanicalWorkRatio(80, 2.5, 3, 0), 2.3622047244094486);
    });
  });

  /*
  describe('getPercentCHOUtilized', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let fitness = motionsplan.VO2RERKcal(0.9);
      assert.equal(fitness.getPercentCHOUtilized(), 66.66666666666669);

    });
  });
  describe('getKcalExpenditure', function() {
    it('should return the correct number', function() {

      let fitness = motionsplan.VO2RERKcal(0.9);
      assert.equal(fitness.getKcalExpenditure(2.5, 20, 0), 246.19);
    });
  });*/
});
