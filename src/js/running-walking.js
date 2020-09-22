let motionsplan = {};

motionsplan.RunningWalking = function(activity, speed, body_weight) {
  activity = activity;
  speed = speed;
  body_weight;

  let met = [];
  met['running'] = [];
  met['walking'] = [];

  met['walking'][4.0] = 3;
  met['walking'][4.8] = 3.5;
  met['walking'][5.6] = 4.3;
  met['walking'][6.4] = 5;
  met['walking'][7.2] = 7;
  met['walking'][8] = 8.3;

  met['running'][6.4] = 6;  
  met['running'][8] = 8.3;
  met['running'][9.7] = 9.8;
  met['running'][10.8] = 10.5;
  met['running'][11.3] = 11;
  met['running'][14.5] = 12.8;
  met['running'][16.1] = 14.5;

  function getMET() {
    return met[activity][speed];
  }

  function getCaloriesPrMinute() {
    return met[activity][speed] * (1/60) * body_weight;
  }
  
  function getCaloriesPrKilometer() {
    return (met[activity][speed] * body_weight) / 1 / speed;
  }

  var publicAPI = {
    getMET : getMET,
    getCaloriesPrMinute : getCaloriesPrMinute,
    getCaloriesPrKilometer : getCaloriesPrKilometer
  };

  return publicAPI;
}

module.exports = motionsplan;
