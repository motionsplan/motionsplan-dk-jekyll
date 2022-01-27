const motionsplan = require('../js/running-weightloss.js');
let assert = require('assert');

describe('RunningWeightLoss', function() {
  describe('getEstimatedFinishTime()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.RunningWeightLoss(80, 2);
      assert.equal(hr.getEstimatedFinishTime(0, 20, 0), "00:20:24");
    });
  });
  describe('getEstimatedFinishTime()', function() {
    it('should return the correct number', function() {

      let hr = motionsplan.RunningWeightLoss(80, -2);
      assert.equal(hr.getEstimatedFinishTime(0, 20, 0), "00:19:36");
    });
  });
});
