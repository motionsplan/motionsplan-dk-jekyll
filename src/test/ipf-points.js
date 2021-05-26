const motionsplan = require('../js/ipf-points.js');
var assert = require('assert');

describe('IPFPoints', function() {
  describe('getPoints()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.IPFPoint("M", 80, 300);
      assert.equal(hr.getPoints(), 42.31119216265725);
      assert.equal(hr.getDots(), 206.86393622631672);
    });
    it('should return the correct number', function() {
      var hr = motionsplan.IPFPoint("M", 80, 300, "SBD");
      assert.equal(hr.getPoints(), 42.31119216265725);
      assert.equal(hr.getDots(), 206.86393622631672);
    });

    it('should return the correct number', function() {
      var hr = motionsplan.IPFPoint("M", 80, 300, "B");
      assert.equal(hr.getPoints(), 153.57465974605637);
      assert.equal(hr.getDots(), 206.86393622631672);
    });
    it('should return the correct number', function() {
      var hr = motionsplan.IPFPoint("M", 80, 300, "B", "Single-ply");
      assert.equal(hr.getPoints(), 109.70157248162928);
      assert.equal(hr.getDots(), 206.86393622631672);
    });
  });
});
