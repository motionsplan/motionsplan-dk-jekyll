const motionsplan = require('../js/vmax.js');
var assert = require('assert');

describe('Vmax', function() {
  describe('getVmax()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.Vmax(4000);
      assert.equal(hr.getVmax(), 322);
    });
  });
});
