const motionsplan = require('../js/pushup.js');
let assert = require('assert');

describe('Pushup', function() {
  describe('getPushup()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Pushup("male", 30, 20);
      assert.equal(hr.getScore(), 18);
      assert.equal(hr.getRating(), 'Nogenlunde');
    });
  });
});
