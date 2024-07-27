let motionsplan = {};

motionsplan.VO2Efficiency = function(vo2, vco2) {

  // https://vo2master.com/blog/exercise-efficiency/
  // return J/s
  function getEnergyExpenditureInJoule() {
    return ((3.869 * vo2) + (1.195 * vco2)) * (4.1896/60) * 1000;
  }

  // @return %
  function getGrossEfficiency(watt) {
    return watt / getEnergyExpenditureInJoule() * 100;
  }

  // @return %
  function getDeltaEfficiency(watt_1, ee_1, watt_2, ee_2) {
    return (watt_2 - watt_1) / (ee_2 - ee_1) * 100;
  }

  // @return kJ/L
  function getCyclingEconomy(watt) {
    return (watt * 60) / vo2 / 1000;
  }

  function getRER() {
    return vco2 / vo2;
  }

  // @return Watts
  function getMetabolicRate() {
    let k1 = 3.815 + 1.232 * getRER();
    let k2 = 4186; // convert kcal to J
    return k1 * vo2 / 60 * k2; // vo2 in l/sek
  }

  // only work against gravity is included - which means that flat rate running is not working
  // velocity should be in m/s
  function getMechanicalWorkRatio(m_total, incline, velocity, rolling_resistance = 0) {
    let g = 9.81;
    return m_total * g * Math.sin(incline) * velocity + m_total * g * Math.cos(incline) * rolling_resistance;
  }

  let publicAPI = {
    getEnergyExpenditureInJoule : getEnergyExpenditureInJoule,
    getGrossEfficiency : getGrossEfficiency,
    getDeltaEfficiency : getDeltaEfficiency,
    getCyclingEconomy : getCyclingEconomy,
    getMetabolicRate : getMetabolicRate,
    getgetMechanicalWorkRatio : getMechanicalWorkRatio
  };

  return publicAPI;
};

module.exports = motionsplan;
