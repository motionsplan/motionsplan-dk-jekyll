const motionsplan = require('../js/how-tall.js');
var assert = require('assert');

describe('How tall', function() {
  describe('getHeight()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.HowTall('male', 181, 168);
      assert.equal(hr.getHeight(), 181);
    });
    it('should return the correct number', function() {
      var hr = motionsplan.HowTall('female', 181, 168);
      assert.equal(hr.getHeight(), 168);
    });
  });
});
