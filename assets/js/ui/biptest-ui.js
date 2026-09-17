// assets/js/ui/biptest-ui.js
import { calculateBipTest, BIPTEST_FORMULAS } from '../core/biptest.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

// Enkel og direkte mapping
const FORMULA_STORAGE_MAP = {
  'leger': 'biptest',
  'yye1': 'yoyo_e1',
  'yye2': 'yoyo_e2'
};

export function initBipTest(container) {
  if (!container) return;

  const levelInput = container.querySelector('[name="bip_level"]');
  const shuttlesInput = container.querySelector('[name="bip_shuttles"]');
  const ageInput = container.querySelector('[name="bip_age"]');
  const weightInput = container.querySelector('[name="bip_weight"]');

  const saveBtn = container.querySelector('.js-bip-save-btn') || container.querySelector('.js-save-btn');
  const saveStatus = container.querySelector('.js-bip-save-status');

  const levelRangeLabel = container.querySelector('.js-bip-level-range-label');
  const shuttleMaxLabel = container.querySelector('.js-bip-shuttle-max-label');

  const progressCard = container.querySelector('.js-bip-progress-card');
  const levelText = container.querySelector('.js-bip-current-level-text');
  const shuttleProgressText = container.querySelector('.js-bip-shuttle-progress-text');
  const shuttleProgressBar = container.querySelector('.js-bip-shuttle-progress-bar');
  const distProgressText = container.querySelector('.js-bip-distance-progress-text');
  const distProgressBar = container.querySelector('.js-bip-distance-progress-bar');
  const totalShuttlesProgressText = container.querySelector('.js-bip-total-shuttles-progress-text');
  const totalShuttlesProgressBar = container.querySelector('.js-bip-total-shuttles-progress-bar');

  const resFitness = container.querySelector('.js-bip-fitness');
  const resSdText = container.querySelector('.js-bip-sd-text');
  const resEvalBadge = container.querySelector('.js-bip-eval-badge');
  const resVo2Max = container.querySelector('.js-bip-vo2max');
  const marker = container.querySelector('.js-bip-continuum-marker');

  const tableBtn = container.querySelector('.js-bip-table-btn');
  const popup = container.querySelector('.js-bip-popup');
  const popupClose = container.querySelector('.js-bip-popup-close');
  const tableBody = container.querySelector('.js-bip-table-body');

  function getSelectedFormulaKey() {
    const formulaEl = container.querySelector('input[name="bip_formula"]:checked');
    return formulaEl ? formulaEl.value : 'bip';
  }

  function getActiveStorageKey() {
    const formulaKey = getSelectedFormulaKey();
    return FORMULA_STORAGE_MAP[formulaKey] || 'biptest';
  }

  // Visual animation på gem-knappen
  function animateSaveButton() {
    if (!saveBtn) return;
    
    const originalText = saveBtn.innerHTML;
    saveBtn.style.transition = 'all 0.2s ease';
    saveBtn.style.transform = 'scale(0.96)';
    saveBtn.style.background = '#16a34a';
    saveBtn.style.color = '#ffffff';
    saveBtn.innerHTML = '✓ Gemt!';

    setTimeout(() => {
      saveBtn.style.transform = 'scale(1)';
    }, 150);

    setTimeout(() => {
      saveBtn.style.background = '';
      saveBtn.style.color = '';
      saveBtn.style.transform = '';
      saveBtn.innerHTML = originalText;
    }, 1800);
  }

  function loadInitialData() {
    const profile = StorageAdapter.getProfile();
    const activeKey = getActiveStorageKey();
    const draft = StorageAdapter.loadDraft(activeKey);

    if (draft) {
      if (draft.level && levelInput) levelInput.value = draft.level;
      if (draft.shuttles && shuttlesInput) shuttlesInput.value = draft.shuttles;
      if (draft.age && ageInput) ageInput.value = draft.age;
      if (draft.weight && weightInput) weightInput.value = draft.weight;
      if (draft.gender) {
        const radio = container.querySelector(`input[name="bip_gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }
    } else {
      if (levelInput) levelInput.value = '';
      if (shuttlesInput) shuttlesInput.value = '';
      if (ageInput && profile.age) ageInput.value = profile.age;
      if (weightInput && profile.weight) weightInput.value = profile.weight;
      if (profile.gender) {
        const radio = container.querySelector(`input[name="bip_gender"][value="${profile.gender}"]`);
        if (radio) radio.checked = true;
      }
    }
  }

  function saveDraftAndProfile() {
    const genderEl = container.querySelector('input[name="bip_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const age = parseInt(ageInput ? ageInput.value : '0', 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');
    const activeKey = getActiveStorageKey();

    if (age > 0 || weight > 0) {
      StorageAdapter.saveProfile({
        ...(age > 0 && { age }),
        ...(weight > 0 && { weight }),
        gender
      });
    }

    StorageAdapter.saveDraft(activeKey, {
      formula: getSelectedFormulaKey(),
      level: levelInput ? levelInput.value : '',
      shuttles: shuttlesInput ? shuttlesInput.value : '',
      age: ageInput ? ageInput.value : '',
      weight: weightInput ? weightInput.value : '',
      gender
    });
  }

  function updateLimitsAndLabels() {
    const chosenFormulaKey = getSelectedFormulaKey();
    const formula = BIPTEST_FORMULAS[chosenFormulaKey] || BIPTEST_FORMULAS.bip;

    if (levelInput) {
      levelInput.min = formula.minLevel;
      levelInput.max = formula.maxLevel;
    }
    
    if (levelRangeLabel) {
      levelRangeLabel.textContent = `(${formula.minLevel}-${formula.maxLevel})`;
    }

    const currentLevel = parseInt(levelInput ? levelInput.value : '', 10);
    let displayLevel = isNaN(currentLevel) ? formula.minLevel : currentLevel;
    if (displayLevel < formula.minLevel) displayLevel = formula.minLevel;
    if (displayLevel > formula.maxLevel) displayLevel = formula.maxLevel;
    
    const maxShuttles = formula.getMaxShuttles(displayLevel);

    if (shuttlesInput) {
      shuttlesInput.min = 0;
      shuttlesInput.max = maxShuttles;
    }

    if (shuttleMaxLabel) {
      if (!levelInput || !levelInput.value || isNaN(currentLevel) || currentLevel < formula.minLevel || currentLevel > formula.maxLevel) {
        shuttleMaxLabel.textContent = `(på niveauet)`;
      } else {
        shuttleMaxLabel.textContent = `(max ${maxShuttles} på level ${currentLevel})`;
      }
    }
  }

  function commitResult() {
    const level = levelInput ? levelInput.value : '';
    const shuttles = shuttlesInput ? shuttlesInput.value : '';
    const age = parseInt(ageInput ? ageInput.value : '0', 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');
    const genderEl = container.querySelector('input[name="bip_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const chosenFormula = getSelectedFormulaKey();
    const activeKey = getActiveStorageKey();

    const res = calculateBipTest(level, shuttles, weight, chosenFormula);

    if (!res || !res.isValid) {
      alert('Indtast venligst et gyldigt niveau og shuttles for at gemme resultatet.');
      return;
    }

    const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
    const userAge = age > 0 ? age : 20;
    const evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);

    StorageAdapter.commitToLog(activeKey, {
      type: 'physical',
      primary: {
        value: parseFloat(res.formattedFitnessLevel),
        unit: 'ml/kg/min',
        label: 'Kondital'
      },
      norm: evaluation ? {
        label: evaluation.label,
        color: evaluation.color,
        bg: evaluation.color + '18'
      } : undefined,
      subMetrics: {
        level: parseInt(res.level, 10),
        shuttles: parseInt(res.shuttles, 10),
        totalDistanceMeters: res.totalDistance,
        totalShuttles: res.totalShuttles
      },
      context: {
        age,
        gender,
        weight,
        formulaKey: chosenFormula
      }
    });

    animateSaveButton();
  }

  function calculate() {
    updateLimitsAndLabels();

    const level = levelInput ? levelInput.value : '';
    const shuttles = shuttlesInput ? shuttlesInput.value : '';
    const age = parseInt(ageInput ? ageInput.value : '0', 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');
    const genderEl = container.querySelector('input[name="bip_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const chosenFormula = getSelectedFormulaKey();

    const res = calculateBipTest(level, shuttles, weight, chosenFormula);

    if (res && res.isValid) {
      if (progressCard) progressCard.style.display = 'block';

      if (levelText) levelText.textContent = res.level;
      if (shuttleProgressText) {
        shuttleProgressText.textContent = `${res.shuttles} / ${res.maxShuttlesForLevel} shuttles (${res.shuttlesPercent}%)`;
        shuttleProgressText.style.color = '#2563eb';
      }
      if (shuttleProgressBar) shuttleProgressBar.style.width = `${res.shuttlesPercent}%`;

      if (distProgressText) {
        distProgressText.textContent = `${res.totalDistance.toLocaleString('da-DK')} m / ${res.maxTestDistance.toLocaleString('da-DK')} m (${res.distancePercent}%)`;
        distProgressText.style.color = '#059669';
      }
      if (distProgressBar) distProgressBar.style.width = `${res.distancePercent}%`;

      if (totalShuttlesProgressText) {
        totalShuttlesProgressText.textContent = `${res.totalShuttles} / ${res.maxTotalShuttles} shuttles (${res.totalShuttlesPercent}%)`;
        totalShuttlesProgressText.style.color = '#7c3aed';
      }
      if (totalShuttlesProgressBar) totalShuttlesProgressBar.style.width = `${res.totalShuttlesPercent}%`;

      if (resFitness) resFitness.textContent = res.formattedFitnessLevel;
      if (resSdText) resSdText.textContent = `± ${res.sd} ${res.sdUnit}`;
      if (resVo2Max) resVo2Max.textContent = res.formattedVO2Max;

      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const userAge = age > 0 ? age : 20;
      const evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);

      if (resEvalBadge) {
        if (evaluation && age > 0) {
          resEvalBadge.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        } else {
          resEvalBadge.textContent = 'Mangler alder';
          resEvalBadge.style.backgroundColor = '#e2e8f0';
          resEvalBadge.style.color = '#64748b';
        }
      }

      const thresholds = getFitnessThresholds(userAge, normGender);
      if (thresholds && age > 0 && marker) {
        const v = res.fitnessLevel;
        const t = thresholds;
        let percent = 0;

        if (v <= t[0]) {
          const minBound = Math.max(0, t[0] - 10);
          percent = ((v - minBound) / (t[0] - minBound)) * 20;
        } else if (v <= t[1]) {
          percent = 20 + ((v - t[0]) / (t[1] - t[0])) * 20;
        } else if (v <= t[2]) {
          percent = 40 + ((v - t[1]) / (t[2] - t[1])) * 20;
        } else if (v <= t[3]) {
          percent = 60 + ((v - t[2]) / (t[3] - t[2])) * 20;
        } else {
          const maxBound = t[3] + 15;
          percent = 80 + ((v - t[3]) / (maxBound - t[3])) * 20;
        }

        percent = Math.max(2, Math.min(98, percent));
        marker.style.left = `${percent}%`;
        marker.style.display = 'block';
      }

    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (progressCard) progressCard.style.display = 'none';
    if (resFitness) resFitness.textContent = '-';
    if (resSdText) resSdText.textContent = '-';
    if (resVo2Max) resVo2Max.textContent = '-';
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
    if (marker) marker.style.display = 'none';
  }

  const allInputs = container.querySelectorAll('input');
  allInputs.forEach(input => {
    ['input', 'change', 'click', 'keyup'].forEach(eventType => {
      input.addEventListener(eventType, (e) => {
        if (e.target.name === 'bip_formula') {
          loadInitialData();
        } else {
          saveDraftAndProfile();
        }
        calculate();
      });
    });
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', commitResult);
  }

  const resetBtn = container.querySelector('.js-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const activeKey = getActiveStorageKey();
      allInputs.forEach(input => {
        if (input.name === 'bip_gender' && input.value === 'male') input.checked = true;
        else if (input.name === 'bip_formula' && input.value === 'bip') input.checked = true;
        else if (input.type !== 'radio') input.value = '';
      });
      StorageAdapter.clearDraft(activeKey);
      StorageAdapter.clearLog(activeKey);
      calculate();
    });
  }

  loadInitialData();
  calculate();
}

export const initCalculator = initBipTest;