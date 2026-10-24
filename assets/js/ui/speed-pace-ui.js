// assets/js/ui/speed-pace-ui.js
import { SPEED_PACE_FORMULAS } from '../core/speed-pace.js';

function formatTime(totalSecs) {
  if (!totalSecs || isNaN(totalSecs) || totalSecs <= 0) return { val: '-', unit: '' };
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  let s = Math.round(totalSecs % 60);

  let finalM = m;
  let finalH = h;

  if (s === 60) { s = 0; finalM += 1; }
  if (finalM === 60) { finalM = 0; finalH += 1; }

  const sStr = s < 10 ? '0' + s : s;
  const mStr = finalM < 10 ? '0' + finalM : finalM;

  if (finalH > 0) {
    return { val: `${finalH}:${mStr}:${sStr}`, unit: 'timer' };
  }
  return { val: `${finalM}:${sStr}`, unit: 'min' };
}

function formatPace(totalSecsPerKm) {
  if (!totalSecsPerKm || isNaN(totalSecsPerKm) || totalSecsPerKm <= 0) return { val: '-', unit: '' };
  let m = Math.floor(totalSecsPerKm / 60);
  let s = Math.round(totalSecsPerKm % 60);

  if (s === 60) { m += 1; s = 0; }
  return { val: `${m}:${s < 10 ? '0' : ''}${s}`, unit: 'min/km' };
}

