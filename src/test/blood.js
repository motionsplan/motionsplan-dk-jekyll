const motionsplan = require('../js/blood.js');
var assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.Blood("male", 80, 181, 30);
      assert.equal(hr.getVolume(), 5.35492197290000);
    });
  });
});
