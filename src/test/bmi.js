const motionsplan = require('../js/bmi.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BMI(180, 80);
      assert.equal(hr.getBMI(), 24.691358024691358);
    });
  });
});
