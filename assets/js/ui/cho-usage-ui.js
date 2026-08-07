// assets/js/ui/cho-usage-ui.js
import { getSubstrateUtilization, calculateFuelingStrategy } from '../core/energy-core.js';

export function initChoUsageUI(container, calcId = 'cho-usage-calculator') {
  if (!container) return;

  const pagePath = window.location.pathname.replace(/[^a-zA-Z0-9_-]/g, '_');
  const STORAGE_KEY = `mp_cho_calc_state_v3_${calcId}_${pagePath}`;

  const defaultMode = container.getAttribute('data-default-mode') || 'cycling';
  let currentMode = defaultMode;

  const ZONES = [
    { name: 'Restitution', defaultMin: 60, watt: 100, pctVo2: 45, rer: 0.80 },
    { name: 'Udholdenhed', defaultMin: 0, watt: 180, pctVo2: 60, rer: 0.85 },
    { name: 'Moderat', defaultMin: 0, watt: 230, pctVo2: 75, rer: 0.90 },
    { name: 'Tærskel', defaultMin: 30, watt: 200, pctVo2: 88, rer: 1.00 },
    { name: 'VO2max', defaultMin: 0, watt: 330, pctVo2: 98, rer: 1.00 }
  ];

  // Elements
  const modeBtns = container.querySelectorAll('.js-mode-btn');
  const inputs = container.querySelectorAll('.js-cho-input');
  const fieldKondital = container.querySelector('.js-field-kondital');
  const fieldEfficiency = container.querySelector('.js-field-efficiency');
  const intensityHeader = container.querySelector('.js-col-intensity-header');
  const zoneRowsContainer = container.querySelector('.js-zone-rows');
  const resultsTableBody = container.querySelector('.js-results-table-body');

  // Glykogen Formel Elements
  const eqCapacity = container.querySelector('.js-eq-capacity');
  const eqReserve = container.querySelector('.js-eq-reserve');
  const eqAllowedDepletion = container.querySelector('.js-eq-allowed-depletion');
  const eqTotalBurned = container.querySelector('.js-eq-total-burned');
  const eqAllowedDepletion2 = container.querySelector('.js-eq-allowed-depletion-2');
  const eqRequiredRefuel = container.querySelector('.js-eq-required-refuel');

  // Outputs
  const resGlycogenMsg = container.querySelector('.js-res-glycogen-msg');
  const resIntakeHour = container.querySelector('.js-res-intake-hour');
  const resGlucoseHour = container.querySelector('.js-res-glucose-hour');
  const resFructoseHour = container.querySelector('.js-res-fructose-hour');
  const resRatioLabel = container.querySelector('.js-res-ratio-label');
  const resSummaryText = container.querySelector('.js-res-summary-text');

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  const INFO_TEXTS = {
    cho_info: `
      <h4 style="margin:0 0 0.5rem 0; font-size:0.95rem; font-weight:800; color:#0f172a;">⚡ Glykogen & Sikkerhedstærskel</h4>
      <p style="margin:0 0 0.5rem 0; font-size:0.8rem; color:#475569;"><strong>Sikkerhedstærskel (%):</strong> Den procentdel af dit samlede glykogenlager, du ønsker at have tilbage i muskulaturen som buffer for at undgå at gå helt kold ("bonke").</p>
      <p style="margin:0; font-size:0.775rem; color:#64748b;">En typisk sikkerhedstærskel sættes til 50–60%. Hvis dit kulhydratforbrænding overstiger den tilladte tømning, skal du indtage energi undervejs.</p>
    `
  };

  function openInfoOverlay(btn) {
    const type = btn.getAttribute('data-info-type');
    const overlay = container.querySelector('.js-section-info-overlay');
    const body = container.querySelector('.js-info-overlay-body');
    if (overlay && body) {
      body.innerHTML = INFO_TEXTS[type] || '';
      overlay.style.display = 'flex';
    }
  }

  function renderZoneTable() {
    if (!zoneRowsContainer) return;

    zoneRowsContainer.innerHTML = ZONES.map((z, idx) => `
      <tr>
        <td><strong>${z.name}</strong></td>
        <td>
          <input type="number" min="0" max="600" step="5" class="mp-cho-input js-zone-min" data-idx="${idx}" value="${z.defaultMin}" style="width:100%;">
        </td>
        <td>
          <input type="number" min="0" max="1000" step="5" class="mp-cho-input js-zone-intensity" data-idx="${idx}" value="${currentMode === 'cycling' ? z.watt : z.pctVo2}" style="width:100%;">
        </td>
        <td>
          <input type="number" min="0.70" max="1.10" step="0.01" class="mp-cho-input js-zone-rer" data-idx="${idx}" value="${z.rer}" style="width:100%;">
        </td>
      </tr>
    `).join('');

    container.querySelectorAll('.js-zone-min, .js-zone-intensity, .js-zone-rer').forEach(input => {
      ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
    });
  }

  function setMode(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-mode') === mode);
    });

    if (mode === 'cycling') {
      if (fieldKondital) fieldKondital.style.display = 'none';
      if (fieldEfficiency) fieldEfficiency.style.display = 'block';
      if (intensityHeader) intensityHeader.textContent = 'Intensitet (Watt)';
    } else {
      if (fieldKondital) fieldKondital.style.display = 'block';
      if (fieldEfficiency) fieldEfficiency.style.display = 'none';
      if (intensityHeader) intensityHeader.textContent = 'Intensitet (% VO2max)';
    }

    renderZoneTable();
    calculate();
  }

  function saveState() {
    try {
      const inputsData = {};
      inputs.forEach(i => inputsData[i.getAttribute('data-key')] = i.value);

      const zonesData = [];
      container.querySelectorAll('.js-zone-min').forEach((el, idx) => {
        const min = el.value;
        const intEl = container.querySelector(`.js-zone-intensity[data-idx="${idx}"]`);
        const rerEl = container.querySelector(`.js-zone-rer[data-idx="${idx}"]`);
        zonesData.push({
          min,
          intensity: intEl ? intEl.value : 0,
          rer: rerEl ? rerEl.value : 0.85
        });
      });

      const state = { mode: currentMode, inputsData, zonesData };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.mode) setMode(state.mode);
        if (state.inputsData) {
          Object.keys(state.inputsData).forEach(k => {
            const el = container.querySelector(`[data-key="${k}"]`);
            if (el) el.value = state.inputsData[k];
          });
        }
        if (Array.isArray(state.zonesData)) {
          state.zonesData.forEach((z, idx) => {
            const minEl = container.querySelector(`.js-zone-min[data-idx="${idx}"]`);
            const intEl = container.querySelector(`.js-zone-intensity[data-idx="${idx}"]`);
            const rerEl = container.querySelector(`.js-zone-rer[data-idx="${idx}"]`);
            if (minEl) minEl.value = z.min;
            if (intEl) intEl.value = z.intensity;
            if (rerEl) rerEl.value = z.rer;
          });
        }
      } else {
        setMode(defaultMode);
      }
    } catch (e) {
      setMode(defaultMode);
    }
  }

  function calculate() {
    saveState();

    const weight = parseFloat(container.querySelector('[data-key="weight"]')?.value || 75);
    const glycogenPerKg = parseFloat(container.querySelector('[data-key="glycogen_per_kg"]')?.value || 8);
    const thresholdPct = parseFloat(container.querySelector('[data-key="glycogen_threshold"]')?.value || 60);

    let totalKcal = 0;
    let totalFatGrams = 0;
    let totalChoGrams = 0;
    let totalTimeMin = 0;
    let activeZonesSummary = [];

    let zoneResults = [];

    if (currentMode === 'cycling') {
      const efficiency = parseFloat(container.querySelector('[data-key="efficiency"]')?.value || 23) / 100;

      container.querySelectorAll('.js-zone-min').forEach((el, idx) => {
        const min = parseFloat(el.value) || 0;
        const watt = parseFloat(container.querySelector(`.js-zone-intensity[data-idx="${idx}"]`)?.value || 0);
        const rer = parseFloat(container.querySelector(`.js-zone-rer[data-idx="${idx}"]`)?.value || 0.85);

        let zKcal = 0, zFat = 0, zCho = 0;

        if (min > 0 && watt > 0 && efficiency > 0) {
          totalTimeMin += min;
          const totalJoules = (watt * (min * 60)) / efficiency;
          const metabolicJoulesPerSec = watt / efficiency;
          zKcal = totalJoules / 4184;

          const sub = getSubstrateUtilization(rer);
          zFat = (zKcal * (sub.fatPct / 100)) / 9.4;
          zCho = (zKcal * (sub.choPct / 100)) / 4.1;

          totalKcal += zKcal;
          totalFatGrams += zFat;
          totalChoGrams += zCho;

          activeZonesSummary.push({
            name: ZONES[idx].name,
            min,
            watt,
            metabolicJoulesPerSec,
            rer,
            choGrams: zCho,
            fatGrams: zFat
          });
        }

        zoneResults.push({ name: ZONES[idx].name, min, kcal: zKcal, fat: zFat, cho: zCho });
      });
    } else {
      const kondital = parseFloat(container.querySelector('[data-key="fitness_level"]')?.value || 55);
      const vo2maxLmin = (kondital * weight) / 1000;

      container.querySelectorAll('.js-zone-min').forEach((el, idx) => {
        const min = parseFloat(el.value) || 0;
        const pctVo2 = parseFloat(container.querySelector(`.js-zone-intensity[data-idx="${idx}"]`)?.value || 0) / 100;
        const rer = parseFloat(container.querySelector(`.js-zone-rer[data-idx="${idx}"]`)?.value || 0.85);

        let zKcal = 0, zFat = 0, zCho = 0;

        if (min > 0 && pctVo2 > 0) {
          totalTimeMin += min;
          const vo2Lmin = vo2maxLmin * pctVo2;
          const kcalPerMin = vo2Lmin * (3.815 + 1.232 * rer);
          zKcal = kcalPerMin * min;

          const sub = getSubstrateUtilization(rer);
          zFat = (zKcal * (sub.fatPct / 100)) / 9.3;
          zCho = (zKcal * (sub.choPct / 100)) / 4.1;

          totalKcal += zKcal;
          totalFatGrams += zFat;
          totalChoGrams += zCho;

          activeZonesSummary.push({
            name: ZONES[idx].name,
            min,
            pctVo2: Math.round(pctVo2 * 100),
            vo2Lmin,
            rer,
            choGrams: zCho,
            fatGrams: zFat
          });
        }

        zoneResults.push({ name: ZONES[idx].name, min, kcal: zKcal, fat: zFat, cho: zCho });
      });
    }

    // RENDER ZONE-PR-ZONE RESULTATTABEL
    if (resultsTableBody) {
      let rowsHtml = zoneResults.map(r => `
        <tr>
          <td><strong>${r.name}</strong></td>
          <td style="text-align: right;">${r.min} min</td>
          <td style="text-align: right;">${Math.round(r.kcal)} kcal</td>
          <td style="text-align: right; color: #10b981;">${Math.round(r.fat)} g</td>
          <td style="text-align: right; color: #2563eb; font-weight: 700;">${Math.round(r.cho)} g</td>
        </tr>
      `).join('');

      rowsHtml += `
        <tr class="sum-row">
          <td><strong>I alt</strong></td>
          <td style="text-align: right;"><strong>${totalTimeMin} min</strong></td>
          <td style="text-align: right;"><strong>${Math.round(totalKcal).toLocaleString('da-DK')} kcal</strong></td>
          <td style="text-align: right; color: #059669;"><strong>${Math.round(totalFatGrams)} g</strong></td>
          <td style="text-align: right; color: #1d4ed8;"><strong>${Math.round(totalChoGrams)} g</strong></td>
        </tr>
      `;

      resultsTableBody.innerHTML = rowsHtml;
    }

    // GLYKOGEN BEREGNING & LIGNING-KORT
    const totalCapacityGrams = weight * glycogenPerKg;
    const minReserveGrams = totalCapacityGrams * (thresholdPct / 100);
    const maxAllowedDepletion = Math.max(0, totalCapacityGrams - minReserveGrams);
    const requiredRefueling = Math.max(0, totalChoGrams - maxAllowedDepletion);

    if (eqCapacity) eqCapacity.textContent = `${Math.round(totalCapacityGrams)} g`;
    if (eqReserve) eqReserve.textContent = `${Math.round(minReserveGrams)} g`;
    if (eqAllowedDepletion) eqAllowedDepletion.textContent = `${Math.round(maxAllowedDepletion)} g`;
    if (eqTotalBurned) eqTotalBurned.textContent = `${Math.round(totalChoGrams)} g`;
    if (eqAllowedDepletion2) eqAllowedDepletion2.textContent = `${Math.round(maxAllowedDepletion)} g`;
    if (eqRequiredRefuel) eqRequiredRefuel.textContent = `${Math.round(requiredRefueling)} g`;

    if (resGlycogenMsg) {
      if (requiredRefueling > 0) {
        resGlycogenMsg.innerHTML = `⚠️Dit kulhydratforbrug (<strong>${Math.round(totalChoGrams)}g</strong>) overstiger den tilladte tømning (<strong>${Math.round(maxAllowedDepletion)}g</strong>). Du skal indtage mindst <strong>${Math.round(requiredRefueling)}g kulhydrat</strong> undervejs for at undgå at gå kold.`;
      } else {
        resGlycogenMsg.innerHTML = `✅Dit samlede glykogenlager (<strong>${Math.round(totalCapacityGrams)}g</strong>) kan dække passet uden at overskride din sikkerhedstærskel. Du behøver ikke akut genopfyldning undervejs.`;
      }
    }

    // TIMER-STRATEGI
    const strategy = calculateFuelingStrategy(totalChoGrams, totalTimeMin);
    if (resIntakeHour) resIntakeHour.textContent = `${strategy.targetIntakePerHour} g`;
    if (resGlucoseHour) resGlucoseHour.textContent = `${strategy.glucose} g`;
    if (resFructoseHour) resFructoseHour.textContent = `${strategy.fructose} g`;
    if (resRatioLabel) resRatioLabel.textContent = `Strategi: ${strategy.ratioLabel}`;

    // BYG DYNAMISK FORKLARINGSTEKST
    if (resSummaryText) {
      if (totalTimeMin <= 0) {
        resSummaryText.textContent = 'Indtast tid i mindst én træningszone for at se en fysiologisk opsummering.';
      } else {
        let text = '';
        if (currentMode === 'cycling') {
          const efficiency = parseFloat(container.querySelector('[data-key="efficiency"]')?.value || 23);
          const firstActive = activeZonesSummary[0];

          text = `Når du cykler i alt <strong>${totalTimeMin} minutter</strong> med en mekanisk nyttevirkning på <strong>${efficiency}%</strong>, kræver det et samlet energiforbrug på <strong>${Math.round(totalKcal).toLocaleString('da-DK')} kcal</strong>.`;
          
          if (firstActive) {
            text += ` Ved arbejde i mængdezonen (<em>${firstActive.name}</em>) på <strong>${firstActive.watt}W</strong> udgør den metaboliske effekt <strong>${firstActive.metabolicJoulesPerSec.toFixed(1).replace('.', ',')} J/s</strong>. Ved en R-værdi på <strong>${firstActive.rer.toFixed(2).replace('.', ',')}</strong> forbrændes her kulhydrater med høj hastighed.`;
          }
        } else {
          const kondital = parseFloat(container.querySelector('[data-key="fitness_level"]')?.value || 55);
          const firstActive = activeZonesSummary[0];

          text = `For en person på <strong>${weight} kg</strong> med et kondital på <strong>${kondital} ml/kg/min</strong> (max iltoptagelse: <strong>${((kondital * weight)/1000).toFixed(2).replace('.', ',')} L/min</strong>) udgør passets samlede energiforbrug <strong>${Math.round(totalKcal).toLocaleString('da-DK')} kcal</strong> over <strong>${totalTimeMin} minutter</strong>.`;

          if (firstActive) {
            text += ` Ved intensiteten i <em>${firstActive.name}</em> (<strong>${firstActive.pctVo2}% VO2max</strong>) ligger iltoptagelsen på <strong>${firstActive.vo2Lmin.toFixed(2).replace('.', ',')} L O₂/min</strong> ved en R-værdi på <strong>${firstActive.rer.toFixed(2).replace('.', ',')}</strong>.`;
          }
        }

        resSummaryText.innerHTML = text;
      }
    }
  }

  // Events
  modeBtns.forEach(btn => btn.addEventListener('click', () => setMode(btn.getAttribute('data-mode'))));
  inputs.forEach(i => ['input', 'change', 'keyup'].forEach(ev => i.addEventListener(ev, calculate)));

  container.querySelectorAll('.js-info-btn').forEach(btn => btn.addEventListener('click', () => openInfoOverlay(btn)));
  container.querySelectorAll('.js-info-close').forEach(btn => btn.addEventListener('click', () => {
    const o = container.querySelector('.js-section-info-overlay');
    if (o) o.style.display = 'none';
  }));

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      setMode(defaultMode);
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'kulhydratforbrug-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadState();
  calculate();
}

export const initCalculator = initChoUsageUI;