const motionsplan = require('../js/strength.js');
var assert = require('assert');

describe('Strength', function() {
  describe('getIndex100', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Strength(80, 80);
      assert.equal(rm.getIndex100(), 89);
    });
  });
  describe('getAllometricScaling', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Strength(405, 220);
      assert.equal(rm.getAllometricScaling(), 11.11321976546847);
      
      var rm = motionsplan.Strength(300, 150);
      assert.equal(rm.getAllometricScaling(), 10.626585691826113);
    });
  });
  describe('getBodyweightPercent', function() {
    it('should return the correct number', function() {
      // weigt, reps
      var rm = motionsplan.Strength(405, 220);
      assert.equal(rm.getBodyweightPercent(), 1.8409090909090908);
      
      var rm = motionsplan.Strength(300, 150);
      assert.equal(rm.getBodyweightPercent(), 2);
    });
  });
});
