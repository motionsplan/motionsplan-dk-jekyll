let motionsplan = {};

motionsplan.ActivityEqualsSteps = function(h, w) {
  let opttt = new Array();
  opttt[0] = "<option value='0' class='0'>-</option>";
  opttt[3] = "";
  opttt[3] += "<option value='88.46153846153845' class='3'> Normal </option>";
  opttt[4] = "";
  opttt[4] += "<option value='46.15384615384615' class='4'> Let </option>";
  opttt[4] += "<option value='69.23076923076923' class='4'> Moderat </option>";
  opttt[4] += "<option value='115.38461538461539' class='4'> Intenst </option>";
  opttt[5] = "";
  opttt[5] += "<option value='152.3076923076923' class='5'> Normal </option>";
  opttt[7] = "";
  opttt[7] += "<option value='76.92307692307692' class='7'> Let </option>";
  opttt[7] += "<option value='115.38461538461539' class='7'> Moderat </option>";
  opttt[7] += "<option value='130.76923076923077' class='7'> Intenst </option>";
  opttt[9] = "";
  opttt[9] += "<option value='96.15384615384615' class='9'> Normal </option>";
  opttt[10] = "";
  opttt[10] += "<option value='100.0' class='10'> Let </option>";
  opttt[10] += "<option value='153.84615384615384' class='10'> Moderat </option>";
  opttt[10] += "<option value='173.07692307692307' class='10'> Intenst </option>";
  opttt[11] = "";
  opttt[11] += "<option value='153.84615384615384' class='11'> Normal </option>";
  opttt[12] = "";
  opttt[12] += "<option value='203.07692307692307' class='12'> Normal </option>";
  opttt[13] = "";
  opttt[13] += "<option value='153.84615384615384' class='13'> Normal </option>";
  opttt[15] = "";
  opttt[15] += "<option value='173.07692307692307' class='15'> Normal </option>";
  opttt[16] = "";
  opttt[16] += "<option value='103.84615384615384' class='16'> Normal </option>";
  opttt[17] = "";
  opttt[17] += "<option value='100.0' class='17'> Normal </option>";
  opttt[19] = "";
  opttt[19] += "<option value='61.53846153846153' class='19'> Normal </option>";
  opttt[20] = "";
  opttt[20] += "<option value='184.6153846153846' class='20'> Normal </option>";
  opttt[21] = "";
  opttt[21] += "<option value='58.46153846153846' class='21'> Normal </option>";
  opttt[22] = "";
  opttt[22] += "<option value='153.84615384615384' class='22'> Normal </option>";
  opttt[23] = "";
  opttt[23] += "<option value='76.92307692307692' class='23'> Let </option>";
  opttt[23] += "<option value='153.84615384615384' class='23'> Moderat </option>";
  opttt[23] += "<option value='200.0' class='23'> Intenst </option>";
  opttt[103] = "";
  opttt[103] += "<option value='224' class='103'> Normal </option>";
  opttt[108] = "";
  opttt[108] += "<option value='79' class='108'> Let </option>";
  opttt[108] += "<option value='98' class='108'> Moderat </option>";
  opttt[108] += "<option value='119' class='108'> Intenst </option>";
  opttt[106] = "";
  opttt[106] += "<option value='107.6923076923077' class='106'> Normal </option>";
  opttt[24] = "";
  opttt[24] += "<option value='76.92307692307692' class='24'> Normal </option>";
  opttt[25] = "";
  opttt[25] += "<option value='100.0' class='25'> Let </option>";
  opttt[25] += "<option value='130.76923076923077' class='25'> Moderat </option>";
  opttt[25] += "<option value='176.9230769230769' class='25'> Intenst </option>";
  opttt[26] = "";
  opttt[26] += "<option value='81.53846153846153' class='26'> Normal </option>";
  opttt[27] = "";
  opttt[27] += "<option value='84.61538461538461' class='27'> Normal </option>";
  opttt[28] = "";
  opttt[28] += "<option value='107.6923076923077' class='28'> Normal </option>";
  opttt[29] = "";
  opttt[29] += "<option value='115.38461538461539' class='29'> Normal </option>";
  opttt[30] = "";
  opttt[30] += "<option value='61.53846153846153' class='30'> Normal </option>";
  opttt[31] = "";
  opttt[31] += "<option value='46.15384615384615' class='31'> Normal </option>";
  opttt[32] = "";
  opttt[32] += "<option value='146.15384615384616' class='32'> Normal </option>";
  opttt[101] = "";
  opttt[101] += "<option value='76.92307692307692' class='101'> Let </option>";
  opttt[101] += "<option value='92.3076923076923' class='101'> Moderat </option>";
  opttt[101] += "<option value='115.38461538461539' class='101'> Intenst </option>";
  opttt[36] = "";
  opttt[36] += "<option value='76.92307692307692' class='36'> Let </option>";
  opttt[36] += "<option value='130.76923076923077' class='36'> Moderat </option>";
  opttt[36] += "<option value='153.84615384615384' class='36'> Intenst </option>";
  opttt[37] = "";
  opttt[37] += "<option value='76.92307692307692' class='37'> Let </option>";
  opttt[37] += "<option value='100.0' class='37'> Moderat </option>";
  opttt[37] += "<option value='173.07692307692307' class='37'> Intenst </option>";
  opttt[34] = "";
  opttt[34] += "<option value='115.38461538461539' class='34'> Normal </option>";
  opttt[40] = "";
  opttt[40] += "<option value='23.076923076923077' class='40'> Med en golfbil </option>";
  opttt[40] += "<option value='67.6923076923077' class='40'> Bære golfudstyr </option>";
  opttt[42] = "";
  opttt[42] += "<option value='86.15384615384615' class='42'> Med maskine </option>";
  opttt[42] += "<option value='107.6923076923077' class='42'> Manuelt  </option>";
  opttt[44] = "";
  opttt[44] += "<option value='115.38461538461539' class='44'> Normal </option>";
  opttt[39] = "";
  opttt[39] += "<option value='134.6153846153846' class='39'> Bære &lt;10kg </option>";
  opttt[39] += "<option value='142.3076923076923' class='39'> Bære 10-20kg </option>";
  opttt[47] = "";
  opttt[47] += "<option value='61.53846153846153' class='47'> Normal </option>";
  opttt[48] = "";
  opttt[48] += "<option value='76.92307692307692' class='48'> Let </option>";
  opttt[48] += "<option value='100.0' class='48'> Moderat </option>";
  opttt[48] += "<option value='130.76923076923077' class='48'> Intenst </option>";
  opttt[49] = "";
  opttt[49] += "<option value='76.92307692307692' class='49'> Normal </option>";
  opttt[46] = "";
  opttt[46] += "<option value='76.92307692307692' class='46'> Let </option>";
  opttt[46] += "<option value='130.76923076923077' class='46'> Moderat </option>";
  opttt[46] += "<option value='230.76923076923077' class='46'> Intenst </option>";
  opttt[45] = "";
  opttt[45] += "<option value='86.92307692307692' class='45'> Normal </option>";
  opttt[50] = "";
  opttt[50] += "<option value='76.92307692307692' class='50'> Let </option>";
  opttt[50] += "<option value='107.6923076923077' class='50'> Moderat </option>";
  opttt[50] += "<option value='184.6153846153846' class='50'> Intenst </option>";
  opttt[54] = "";
  opttt[54] += "<option value='53.84615384615385' class='54'> Let </option>";
  opttt[54] += "<option value='123.07692307692307' class='54'> Moderat </option>";
  opttt[54] += "<option value='174.6153846153846' class='54'> Intenst </option>";
  opttt[107] = "";
  opttt[107] += "<option value='192.3076923076923' class='107'> Normal </option>";
  opttt[55] = "";
  opttt[55] += "<option value='193.07692307692307' class='55'> Normal </option>";
  opttt[53] = "";
  opttt[53] += "<option value='123.07692307692307' class='53'> Normal </option>";
  opttt[57] = "";
  opttt[57] += "<option value='153.84615384615384' class='57'> Normal </option>";
  opttt[58] = "";
  opttt[58] += "<option value='84.61538461538461' class='58'> Normal </option>";
  opttt[52] = "";
  opttt[52] += "<option value='115.38461538461539' class='52'> Let </option>";
  opttt[52] += "<option value='192.3076923076923' class='52'> Moderat </option>";
  opttt[52] += "<option value='242.3076923076923' class='52'> Intenst </option>";
  opttt[59] = "";
  opttt[59] += "<option value='153.84615384615384' class='59'> Normal </option>";
  opttt[60] = "";
  opttt[60] += "<option value='84.61538461538461' class='60'> Normal </option>";
  opttt[61] = "";
  opttt[61] += "<option value='76.92307692307692' class='61'> Let </option>";
  opttt[61] += "<option value='92.3076923076923' class='61'> Moderat </option>";
  opttt[61] += "<option value='111.53846153846153' class='61'> Intenst </option>";
  opttt[62] = "";
  opttt[62] += "<option value='47.69230769230769' class='62'> Normal </option>";
  opttt[63] = "";
  opttt[63] += "<option value='92.3076923076923' class='63'> Normal </option>";
  opttt[64] = "";
  opttt[64] += "<option value='46.15384615384615' class='64'> Normal </option>";
  opttt[66] = "";
  opttt[66] += "<option value='53.84615384615385' class='66'> Let </option>";
  opttt[66] += "<option value='80.76923076923076' class='66'> Moderat </option>";
  opttt[66] += "<option value='134.6153846153846' class='66'> Intenst </option>";
  opttt[69] = "";
  opttt[69] += "<option value='53.84615384615385' class='69'> Let </option>";
  opttt[69] += "<option value='134.6153846153846' class='69'> Moderat </option>";
  opttt[69] += "<option value='169.23076923076923' class='69'> Intenst </option>";
  opttt[70] = "";
  opttt[70] += "<option value='196.15384615384616' class='70'> Normal </option>";
  opttt[68] = "";
  opttt[68] += "<option value='76.92307692307692' class='68'> Let </option>";
  opttt[68] += "<option value='92.3076923076923' class='68'> Moderat </option>";
  opttt[68] += "<option value='134.6153846153846' class='68'> Intenst </option>";
  opttt[67] = "";
  opttt[67] += "<option value='76.92307692307692' class='67'> Let </option>";
  opttt[67] += "<option value='107.6923076923077' class='67'> Moderat </option>";
  opttt[67] += "<option value='153.84615384615384' class='67'> Intenst </option>";
  opttt[71] = "";
  opttt[71] += "<option value='46.15384615384615' class='71'> Normal </option>";
  opttt[72] = "";
  opttt[72] += "<option value='76.92307692307692' class='72'> Normal </option>";
  opttt[73] = "";
  opttt[73] += "<option value='153.84615384615384' class='73'> Let </option>";
  opttt[73] += "<option value='192.3076923076923' class='73'> Moderat </option>";
  opttt[73] += "<option value='223.07692307692307' class='73'> Intenst </option>";
  opttt[74] = "";
  opttt[74] += "<option value='53.84615384615385' class='74'> Let </option>";
  opttt[74] += "<option value='107.6923076923077' class='74'> Moderat </option>";
  opttt[74] += "<option value='184.6153846153846' class='74'> Intenst </option>";
  opttt[75] = "";
  opttt[75] += "<option value='134.6153846153846' class='75'> Normal </option>";
  opttt[78] = "";
  opttt[78] += "<option value='115.38461538461539' class='78'> Normal </option>";
  opttt[79] = "";
  opttt[79] += "<option value='92.3076923076923' class='79'> Let </option>";
  opttt[79] += "<option value='123.07692307692307' class='79'> Moderat </option>";
  opttt[79] += "<option value='169.23076923076923' class='79'> Intenst </option>";
  opttt[105] = "";
  opttt[105] += "<option value='76.92307692307692' class='105'> Let </option>";
  opttt[105] += "<option value='92.3076923076923' class='105'> Moderat </option>";
  opttt[105] += "<option value='115.38461538461539' class='105'> Intenst </option>";
  opttt[80] = "";
  opttt[80] += "<option value='224.6153846153846' class='80'> Normal </option>";
  opttt[81] = "";
  opttt[81] += "<option value='115.38461538461539' class='81'> Normal </option>";
  opttt[83] = "";
  opttt[83] += "<option value='92.3076923076923' class='83'> Normal </option>";
  opttt[84] = "";
  opttt[84] += "<option value='76.92307692307692' class='84'> Let </option>";
  opttt[84] += "<option value='92.3076923076923' class='84'> Moderat </option>";
  opttt[84] += "<option value='115.38461538461539' class='84'> Intenst </option>";
  opttt[85] = "";
  opttt[85] += "<option value='115.38461538461539' class='85'> Normal </option>";
  opttt[86] = "";
  opttt[86] += "<option value='115.38461538461539' class='86'> Let </option>";
  opttt[86] += "<option value='153.84615384615384' class='86'> Moderat </option>";
  opttt[86] += "<option value='192.3076923076923' class='86'> Intenst </option>";
  opttt[87] = "";
  opttt[87] += "<option value='84.61538461538461' class='87'> Normal </option>";
  opttt[88] = "";
  opttt[88] += "<option value='192.3076923076923' class='88'> Normal </option>";
  opttt[89] = "";
  opttt[89] += "<option value='76.92307692307692' class='89'> Let </option>";
  opttt[89] += "<option value='140.0' class='89'> Moderat </option>";
  opttt[89] += "<option value='192.3076923076923' class='89'> Intenst </option>";
  opttt[91] = "";
  opttt[91] += "<option value='61.53846153846153' class='91'> Let </option>";
  opttt[91] += "<option value='76.92307692307692' class='91'> Moderat </option>";
  opttt[91] += "<option value='115.38461538461539' class='91'> Intenst </option>";
  opttt[104] = "";
  opttt[104] += "<option value='115.383333333' class='104'> Normal </option>";
  opttt[92] = "";
  opttt[92] += "<option value='192.3076923076923' class='92'> Normal </option>";
  opttt[95] = "";
  opttt[95] += "<option value='76.92307692307692' class='95'> Let </option>";
  opttt[95] += "<option value='153.84615384615384' class='95'> Moderat </option>";
  opttt[95] += "<option value='173.07692307692307' class='95'> Intenst </option>";
  opttt[96] = "";
  opttt[96] += "<option value='115.38461538461539' class='96'> Normal </option>";
  opttt[97] = "";
  opttt[97] += "<option value='76.92307692307692' class='97'> Normal </option>";
  opttt[99] = "";
  opttt[99] += "<option value='46.15384615384615' class='99'> Normal </option>";
  opttt[100] = "";
  opttt[100] += "<option value='100.0' class='100'> Normal </option>";

  function change_types() {
   let id = parseInt($('#sport option:selected').val());
    $('#type option').remove();
    $(opttt[id]).appendTo('#type');
    $('#type option')[0].selected = "selected";
  };

  function getSteps() {
    return calculate_steps();
  }

  function calculate_steps() {
   let result;
   let st_ste;
    if ($('#st_ste').val() == "" || $('#st_ste').val() == "0") {
      result = "";
    }
    else {
      st_ste = $('#st_ste').val();
      result = Math.round(st_ste * $('#type option:selected').val()).toString();
    }
    $('#st_min').html(result);
  }

  change_types();
  $('#sport').change(function() { change_types();
    calculate_steps(); });

  let publicAPI = {
    getSteps: getSteps
  };

  return publicAPI;
};

module.exports = motionsplan;
