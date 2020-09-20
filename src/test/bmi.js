const motionsplan = require('../js/bmi.js');
var assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.BMI(180, 80);
      assert.equal(hr.getBMI(), 24.691358024691358);
      assert.equal(hr.getPonderalIndex(), 13.717421124828531);
    });
  });
});
