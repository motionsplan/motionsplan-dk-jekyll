const motionsplan = require('../js/skinfold.js');
var assert = require('assert');

describe('Skinfold', function() {
  describe('getDurnin', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.SkinfoldDurnin(10, 10, 20, 20, 80);
      assert.equal(hr.getBodyFatPercent(), 29.4);
      assert.equal(hr.getFatFreeMass(), 56.5);
    });
  });
});
