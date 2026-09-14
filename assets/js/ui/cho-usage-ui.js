import { getSubstrateUtilization } from '../core/energy-core.js';

export function initChoUsageUI(container, calcId = 'cho-usage-calculator') {
  if (!container) return;

  const pagePath = window.location.pathname.replace(/[^a-zA-Z0-9_-]/g, '_');
  const STORAGE_KEY = `mp_cho_calc_state_v11_${calcId}_${pagePath}`;

  const defaultMode = container.getAttribute('data-default-mode') || 'cycling';
  let currentMode = defaultMode;
  let selectedMaxCap = 60; // Standard motionist-loft

  const ZONES = [
    { name: 'Restitution', defaultMin: 0, wattPct: 55, pctVo2: 45, rer: 0.80 },
    { name: 'Udholdenhed', defaultMin: 0, wattPct: 70, pctVo2: 60, rer: 0.85 },
    { name: 'Moderat', defaultMin: 0, wattPct: 85, pctVo2: 75, rer: 0.90 },
    { name: 'Tærskel', defaultMin: 0, wattPct: 100, pctVo2: 88, rer: 0.98 },
    { name: 'VO2max', defaultMin: 0, wattPct: 115, pctVo2: 98, rer: 1.00 }
  ];

  const PRESETS_RUN = [
    { id: 'custom', name: '-- Brugerdefineret --' },
    { id: 'run_5k', name: '🏃‍♂️ 5 km Løb (22 min)', defaultTime: 22, splits: [0, 0, 10, 90, 0], rer: [0.80, 0.85, 0.90, 0.98, 1.00] },
    { id: 'run_10k', name: '🏃‍♂️ 10 km Løb (45 min)', defaultTime: 45, splits: [0, 0, 20, 80, 0], rer: [0.80, 0.85, 0.91, 0.98, 1.00] },
    { id: 'run_half', name: '🏃‍♂️ Halvmaraton (1t 45m)', defaultTime: 105, splits: [0, 15, 55, 30, 0], rer: [0.80, 0.85, 0.91, 0.96, 1.00] },
    { id: 'run_marathon', name: '🏃‍♂️ Maraton (3t 30m)', defaultTime: 210, splits: [0, 55, 45, 0, 0], rer: [0.80, 0.86, 0.91, 0.96, 1.00] }
  ];

  const PRESETS_BIKE = [
    { id: 'custom', name: '-- Brugerdefineret --' },
    { id: 'bike_50k', name: '🚴‍♂️ 50 km Cykling (1t 30m)', defaultTime: 90, splits: [10, 60, 30, 0, 0], rer: [0.80, 0.86, 0.92, 0.97, 1.00] },
    { id: 'bike_100k', name: '🚴‍♂️ 100 km Cykling (3t 00m)', defaultTime: 180, splits: [10, 65, 25, 0, 0], rer: [0.80, 0.86, 0.91, 0.97, 1.00] },
    { id: 'bike_150k', name: '🚴‍♂️ 150 km Cykling (4t 30m)', defaultTime: 270, splits: [15, 65, 20, 0, 0], rer: [0.80, 0.85, 0.90, 0.97, 1.00] }
  ];

  // DOM Elements
  const modeBtns = container.querySelectorAll('.js-mode-btn');
  const levelBtns = container.querySelectorAll('.js-level-btn');
  const inputs = container.querySelectorAll('.js-cho-input');
  const presetSelect = container.querySelector('.js-preset-select');
  const totalTimeInput = container.querySelector('.js-total-time-input');
  const toggleZonesBtn = container.querySelector('.js-toggle-zones-btn');
  const zonesWrapper = container.querySelector('.js-zones-wrapper');
  const preRaceGelCheckbox = container.querySelector('.js-prerace-gel-checkbox');

  const fieldKondital = container.querySelector('.js-field-kondital');
  const fieldEfficiency = container.querySelector('.js-field-efficiency');
  const fieldFtp = container.querySelector('.js-field-ftp');
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
  
  // Gel Timeline Outputs
  const totalGelsBadge = container.querySelector('.js-total-gels-badge');
  const gelTimelineContainer = container.querySelector('.js-gel-timeline');

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  function setLevelCap(capVal) {
    selectedMaxCap = capVal;
    levelBtns.forEach(btn => {
      const isCurrent = parseFloat(btn.getAttribute('data-max')) === capVal;
      btn.classList.toggle('is-active', isCurrent);
    });
  }

  function updatePresetDropdown() {
    if (!presetSelect) return;
    const presets = currentMode === 'cycling' ? PRESETS_BIKE : PRESETS_RUN;
    presetSelect.innerHTML = presets.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  }

  function renderZoneTable() {
    if (!zoneRowsContainer) return;
    const ftp = parseFloat(container.querySelector('[data-key="ftp_watt"]')?.value || 250);

    zoneRowsContainer.innerHTML = ZONES.map((z, idx) => {
      const calcWatt = Math.round(ftp * (z.wattPct / 100));
      return `
        <tr>
          <td><strong>${z.name}</strong></td>
          <td>
            <input type="number" min="0" max="600" step="5" class="mp-cho-input js-zone-min" data-idx="${idx}" value="${z.defaultMin}" style="width:100%;">
          </td>
          <td>
            <input type="number" min="0" max="1000" step="5" class="mp-cho-input js-zone-intensity" data-idx="${idx}" value="${currentMode === 'cycling' ? calcWatt : z.pctVo2}" style="width:100%;">
          </td>
          <td>
            <input type="number" min="0.70" max="1.10" step="0.01" class="mp-cho-input js-zone-rer" data-idx="${idx}" value="${z.rer}" style="width:100%;">
          </td>
        </tr>
      `;
    }).join('');

    container.querySelectorAll('.js-zone-min, .js-zone-intensity, .js-zone-rer').forEach(input => {
      ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, () => {
        if (presetSelect) presetSelect.value = 'custom';
        calculate();
      }));
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
      if (fieldFtp) fieldFtp.style.display = 'block';
      if (intensityHeader) intensityHeader.textContent = 'Intensitet (Watt)';
    } else {
      if (fieldKondital) fieldKondital.style.display = 'block';
      if (fieldEfficiency) fieldEfficiency.style.display = 'none';
      if (fieldFtp) fieldFtp.style.display = 'none';
      if (intensityHeader) intensityHeader.textContent = 'Intensitet (% VO2max)';
    }

    updatePresetDropdown();
    renderZoneTable();
    calculate();
  }

  function applyPreset(presetId) {
    const presets = currentMode === 'cycling' ? PRESETS_BIKE : PRESETS_RUN;
    const p = presets.find(item => item.id === presetId);
    if (!p || p.id === 'custom') return;

    if (totalTimeInput) totalTimeInput.value = p.defaultTime;

    const totalTime = p.defaultTime;
    p.splits.forEach((pct, idx) => {
      const minEl = container.querySelector(`.js-zone-min[data-idx="${idx}"]`);
      const rerEl = container.querySelector(`.js-zone-rer[data-idx="${idx}"]`);
      if (minEl) minEl.value = Math.round((pct / 100) * totalTime);
      if (rerEl) rerEl.value = p.rer[idx];
    });

    calculate();
  }

  function applyTimeChange() {
    if (!presetSelect || presetSelect.value === 'custom') return;
    const totalTime = parseFloat(totalTimeInput.value) || 60;
    const presets = currentMode === 'cycling' ? PRESETS_BIKE : PRESETS_RUN;
    const p = presets.find(item => item.id === presetSelect.value);
    if (!p) return;

    p.splits.forEach((pct, idx) => {
      const minEl = container.querySelector(`.js-zone-min[data-idx="${idx}"]`);
      if (minEl) minEl.value = Math.round((pct / 100) * totalTime);
    });

    calculate();
  }

  function saveState() {
    try {
      const inputsData = {};
      inputs.forEach(i => {
        const key = i.getAttribute('data-key');
        if (key) inputsData[key] = i.value;
      });

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

      const state = {
        mode: currentMode,
        preset: presetSelect ? presetSelect.value : 'custom',
        selectedMaxCap,
        preRaceGel: preRaceGelCheckbox ? preRaceGelCheckbox.checked : false,
        totalTime: totalTimeInput ? totalTimeInput.value : 180,
        inputsData,
        zonesData
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setMode(defaultMode);
        return;
      }

      const state = JSON.parse(saved);
      if (state.mode) currentMode = state.mode;
      if (state.selectedMaxCap) setLevelCap(state.selectedMaxCap);

      setMode(currentMode);

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

      if (state.preset && presetSelect) presetSelect.value = state.preset;
      if (state.totalTime && totalTimeInput) totalTimeInput.value = state.totalTime;
      if (preRaceGelCheckbox) preRaceGelCheckbox.checked = !!state.preRaceGel;

    } catch (e) {
      setMode(defaultMode);
    }
  }

  // FYSIOLOGISK OPPDATERET GEL-TIDSLINJE ALGORITME
  function renderGelTimeline(totalTimeMin, targetIntakePerHour, gelChoGrams) {
    if (!gelTimelineContainer) return;

    if (totalTimeMin < 45 || targetIntakePerHour <= 0) {
      if (totalGelsBadge) totalGelsBadge.textContent = '0 Gels';
      gelTimelineContainer.innerHTML = `
        <div class="mp-gel-step">
          <span class="mp-gel-time-badge" style="background:#64748b;">0–${totalTimeMin} min</span>
          <span>Dette pas kræver ikke supplerende gels. Glykogenlagre og vand er tilstrækkeligt.</span>
        </div>
      `;
      return;
    }

    const includePreRace = preRaceGelCheckbox ? preRaceGelCheckbox.checked : false;
    const cutoffTime = totalTimeMin - 20; // Blackout 20 min før mål

    // Samlet teoretisk gel-behov
    const totalChoNeeded = Math.round((totalTimeMin / 60) * targetIntakePerHour);
    let rawGelsNeeded = Math.ceil(totalChoNeeded / gelChoGrams);

    // KORTE PAS (45–60 min): Max 1 gel i alt!
    if (totalTimeMin <= 60) {
      rawGelsNeeded = 1;
    }

    let inRaceGels = rawGelsNeeded;

    // Modregn Pre-Race Gel hvis den er slået til
    if (includePreRace) {
      inRaceGels = Math.max(0, rawGelsNeeded - 1);
    }

    // Begræns in-race gels så der altid er min. 20 min imellem dem
    const maxPossibleInRaceGels = Math.max(1, Math.floor(cutoffTime / 20));
    inRaceGels = Math.min(inRaceGels, maxPossibleInRaceGels);

    const totalGelsPlanned = (includePreRace ? 1 : 0) + inRaceGels;
    const totalGelsCho = totalGelsPlanned * gelChoGrams;

    if (totalGelsBadge) totalGelsBadge.textContent = `${totalGelsPlanned} Gel${totalGelsPlanned === 1 ? '' : 's'} (${totalGelsCho}g CHO)`;

    let timelineHtml = '';
    let gelNumber = 0;

    if (includePreRace) {
      gelNumber++;
      timelineHtml += `
        <div class="mp-gel-step">
          <span class="mp-gel-time-badge" style="background:#2563eb;">Start -15 min</span>
          <span>Gel #${gelNumber} (${gelChoGrams}g CHO) med 200 ml vand før start.</span>
        </div>
      `;
    }

    if (inRaceGels > 0) {
      for (let i = 1; i <= inRaceGels; i++) {
        gelNumber++;
        let stepMin = 0;

        if (!includePreRace) {
          stepMin = Math.round(totalTimeMin * (i / (inRaceGels + 1)));
        } else {
          stepMin = Math.round(cutoffTime * (i / inRaceGels));
        }

        if (stepMin > cutoffTime) stepMin = cutoffTime;
        if (stepMin < 15) stepMin = 15;

        timelineHtml += `
          <div class="mp-gel-step">
            <span class="mp-gel-time-badge">${stepMin} min</span>
            <span>Gel #${gelNumber} (${gelChoGrams}g CHO) + 150–200 ml væske.</span>
          </div>
        `;
      }
    } else if (includePreRace && totalTimeMin <= 60) {
      timelineHtml += `
        <div class="mp-gel-step" style="background:#f0fdf4; border-color:#bbf7d0;">
          <span class="mp-gel-time-badge" style="background:#16a34a;">0–${totalTimeMin} min</span>
          <span>Start-gelen dækker hele passet. Ingen yderligere gels undervejs.</span>
        </div>
      `;
    }

    timelineHtml += `
      <div class="mp-gel-step" style="background:#f8fafc; border-color:#e2e8f0;">
        <span class="mp-gel-time-badge" style="background:#475569;">Sidste 20 min</span>
        <span>Stop med gels. Tarmen skal bruge ~15–20 min på optagelse.</span>
      </div>
    `;

    gelTimelineContainer.innerHTML = timelineHtml;
  }

  function calculate() {
    const weight = parseFloat(container.querySelector('[data-key="weight"]')?.value || 75);
    const glycogenPerKg = parseFloat(container.querySelector('[data-key="glycogen_per_kg"]')?.value || 8);
    const gelChoGrams = parseFloat(container.querySelector('[data-key="gel_cho_grams"]')?.value || 25);

    let totalKcal = 0;
    let totalFatGrams = 0;
    let totalChoGrams = 0;
    let totalTimeMin = 0;
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
          zKcal = totalJoules / 4184;

          const sub = getSubstrateUtilization(rer);
          zFat = (zKcal * (sub.fatPct / 100)) / 9.4;
          zCho = (zKcal * (sub.choPct / 100)) / 4.1;

          totalKcal += zKcal;
          totalFatGrams += zFat;
          totalChoGrams += zCho;
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
        }

        zoneResults.push({ name: ZONES[idx].name, min, kcal: zKcal, fat: zFat, cho: zCho });
      });
    }

    // RENDER ZONE RESULTATTABEL
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

    // GLYKOGEN BEREGNING
    const thresholdPct = 60;
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
        resGlycogenMsg.innerHTML = `✅Dit samlede glykogenlager (<strong>${Math.round(totalCapacityGrams)}g</strong>) kan dække passet uden at overskride din sikkerhedstærskel. Du behøver ikke akut genopfyldning ud fra et overlevelses-synspunkt.`;
      }
    }

    // DYNAMISK TIME-RATE LOGIK
    let targetIntakePerHour = 0;
    const hours = totalTimeMin / 60;
    const burnRatePerHour = hours > 0 ? (totalChoGrams / hours) : 0;

    if (totalTimeMin < 45) {
      targetIntakePerHour = 0;
    } else if (totalTimeMin <= 60) {
      // 45–60 min: Max 30 g/t
      targetIntakePerHour = Math.min(selectedMaxCap, 30);
    } else {
      targetIntakePerHour = Math.min(selectedMaxCap, Math.round(burnRatePerHour * 0.75));
      if (targetIntakePerHour < 30) targetIntakePerHour = 30;
    }

    // BEREGN GLUKOSE : FRUKTOSE FORHOLD
    let glucose = 0;
    let fructose = 0;
    let ratioLabel = "Ingen behov";

    if (targetIntakePerHour > 0) {
      if (targetIntakePerHour <= 60) {
        glucose = targetIntakePerHour;
        fructose = 0;
        ratioLabel = "Ren Glukose / Maltodextrin";
      } else if (targetIntakePerHour <= 90) {
        glucose = Math.round(targetIntakePerHour * (2 / 3));
        fructose = targetIntakePerHour - glucose;
        ratioLabel = "2 : 1 (Glukose : Fruktose)";
      } else {
        glucose = Math.round(targetIntakePerHour * (1 / 1.8));
        fructose = targetIntakePerHour - glucose;
        ratioLabel = "1 : 0.8 (Glukose : Fruktose - Kræver Tarmtræning!)";
      }
    }

    if (resIntakeHour) resIntakeHour.textContent = `${targetIntakePerHour} g`;
    if (resGlucoseHour) resGlucoseHour.textContent = `${glucose} g`;
    if (resFructoseHour) resFructoseHour.textContent = `${fructose} g`;
    if (resRatioLabel) resRatioLabel.textContent = `Strategi: ${ratioLabel}`;

    renderGelTimeline(totalTimeMin, targetIntakePerHour, gelChoGrams);
    saveState();
  }

  // Event Listeners
  modeBtns.forEach(btn => btn.addEventListener('click', () => setMode(btn.getAttribute('data-mode'))));
  inputs.forEach(i => ['input', 'change', 'keyup'].forEach(ev => i.addEventListener(ev, calculate)));

  levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cap = parseFloat(btn.getAttribute('data-max')) || 60;
      setLevelCap(cap);
      calculate();
    });
  });

  if (presetSelect) {
    presetSelect.addEventListener('change', (e) => applyPreset(e.target.value));
  }

  if (totalTimeInput) {
    ['input', 'change'].forEach(ev => totalTimeInput.addEventListener(ev, applyTimeChange));
  }

  if (preRaceGelCheckbox) {
    preRaceGelCheckbox.addEventListener('change', calculate);
  }

  if (toggleZonesBtn && zonesWrapper) {
    toggleZonesBtn.addEventListener('click', () => {
      const isHidden = zonesWrapper.style.display === 'none';
      zonesWrapper.style.display = isHidden ? 'block' : 'none';
      toggleZonesBtn.textContent = isHidden ? '⚙️ Skjul Avancerede Zone-indstillinger' : '⚙️ Vis / Tilpas Avancerede Zone-indstillinger';
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      setLevelCap(60);
      setMode(defaultMode);
    });
  }

  loadState();
  calculate();
}

export const initCalculator = initChoUsageUI;