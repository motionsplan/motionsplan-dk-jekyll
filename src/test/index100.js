const motionsplan = require('../js/index100.js');
var assert = require('assert');

describe('Index100', function() {
  describe('getIndex100()', function() {
    it('should return the correct number', function() {
      var fitness = motionsplan.Index100(100, 80);
      assert.equal(fitness.getIndex100(), 111.7088655506188);
    });
  });
});
