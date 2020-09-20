const motionsplan = require('../js/billat.js');
var assert = require('assert');

describe('Billat', function() {
  describe('getBillat()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.Billat(1800);
      assert.equal(hr.getDistance30(), 150);
      assert.equal(hr.getRecovery30(), 75);
      assert.equal(hr.getDistance60(), 300);
      assert.equal(hr.getRecovery60(), 150);
      assert.equal(hr.getDistance3min(), 900);
      assert.equal(hr.getMinutes3min(), 3);
      assert.equal(hr.getSeconds3min(), 0);
      assert.equal(hr.getTimePr400Meter3min(), 80);
    });
  });
});
