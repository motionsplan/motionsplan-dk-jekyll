const motionsplan = require('../js/inol.js');
let assert = require('assert');

describe('INOL', function() {
  describe('getINOL()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.INOL(30, 80);
      assert.equal(hr.getINOL(), 1.5);
    });
  });
});
