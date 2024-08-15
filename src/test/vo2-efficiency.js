const motionsplan = require('../js/vo2-efficiency.js');
let assert = require('assert');

describe('VO2Efficiency', function() {
  describe('getGrossEfficiency', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency();
      assert.equal(fitness.getGrossEfficiency(100, 650), 15.384615384615385);
    });
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency();
      assert.equal(fitness.getGrossEfficiency(50, 450), 11.11111111111111);
    });

  });
    
  describe('getDeltaEfficiency', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency();
      assert.equal(fitness.getDeltaEfficiency(50, 505.4, 100, 753.3), 20.169423154497785);
    });
  });

  describe('getCyclingEconomy', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency();
      assert.equal(fitness.getCyclingEconomy(50, 1.27), 2.3622047244094486);
    });
  });

  describe('getMechanicalWorkRatio', function() {
    it('should return the correct number', function() {
      let fitness = motionsplan.VO2Efficiency(1.27, 1.0);
      // velocity in m/s
      assert.equal(fitness.getMechanicalWorkRatio(80, 2.5, 3, 0), 2.3622047244094486);
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