export function initSpeedPaceUI(container, calcId = 'speed-pace-all') {
  if (!container) return;

  const STORAGE_KEY = `mp_sp_state_${calcId}`;
  const formulaEngine = SPEED_PACE_FORMULAS['speed-pace-all'];

  // Mode-knapper
  const modeBtns = container.querySelectorAll('.js-sp-mode');
  
  // Subtab knapper (km/t vs pace)
  const speedtypeBtns = container.querySelectorAll('.js-sp-speedtype');
  const inputKmhWrap = container.querySelector('.js-sp-input-kmh-wrap');
  const inputPaceWrap = container.querySelector('.js-sp-input-pace-wrap');

  // DOM Inputgrupper
  const distGroup = container.querySelector('.js-sp-group-distance');
  const timeGroup = container.querySelector('.js-sp-group-time');
  const paceGroup = container.querySelector('.js-sp-group-pace');

  // DOM Inputfelter
  const distInput = container.querySelector('[data-input="distance"]');
  const hrsInput = container.querySelector('[data-input="hours"]');
  const minsInput = container.querySelector('[data-input="minutes"]');
  const secsInput = container.querySelector('[data-input="seconds"]');
  const targetSpeedInput = container.querySelector('[data-input="targetSpeed"]');
  const paceMinInput = container.querySelector('[data-input="paceMin"]');
  const paceSecInput = container.querySelector('[data-input="paceSec"]');

  // DOM Resultatbokse
  const resPrimaryVal = container.querySelector('.js-sp-res-primary-val');
  const resPrimaryUnit = container.querySelector('.js-sp-res-primary-unit');
  const resPrimaryLabel = container.querySelector('.js-sp-res-primary-label');

  const resSecondaryVal = container.querySelector('.js-sp-res-secondary-val');
  const resSecondaryUnit = container.querySelector('.js-sp-res-secondary-unit');
  const resSecondaryLabel = container.querySelector('.js-sp-res-secondary-label');

  const resTertiaryVal = container.querySelector('.js-sp-res-tertiary-val');
  const resTertiaryUnit = container.querySelector('.js-sp-res-tertiary-unit');
  const resTertiaryLabel = container.querySelector('.js-sp-res-tertiary-label');

  // DOM Input/Output (Lyn-omregner)
  const convKmhInput = container.querySelector('.js-sp-conv-kmh');
  const convPaceMinInput = container.querySelector('.js-sp-conv-pacemin');
  const convPaceSecInput = container.querySelector('.js-sp-conv-pacesec');
  const convMsInput = container.querySelector('.js-sp-conv-ms');

  // Action Buttons
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  let currentMode = 'speed';
  let currentSpeedType = 'kmh';

  function saveState() {
    try {
      const state = {
        mode: currentMode,
        speedType: currentSpeedType,
        distance: distInput ? distInput.value : '',
        hours: hrsInput ? hrsInput.value : '',
        minutes: minsInput ? minsInput.value : '',
        seconds: secsInput ? secsInput.value : '',
        targetSpeed: targetSpeedInput ? targetSpeedInput.value : '',
        paceMin: paceMinInput ? paceMinInput.value : '',
        paceSec: paceSecInput ? paceSecInput.value : '',
        convKmh: convKmhInput ? convKmhInput.value : '',
        convPaceMin: convPaceMinInput ? convPaceMinInput.value : '',
        convPaceSec: convPaceSecInput ? convPaceSecInput.value : '',
        convMs: convMsInput ? convMsInput.value : ''
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.mode) currentMode = state.mode;
        if (state.speedType) currentSpeedType = state.speedType;

        if (distInput && state.distance !== undefined) distInput.value = state.distance;
        if (hrsInput && state.hours !== undefined) hrsInput.value = state.hours;
        if (minsInput && state.minutes !== undefined) minsInput.value = state.minutes;
        if (secsInput && state.seconds !== undefined) secsInput.value = state.seconds;
        if (targetSpeedInput && state.targetSpeed !== undefined) targetSpeedInput.value = state.targetSpeed;
        if (paceMinInput && state.paceMin !== undefined) paceMinInput.value = state.paceMin;
        if (paceSecInput && state.paceSec !== undefined) paceSecInput.value = state.paceSec;

        if (convKmhInput && state.convKmh !== undefined) convKmhInput.value = state.convKmh;
        if (convPaceMinInput && state.convPaceMin !== undefined) convPaceMinInput.value = state.convPaceMin;
        if (convPaceSecInput && state.convPaceSec !== undefined) convPaceSecInput.value = state.convPaceSec;
        if (convMsInput && state.convMs !== undefined) convMsInput.value = state.convMs;
      }
    } catch (e) {}
  }

  function updateSpeedTypeUI(type) {
    currentSpeedType = type;
    speedtypeBtns.forEach(btn => {
      if (btn.getAttribute('data-type') === type) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (type === 'kmh') {
      if (inputKmhWrap) inputKmhWrap.style.display = 'block';
      if (inputPaceWrap) inputPaceWrap.style.display = 'none';
    } else {
      if (inputKmhWrap) inputKmhWrap.style.display = 'none';
      if (inputPaceWrap) inputPaceWrap.style.display = 'block';
    }

    calculateSection1();
  }

  function updateModeUI(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
      if (btn.getAttribute('data-mode') === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (mode === 'speed') {
      if (distGroup) distGroup.style.display = 'block';
      if (timeGroup) timeGroup.style.display = 'block';
      if (paceGroup) paceGroup.style.display = 'none';

      if (resPrimaryLabel) resPrimaryLabel.textContent = 'HASTIGHED';
      if (resSecondaryLabel) resSecondaryLabel.textContent = 'PACE';
      if (resTertiaryLabel) resTertiaryLabel.textContent = 'M/S';
    } else if (mode === 'time') {
      if (distGroup) distGroup.style.display = 'block';
      if (timeGroup) timeGroup.style.display = 'none';
      if (paceGroup) paceGroup.style.display = 'block';

      if (resPrimaryLabel) resPrimaryLabel.textContent = 'TID';
      if (resSecondaryLabel) resSecondaryLabel.textContent = 'HASTIGHED';
      if (resTertiaryLabel) resTertiaryLabel.textContent = 'PACE';
    } else if (mode === 'distance') {
      if (distGroup) distGroup.style.display = 'none';
      if (timeGroup) timeGroup.style.display = 'block';
      if (paceGroup) paceGroup.style.display = 'block';

      if (resPrimaryLabel) resPrimaryLabel.textContent = 'DISTANCE';
      if (resSecondaryLabel) resSecondaryLabel.textContent = 'HASTIGHED';
      if (resTertiaryLabel) resTertiaryLabel.textContent = 'PACE';
    }

    calculateSection1();
  }

  function calculateSection1() {
    saveState();

    const params = {
      mode: currentMode,
      distance: distInput ? parseFloat(distInput.value) || 0 : 0,
      hours: hrsInput ? parseFloat(hrsInput.value) || 0 : 0,
      minutes: minsInput ? parseFloat(minsInput.value) || 0 : 0,
      seconds: secsInput ? parseFloat(secsInput.value) || 0 : 0,
      targetSpeed: (currentSpeedType === 'kmh' && targetSpeedInput) ? parseFloat(targetSpeedInput.value) || 0 : 0,
      paceMin: (currentSpeedType === 'pace' && paceMinInput) ? parseFloat(paceMinInput.value) || 0 : 0,
      paceSec: (currentSpeedType === 'pace' && paceSecInput) ? parseFloat(paceSecInput.value) || 0 : 0
    };

    const res = formulaEngine.evaluate(params);

    if (res && res.isValid) {
      if (currentMode === 'speed') {
        if (resPrimaryVal) resPrimaryVal.textContent = res.kmh.toFixed(2);
        if (resPrimaryUnit) resPrimaryUnit.textContent = 'km/t';

        const p = formatPace(res.paceSec);
        if (resSecondaryVal) resSecondaryVal.textContent = p.val;
        if (resSecondaryUnit) resSecondaryUnit.textContent = p.unit;

        if (resTertiaryVal) resTertiaryVal.textContent = res.ms.toFixed(2);
        if (resTertiaryUnit) resTertiaryUnit.textContent = 'm/s';
      } else if (currentMode === 'time') {
        const t = formatTime(res.timeSec);
        if (resPrimaryVal) resPrimaryVal.textContent = t.val;
        if (resPrimaryUnit) resPrimaryUnit.textContent = t.unit;

        if (resSecondaryVal) resSecondaryVal.textContent = res.kmh.toFixed(2);
        if (resSecondaryUnit) resSecondaryUnit.textContent = 'km/t';

        const p = formatPace(res.paceSec);
        if (resTertiaryVal) resTertiaryVal.textContent = p.val;
        if (resTertiaryUnit) resTertiaryUnit.textContent = p.unit;
      } else if (currentMode === 'distance') {
        if (resPrimaryVal) resPrimaryVal.textContent = res.distance.toFixed(2);
        if (resPrimaryUnit) resPrimaryUnit.textContent = 'km';

        if (resSecondaryVal) resSecondaryVal.textContent = res.kmh.toFixed(2);
        if (resSecondaryUnit) resSecondaryUnit.textContent = 'km/t';

        const p = formatPace(res.paceSec);
        if (resTertiaryVal) resTertiaryVal.textContent = p.val;
        if (resTertiaryUnit) resTertiaryUnit.textContent = p.unit;
      }
    } else {
      [resPrimaryVal, resSecondaryVal, resTertiaryVal].forEach(el => { if (el) el.textContent = '-'; });
      [resPrimaryUnit, resSecondaryUnit, resTertiaryUnit].forEach(el => { if (el) el.textContent = ''; });
    }
  }

  // 3-Vejs Synkronisering for Lyn-omregner
  function syncConverter(source) {
    if (source === 'kmh') {
      const kmh = parseFloat(convKmhInput ? convKmhInput.value : 0) || 0;
      if (kmh > 0) {
        const paceSec = formulaEngine.kmhToPaceSec(kmh);
        const m = Math.floor(paceSec / 60);
        const s = Math.round(paceSec % 60);
        if (convPaceMinInput) convPaceMinInput.value = m;
        if (convPaceSecInput) convPaceSecInput.value = s < 10 ? `0${s}` : s;
        if (convMsInput) convMsInput.value = formulaEngine.kmhToMs(kmh).toFixed(2);
      } else {
        if (convPaceMinInput) convPaceMinInput.value = '';
        if (convPaceSecInput) convPaceSecInput.value = '';
        if (convMsInput) convMsInput.value = '';
      }
    } else if (source === 'pace') {
      const pMin = parseFloat(convPaceMinInput ? convPaceMinInput.value : 0) || 0;
      const pSec = parseFloat(convPaceSecInput ? convPaceSecInput.value : 0) || 0;
      const totalPaceSec = (pMin * 60) + pSec;

      if (totalPaceSec > 0) {
        const kmh = formulaEngine.paceSecToKmh(totalPaceSec);
        if (convKmhInput) convKmhInput.value = kmh.toFixed(2);
        if (convMsInput) convMsInput.value = formulaEngine.kmhToMs(kmh).toFixed(2);
      } else {
        if (convKmhInput) convKmhInput.value = '';
        if (convMsInput) convMsInput.value = '';
      }
    } else if (source === 'ms') {
      const ms = parseFloat(convMsInput ? convMsInput.value : 0) || 0;
      if (ms > 0) {
        const kmh = formulaEngine.msToKmh(ms);
        if (convKmhInput) convKmhInput.value = kmh.toFixed(2);
        const paceSec = formulaEngine.kmhToPaceSec(kmh);
        const m = Math.floor(paceSec / 60);
        const s = Math.round(paceSec % 60);
        if (convPaceMinInput) convPaceMinInput.value = m;
        if (convPaceSecInput) convPaceSecInput.value = s < 10 ? `0${s}` : s;
      } else {
        if (convKmhInput) convKmhInput.value = '';
        if (convPaceMinInput) convPaceMinInput.value = '';
        if (convPaceSecInput) convPaceSecInput.value = '';
      }
    }
    saveState();
  }

  // Event Listeners
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => updateModeUI(btn.getAttribute('data-mode')));
  });

  speedtypeBtns.forEach(btn => {
    btn.addEventListener('click', () => updateSpeedTypeUI(btn.getAttribute('data-type')));
  });

  container.querySelectorAll('.js-sp-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(e => input.addEventListener(e, calculateSection1));
  });

  // Listeners for 3-vejs Lyn-omregner
  if (convKmhInput) {
    ['input', 'change'].forEach(e => convKmhInput.addEventListener(e, () => syncConverter('kmh')));
  }
  if (convPaceMinInput || convPaceSecInput) {
    [convPaceMinInput, convPaceSecInput].forEach(el => {
      if (el) ['input', 'change'].forEach(e => el.addEventListener(e, () => syncConverter('pace')));
    });
  }
  if (convMsInput) {
    ['input', 'change'].forEach(e => convMsInput.addEventListener(e, () => syncConverter('ms')));
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('input').forEach(i => i.value = '');
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      updateModeUI('speed');
      updateSpeedTypeUI('kmh');
      syncConverter('kmh');
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'hastighed-pace-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // Opstart
  loadState();
  updateModeUI(currentMode);
  updateSpeedTypeUI(currentSpeedType);
}

export const initCalculator = initSpeedPaceUI;