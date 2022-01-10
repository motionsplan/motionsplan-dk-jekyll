const motionsplan = require('../js/vmax-intervals.js');
let assert = require('assert');

describe('Vmax', function() {
  describe('getVmaxIntervals()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.VmaxIntervals(15, 3, 3);
      assert.equal(hr.getVelocity(), 9);
      assert.equal(hr.getTime(), '1:50');
    });
  });
  describe('getVmaxIntervals()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.VmaxIntervals(15, 1, 50);
      assert.equal(hr.getVelocity(), 9);
      assert.equal(hr.getTime(), '1:06');
    });
  });      
  describe('getVmaxIntervals()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.VmaxIntervals(15, 1, 50);
      assert.equal(hr.getVelocity(65), 9.75);
      assert.equal(hr.getTime(30), '0:33');
    });
  });
});
