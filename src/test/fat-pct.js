const motionsplan = require('../js/fat-pct.js');
let assert = require('assert');

describe('CalculateFatPercent', function() {
  describe('getHeitmann1990', function() {
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getHeitmann1990(), 21.668827160493827);
      assert.equal(fat.getFatMass(), 17.33506172839506);
    });
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getHeitmann1990(), 31.868827160493822);
      assert.equal(fat.getFatMass(), 25.495061728395058);
    });
  });
  describe('getWormsleyDurnin1977', function() {
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getWomersleyDurnin1977(), 20.616419753086426);
    });
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getWomersleyDurnin1977(), 30.357160493827166);
    });
  });
  describe('getJacksonPollock1980', function() {
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getJacksonPollock1980(), 18.70617283950618);
    });
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getJacksonPollock1980(), 30.806172839506182);
    });
  });
  describe('getHeritage2002', function() {
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getHeritage2002(), 21.380987654320986);
    });
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getHeritage2002(), 31.720987654320986);
    });
  });
  describe('getDuerenberg1998', function() {
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getDuerenberg1998(), 18.45185185185185);
    });
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getDuerenberg1998(), 29.851851851851848);
    });
  });
  describe('getDuerenberg1991', function() {
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getDuerenberg1991(), 22.629629629629626);
    });
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getDuerenberg1991(), 33.42962962962963);
    });
  });
  describe('getGallagher2000', function() {
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'man');
      assert.equal(fat.getGallagher2000(), 21.407999999999998);
      assert.equal(fat.getGallagher2000("afro"), 20.208);
      assert.equal(fat.getGallagher2000("asian"), 22.992499999999996);
    });
    it('should return the correct number', function() {
      let fat = motionsplan.CalculateFatPercent(180, 80, 40, 'woman');
      assert.equal(fat.getGallagher2000(), 33.507999999999996);
      assert.equal(fat.getGallagher2000("asian"), 35.092499999999994);
      assert.equal(fat.getGallagher2000("afro"), 32.30799999999999);
    });
  });
});
