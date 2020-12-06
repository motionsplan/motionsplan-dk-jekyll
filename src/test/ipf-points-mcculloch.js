const motionsplan = require('../js/ipf-points-mcculloch.js');
var assert = require('assert');

describe('IPFPoints', function() {
  describe('getCoefficient()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.McCulloch(14);
      assert.equal(hr.getCoefficient(), 1.23);
    });
    it('should return the correct number', function() {
      var hr = motionsplan.McCulloch(30);
      assert.equal(hr.getCoefficient(), 1);
    });
  });
});
