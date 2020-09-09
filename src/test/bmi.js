const motionsplan = require('../js/bmi.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BMI(180, 80);
      assert.equal(hr.getBMI(), 24.691358024691358);
    });
  });
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.BMI(130, 40);
      assert.equal(hr.getBMI(), 23.668639053254434);
      assert.equal(hr.evaluateChildren('female', 6), 'Obese');
      assert.equal(hr.evaluateChildrenHeight(), 'Your height is above average');
      assert.equal(hr.evaluateChildren('male', 12), 'Overweight');
      assert.equal(hr.evaluateChildrenHeight(), 'Your height is below average');
      assert.equal(hr.evaluateChildren('male', 16), 'Healthy weight');
      assert.equal(hr.evaluateChildrenHeight(), 'Your height is below average');
    });
  });
});
