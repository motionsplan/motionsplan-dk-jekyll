// assets/js/components/aastrand-nomogram.js

export function updateAastrandNomogram(container, { hr = 0, watt = 0, vo2 = 0 }) {
  if (!container) return;

  const line = container.querySelector('.js-nomo-line');
  const point = container.querySelector('.js-nomo-point');
  const status = container.querySelector('.js-nomo-status');

  if (!line || !point) return;

  // HVIS DATA MANGLER ELLER ER UGYLDIG
  if (!hr || hr < 100 || hr > 180 || !watt || watt < 25) {
    line.classList.remove('active');
    point.classList.remove('active');
    if (status) status.textContent = 'Indtast puls & watt for beregning';
    return;
  }

  // SVG Y-koordinater (Top y=30, Bund y=230)
  const Y_TOP = 30;
  const Y_BOTTOM = 230;
  const Y_RANGE = Y_BOTTOM - Y_TOP;

  // 1. Beregn Puls Y-koordinat (120 bpm = y=230, 170 bpm = y=30)
  const hrClamped = Math.min(170, Math.max(120, hr));
  const hrPct = (hrClamped - 120) / (170 - 120);
  const y1 = Y_BOTTOM - (hrPct * Y_RANGE);

  // 2. Beregn Watt Y-koordinat (50W = y=230, 300W = y=30)
  const wattClamped = Math.min(300, Math.max(50, watt));
  const wattPct = (wattClamped - 50) / (300 - 50);
  const y2 = Y_BOTTOM - (wattPct * Y_RANGE);

  // 3. Beregn Lineært Skæringspunkt på Midter-aksen (x = 230)
  const yIntersect = y1 + (y2 - y1) * 0.5;

  // Opdater SVG Streg
  line.setAttribute('x1', '70');
  line.setAttribute('y1', y1.toFixed(1));
  line.setAttribute('x2', '390');
  line.setAttribute('y2', y2.toFixed(1));
  line.classList.add('active');

  // Opdater Skæringspunkt
  point.setAttribute('cx', '230');
  point.setAttribute('cy', yIntersect.toFixed(1));
  point.classList.add('active');

  if (status) {
    status.textContent = vo2 > 0 ? `Aflæst VO₂max: ~${vo2.toFixed(2)} L/min` : 'Aflæser nomogram...';
  }
}