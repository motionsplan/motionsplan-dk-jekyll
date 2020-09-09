let motionsplan = {};

motionsplan.BMI = function(h, w) {

  h = h = h / 100;
  w = w;

  function getBMI() {
    return w / (h * h);
  }

  function getPonderalIndex() {
    return w / (h * h * h);
  }

  function evaluateAdults() {
    var bmiCalc = getBMI();
    var theEval;
    if (bmiCalc < 18.5) {
      theEval = "Underweight";
    }
    else if (bmiCalc < 25) {
      theEval = "Normal weight";
    }
    else if (bmiCalc < 30) {
      theEval = "Overweight";
    }
    else if (bmiCalc < 35) {
      theEval = "Obese Class I";
    }
    else if (bmiCalc < 40) {
      theEval = "Obese Class II";
    }
    else if (bmiCalc > 40) {
      theEval = "Obese Class III";
    }
    return theEval;
  }

  function evaluateChildren(sex, age) {
    var L, M, S, Lh, Mh, Sh;
    if (sex == "male") {
      if (age == 2.0) {
        L = -1.982373595;
        M = 16.54777487;
        S = 0.080127429;
        Lh = 1.00720807;
        Mh = 86.86160934;
        Sh = 0.040395626;
      }
      else if (age == 2.5) {
        L = -1.642106779;
        M = 16.24972371;
        S = 0.075499126;
        Lh = 0.174489485;
        Mh = 91.33242379;
        Sh = 0.04096533;
      }
      else if (age == 3.0) {
        L = -1.419991255;
        M = 16.00030401;
        S = 0.072634432;
        Lh = -0.390918369;
        Mh = 95.27359106;
        Sh = 0.04053412;
      }
      else if (age == 3.5) {
        L = -1.438164899;
        M = 15.79405728;
        S = 0.071495113;
        Lh = 0.326530126;
        Mh = 99.00254338;
        Sh = 0.040848042;
      }
      else if (age == 4.0) {
        L = -1.714869347;
        M = 15.62817269;
        S = 0.071889214;
        Lh = 0.827636736;
        Mh = 102.5104735;
        Sh = 0.041344257;
      }
      else if (age == 4.5) {
        L = -2.155348017;
        M = 15.50258427;
        S = 0.073490667;
        Lh = 1.133652119;
        Mh = 105.8812823;
        Sh = 0.041955723;
      }
      else if (age == 5.0) {
        L = -2.61516595;
        M = 15.41914163;
        S = 0.07599225;
        Lh = 1.266367398;
        Mh = 109.1751441;
        Sh = 0.042593311;
      }
      else if (age == 5.5) {
        L = -2.981796828;
        M = 15.37952958;
        S = 0.079211369;
        Lh = 1.255402281;
        Mh = 112.4295761;
        Sh = 0.043180513;
      }
      else if (age == 6.0) {
        L = -3.21170511;
        M = 15.38353217;
        S = 0.083048178;
        Lh = 1.137442868;
        Mh = 115.6608862;
        Sh = 0.043673359;
      }
      else if (age == 6.5) {
        L = -3.314768951;
        M = 15.42902273;
        S = 0.087400421;
        Lh = 0.954853043;
        Mh = 118.8668123;
        Sh = 0.044069112;
      }
      else if (age == 7.0) {
        L = -3.323188896;
        M = 15.51286936;
        S = 0.092131305;
        Lh = 0.753244292;
        Mh = 122.0305342;
        Sh = 0.044403374;
      }
      else if (age == 7.5) {
        L = -3.270454609;
        M = 15.63170735;
        S = 0.097081694;
        Lh = 0.575908038;
        Mh = 125.1259182;
        Sh = 0.044735646;
      }
      else if (age == 8.0) {
        L = -3.18305795;
        M = 15.78231007;
        S = 0.102091189;
        Lh = 0.455267507;
        Mh = 128.1237104;
        Sh = 0.045127088;
      }
      else if (age == 8.5) {
        L = -3.079383079;
        M = 15.96169481;
        S = 0.107012788;
        Lh = 0.404778262;
        Mh = 130.9982857;
        Sh = 0.045618459;
      }
      else if (age == 9.0) {
        L = -2.971148225;
        M = 16.16712234;
        S = 0.111720691;
        Lh = 0.415687443;
        Mh = 133.7344759;
        Sh = 0.046217028;
      }
      else if (age == 9.5) {
        L = -2.865311266;
        M = 16.39605916;
        S = 0.116113097;
        Lh = 0.461030578;
        Mh = 136.3342577;
        Sh = 0.046896817;
      }
      else if (age == 10.0) {
        L = -2.765648008;
        M = 16.64613844;
        S = 0.120112464;
        Lh = 0.505564115;
        Mh = 138.8234114;
        Sh = 0.047610108;
      }
      else if (age == 10.5) {
        L = -2.673903164;
        M = 16.91512487;
        S = 0.123664186;
        Lh = 0.518588072;
        Mh = 141.2581515;
        Sh = 0.048304259;
      }
      else if (age == 11.0) {
        L = -2.590560148;
        M = 17.20088732;
        S = 0.126734613;
        Lh = 0.487939275;
        Mh = 143.7303663;
        Sh = 0.048937694;
      }
      else if (age == 11.5) {
        L = -2.515320235;
        M = 17.50138161;
        S = 0.129309001;
        Lh = 0.434576385;
        Mh = 146.3665278;
        Sh = 0.049488934;
      }
      else if (age == 12.0) {
        L = -2.447426113;
        M = 17.81463359;
        S = 0.131389042;
        Lh = 0.420919142;
        Mh = 149.3088178;
        Sh = 0.049947823;
      }
      else if (age == 12.5) {
        L = -2.385858029;
        M = 18.1387275;
        S = 0.132990575;
        Lh = 0.531951655;
        Mh = 152.6623878;
        Sh = 0.050273285;
      }
      else if (age == 13.0) {
        L = -2.3294571;
        M = 18.47179706;
        S = 0.13414147;
        Lh = 0.816239713;
        Mh = 156.4098858;
        Sh = 0.050333444;
      }
      else if (age == 13.5) {
        L = -2.277017201;
        M = 18.81201584;
        S = 0.134879611;
        Lh = 1.232768816;
        Mh = 160.3493168;
        Sh = 0.049926861;
      }
      else if (age == 14.0) {
        L = -2.227362173;
        M = 19.15758672;
        S = 0.135251083;
        Lh = 1.670433444;
        Mh = 164.1418486;
        Sh = 0.04894519;
      }
      else if (age == 14.5) {
        L = -2.179425674;
        M = 19.50672885;
        S = 0.135308594;
        Lh = 2.016781776;
        Mh = 167.4641466;
        Sh = 0.047506783;
      }
      else if (age == 15.0) {
        L = -2.132344989;
        M = 19.85766121;
        S = 0.135110159;
        Lh = 2.205180153;
        Mh = 170.139255;
        Sh = 0.045889585;
      }
      else if (age == 15.5) {
        L = -2.085574403;
        M = 20.20858236;
        S = 0.134718085;
        Lh = 2.2253265;
        Mh = 172.1562865;
        Sh = 0.044362674;
      }
      else if (age == 16.0) {
        L = -2.039015385;
        M = 20.5576474;
        S = 0.134198323;
        Lh = 2.113023423;
        Mh = 173.6100518;
        Sh = 0.043085685;
      }
      else if (age == 16.5) {
        L = -1.993150137;
        M = 20.90294449;
        S = 0.1336202;
        Lh = 1.927320937;
        Mh = 174.6309856;
        Sh = 0.042107465;
      }
      else if (age == 17.0) {
        L = -1.949134561;
        M = 21.24247982;
        S = 0.13305669;
        Lh = 1.724738292;
        Mh = 175.340954;
        Sh = 0.041408129;
      }
      else if (age == 17.5) {
        L = -1.908831065;
        M = 21.57417053;
        S = 0.132584784;
        Lh = 1.543252982;
        Mh = 175.8359757;
        Sh = 0.040938463;
      }
      else if (age == 18.0) {
        L = -1.874670324;
        M = 21.8958685;
        S = 0.132286382;
        Lh = 1.399999187;
        Mh = 176.1850208;
        Sh = 0.04064364;
      }
    }
    // Calculate percentile value - female
    if (sex == "female") {
      if (age == 2.0) {
        L = -1.024496827;
        M = 16.38804056;
        S = 0.085025838;
        Lh = 1.051272912;
        Mh = 85.3973169;
        Sh = 0.040859727;
      }
      else if (age == 2.5) {
        L = -1.53454192;
        M = 16.00593001;
        S = 0.080932448;
        Lh = 0.81454413;
        Mh = 90.33341722;
        Sh = 0.04175368;
      }
      else if (age == 3.0) {
        L = -2.096828937;
        M = 15.69924188;
        S = 0.078605255;
        Lh = 0.54198094;
        Mh = 94.21335709;
        Sh = 0.042017509;
      }
      else if (age == 3.5) {
        L = -2.618732901;
        M = 15.46470384;
        S = 0.077903716;
        Lh = 0.377878239;
        Mh = 97.6484807;
        Sh = 0.042621565;
      }
      else if (age == 4.0) {
        L = -3.018521987;
        M = 15.29854897;
        S = 0.078713325;
        Lh = 0.225705996;
        Mh = 101.033927;
        Sh = 0.043259907;
      }
      else if (age == 4.5) {
        L = -3.259300182;
        M = 15.19606152;
        S = 0.080904391;
        Lh = 0.075698881;
        Mh = 104.4634511;
        Sh = 0.043816701;
      }
      else if (age == 5.0) {
        L = -3.35007771;
        M = 15.15188405;
        S = 0.084300139;
        Lh = -0.057729947;
        Mh = 107.9566031;
        Sh = 0.044276588;
      }
      else if (age == 5.5) {
        L = -3.325522491;
        M = 15.16056419;
        S = 0.088680264;
        Lh = -0.159197885;
        Mh = 111.4875806;
        Sh = 0.044652942;
      }
      else if (age == 6.0) {
        L = -3.225606516;
        M = 15.21690296;
        S = 0.093803033;
        Lh = -0.219069129;
        Mh = 115.0054978;
        Sh = 0.044963636;
      }
      else if (age == 6.5) {
        L = -3.084290931;
        M = 15.31606644;
        S = 0.099426955;
        Lh = -0.234772114;
        Mh = 118.4496481;
        Sh = 0.045226249;
      }
      else if (age == 7.0) {
        L = -2.926186592;
        M = 15.45356545;
        S = 0.105325289;
        Lh = -0.210210748;
        Mh = 121.7616844;
        Sh = 0.045460702;
      }
      else if (age == 7.5) {
        L = -2.767310047;
        M = 15.6251988;
        S = 0.111294537;
        Lh = -0.15435722;
        Mh = 124.8956114;
        Sh = 0.04569445;
      }
      else if (age == 8.0) {
        L = -2.617192204;
        M = 15.82699517;
        S = 0.117158667;
        Lh = -0.079283065;
        Mh = 127.8262759;
        Sh = 0.045968169;
      }
      else if (age == 8.5) {
        L = -2.48095189;
        M = 16.05516984;
        S = 0.12277087;
        Lh = 0.002744306;
        Mh = 130.5573839;
        Sh = 0.046340046;
      }
      else if (age == 9.0) {
        L = -2.360920527;
        M = 16.30609316;
        S = 0.128013515;
        Lh = 0.08414848;
        Mh = 133.1303527;
        Sh = 0.04688401;
      }
      else if (age == 9.5) {
        L = -2.257782149;
        M = 16.57626713;
        S = 0.132796819;
        Lh = 0.169805275;
        Mh = 135.634186;
        Sh = 0.047670085;
      }
      else if (age == 10.0) {
        L = -2.171295888;
        M = 16.86231366;
        S = 0.137057004;
        Lh = 0.284748919;
        Mh = 138.2111552;
        Sh = 0.048704503;
      }
      else if (age == 10.5) {
        L = -2.100749266;
        M = 17.16096656;
        S = 0.140753927;
        Lh = 0.46917993;
        Mh = 141.0396832;
        Sh = 0.049812203;
      }
      else if (age == 11.0) {
        L = -2.045235058;
        M = 17.46906585;
        S = 0.143868341;
        Lh = 0.744289752;
        Mh = 144.2609497;
        Sh = 0.050524236;
      }
      else if (age == 11.5) {
        L = -2.003802134;
        M = 17.78355575;
        S = 0.146399239;
        Lh = 1.062474568;
        Mh = 147.8423918;
        Sh = 0.050207825;
      }
      else if (age == 12.0) {
        L = -1.975521156;
        M = 18.10148804;
        S = 0.148361495;
        Lh = 1.303044695;
        Mh = 151.4865636;
        Sh = 0.048599314;
      }
      else if (age == 12.5) {
        L = -1.959520079;
        M = 18.42002284;
        S = 0.149783482;
        Lh = 1.358162799;
        Mh = 154.755501;
        Sh = 0.046198356;
      }
      else if (age == 13.0) {
        L = -1.954977947;
        M = 18.73643338;
        S = 0.150705138;
        Lh = 1.242968236;
        Mh = 157.3436995;
        Sh = 0.043859135;
      }
      else if (age == 13.5) {
        L = -1.9610997;
        M = 19.04811118;
        S = 0.151176355;
        Lh = 1.076970655;
        Mh = 159.2074654;
        Sh = 0.042114211;
      }
      else if (age == 14.0) {
        L = -1.977073595;
        M = 19.35257209;
        S = 0.151255713;
        Lh = 0.95657215;
        Mh = 160.4776996;
        Sh = 0.041022401;
      }
      else if (age == 14.5) {
        L = -2.002014224;
        M = 19.64746266;
        S = 0.151009595;
        Lh = 0.902452436;
        Mh = 161.3267744;
        Sh = 0.040409354;
      }
      else if (age == 15.0) {
        L = -2.034893091;
        M = 19.9305662;
        S = 0.150511645;
        Lh = 0.895569834;
        Mh = 161.8979913;
        Sh = 0.040083845;
      }
      else if (age == 15.5) {
        L = -2.074459502;
        M = 20.19980767;
        S = 0.14984254;
        Lh = 0.913397733;
        Mh = 162.2908474;
        Sh = 0.039913066;
      }
      else if (age == 16.0) {
        L = -2.119156972;
        M = 20.45325617;
        S = 0.14909006;
        Lh = 0.941145943;
        Mh = 162.5689958;
        Sh = 0.039820663;
      }
      else if (age == 16.5) {
        L = -2.167044578;
        M = 20.6891237;
        S = 0.148349348;
        Lh = 0.971038162;
        Mh = 162.7718741;
        Sh = 0.03976685;
      }
      else if (age == 17.0) {
        L = -2.215737645;
        M = 20.90575839;
        S = 0.147723315;
        Lh = 0.999505539;
        Mh = 162.9238449;
        Sh = 0.039732048;
      }
      else if (age == 17.5) {
        L = -2.26238209;
        M = 21.10163241;
        S = 0.147323144;
        Lh = 1.025142554;
        Mh = 163.0401953;
        Sh = 0.039706971;
      }
      else if (age == 18.0) {
        L = -2.303687802;
        M = 21.27532239;
        S = 0.14726877;
        Lh = 1.047571238;
        Mh = 163.1307866;
        Sh = 0.039687311;
      }
    }

    var percentile;
    var zScore = (Math.pow((getBMI() / M), L) - 1) / (L * S);
    if (zScore < -3) {
      percentile = 0;
    }
    if (zScore >= -3 && zScore < 0) {
      percentile = -0.3684 * Math.pow(zScore, 5) - 3.4707 * Math.pow(zScore, 4) - 10.108 * Math.pow(zScore, 3) - 1.3127 * Math.pow(zScore, 2) + 39.796 * zScore + 50;
    }
    if (zScore >= 0 && zScore <= 3) {
      percentile = -0.3684 * Math.pow(zScore, 5) + 3.4707 * Math.pow(zScore, 4) - 10.108 * Math.pow(zScore, 3) + 1.3127 * Math.pow(zScore, 2) + 39.796 * zScore + 50;
    }
    if (zScore > 3) {
      percentile = 100;
    }

    var height = h * 100;

    var zScoreHeight = ((Math.pow((height / Mh), Lh)) - 1) / (Lh * Sh);
    if (zScoreHeight < -3) {
      percentileHeight = 0;
    }
    if (zScoreHeight >= -3 && zScoreHeight < 0) {
      percentileHeight = -0.3684 * Math.pow(zScoreHeight, 5) - 3.4707 * Math.pow(zScoreHeight, 4) - 10.108 * Math.pow(zScoreHeight, 3) - 1.3127 * Math.pow(zScoreHeight, 2) + 39.796 * zScoreHeight + 50;
    }
    if (zScoreHeight >= 0 && zScoreHeight <= 3) {
      percentileHeight = -0.3684 * Math.pow(zScoreHeight, 5) + 3.4707 * Math.pow(zScoreHeight, 4) - 10.108 * Math.pow(zScoreHeight, 3) + 1.3127 * Math.pow(zScoreHeight, 2) + 39.796 * zScoreHeight + 50;
    }
    if (zScoreHeight > 3) {
      percentileHeight = 100;
    }

    var evaluation;

    // Setting the color bar indicator
    if (percentile < 5) {
      evaluation = "Underweight";
    }
    else if (percentile >= 5 && percentile < 85) {
      evaluation = "Healthy weight";
    }
    else if (percentile >= 85 && percentile < 95) {
      evaluation = "Overweight";
    }
    else if (percentile >= 95) {
      evaluation = "Obese";
    }

    return evaluation;

    /*
    // Setting indicator and indicator bounderies
    indicatorValue = (percentile * 2.80) - 18;
    if (indicatorValue < -18) {
      indicatorValue = -18;
    }
    else if (indicatorValue > 260) {
      indicatorValue = 260;
    }
    //evalbar.indicator.output.text = Math.round(percentile).toString();
    //TweenLite.to(evalbar.indicator, 0.2, {x:indicatorValue});
    document.getElementById('scaleBg').getElementsByClassName('percentile')[0].innerHTML = Math.round(percentile);
    TweenLite.to(document.getElementById('scaleBg').getElementsByClassName('circle')[0], 0, {
      css: {
        left: indicatorValue
      }
    });

    //Setting indicator2 and indicator2 bounderies;
    if (indicator2Value < 0) {
      indicator2Value = 0;
    }
    else if (indicator2Value > 320) {
      indicator2Value = 320;
    }
    else {
      indicator2Value = percentileHeight * 3.2;
    }
    evalbar2.indicator.output.text = Math.floor(percentileHeight).toString();
    TweenLite.to(evalbar2.indicator, 0.2, {
      x: indicator2Value
    });

    if (Math.floor(percentileHeight) < 26) {
      childSticks.gotoAndStop(1);
      childSticks.evalDisplayText.text = "Your height is below average";
    }
    else if (Math.floor(percentileHeight) < 76) {
      childSticks.gotoAndStop(2);
      childSticks.evalDisplayText.text = "Your height is average";
    }
    else {
      childSticks.gotoAndStop(3);
      childSticks.evalDisplayText.text = "Your height is above average";
    }
    */
  }

  function evaluateChildrenHeight() {
    var height_evaluation;
    if (Math.floor(percentileHeight) < 26) {
      height_evaluation = "Your height is below average";
    }
    else if (Math.floor(percentileHeight) < 76) {
      height_evaluation = "Your height is average";
    }
    else {
      height_evaluation = "Your height is above average";
    }
    return height_evaluation;
  }

  var publicAPI = {
    getBMI: getBMI,
    getPonderalIndex: getPonderalIndex,
    evaluateChildren: evaluateChildren,
    evaluateChildrenHeight: evaluateChildrenHeight,
    evaluateAdults: evaluateAdults
  };

  return publicAPI;
};

module.exports = motionsplan;
