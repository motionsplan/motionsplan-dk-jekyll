let motionsplan = {};

motionsplan.VO2Efficiency = function() {

  // @return %
  function getGrossEfficiency(watt, energy_expenditure = 0) {
    return watt / energy_expenditure * 100;
  }

  // @return %
  function getDeltaEfficiency(watt_1, ee_1, watt_2, ee_2) {
    return (watt_2 - watt_1) / (ee_2 - ee_1) * 100;
  }

  // @return kJ/L
  function getCyclingEconomy(watt, vo2) {
    return (watt * 60) / vo2 / 1000;
  }

  // only work against gravity is included - which means that flat rate running is not working
  // velocity should be in m/s
  // this is for running - not working yet...
  function getMechanicalWorkRatio(m_total, incline, velocity, rolling_resistance = 0) {
    let g = 9.81;
    return m_total * g * Math.sin(incline) * velocity + m_total * g * Math.cos(incline) * rolling_resistance;
  }

  let publicAPI = {
    getGrossEfficiency : getGrossEfficiency,
    getDeltaEfficiency : getDeltaEfficiency,
    getCyclingEconomy : getCyclingEconomy,
    getMechanicalWorkRatio : getMechanicalWorkRatio
  };

  return publicAPI;
};

module.exports = motionsplan;
