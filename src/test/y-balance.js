const motionsplan = require('../js/y-balance.js');
let assert = require('assert');

describe('YBalance', function() {
  describe('getYBalance()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.YBalance(100, 100, 100);
      assert.equal(hr.getAbsoluteReachDistance(), 100);
      assert.equal(hr.getRelativeReachScore(100), 100);
      assert.equal(hr.getCompositeReachScore(100), 100);
    });
  });
});
