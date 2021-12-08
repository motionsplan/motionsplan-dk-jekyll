const motionsplan = require('../js/blood.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Blood("male", 80, 181, 30);
      assert.equal(hr.getVolume(), 5.354921972900001);
    });
  });
});
