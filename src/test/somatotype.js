const motionsplan = require('../js/somatotype.js');
let assert = require('assert');

describe('Somatotype', function() {
  describe('getEndo', function() {
    it('should return the correct number', function() {
      // gender, height, weight, tricep, subscap, supra, ab, thigh, calf, humerus, femur, armrelax, calfgirth
      let rm = motionsplan.Somatotype("male", 180, 73, 4, 6, 8, 9, 6, 4, 7, 10, 29, 37);
      assert.equal(rm.getEndomorph(), 1.6);
    });
  });
  describe('getMeso', function() {
    it('should return the correct number', function() {
      // gender, height, weight, tricep, subscap, supra, ab, thigh, calf, humerus, femur, armrelax, calfgirth
      let rm = motionsplan.Somatotype("male", 180, 73, 4, 6, 8, 9, 6, 4, 7, 10, 29, 37);
      assert.equal(rm.getMesomorph(), 4.2);
    });
  });
  describe('getMeso', function() {
    it('should return the correct number', function() {
      // gender, height, weight, tricep, subscap, supra, calf, thigh, ab, humerus, femur, armrelax, armflex, calfgirth
      let rm = motionsplan.Somatotype("male", 180, 73, 4, 6, 8, 9, 6, 4, 7, 10, 29, 37);
      assert.equal(rm.getEctomorph(), 3);
    });
  });

});
