// Math hjælpefunktioner
function segmentlength(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
}

function segmentlength2d(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function anglebetweensegments2d(x1, y1, x2, y2, x3, y3) {
    let dotproduct = (x2 - x1) * (x2 - x3) + (y2 - y1) * (y2 - y3);
    let len1 = segmentlength2d(x1, y1, x2, y2);
    let len2 = segmentlength2d(x2, y2, x3, y3);
    return Math.acos(dotproduct / (len1 * len2));
}

// Cache af DOM-elementer
const el = {};

function initElements() {
    const ids = [
        "upperarmslider", "forearmslider", "shoulderslider", "gripslider",
        "flareslider", "heightslider", "travelslider", "positionslider",
        "upperarmvalue", "forearmvalue", "shouldervalue", "gripvalue",
        "flarevalue", "heightvalue", "travelvalue", "checklock",
        "checkstraight", "checkBridges", "checkKazmaier", "elbow-flare"
    ];
    ids.forEach(id => el[id] = document.getElementById(id));
}

// Frame throttling med requestAnimationFrame
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

// Opdateringsfunktion
function update() {
    let upperarm = Number(el.upperarmslider.value);
    let forearm = Number(el.forearmslider.value);
    let shoulder = Number(el.shoulderslider.value);
    let grip = Number(el.gripslider.value);
    let flareangle = Number(el.flareslider.value);
    let height = Number(el.heightslider.value);
    let travel = Number(el.travelslider.value);
    let position = parseInt(el.positionslider.value, 10);
    let plate = 22.5;

    // Tekstopdateringer
    el.upperarmvalue.textContent = `${upperarm} cm`;
    el.forearmvalue.textContent = `${forearm} cm`;
    el.shouldervalue.textContent = `${shoulder} cm`;
    el.gripvalue.textContent = `${grip} cm`;
    el.flarevalue.textContent = `${flareangle}°`;
    el.heightvalue.textContent = `${height} cm`;
    el.travelvalue.textContent = `${travel} cm`;

    let shoulder2hand = grip / 2 - shoulder / 2;
    let shoulderxyz = [0.0, 50.0, shoulder / 2];
    let armReachSquare = Math.pow(upperarm + forearm, 2) - Math.pow(shoulder2hand, 2);
    let barxyz = [
        0.0,
        shoulderxyz[1] + Math.sqrt(Math.max(0, armReachSquare)) - 0.001,
        grip / 2
    ];

    let startflare = Math.asin(shoulder2hand / (upperarm + forearm));
    let endflare = flareangle * Math.PI / 180.0;

    let elbowx = [], elbowy = [], elbowz = [];
    let barx = [], bary = [];
    let forearmlength = [], upperarmlength = [], positionarray = [];
    let shouldermoment = [], shouldermomentflexion = [], shouldermomenthorizontal = [];
    let elbowmoment = [];

    let heightinc = (barxyz[1] - shoulderxyz[1] - height) / 100.0;
    let travelinc = travel / 100.0;
    let flarelinc = (endflare - startflare) / 100.0;

    for (let i = 0; i < 100; i++) {
        positionarray[i] = i;

        if (el.checkstraight.checked) {
            barx[i] = barxyz[0] + travelinc * i;
            bary[i] = barxyz[1] - heightinc * i;
            flareangle = startflare + flarelinc * i;
        } else if (el.checkBridges.checked) {
            barx[i] = Bridgesx[i] * travel;
            bary[i] = barxyz[1] + (Bridgesy[i] - 1) * (barxyz[1] - shoulderxyz[1] - height);
            flareangle = startflare + flarelinc * i * 2;
            if (i > 49) flareangle = flareangle - flarelinc * (i - 50) * 4;
        } else if (el.checkKazmaier.checked) {
            barx[i] = Kazmaierx[i] * travel;
            bary[i] = barxyz[1] + (Kazmaiery[i] - 1) * (barxyz[1] - shoulderxyz[1] - height);
            flareangle = startflare + flarelinc * i * 2;
            if (i > 49) flareangle = flareangle - flarelinc * (i - 50) * 4;
        }

        if (el.checklock.checked) {
            el["elbow-flare"].style.display = "none";
            let forearmangle = 0.00;
            let count = 0;
            do {
                elbowx[i] = barx[i];
                elbowy[i] = bary[i] - forearm * Math.sin(forearmangle);
                elbowz[i] = barxyz[2] + forearm * Math.cos(forearmangle);
                upperarmlength[i] = segmentlength(shoulderxyz[0], shoulderxyz[1], shoulderxyz[2], elbowx[i], elbowy[i], elbowz[i]);
                forearmangle += 0.01;
                count++;
                if (forearmangle > 3.14 || count > 350) break;
            } while (upperarmlength[i] > upperarm);
        } else {
            el["elbow-flare"].style.display = "block";
            let radius = upperarm;
            let theta = (Math.PI / 2.0) - flareangle;
            let y = bary[i] - shoulderxyz[1];
            let phi = Math.atan2(y, barx[i]);

            let countloops = 0;
            do {
                if (countloops >= 314) break;
                elbowx[i] = radius * Math.sin(theta) * Math.cos(phi);
                elbowy[i] = radius * Math.sin(theta) * Math.sin(phi) + shoulderxyz[1];
                elbowz[i] = radius * Math.cos(theta) + shoulderxyz[2];
                forearmlength[i] = segmentlength(elbowx[i], elbowy[i], elbowz[i], barx[i], bary[i], barxyz[2]);
                phi -= 0.01;
                countloops++;
            } while (forearmlength[i] < forearm);
        }

        shouldermoment[i] = Math.sqrt(Math.pow(shoulderxyz[0] - barx[i], 2) + Math.pow(shoulderxyz[2] - barxyz[2], 2));
        shouldermomenthorizontal[i] = barxyz[2] - shoulderxyz[2];
        shouldermomentflexion[i] = barx[i] - shoulderxyz[0];

        let rawElbowMoment = Math.sqrt(Math.pow(elbowz[i] - barxyz[2], 2) + Math.pow(elbowx[i] - barx[i], 2));
        let angle2d = anglebetweensegments2d(barxyz[2], barx[i], elbowz[i], elbowx[i], shoulderxyz[2], shoulderxyz[0]);
        elbowmoment[i] = rawElbowMoment * Math.sin((Math.PI / 2) - angle2d);
    }

    // --- PLOT 1: SIDE VIEW (#model) ---
    let steps = 32, radius = 10, headx = [], heady = [];
    for (let j = 0; j < steps; ++j) {
        let a = 2 * Math.PI / steps * j;
        headx[j] = radius * Math.cos(a) - 15;
        heady[j] = radius * Math.sin(a) + shoulderxyz[1] + 10;
    }
    headx[steps] = headx[0]; heady[steps] = heady[0];

    radius = plate;
    let weightx = [], weighty = [];
    for (let j = 0; j < steps; ++j) {
        let a = 2 * Math.PI / steps * j;
        weightx[j] = radius * Math.cos(a) + barx[position];
        weighty[j] = radius * Math.sin(a) + bary[position];
    }
    weightx[steps] = weightx[0]; weighty[steps] = weighty[0];

    let benchstartx = -22, benchstarty = 45, benchlength = 122, benchthickness = 5;
    Plotly.react('model', [
        { x: [100, 110, 96, 100, 105, 66, shoulderxyz[0], elbowx[position], barx[position]], y: [5, 0.2, 0.2, 5, 35, shoulderxyz[1], shoulderxyz[1], elbowy[position], bary[position]], type: 'scatter', mode: 'lines+markers', line: { color: 'red', width: 2 }, name: '' },
        { x: barx, y: bary, type: 'scatter', mode: 'lines', line: { color: 'green', width: 2 }, name: '' },
        { x: weightx, y: weighty, type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' },
        { x: [benchstartx, benchstartx + benchlength, benchstartx + benchlength, benchstartx, benchstartx], y: [benchstarty, benchstarty, benchstarty - benchthickness, benchstarty - benchthickness, benchstarty], type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' },
        { x: headx, y: heady, type: 'scatter', mode: 'lines', line: { color: 'red', width: 2 }, name: '' }
    ], {
        title: 'Benchpress From Side',
        xaxis: { range: [-50, 125], autorange: false, fixedrange: true },
        yaxis: { range: [0, 150], autorange: false, fixedrange: true },
        showlegend: false
    });

    // --- PLOT 2: BEHIND VIEW (#model2) ---
    headx = []; heady = []; radius = 10;
    for (let j = 0; j < steps; ++j) {
        let a = 2 * Math.PI / steps * j;
        headx[j] = radius * Math.cos(a);
        heady[j] = radius * Math.sin(a) + shoulderxyz[1] + 10;
    }
    headx[steps] = headx[0]; heady[steps] = heady[0];
    let benchwidth = 30;

    Plotly.react('model2', [
        { x: [-barxyz[2], -elbowz[position], -shoulder / 2, shoulder / 2, elbowz[position], barxyz[2]], y: [bary[position], elbowy[position], shoulderxyz[1], shoulderxyz[1], elbowy[position], bary[position]], type: 'scatter', mode: 'lines', line: { color: 'red', width: 2 }, name: '' },
        { x: [-110, -72, -72, -67, -67, -40.5, -40.5, -40.5, 40.5, 40.5, 40.5, 67, 67, 72, 72, 110, 110, 72, 72, 67, 67, -67, -67, -72, -72, -110, -110], y: [-2.5 + bary[position], -2.5 + bary[position], -plate + bary[position], -plate + bary[position], -1.5 + bary[position], -1.5 + bary[position], 1.5 + bary[position], -1.5 + bary[position], -1.5 + bary[position], 1.5 + bary[position], -1.5 + bary[position], -1.5 + bary[position], -plate + bary[position], -plate + bary[position], -2.5 + bary[position], -2.5 + bary[position], 2.5 + bary[position], 2.5 + bary[position], plate + bary[position], plate + bary[position], 1.5 + bary[position], 1.5 + bary[position], plate + bary[position], plate + bary[position], 2.5 + bary[position], 2.5 + bary[position], -2.5 + bary[position]], type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' },
        { x: headx, y: heady, type: 'scatter', mode: 'lines', line: { color: 'red', width: 2 }, name: '' },
        { x: [-benchwidth / 2, -benchwidth / 2, benchwidth / 2, benchwidth / 2, -benchwidth / 2], y: [benchstarty, benchstarty - benchthickness, benchstarty - benchthickness, benchstarty, benchstarty], type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' }
    ], {
        title: 'Benchpress From Behind',
        xaxis: { range: [-90, 90], autorange: false, fixedrange: true },
        yaxis: { range: [0, 150], autorange: false, fixedrange: true },
        showlegend: false
    });

    // --- PLOT 3: TOP VIEW (#model3) ---
    headx = []; heady = []; radius = 10;
    for (let j = 0; j < steps; ++j) {
        let a = 2 * Math.PI / steps * j;
        headx[j] = radius * Math.cos(a);
        heady[j] = radius * Math.sin(a) - 15;
    }
    headx[steps] = headx[0]; heady[steps] = heady[0];

    Plotly.react('model3', [
        { x: [-barxyz[2], -elbowz[position], -shoulder / 2, shoulder / 2, elbowz[position], barxyz[2]], y: [barx[position], elbowx[position], shoulderxyz[0], shoulderxyz[0], elbowx[position], barx[position]], type: 'scatter', mode: 'lines', line: { color: 'red', width: 2 }, name: '' },
        { x: [-110, -72, -72, -67, -67, -40.5, -40.5, -40.5, 40.5, 40.5, 40.5, 67, 67, 72, 72, 110, 110, 72, 72, 67, 67, -67, -67, -72, -72, -110, -110], y: [-2.5 + barx[position], -2.5 + barx[position], -plate + barx[position], -plate + barx[position], -1.5 + barx[position], -1.5 + barx[position], 1.5 + barx[position], -1.5 + barx[position], -1.5 + barx[position], 1.5 + barx[position], -1.5 + barx[position], -1.5 + barx[position], -plate + barx[position], -plate + barx[position], -2.5 + barx[position], -2.5 + barx[position], 2.5 + barx[position], 2.5 + barx[position], plate + barx[position], plate + barx[position], 1.5 + barx[position], 1.5 + barx[position], plate + barx[position], plate + barx[position], 2.5 + barx[position], 2.5 + barx[position], -2.5 + barx[position]], type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' },
        { x: [-benchwidth / 2, -benchwidth / 2, benchwidth / 2, benchwidth / 2, -benchwidth / 2], y: [benchstartx, benchstartx + benchlength, benchstartx + benchlength, benchstartx, benchstartx], type: 'scatter', mode: 'lines', line: { color: 'blue', width: 2 }, name: '' },
        { x: headx, y: heady, type: 'scatter', mode: 'lines', line: { color: 'red', width: 2 }, name: '' }
    ], {
        title: 'Benchpress From Above',
        xaxis: { range: [-90, 90], autorange: false, fixedrange: true },
        yaxis: { range: [-50, 125], autorange: false, fixedrange: true },
        showlegend: false
    });

    // --- PLOT 4: STATS GRAPH (#stats) ---
    let dataStats = [];
    if (el.checkstraight.checked) {
        dataStats = [
            { y: shouldermoment, x: bary, type: 'scatter', name: 'Shoulder total moment', line: { dash: 'dot' } },
            { y: shouldermomenthorizontal, x: bary, type: 'scatter', name: 'Shoulder moment horizontal', line: { dash: 'dot' } },
            { y: shouldermomentflexion, x: bary, type: 'scatter', name: 'Shoulder moment flexion', line: { dash: 'dot' } },
            { y: elbowmoment, x: bary, type: 'scatter', name: 'Elbow moment', line: { dash: 'dot' } },
            { y: [-50, 50], x: [bary[position], bary[position]], type: 'scatter', name: 'Current Position' }
        ];
    } else {
        dataStats = [
            { y: shouldermoment.slice(0, 50), x: bary.slice(0, 50), type: 'scatter', name: 'Shoulder total moment descending', line: { dash: 'dot' } },
            { y: shouldermoment.slice(50, 100), x: bary.slice(50, 100), type: 'scatter', name: 'Shoulder total moment ascending', line: { dash: 'dot' } },
            { y: shouldermomenthorizontal, x: bary, type: 'scatter', name: 'Shoulder moment horizontal', line: { dash: 'dot' } },
            { y: shouldermomentflexion.slice(0, 50), x: bary.slice(0, 50), type: 'scatter', name: 'Shoulder moment flexion descending', line: { dash: 'dot' } },
            { y: shouldermomentflexion.slice(50, 100), x: bary.slice(50, 100), type: 'scatter', name: 'Shoulder moment flexion ascending', line: { dash: 'dot' } },
            { y: elbowmoment.slice(0, 50), x: bary.slice(0, 50), type: 'scatter', name: 'Elbow moment descending', line: { dash: 'dot' } },
            { y: elbowmoment.slice(50, 100), x: bary.slice(50, 100), type: 'scatter', name: 'Elbow moment ascending', line: { dash: 'dot' } },
            { y: [-50, 50], x: [bary[position], bary[position]], type: 'scatter', name: 'Current Position' }
        ];
    }

    Plotly.react('stats', dataStats, {
        xaxis: { range: [Math.min(...bary), Math.max(...bary)], autorange: false, title: 'Bar Height (cm)' },
        yaxis: { range: [-15, 35], autorange: false, showgrid: false, zeroline: true, showline: false, showticklabels: false, title: 'Moment' },
        legend: { xanchor: "left", yanchor: "top", y: 1.1, x: 0.7, font: { size: 12 } }
    });
}

// Lyt til ændringer automatisk
document.addEventListener("DOMContentLoaded", () => {
    initElements();

    document.querySelectorAll(".mechanics-model input").forEach(input => {
        input.addEventListener("input", requestUpdate);
        input.addEventListener("change", requestUpdate);
    });

    update();
});