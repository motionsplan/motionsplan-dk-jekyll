// Caching af DOM-elementer
const el = {};

function initElements() {
    const ids = [
        "footslider", "tibiaslider", "femurslider", "torsoslider", "armslider",
        "ankleflexiontslider", "plateslider", "positionslider",
        "footvalue", "tibiavalue", "femurvalue", "torsovalue", "armvalue",
        "platevalue", "ankleflexionvalue"
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
    var foot = Number(el.footslider.value);
    var tibia = Number(el.tibiaslider.value);
    var femur = Number(el.femurslider.value);
    var torso = Number(el.torsoslider.value);
    var arm = Number(el.armslider.value);
    var ankleflexion = Number(el.ankleflexiontslider.value);
    var position = parseInt(el.positionslider.value, 10);
    var plated = Number(el.plateslider.value);
    var plate = plated / 2.0;

    // Tekstopdateringer
    el.footvalue.textContent = `${foot} cm`;
    el.tibiavalue.textContent = `${tibia} cm`;
    el.femurvalue.textContent = `${femur} cm`;
    el.torsovalue.textContent = `${torso} cm`;
    el.armvalue.textContent = `${arm} cm`;
    el.platevalue.textContent = `${plated} cm`;
    el.ankleflexionvalue.textContent = `${ankleflexion}°`;

    var maxankleflexion = Math.atan((foot / 2) / Math.max(0.001, plate)) * 180 / Math.PI;
    if (ankleflexion > maxankleflexion) {
        ankleflexion = maxankleflexion;
    }
    var anklezero = Math.asin((foot / 2) / (tibia + femur + torso)) * 180 / Math.PI;
    var ankleinc = (ankleflexion - anklezero) / 99;

    var shoulderstart = Math.sqrt(Math.max(0, Math.pow(tibia + femur + torso, 2) - Math.pow(foot / 2, 2)));
    var barinc = (shoulderstart - arm - plate) / 99;
    var shoulderforwardinc = 0.1 * torso / 99;

    var toexy = [foot / 2, 0];
    var heelxy = [-foot / 2, 0];
    var anklexy = [-foot / 4, 0.16 * tibia];

    var anklecurrent = [], kneecurrent = [], kneex = [], kneey = [];
    var hipx = [], hipy = [], shoulderx = [], shouldery = [], handy = [];
    var kneemoment = [], hipmoment = [], summedmoment = [];
    var backangle = [], hipangle = [], kneeangle = [];
    var tlen = [], flen = [];

    // --- ANKLES & KNEES CALCULATIONS ---
    for (var i = 0; i < 100; i++) {
        anklecurrent[i] = anklezero + ankleinc * i * i * i / (99 * 99);

        shoulderx[i] = i * shoulderforwardinc;
        shouldery[i] = shoulderstart - i * barinc;
        handy[i] = shouldery[i] - arm;

        kneex[i] = tibia * Math.sin(anklecurrent[i] * Math.PI / 180) - (foot / 2);
        kneey[i] = tibia * Math.cos(anklecurrent[i] * Math.PI / 180);

        hipy[i] = shouldery[i] + torso;
        var iterCount = 0;
        do {
            hipy[i] -= 0.1;
            var sqTorso = torso * torso - Math.pow(shouldery[i] - hipy[i], 2);
            hipx[i] = shoulderx[i] - Math.sqrt(Math.max(0, sqTorso));
            flen[i] = Math.sqrt(Math.pow(kneex[i] - hipx[i], 2) + Math.pow(hipy[i] - kneey[i], 2));

            iterCount++;
            if (hipy[i] <= 0 || iterCount > 2000) break;
        } while (flen[i].toFixed(0) != femur);

        if (i === 0) {
            hipx[i] = kneex[i] + Math.sin(anklezero * Math.PI / 180) * femur;
            hipy[i] = kneey[i] + Math.cos(anklezero * Math.PI / 180) * femur;
        }

        flen[i] = Math.sqrt(Math.pow(kneex[i] - hipx[i], 2) + Math.pow(hipy[i] - kneey[i], 2));
        tlen[i] = Math.sqrt(Math.pow(hipx[i], 2) + Math.pow(shouldery[i] - hipy[i], 2));

        kneemoment[i] = Math.abs(kneex[i]);
        hipmoment[i] = Math.abs(hipx[i]);
        summedmoment[i] = Math.abs(kneex[i]) + Math.abs(hipx[i]);

        backangle[i] = (180 / Math.PI) * (Math.atan((shouldery[i] - hipy[i]) / (shoulderx[i] - hipx[i])));

        var shoulderkneedistance = Math.sqrt(Math.pow(kneex[i], 2) + Math.pow((shouldery[i] - kneey[i]), 2));
        hipangle[i] = (180 / Math.PI) * (Math.acos((Math.pow(shoulderkneedistance, 2) - Math.pow(femur, 2) - Math.pow(torso, 2)) / (-2 * femur * torso)));

        var hipsankledistance = Math.sqrt(Math.pow(hipy[i], 2) + Math.pow((hipx[i] - anklexy[0]), 2));
        kneeangle[i] = (180 / Math.PI) * (Math.acos((Math.pow(hipsankledistance, 2) - Math.pow(tibia, 2) - Math.pow(femur, 2)) / (-2 * tibia * femur)));
    }

    // --- HEAD & BAR GEOMETRY ---
    var neckx = shoulderx[position] + 10 * Math.cos((Math.PI / 180) * (backangle[position]));
    var necky = shouldery[position] + 10 * Math.sin((Math.PI / 180) * (backangle[position]));
    var centerheadx = shoulderx[position] + 20 * Math.cos((Math.PI / 180) * (backangle[position]));
    var centerheady = shouldery[position] + 20 * Math.sin((Math.PI / 180) * (backangle[position]));

    var steps = 32, radius = 10, headx = [], heady = [];
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
        weightx[j] = radius * Math.cos(a);
        weighty[j] = radius * Math.sin(a) + handy[position];
    }
    weightx[steps] = weightx[0];
    weighty[steps] = weighty[0];

    // --- PLOT 1: DEADLIFT MODEL ---
    Plotly.react('model', [
        { x: headx, y: heady, type: 'scatter', mode: 'lines', line: { color: 'red', width: 2 }, name: '' },
        { x: [anklexy[0], toexy[0], heelxy[0], anklexy[0], kneex[position], hipx[position], neckx, shoulderx[position], 0], y: [anklexy[1], toexy[1], heelxy[1], anklexy[1], kneey[position], hipy[position], necky, shouldery[position], handy[position]], type: 'scatter', mode: 'lines+markers', line: { color: 'red', width: 2 }, name: '' },
        { x: weightx, y: weighty, type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' }
    ], {
        title: 'Deadlift Model',
        xaxis: { range: [-50, 50], autorange: false, fixedrange: true },
        yaxis: { range: [0, 200], autorange: false, fixedrange: true },
        showlegend: false,
        autosize: true
    }, { responsive: true });

    // --- PLOT 2: DEADLIFT STATS ---
    Plotly.react('stats', [
        { y: kneemoment, x: handy, type: 'scatter', name: 'Knee moment', line: { dash: 'dot' } },
        { y: hipmoment, x: handy, type: 'scatter', name: 'Hip moment', line: { dash: 'dot' } },
        { y: summedmoment, x: handy, type: 'scatter', name: 'Summed moment', line: { dash: 'dot' } },
        { y: backangle, x: handy, type: 'scatter', name: 'Back angle', yaxis: 'y2' },
        { y: hipangle, x: handy, type: 'scatter', name: 'Hip angle', yaxis: 'y2' },
        { y: kneeangle, x: handy, type: 'scatter', name: 'Knee angle', yaxis: 'y2' },
        { y: anklecurrent, x: handy, type: 'scatter', name: 'Ankle angle', yaxis: 'y2' },
        { y: [0, 180], x: [handy[position], handy[position]], type: 'scatter', name: 'Current Position', yaxis: 'y2' }
    ], {
        title: 'Deadlift Stats',
        xaxis: { range: [handy[0] + 5, handy[99] - 5], autorange: false, title: 'Bar Height (cm)' },
        yaxis: { range: [0, 100], autorange: false, showgrid: false, zeroline: false, showline: false, showticklabels: false, title: 'Moment' },
        yaxis2: { range: [0, 190], autorange: false, overlaying: 'y', title: 'Angle', side: 'right' },
        legend: { xanchor: "left", yanchor: "top", y: 1.1, x: 1.15, font: { size: 8 } }
    });
}

// Lyt til ændringer automatisk ved DOMReady
document.addEventListener("DOMContentLoaded", () => {
    initElements();

    document.querySelectorAll(".mechanics-model input").forEach(input => {
        input.addEventListener("input", requestUpdate);
        input.addEventListener("change", requestUpdate);
    });

    update();
});