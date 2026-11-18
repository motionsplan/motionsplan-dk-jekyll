// Caching af DOM-elementer
const el = {};

function initElements() {
    const ids = [
        "footslider", "tibiaslider", "femurslider", "torsoslider", "highlowslider",
        "weightslider", "barweightslider", "stanceslider", "ankleflexiontslider",
        "depthslider", "positionslider", "footvalue", "tibiavalue", "femurvalue",
        "torsovalue", "highlowslidervalue", "weightvalue", "barweightvalue",
        "stancevalue", "ankleflexionvalue", "depthvalue", "checkmodel",
        "checkstats", "checkmoment", "checkmuscle"
    ];
    ids.forEach(id => el[id] = document.getElementById(id));
}

// Throttling med requestAnimationFrame for glidende ydeevne
let isUpdating = false;
function requestUpdate() {
    if (!isUpdating) {
        requestAnimationFrame(() => {
            update();
            isUpdating = false;
        });
        isUpdating = true;
    }
}

function update() {
    var stanceangle = Number(el.stanceslider.value);
    var stance = Math.cos(stanceangle * Math.PI / 180);

    var footoriginal = el.footslider.value;
    var foot = stance * Number(el.footslider.value);
    var tibia = Number(el.tibiaslider.value);
    var femur = Number(el.femurslider.value);
    var torso = Number(el.torsoslider.value);
    var highlow = Number(el.highlowslider.value);
    var weight = Number(el.weightslider.value);
    var barweight = Number(el.barweightslider.value);

    var necklength = 0.18 * torso;
    var headdiam = 0.23 * torso;
    var hipwidth = 0.66 * torso / 2;
    var ankleflexion = Number(el.ankleflexiontslider.value);
    var depth = Number(el.depthslider.value);
    var position = parseInt(el.positionslider.value, 10);
    var plate = 22.5;

    // DOM-opdateringer
    el.footvalue.textContent = `${footoriginal} cm`;
    el.tibiavalue.textContent = `${tibia} cm`;
    el.femurvalue.textContent = `${femur} cm`;
    el.torsovalue.textContent = `${torso} cm`;
    el.highlowslidervalue.textContent = `${highlow} cm`;

    el.weightvalue.textContent = `${weight} kg`;
    el.barweightvalue.textContent = `${barweight} kg`;
    el.stancevalue.textContent = `${el.stanceslider.value}°`;
    el.ankleflexionvalue.textContent = `${ankleflexion}°`;
    el.depthvalue.textContent = `${depth}°`;

    var anklezero = Math.asin((foot / 4) / (tibia + femur + torso)) * 180 / Math.PI;
    var ankleinc = (ankleflexion - anklezero) / 99;

    var kneezero = 90 + anklezero;
    var kneeinc = (kneezero - depth) / 99;

    var toexyz = [foot / 2, 0.2, 0];
    var heelxyz = [-foot / 2, 0.2, 0];
    var anklexyz = [-foot / 4, 0.16 * tibia, 0];

    var WeightHeadNeck = 0.0681 * weight;
    var WeightTrunk = 0.4302 * weight;
    var WeightThigh = 2 * 0.1447 * weight;
    var WeightShank = 2 * 0.0457 * weight;
    var WeightArm = 2 * (0.0263 + 0.015 + 0.00585) * weight;

    barweight = barweight + WeightArm;

    var CoGHeadNeck = 0.4922;
    var CoGTrunk = 0.4046;
    var CoGThigh = 0.3854;
    var CoGShank = 0.4374;
    var totalmoment = 1;

    var positionarray = [], anklecurrent = [], kneecurrent = [];
    var kneex = [], kneey = [], kneez = [], hipx = [], hipy = [], barx = [], bary = [];
    var neckx = [], necky = [], kneemoment = [], abskneemoment = [];
    var kneemomenthn = [], kneemomentb = [], kneemomentt = [], kneemomentf = [];
    var hipmoment = [], hipmomenthn = [], hipmomentb = [], hipmomentt = [];
    var summedmoment = [], backangle = [], hipangle = [], kneeangle = [];
    var tolen = [], flen = [], tlen = [];

    var AAngle, KAngle, HAngle;
    var Iliopsoas = [], TFL = [], BicepsFemorisLongHead = [], Semimembranosus = [];
    var Semitendinosus = [], RectusFemoris = [], Sartorius = [], Gracilis = [];
    var BicepsFemorisShortHead = [], VastusIntermedius = [], VastusLateralis = [];
    var VastusMedialis = [], MedialGastroc = [], LateralGastroc = [], TibialisAnterior = [], Soleus = [];

    for (var i = 0; i < 100; i++) {
        positionarray[i] = i;
        anklecurrent[i] = anklezero + (99 / Math.log(1 + 99 / 10)) * Math.log(1 + i / 10) * ankleinc;

        kneecurrent[i] = kneezero - i * kneeinc;
        kneex[i] = stance * tibia * Math.sin(anklecurrent[i] * Math.PI / 180) + anklexyz[0];
        kneey[i] = tibia * Math.cos(anklecurrent[i] * Math.PI / 180) + anklexyz[1];

        hipx[i] = kneex[i] - stance * femur * Math.cos(kneecurrent[i] * Math.PI / 180);
        hipy[i] = kneey[i] + femur * Math.sin(kneecurrent[i] * Math.PI / 180);

        if (stance == 1) {
            kneez[i] = 0;
        } else {
            var zDiff = Math.pow(femur, 2) - Math.pow(kneex[i] - hipx[i], 2) - Math.pow(hipy[i] - kneey[i], 2);
            kneez[i] = Math.sqrt(Math.max(0, zDiff));
        }

        barx[i] = -1;
        var iterCount = 0;
        do {
            barx[i] += 0.1;
            var sqVal = Math.pow(torso - highlow, 2) - Math.pow(barx[i] - hipx[i], 2);
            bary[i] = hipy[i] + Math.sqrt(Math.max(0, sqVal));
            backangle[i] = (180 / Math.PI) * (Math.atan((bary[i] - hipy[i]) / (barx[i] - hipx[i])));

            neckx[i] = barx[i] + highlow * Math.cos(backangle[i] * (Math.PI / 180));
            necky[i] = bary[i] + highlow * Math.sin(backangle[i] * (Math.PI / 180));

            totalmoment = barx[i] * barweight +
                (neckx[i] + CoGHeadNeck * Math.cos(backangle[i] * Math.PI / 180) * (necklength + headdiam / 2)) * WeightHeadNeck +
                (neckx[i] - CoGTrunk * (neckx[i] - hipx[i])) * WeightTrunk +
                (hipx[i] + CoGThigh * (kneex[i] - hipx[i])) * WeightThigh +
                (kneex[i] - CoGShank * (kneex[i] - anklexyz[0])) * WeightShank;

            iterCount++;
        } while (totalmoment < 0 && iterCount < 1000);

        if (el.checkmoment.checked || el.checkstats.checked) {
            kneemomentb[i] = 9.8 * barweight * (barx[i] - kneex[i]) / (100 * stance);
            kneemomenthn[i] = (9.8 * (((neckx[i] - kneex[i]) + CoGHeadNeck * Math.cos(backangle[i] * Math.PI / 180) * (necklength + headdiam / 2)) * WeightHeadNeck) / (100 * stance));
            kneemomentt[i] = (9.8 * (((neckx[i] - kneex[i]) - CoGTrunk * (barx[i] - hipx[i])) * WeightTrunk) / (100 * stance));
            kneemomentf[i] = (9.8 * (((1 - CoGThigh) * (hipx[i] - kneex[i])) * WeightThigh) / (100 * stance));
            kneemoment[i] = kneemomentb[i] + kneemomenthn[i] + kneemomentt[i] + kneemomentf[i];

            hipmomentb[i] = 9.8 * barweight * (barx[i] - hipx[i]) / (100 * stance);
            hipmomenthn[i] = (9.8 * (((neckx[i] - hipx[i]) + CoGHeadNeck * Math.cos(backangle[i] * Math.PI / 180) * (necklength + headdiam / 2)) * WeightHeadNeck) / (100 * stance));
            hipmomentt[i] = (9.8 * (((1 - CoGTrunk) * (neckx[i] - hipx[i])) * WeightTrunk) / (100 * stance));
            hipmoment[i] = hipmomentb[i] + hipmomenthn[i] + hipmomentt[i];

            summedmoment[i] = Math.abs(kneemoment[i]) + Math.abs(hipmoment[i]);
            abskneemoment[i] = Math.abs(kneemoment[i]);
        }

        kneeangle[i] = 90 - anklecurrent[i] + kneecurrent[i];
        tolen[i] = Math.sqrt(Math.pow(hipx[i] - neckx[i], 2) + Math.pow(hipy[i] - necky[i], 2));
        flen[i] = Math.sqrt(Math.pow(hipx[i] - kneex[i], 2) + Math.pow(hipy[i] - kneey[i], 2) + Math.pow(kneez[i], 2));
        tlen[i] = Math.sqrt(Math.pow(anklexyz[0] - kneex[i], 2) + Math.pow(kneey[i] - anklexyz[1], 2) + Math.pow(kneez[i], 2));
        hipangle[i] = Math.acos(((barx[i] - hipx[i]) * (kneex[i] - hipx[i]) + (bary[i] - hipy[i]) * (kneey[i] - hipy[i])) / (tolen[i] * flen[i])) * 180 / Math.PI;

        if (el.checkmuscle.checked) {
            HAngle = 180 - hipangle[i];
            KAngle = 90 + anklecurrent[i] - kneecurrent[i];
            AAngle = 90 + anklecurrent[i];

            Iliopsoas[i] = 100 * ((0.215 - 0.000726 * HAngle) / 0.215 - 1);
            TFL[i] = 100 * ((1.436 - 0.0032 * HAngle - 0.000213 * KAngle) / 1.436 - 1);
            BicepsFemorisLongHead[i] = 100 * ((1.048 + 0.00209 * HAngle - 0.0016 * KAngle) / 1.048 - 1);
            Semimembranosus[i] = 100 * ((1.027 + 0.00199 * HAngle - 0.00222 * KAngle) / 1.027 - 1);
            Semitendinosus[i] = 100 * ((0.987 + 0.00207 * HAngle - 0.00178 * KAngle) / 0.987 - 1);
            RectusFemoris[i] = 100 * ((1.107 - 0.0015 * HAngle + 0.00199 * KAngle) / 1.107 - 1);
            Sartorius[i] = 100 * ((1.328 - 0.00262 * HAngle - 0.00134 * KAngle) / 1.328 - 1);
            Gracilis[i] = 100 * ((0.968 + 0.00123 * HAngle - 0.00179 * KAngle) / 0.968 - 1);
            BicepsFemorisShortHead[i] = 100 * ((0.6 + 0.000103 * KAngle - 0.0000121 * KAngle * KAngle) / 0.6 - 1);
            VastusIntermedius[i] = 100 * ((0.496 + 0.00388 * KAngle - 0.0000163 * KAngle * KAngle) / 0.496 - 1);
            VastusLateralis[i] = 100 * ((0.569 + 0.00406 * KAngle - 0.0000207 * KAngle * KAngle) / 0.569 - 1);
            VastusMedialis[i] = 100 * ((0.489 + 0.00307 * KAngle - 0.0000153 * KAngle * KAngle) / 0.489 - 1);
            MedialGastroc[i] = 100 * ((0.9 - 0.00062 * KAngle + 0.00214 * AAngle) / (0.9 + 0.00214 * (90 + anklezero)) - 1);
            LateralGastroc[i] = 100 * ((0.894 - 0.0005 * KAngle + 0.00214 * AAngle) / (0.894 + 0.00214 * (90 + anklezero)) - 1);
            TibialisAnterior[i] = 100 * ((0.715 - 0.0013 * AAngle) / (0.715 - 0.0013 * (90 + anklezero)) - 1);
            Soleus[i] = 100 * ((0.563 + 0.00193 * AAngle) / (0.563 + 0.00193 * (90 + anklezero)) - 1);
        }
    }

    // --- PLOT MODEL 1 ---
    if (el.checkmodel.checked) {
        var baseheadx = neckx[position] + necklength * Math.cos(backangle[position] * Math.PI / 180);
        var baseheady = necky[position] + necklength * Math.sin(backangle[position] * Math.PI / 180);
        var centerheadx = neckx[position] + (necklength + headdiam) * Math.cos(backangle[position] * Math.PI / 180);
        var centerheady = necky[position] + (necklength + headdiam) * Math.sin(backangle[position] * Math.PI / 180);

        var steps = 32, radius = headdiam, headx = [], heady = [];
        for (var j = 0; j < steps; ++j) {
            var a = 2 * Math.PI / steps * j;
            headx[j] = radius * Math.cos(a) + centerheadx;
            heady[j] = radius * Math.sin(a) + centerheady;
        }
        headx[steps] = headx[0];
        heady[steps] = heady[0];

        radius = plate;
        var weightx = [], weighty = [];
        for (var j = 0; j < steps; ++j) {
            var a = 2 * Math.PI / steps * j;
            weightx[j] = radius * Math.cos(a) + barx[position];
            weighty[j] = radius * Math.sin(a) + bary[position];
        }
        weightx[steps] = weightx[0];
        weighty[steps] = weighty[0];

        Plotly.react('model', [
            { x: headx, y: heady, type: 'scatter', mode: 'lines', line: { color: 'red', width: 2 }, name: '' },
            { x: [anklexyz[0], toexyz[0], heelxyz[0], anklexyz[0], kneex[position], hipx[position], neckx[position], baseheadx], y: [anklexyz[1], toexyz[1], heelxyz[1], anklexyz[1], kneey[position], hipy[position], necky[position], baseheady], type: 'scatter', mode: 'lines+markers', line: { color: 'red', width: 2 }, name: '' },
            { x: weightx, y: weighty, type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' },
            { x: barx, y: bary, type: 'scatter', mode: 'lines', line: { color: 'green', width: 2 }, name: '' },
            { x: [0, 0], y: [0, 200], type: 'scatter', mode: 'lines', line: { color: 'grey', width: 1 }, name: '' }
        ], {
            title: 'Squat Model',
            xaxis: { range: [-110, 110], autorange: false, fixedrange: true },
            yaxis: { range: [0, 205], autorange: false, fixedrange: true },
            showlegend: false
        });
    } else {
        Plotly.purge('model');
    }

    // --- PLOT MODEL 2 ---
    if (el.checkmodel.checked) {
        Plotly.react('model2', [
            { x: [-kneez[position] - hipwidth, -hipwidth, hipwidth, kneez[position] + hipwidth], y: [kneex[position], hipx[position], hipx[position], kneex[position]], type: 'scatter', mode: 'lines+markers', line: { color: 'red', width: 2 }, name: '' },
            { x: [-110, -72, -72, -67, -67, 67, 67, 72, 72, 110, 110, 72, 72, 67, 67, -67, -67, -72, -72, -110, -110], y: [-2.5 + barx[position], -2.5 + barx[position], -plate + barx[position], -plate + barx[position], -1.5 + barx[position], -1.5 + barx[position], -plate + barx[position], -plate + barx[position], -2.5 + barx[position], -2.5 + barx[position], 2.5 + barx[position], 2.5 + barx[position], plate + barx[position], plate + barx[position], 1.5 + barx[position], 1.5 + barx[position], plate + barx[position], plate + barx[position], 2.5 + barx[position], 2.5 + barx[position], -2.5 + barx[position]], type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' }
        ], {
            title: 'Axial view of hips and thighs',
            xaxis: { range: [-110, 110], autorange: false, fixedrange: true },
            yaxis: { range: [-100, 100], autorange: false, fixedrange: true },
            showlegend: false
        });
    } else {
        Plotly.purge('model2');
    }

    // --- PLOT STATS ---
    if (el.checkstats.checked) {
        Plotly.react('stats', [
            { y: abskneemoment, x: bary, type: 'scatter', name: 'Knee moment', line: { dash: 'dot' } },
            { y: hipmoment, x: bary, type: 'scatter', name: 'Hip moment', line: { dash: 'dot' } },
            { y: summedmoment, x: bary, type: 'scatter', name: 'Summed moment', line: { dash: 'dot' } },
            { y: backangle, x: bary, type: 'scatter', name: 'Back angle', yaxis: 'y2' },
            { y: hipangle, x: bary, type: 'scatter', name: 'Hip angle', yaxis: 'y2' },
            { y: kneeangle, x: bary, type: 'scatter', name: 'Knee angle', yaxis: 'y2' },
            { y: anklecurrent, x: bary, type: 'scatter', name: 'Ankle angle', yaxis: 'y2' },
            { y: [0, 180], x: [bary[position], bary[position]], type: 'scatter', name: 'Current Position', yaxis: 'y2' }
        ], {
            title: 'Squat Stats',
            xaxis: { range: [bary[0], bary[99]], autorange: false, title: 'Bar Height (cm)' },
            yaxis: { range: [0, 2000], autorange: false, showgrid: false, title: 'Moment (N.m)' },
            yaxis2: { range: [0, 180], autorange: false, overlaying: 'y', title: 'Angle', side: 'right' },
            legend: { xanchor: "left", yanchor: "top", y: 1.1, x: 1.15, font: { size: 8 } }
        });
    } else {
        Plotly.purge('stats');
    }

    // --- PLOT MUSCLE LENGTHS ---
    if (el.checkmuscle.checked) {
        Plotly.react('stats2', [
            { y: Iliopsoas, x: bary, type: 'scatter', name: 'Iliopsoas' },
            { y: TFL, x: bary, type: 'scatter', name: 'TFL' },
            { y: BicepsFemorisLongHead, x: bary, type: 'scatter', name: 'Biceps Femoris Long Head' },
            { y: Semimembranosus, x: bary, type: 'scatter', name: 'Semimembranosus' },
            { y: Semitendinosus, x: bary, type: 'scatter', name: 'Semitendinosus' },
            { y: RectusFemoris, x: bary, type: 'scatter', name: 'Rectus Femoris' },
            { y: Sartorius, x: bary, type: 'scatter', name: 'Sartorius' },
            { y: Gracilis, x: bary, type: 'scatter', name: 'Gracilis' },
            { y: BicepsFemorisShortHead, x: bary, type: 'scatter', name: 'Biceps Femoris Short Head', line: { dash: 'dot' } },
            { y: VastusIntermedius, x: bary, type: 'scatter', name: 'Vastus Intermedius', line: { dash: 'dot' } },
            { y: VastusLateralis, x: bary, type: 'scatter', name: 'Vastus Lateralis', line: { dash: 'dot' } },
            { y: VastusMedialis, x: bary, type: 'scatter', name: 'Vastus Medialis', line: { dash: 'dot' } },
            { y: MedialGastroc, x: bary, type: 'scatter', name: 'Medial Gastroc', line: { dash: 'dot' } },
            { y: LateralGastroc, x: bary, type: 'scatter', name: 'Lateral Gastroc', line: { dash: 'dot' } },
            { y: TibialisAnterior, x: bary, type: 'scatter', name: 'Tibialis Anterior', line: { dash: 'dot' } },
            { y: Soleus, x: bary, type: 'scatter', name: 'Soleus', line: { dash: 'dot' } },
            { y: [-50, 50], x: [bary[position], bary[position]], type: 'scatter', name: 'Current Position' }
        ], {
            title: 'Muscle Lengths (+ve = longer)',
            xaxis: { range: [bary[0], bary[99]], autorange: false, title: 'Bar Height (cm)' },
            yaxis: { range: [-50, 50], autorange: true, showgrid: false, title: '% Change in muscle length' },
            legend: { xanchor: "left", yanchor: "top", y: 1.1, x: 1.15, font: { size: 8 } }
        });
    } else {
        Plotly.purge('stats2');
    }

    // --- PLOT MOMENTS ---
    if (el.checkmoment.checked) {
        Plotly.react('m1', [
            { y: kneemoment, x: bary, type: 'scatter', name: 'Knee Moment' },
            { y: kneemomentb, x: bary, type: 'scatter', name: 'Bar contribution', line: { dash: 'dot' } },
            { y: kneemomenthn, x: bary, type: 'scatter', name: 'H&N contribution', line: { dash: 'dot' } },
            { y: kneemomentt, x: bary, type: 'scatter', name: 'Trunk contribution', line: { dash: 'dot' } },
            { y: kneemomentf, x: bary, type: 'scatter', name: 'Thigh contribution', line: { dash: 'dot' } },
            { y: [-900, 100], x: [bary[position], bary[position]], type: 'scatter', name: 'Current Position' }
        ], {
            title: 'Knee Moment Breakdown',
            xaxis: { range: [bary[0], bary[99]], autorange: false, title: 'Bar Height (cm)' },
            yaxis: { range: [-900, 100], autorange: false, showgrid: false, title: 'Moment (N.m) (+ve = clockwise)' },
            legend: { xanchor: "left", yanchor: "top", y: 1.1, x: 1.15, font: { size: 8 } }
        });

        Plotly.react('m2', [
            { y: hipmoment, x: bary, type: 'scatter', name: 'Hip Moment' },
            { y: hipmomentb, x: bary, type: 'scatter', name: 'Bar contribution', line: { dash: 'dot' } },
            { y: hipmomenthn, x: bary, type: 'scatter', name: 'H&N contribution', line: { dash: 'dot' } },
            { y: hipmomentt, x: bary, type: 'scatter', name: 'Trunk contribution', line: { dash: 'dot' } },
            { y: [-100, 900], x: [bary[position], bary[position]], type: 'scatter', name: 'Current Position' }
        ], {
            title: 'Hip Moment Breakdown',
            xaxis: { range: [bary[0], bary[99]], autorange: false, title: 'Bar Height (cm)' },
            yaxis: { range: [-100, 900], autorange: false, showgrid: false, title: 'Moment (N.m) (+ve = clockwise)' },
            legend: { xanchor: "left", yanchor: "top", y: 1.1, x: 1.15, font: { size: 8 } }
        });
    } else {
        Plotly.purge('m1');
        Plotly.purge('m2');
    }
}

// Lytter på alle input ændringer
document.addEventListener("DOMContentLoaded", () => {
    initElements();

    document.querySelectorAll(".mechanics-model input").forEach(input => {
        input.addEventListener("input", requestUpdate);
        input.addEventListener("change", requestUpdate);
    });

    update();
});