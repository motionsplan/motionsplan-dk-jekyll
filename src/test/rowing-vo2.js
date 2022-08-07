const motionsplan = require('../js/rowing-vo2.js');
let assert = require('assert');

describe('RowingVo2', function() {
  describe('getVO2', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RowingVO2(250, 'male');
      // m2, s2, km
      assert.equal(r.getVO2(), 4.107);
    });
  });
  describe('getVO2', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RowingVO2(250, 'female');
      // m2, s2, km
      assert.equal(r.getVO2(), 3.8310000000000004);
    });
  });
  describe('getFitnessLevel', function() {
    it('should return the correct number', function() {
      let r = motionsplan.RowingVO2(250, 'male');
      // m2, s2, km
      assert.equal(r.getFitnessLevel(85), 48.31764705882353);
    });
  });
});
