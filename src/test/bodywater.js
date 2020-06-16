const motionsplan = require('../js/bodywater.js');
var assert = require('assert');

describe('BodyWater', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {

      // biceps, triceps, hoftekam, skulder, weight, gender, age
      var hr = motionsplan.BodyWater(181, 80, 40, "male");
      assert.equal(hr.getTotalBodyWater(), 45.1244);
      assert.equal(hr.getPercent(), 56.405499999999996);

      var hr = motionsplan.BodyWater(181, 80, 40, "female");
      assert.equal(hr.getTotalBodyWater(), 36.9799);
      assert.equal(hr.getPercent(), 46.224875);
    });
  });
});
