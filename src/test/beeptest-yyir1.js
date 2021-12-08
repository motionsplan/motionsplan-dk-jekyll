const motionsplan = require('../js/beeptest-yyir1.js');
let assert = require('assert');

describe('BeepTest', function() {
  describe('getBeepTest()', function() {
    it('should return the correct number', function() {

      let hr = motionsplan.YYIR1(12, 5);
      assert.equal(hr.getDistance(), 360);
      assert.equal(hr.getFitnessLevel(), 39.424);
      assert.equal(hr.getEvaluation('male', 10), 'Poor');
    });
  });

  describe('getBeepTest()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.YYIR1(12, 5);
      assert.equal(hr.getDistance(), 360);
      assert.equal(hr.getFitnessLevel(), 39.424);
      assert.equal(hr.getEvaluation('female', 10), 'Below Average');
    });
  });

  describe('getBeepTest()', function() {
    it('should return the correct number', function() {      
      let hr = motionsplan.YYIR1(10, 4);
      assert.equal(hr.getDistance(), 200);
      assert.equal(hr.getFitnessLevel(), 38.08);
      assert.equal(hr.getEvaluation('male', 10), 'Poor');
    });
  });
});
