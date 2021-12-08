const motionsplan = require('../js/ipf-points-mcculloch.js');
let assert = require('assert');

describe('IPFPoints', function() {
  describe('getCoefficient()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.McCulloch(14);
      assert.equal(hr.getCoefficient(), 1.23);
    });
    it('should return the correct number', function() {
      let hr = motionsplan.McCulloch(30);
      assert.equal(hr.getCoefficient(), 1);
    });
  });
});
