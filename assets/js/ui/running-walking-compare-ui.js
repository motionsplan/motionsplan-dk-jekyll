// assets/js/ui/running-walking-compare-ui.js
import { RUNNING_WALKING_CORE } from '../core/running-walking.js';

export function initRunningWalkingCompareUI(container, calcId = 'running-walking-compare') {
  if (!container) return;

  const STORAGE_KEY = `mp_rw_compare_state_${calcId}`;

  // Inputs
  const weightInput = container.querySelector('[data-input="weight"]');
  const durationInput = container.querySelector('[data-input="duration"]');

  const walkFormulaInput = container.querySelector('[data-input="walk_formula"]');
  const walkSpeedInput = container.querySelector('[data-input="walk_speed"]');

  const runFormulaInput = container.querySelector('[data-input="run_formula"]');
  const runSpeedInput = container.querySelector('[data-input="run_speed"]');

  // MET Info Elements
  const walkMetInfo = container.querySelector('.js-rw-met-info-walk');
  const runMetInfo = container.querySelector('.js-rw-met-info-run');

  // Outputs Gang
  const resWalkTotal = container.querySelector('.js-rw-res-walk-total');
  const resWalkTotalLbl = container.querySelector('.js-rw-res-walk-total-lbl');
  const resWalkKm = container.querySelector('.js-rw-res-walk-km');
  const resWalkMin = container.querySelector('.js-rw-res-walk-min');

  // Outputs Løb
  const resRunTotal = container.querySelector('.js-rw-res-run-total');
  const resRunTotalLbl = container.querySelector('.js-rw-res-run-total-lbl');
  const resRunKm = container.querySelector('.js-rw-res-run-km');
  const resRunMin = container.querySelector('.js-rw-res-run-min');

  // Summary Elements & Dynamic Emoji Elements
  const resSummaryTimeBadge = container.querySelector('.js-rw-res-summary-time-badge');
  const resSummaryTimeDiff = container.querySelector('.js-rw-res-summary-time-diff');
  const emojiRunTime = container.querySelector('.js-rw-ratio-run-emoji-time');

  const resSummaryDistBadge = container.querySelector('.js-rw-res-summary-dist-badge');
  const resSummaryDistDiff = container.querySelector('.js-rw-res-summary-dist-diff');
  const emojiRunDist = container.querySelector('.js-rw-ratio-run-emoji-dist');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  function saveState() {
    try {
      const state = {
        weight: weightInput ? weightInput.value : '',
        duration: durationInput ? durationInput.value : '30',
        walkFormula: walkFormulaInput ? walkFormulaInput.value : 'acsm',
        walkSpeed: walkSpeedInput ? walkSpeedInput.value : '',
        runFormula: runFormulaInput ? runFormulaInput.value : 'acsm',
        runSpeed: runSpeedInput ? runSpeedInput.value : ''
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (weightInput && state.weight !== undefined) weightInput.value = state.weight;
        if (durationInput && state.duration !== undefined) durationInput.value = state.duration;
        if (walkFormulaInput && state.walkFormula) walkFormulaInput.value = state.walkFormula;
        if (walkSpeedInput && state.walkSpeed !== undefined) walkSpeedInput.value = state.walkSpeed;
        if (runFormulaInput && state.runFormula) runFormulaInput.value = state.runFormula;
        if (runSpeedInput && state.runSpeed !== undefined) runSpeedInput.value = state.runSpeed;
      }
    } catch (e) {}
  }

  function calculate() {
    saveState();

    const bw = weightInput ? parseFloat(weightInput.value) || 0 : 0;
    const duration = durationInput ? parseFloat(durationInput.value) || 30 : 30;

    const walkFormula = walkFormulaInput ? walkFormulaInput.value : 'acsm';
    const walkSpeed = walkSpeedInput ? parseFloat(walkSpeedInput.value) || 0 : 0;

    const runFormula = runFormulaInput ? runFormulaInput.value : 'acsm';
    const runSpeed = runSpeedInput ? parseFloat(runSpeedInput.value) || 0 : 0;

    const walkRes = RUNNING_WALKING_CORE.calculateWalking({ formula: walkFormula, bw, speed: walkSpeed, duration });
    const runRes = RUNNING_WALKING_CORE.calculateRunning({ formula: runFormula, bw, speed: runSpeed, duration });

    // Opdater duration-labels
    if (resWalkTotalLbl) resWalkTotalLbl.textContent = `kcal på ${duration} min`;
    if (resRunTotalLbl) resRunTotalLbl.textContent = `kcal på ${duration} min`;

    // MET Info-boks for Gang
    if (walkFormula === 'met' && walkRes.isValid) {
      if (walkMetInfo) {
        walkMetInfo.style.display = 'block';
        walkMetInfo.innerHTML = `
          <strong>💡 MET-værdi: ${walkRes.metVal.toFixed(1)}</strong><br>
          <span style="color: #64748b;">Beregnet ud fra standardtabeller for gang ved ${walkSpeed} km/t.</span>
        `;
      }
    } else if (walkMetInfo) {
      walkMetInfo.style.display = 'none';
    }

    // MET Info-boks for Løb
    if (runFormula === 'met' && runRes.isValid) {
      if (runMetInfo) {
        runMetInfo.style.display = 'block';
        runMetInfo.innerHTML = `
          <strong>💡 MET-værdi: ${runRes.metVal.toFixed(1)}</strong><br>
          <span style="color: #64748b;">Beregnet ud fra standardtabeller for løb ved ${runSpeed} km/t.</span>
        `;
      }
    } else if (runMetInfo) {
      runMetInfo.style.display = 'none';
    }

    // Opdatering af resultater
    if (walkRes.isValid && runRes.isValid) {
      // Gang
      if (resWalkTotal) resWalkTotal.textContent = Math.round(walkRes.totalKcal);
      if (resWalkKm) resWalkKm.textContent = walkRes.kcalKm.toFixed(1);
      if (resWalkMin) resWalkMin.textContent = walkRes.kcalMin.toFixed(1);

      // Løb
      if (resRunTotal) resRunTotal.textContent = Math.round(runRes.totalKcal);
      if (resRunKm) resRunKm.textContent = runRes.kcalKm.toFixed(1);
      if (resRunMin) resRunMin.textContent = runRes.kcalMin.toFixed(1);

      // --- 1. TIDSMÆSSIG SAMMENLIGNING ---
      const timeMultiplier = runRes.totalKcal / walkRes.totalKcal;
      const timeRatioPct = Math.round((timeMultiplier - 1) * 100);
      const timeDiffKcal = Math.round(runRes.totalKcal - walkRes.totalKcal);

      if (resSummaryTimeBadge) {
        resSummaryTimeBadge.textContent = `${timeRatioPct >= 0 ? '+' : ''}${timeRatioPct}%`;
        resSummaryTimeBadge.style.backgroundColor = timeRatioPct >= 0 ? '#2563eb' : '#f97316';
      }
      if (resSummaryTimeDiff) {
        resSummaryTimeDiff.textContent = `(+${timeDiffKcal} kcal på ${duration} min)`;
      }
      // Dynamisk Emoji-størrelse til Tid (fra 1.4rem op til 2.6rem baseret på ratio)
      if (emojiRunTime) {
        const timeSize = Math.min(2.6, Math.max(1.3, 1.2 * timeMultiplier));
        emojiRunTime.style.fontSize = `${timeSize.toFixed(2)}rem`;
      }

      // --- 2. DISTANCEMÆSSIG SAMMENLIGNING ---
      const distMultiplier = runRes.kcalKm / walkRes.kcalKm;
      const distRatioPct = Math.round((distMultiplier - 1) * 100);
      const distDiffKcal = (runRes.kcalKm - walkRes.kcalKm).toFixed(1);

      if (resSummaryDistBadge) {
        resSummaryDistBadge.textContent = `${distRatioPct >= 0 ? '+' : ''}${distRatioPct}%`;
        resSummaryDistBadge.style.backgroundColor = distRatioPct >= 0 ? '#0284c7' : '#10b981';
      }
      if (resSummaryDistDiff) {
        resSummaryDistDiff.textContent = `(+${distDiffKcal} kcal/km)`;
      }
      // Dynamisk Emoji-størrelse til Distance
      if (emojiRunDist) {
        const distSize = Math.min(2.6, Math.max(1.3, 1.2 * distMultiplier));
        emojiRunDist.style.fontSize = `${distSize.toFixed(2)}rem`;
      }

    } else {
      if (resWalkTotal) resWalkTotal.textContent = '-';
      if (resWalkKm) resWalkKm.textContent = '-';
      if (resWalkMin) resWalkMin.textContent = '-';

      if (resRunTotal) resRunTotal.textContent = '-';
      if (resRunKm) resRunKm.textContent = '-';
      if (resRunMin) resRunMin.textContent = '-';

      if (resSummaryTimeBadge) {
        resSummaryTimeBadge.textContent = '-';
        resSummaryTimeBadge.style.backgroundColor = '#94a3b8';
      }
      if (resSummaryTimeDiff) resSummaryTimeDiff.textContent = '-';

      if (resSummaryDistBadge) {
        resSummaryDistBadge.textContent = '-';
        resSummaryDistBadge.style.backgroundColor = '#94a3b8';
      }
      if (resSummaryDistDiff) resSummaryDistDiff.textContent = '-';
    }
  }

  // Event Listeners
  container.querySelectorAll('.js-rw-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(e => input.addEventListener(e, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('input').forEach(i => i.value = '');
      if (durationInput) durationInput.value = '30';
      if (walkFormulaInput) walkFormulaInput.value = 'acsm';
      if (runFormulaInput) runFormulaInput.value = 'acsm';
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'sammenligning-gang-loeb.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // Opstart
  loadState();
  calculate();
}

export const initCalculator = initRunningWalkingCompareUI;