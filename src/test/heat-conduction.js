const motionsplan = require('../js/heat-conduction.js');
let assert = require('assert');

describe('HeatLossFromConduction', function() {
  describe('getHeatLoss', function() {
    it('should return the correct number', function() {
      // I think this should return less
      // Originally Couzens hardcoded the values with 37 and 0.
      // This means that he would assume we are using ice.
      // But they align better with Bolzmann, if changing the values to allow actual numbers.
      let hr = motionsplan.HeatLossFromConduction(1.8336, 31, 37);
      assert.equal(hr.getHeatLoss(), 5.2500075264);
    });
    it('should return the correct number', function() {
      // Shorter distance makes the heat loss be much more
      let hr = motionsplan.HeatLossFromConduction(1.8336, 31, 37, 1);
      assert.equal(hr.getHeatLoss(), 26.250037632000005);
    });
    it('should return the correct number', function() {
      // Bigger body, colder skin, colder surrounding temperature, longer distance
      // Why is heat loss less in this example, when there is bigger difference?
      let hr = motionsplan.HeatLossFromConduction(2, 23, 34, 5);
      assert.equal(hr.getHeatLoss(), 10.498488);
    });
    it('should return the correct number', function() {
      // Bigger body, colder skin, colder surrounding temperature, longer distance
      // Why is heat loss less in this example, when there is bigger difference?
      let hr = motionsplan.HeatLossFromConduction(2, 0, 37, 5);
      assert.equal(hr.getHeatLoss(), 35.31309600000001);
    });
  });
});
