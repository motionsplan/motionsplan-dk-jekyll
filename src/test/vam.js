const motionsplan = require('../js/vam.js');
let assert = require('assert');

describe('VAM', function() {
  describe('getGradientFactor', function() {
    it('should return the correct number', function() {

      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let vam = motionsplan.VAM(1249, 39, 43);
      assert.equal(vam.getGradientFactor(7.91), 2.791);
    });
  });  
  describe('getVAM', function() {
    it('should return the correct number', function() {
      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let vam = motionsplan.VAM(1249, 39, 43);
      assert.equal(vam.getVAM(), 1886.8652958455727);
    });
  });
  describe('getRelativePower', function() {
    it('should return the correct number', function() {
      // age, heart rate, blood pressure, diabetes, smoker, bmi, fitness
      let vam = motionsplan.VAM(1249, 39, 43);
      assert.equal(vam.getRelativePower(7.91), 6.76053491883043);
    });
  });
});
