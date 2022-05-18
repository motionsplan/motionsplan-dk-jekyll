let motionsplan = {};

motionsplan.RPEStrength = function (have_weight, have_reps, have_rpe) {

  // @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-v3-or-Later

  // https://www.plsource.org/rpe-calc/

  // This is a translation of Tuchscherer's standard percentage chart into
  // a continuous function. This enables using real numbers for RPEs, like 8.75.
  function percentage(reps, rpe) {
    // Cap the RPE at 10.
    if (rpe > 10) {
      rpe = 10.0;
    }

    // No prediction if failure occurred, or if RPE is unreasonably low.
    if (reps < 1 || rpe < 4) {
      return 0.0;
    }

    // Handle the obvious case early to avoid bound errors.
    if (reps === 1 && rpe === 10.0) {
      return 100.0;
    }

    // x is defined such that 1@10 = 0, 1@9 = 1, 1@8 = 2, etc.
    // By definition of RPE, then also:
    //  2@10 = 1@9 = 1
    //  3@10 = 2@9 = 1@8 = 2
    // And so on. That pattern gives the equation below.
    let x = 10.0 - rpe + (reps - 1);

    // The logic breaks down for super-high numbers,
    // and it's too hard to extrapolate an E1RM from super-high-rep sets anyway.
    if (x >= 16) {
      return 0.0;
    }

    let intersection = 2.92;

    // The highest values follow a quadratic.
    // Parameters were resolved via GNUPlot and match extremely closely.
    if (x <= intersection) {
      let a = 0.347619;
      let b = -4.60714;
      let c = 99.9667;
      return a * x * x + b * x + c;
    }

    // Otherwise it's just a line, since Tuchscherer just guessed.
    let m = -2.64249;
    let b = 97.0955;
    return m * x + b;
  }

  function calc(want_reps, want_rpe) {

    // Ensure that the Weight widgets are sane.
    if (isNaN(want_reps) || want_reps <= 0) return;
    if (Math.floor(want_reps) !== want_reps) return;
    if (isNaN(want_rpe) || want_rpe <= 0) return;

    let e1rm = getE1RM();

    // Calculate the Weight percentage.
    var p2 = percentage(want_reps, want_rpe);
    if (p2 <= 0) return;
    var weight = (e1rm / 100) * p2;

    // Write the Weight
    return weight;
  }

  function getE1RM() {
    // Ensure that the E1RM widgets are sane.
    if (isNaN(have_weight) || have_weight <= 0) return;
    if (isNaN(have_reps) || have_reps <= 0) return;
    if (Math.floor(have_reps) !== have_reps) return;
    if (isNaN(have_rpe) || have_rpe <= 0) return;

    // Calculate the E1RM percentage.
    var p = percentage(have_reps, have_rpe);
    if (p <= 0) return;
    var e1rm = (have_weight / p) * 100;
    if (e1rm <= 0) return;

    return e1rm;
  }

  // @license-end

  let publicAPI = {
    getE1RM : getE1RM,
    getWantWeight : calc,
  };

  return publicAPI;
};

module.exports = motionsplan;
