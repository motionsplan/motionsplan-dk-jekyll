// assets/js/ui/yoyo-intermittent-ui.js
import { calculateYoYoIntermittent, YOYO_INTERMITTENT_FORMULAS, getYoYoIntermittentRating } from '../core/yoyo-intermittent.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

// Mapping fra beregnerens type+niveau kombinationer til dashboardets storageKeys
const FORMULA_STORAGE_MAP = {
  'yyir1': 'yoyo_ir1', // Yo-Yo Intermittent Recovery 1 (10s pause)
  'yyir2': 'yoyo_ir2', // Yo-Yo Intermittent Recovery 2 (10s pause)
  'yyie1': 'yoyo_ie1', // Yo-Yo Intermittent Endurance 1 (5s pause)
  'yyie2': 'yoyo_ie2'  // Yo-Yo Intermittent Endurance 2 (5s pause)
};

export function initYoYoIntermittent(container) {
  if (!container) return;

  const levelInput = container.querySelector('[name="yyi_level"]');
  const shuttlesInput = container.querySelector('[name="yyi_shuttles"]');
  const ageInput = container.querySelector('[name="yyi_age"]');
  const weightInput = container.querySelector('[name="yyi_weight"]');

  // Gem-knap og status-indikatorer
  const saveBtn = container.querySelector('.js-yyi-save-btn') || container.querySelector('.js-save-btn');
  const saveStatus = container.querySelector('.js-yyi-save-status');

  // Dynamiske Labels
  const levelRangeLabel = container.querySelector('.js-yyi-level-range-label');
  const shuttleMaxLabel = container.querySelector('.js-yyi-shuttle-max-label');

  // 3 Fremdrifts-elementer
  const levelText = container.querySelector('.js-yyi-current-level-text');
  const shuttleProgressText = container.querySelector('.js-yyi-shuttle-progress-text');
  const shuttleProgressBar = container.querySelector('.js-yyi-shuttle-progress-bar');
  const distProgressText = container.querySelector('.js-yyi-distance-progress-text');
  const distProgressBar = container.querySelector('.js-yyi-distance-progress-bar');
  const totalShuttlesProgressText = container.querySelector('.js-yyi-total-shuttles-progress-text');
  const totalShuttlesProgressBar = container.querySelector('.js-yyi-total-shuttles-progress-bar');

  // DOM elementer til resultater
  const resFitness = container.querySelector('.js-yyi-fitness');
  const resSdText = container.querySelector('.js-yyi-sd-text');
  const resEvalBadge = container.querySelector('.js-yyi-eval-badge');
  const resVo2Max = container.querySelector('.js-yyi-vo2max');
  const marker = container.querySelector('.js-yyi-continuum-marker');

  // Popup DOM
  const tableBtn = container.querySelector('.js-yyi-table-btn');
  const popup = container.querySelector('.js-yyi-popup');
  const popupClose = container.querySelector('.js-yyi-popup-close');
  const tableBody = container.querySelector('.js-yyi-table-body');

  function getSelectedFormulaKey() {
    const typeEl = container.querySelector('input[name="yyi_type"]:checked');
    const levelSelectEl = container.querySelector('input[name="yyi_level_select"]:checked');
    const type = typeEl ? typeEl.value : 'yyir';
    const lvl = levelSelectEl ? levelSelectEl.value : '1';
    return `${type}${lvl}`;
  }

  function getActiveStorageKey() {
    const formulaKey = getSelectedFormulaKey();
    return FORMULA_STORAGE_MAP[formulaKey] || 'yoyo_ir1';
  }

  // --- 1. INDLÆS KLADDE ELLER PROFIL FOR AKTIV TEST ---
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
        const radio = container.querySelector(`input[name="yyi_gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }
    } else {
      if (levelInput) levelInput.value = '';
      if (shuttlesInput) shuttlesInput.value = '';
      if (ageInput && profile.age) ageInput.value = profile.age;
      if (weightInput && profile.weight) weightInput.value = profile.weight;
      if (profile.gender) {
        const radio = container.querySelector(`input[name="yyi_gender"][value="${profile.gender}"]`);
        if (radio) radio.checked = true;
      }
    }
  }

  // --- 2. GEM REAKTIV KLADDE & STAMDATA FOR AKTIV TEST ---
  function saveDraftAndProfile() {
    const typeEl = container.querySelector('input[name="yyi_type"]:checked');
    const levelSelectEl = container.querySelector('input[name="yyi_level_select"]:checked');
    const genderEl = container.querySelector('input[name="yyi_gender"]:checked');
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
      type: typeEl ? typeEl.value : 'yyir',
      levelSelect: levelSelectEl ? levelSelectEl.value : '1',
      level: levelInput ? levelInput.value : '',
      shuttles: shuttlesInput ? shuttlesInput.value : '',
      age: ageInput ? ageInput.value : '',
      weight: weightInput ? weightInput.value : '',
      gender
    });
  }

  // --- 3. LÅS OG GEM LOGS (COMMIT) TIL KORREKT STORAGEKEY ---
  function commitResult() {
    const chosenKey = getSelectedFormulaKey();
    const activeKey = getActiveStorageKey();
    const level = levelInput ? levelInput.value : '';
    const shuttles = shuttlesInput ? shuttlesInput.value : '';
    const age = parseInt(ageInput ? ageInput.value : '0', 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');
    const genderEl = container.querySelector('input[name="yyi_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const res = calculateYoYoIntermittent(level, shuttles, weight, chosenKey);

    if (!res || !res.isValid) {
      alert('Indtast venligst et gyldigt niveau og shuttles for at gemme resultatet.');
      return;
    }

    const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
    const userAge = age > 0 ? age : 20;

    let evaluation;
    if (chosenKey === 'yyir1') {
      evaluation = getYoYoIntermittentRating(res.totalDistance, normGender, userAge);
    } else {
      evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);
    }

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
        testType: chosenKey,
        level: parseInt(res.level, 10),
        shuttles: parseInt(res.shuttles, 10),
        totalDistanceMeters: res.totalDistance,
        totalShuttles: res.totalShuttles
      },
      context: {
        age,
        gender,
        weight,
        formulaKey: chosenKey
      }
    });

    if (saveStatus) {
      saveStatus.textContent = '✅ Resultat gemt!';
      saveStatus.style.display = 'block';
      setTimeout(() => { saveStatus.style.display = 'none'; }, 3000);
    }
  }

  function updateLimitsAndLabels() {
    const chosenKey = getSelectedFormulaKey();
    const formula = YOYO_INTERMITTENT_FORMULAS[chosenKey] || YOYO_INTERMITTENT_FORMULAS.yyir1;

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
        shuttleMaxLabel.textContent = `(40m pr. tur)`;
      } else {
        shuttleMaxLabel.textContent = `(max ${maxShuttles} på level ${currentLevel})`;
      }
    }
  }

  // --- 4. BEREGNING & VISNING ---
  function calculate() {
    updateLimitsAndLabels();

    const chosenKey = getSelectedFormulaKey();
    const formula = YOYO_INTERMITTENT_FORMULAS[chosenKey] || YOYO_INTERMITTENT_FORMULAS.yyir1;

    const level = levelInput ? levelInput.value : '';
    const shuttles = shuttlesInput ? shuttlesInput.value : '';
    const age = parseInt(ageInput ? ageInput.value : '0', 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');
    const genderEl = container.querySelector('input[name="yyi_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const res = calculateYoYoIntermittent(level, shuttles, weight, chosenKey);

    if (res && res.isValid) {
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
      
      let evaluation;
      if (chosenKey === 'yyir1') {
        evaluation = getYoYoIntermittentRating(res.totalDistance, normGender, userAge);
      } else {
        evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);
      }

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

      if (thresholds && tableBody && age > 0) {
        const tableData = [
          { name: 'Meget højt / Elite', range: `> ${thresholds[3]}` },
          { name: 'Højt / Fremragende', range: `${thresholds[2] + 1} - ${thresholds[3]}` },
          { name: 'Middel / God', range: `${thresholds[1]} - ${thresholds[2]}` },
          { name: 'Lavt / Under middel', range: `${thresholds[0]} - ${thresholds[1] - 1}` },
          { name: 'Meget lavt', range: `< ${thresholds[0]}` }
        ];

        tableBody.innerHTML = '';
        tableData.forEach(row => {
          let rowStyle = 'border-bottom: 1px solid #e2e8f0;';
          let nameStyle = 'color: #334155; font-size: 0.8rem; padding: 0.6rem 0.25rem;';
          let valStyle = 'text-align: right; font-weight: 600; color: #0f172a; font-size: 0.85rem; padding: 0.6rem 0.25rem;';
          let badgeHtml = '';

          if (evaluation && (row.name.includes(evaluation.label) || evaluation.label.includes(row.name))) {
            rowStyle = 'border-bottom: 1px solid #e2e8f0; background-color: #eff6ff; font-weight: 700;';
            nameStyle = 'color: #0f172a; font-weight: 700; font-size: 0.8rem; padding: 0.6rem 0.25rem;';
            valStyle = 'text-align: right; font-weight: 800; color: #0f172a; font-size: 0.85rem; padding: 0.6rem 0.25rem;';
            badgeHtml = `<span style="font-size: 0.65rem; background: #3b82f6; color: #fff; padding: 2px 6px; border-radius: 4px; margin-left: 8px; vertical-align: middle;">${res.formattedFitnessLevel}</span>`;
          }

          const tr = document.createElement('tr');
          tr.style = rowStyle;
          tr.innerHTML = `<td style="${nameStyle}">${row.name}</td><td style="${valStyle}">${row.range} ${badgeHtml}</td>`;
          tableBody.appendChild(tr);
        });
      }
    } else {
      resetResults(formula);
    }
  }

  function resetResults(formula) {
    const maxDistText = formula ? `${formula.maxTestDistance.toLocaleString('da-DK')} m` : '-';
    const maxShuttlesText = formula ? formula.maxTotalShuttles : '-';

    if (levelText) levelText.textContent = '-';
    if (shuttleProgressText) {
      shuttleProgressText.textContent = '- / - (0%)';
      shuttleProgressText.style.color = '#64748b';
    }
    if (shuttleProgressBar) shuttleProgressBar.style.width = '0%';

    if (distProgressText) {
      distProgressText.textContent = `0 m / ${maxDistText} (0%)`;
      distProgressText.style.color = '#64748b';
    }
    if (distProgressBar) distProgressBar.style.width = '0%';

    if (totalShuttlesProgressText) {
      totalShuttlesProgressText.textContent = `0 / ${maxShuttlesText} shuttles (0%)`;
      totalShuttlesProgressText.style.color = '#64748b';
    }
    if (totalShuttlesProgressBar) totalShuttlesProgressBar.style.width = '0%';

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

  // --- EVENT LISTENERS ---
  const allInputs = container.querySelectorAll('input');
  allInputs.forEach(input => {
    ['input', 'change', 'click', 'keyup'].forEach(eventType => {
      input.addEventListener(eventType, (e) => {
        // Skifter brugeren test-type eller level (IR1, IR2 osv.), genindlæses den tilhørende kladde
        if (e.target.name === 'yyi_type' || e.target.name === 'yyi_level_select') {
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

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseFloat(ageInput ? ageInput.value : '0');
      if (age > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst din alder for at se norm-tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const activeKey = getActiveStorageKey();
      allInputs.forEach(input => {
        if (input.name === 'yyi_gender' && input.value === 'male') input.checked = true;
        else if (input.name === 'yyi_type' && input.value === 'yyir') input.checked = true;
        else if (input.name === 'yyi_level_select' && input.value === '1') input.checked = true;
        else if (input.type !== 'radio') input.value = '';
      });
      if (popup) popup.style.display = 'none';
      StorageAdapter.clearDraft(activeKey);
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (popup) popup.style.display = 'none';
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'yoyo-intermittent-resultat.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // Opstart
  loadInitialData();
  calculate();
}

export const initCalculator = initYoYoIntermittent;