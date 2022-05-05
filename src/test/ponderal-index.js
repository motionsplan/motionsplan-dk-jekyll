const motionsplan = require('../js/ponderal-index.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getPonderalIndex()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.PonderalIndex(180, 80);
      assert.equal(hr.getPonderalIndex(), 13.717421124828531);
    });
  });
});
