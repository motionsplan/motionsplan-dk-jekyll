const motionsplan = require('../js/bmi-evaluation.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getEvaluation()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.BMIEvaluation("who", "male", 18); // 17.9
      assert.equal(hr.getEvaluation(17), "Undervægtig");
      assert.equal(hr.getEvaluation(22), "Normalvægtig");
      assert.equal(hr.getEvaluation(26), "Overvægtig");
      assert.equal(hr.getEvaluation(32), "Meget overvægtig");
      assert.equal(hr.getEvaluation(37), "Fedme");
      assert.equal(hr.getEvaluation(42), "Ekstrem fedme");
    });
    it('should return the correct number', function() {
      let hr = motionsplan.BMIEvaluation("nhanes", "male", 18); // 17.9
      assert.equal(hr.getEvaluation(17), "Undervægtig");
      assert.equal(hr.getEvaluation(22), "Normalvægtig");
      assert.equal(hr.getEvaluation(27), "Marginalt overvægtig");
      assert.equal(hr.getEvaluation(28), "Overvægtig");
      assert.equal(hr.getEvaluation(32), "Fed");
      assert.equal(hr.getEvaluation(37), "Fed");
      assert.equal(hr.getEvaluation(42), "Fed");
    });
    it('getChildren() should return the correct number', function() {
      let hr = motionsplan.BMIEvaluation("nhanes", "male", 10); // 17.9
      assert.equal(hr.getEvaluation(10), "Normalvægtig");
      assert.equal(hr.getEvaluation(17), "Normalvægtig");
      assert.equal(hr.getEvaluation(22), "Risiko for overvægt");
      assert.equal(hr.getEvaluation(27), "Risiko for fedme");
    });
  });
});
