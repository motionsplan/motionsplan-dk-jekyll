const motionsplan = require('../js/lung.js');
let assert = require('assert');

describe('Lung', function() {
  describe('getVitalCapacity()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Lung("male", 181, 30);
      assert.equal(hr.getVitalCapacity(), 4392.87);
    });
  });
});
