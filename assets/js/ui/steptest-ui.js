// assets/js/ui/steptest-ui.js
import { calculateStepTest, STEPTEST_FORMULAS } from '../core/steptest.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

const ANTHRO_STORAGE_KEY = 'mp_user_anthropometrics';
const RESULTS_STORAGE_KEY = 'mp_steptest_results';

export function initCalculator(container) {
  if (!container) return;

  const presetTestGroup = (container.getAttribute('data-preset-test') || 'auto').toLowerCase();
  const TEST_STATE_KEY = `mp_steptest_state_${presetTestGroup}`;
  
  const availableFormulas = Object.keys(STEPTEST_FORMULAS).filter(key => {
    if (presetTestGroup === 'auto') return true;
    const f = STEPTEST_FORMULAS[key];
    return f.testGroup === presetTestGroup || key === presetTestGroup;
  });

  let activeFormulaKey = availableFormulas[0] || 'ymca_kieu';

  // Antropometriske inputs (Række 1)
  const anthroInputs = container.querySelectorAll('.js-st-anthro-input');
  const heightWrapper = container.querySelector('.js-st-height-wrapper');
  const weightWrapper = container.querySelector('.js-st-weight-wrapper');

  // Testspecifikke inputs (Række 2)
  const testInputs = container.querySelectorAll('.js-st-test-input');
  const testNameTag = container.querySelector('.js-st-test-name-tag');
  const stopHrBadge = container.querySelector('.js-st-stop-hr-badge');
  const hrWrapper = container.querySelector('.js-st-hr-wrapper');
  const maxHrWrapper = container.querySelector('.js-st-max-hr-wrapper');
  const stepHeightWrapper = container.querySelector('.js-st-step-height-wrapper');
  const durationWrapper = container.querySelector('.js-st-duration-wrapper');
  const harvardP1Wrapper = container.querySelector('.js-st-harvard-p1');
  const harvardP2Wrapper = container.querySelector('.js-st-harvard-p2');
  const harvardP3Wrapper = container.querySelector('.js-st-harvard-p3');
  const chesterLevelsWrapper = container.querySelector('.js-st-chester-levels-wrapper');

  // Formel UI
  const formulaBar = container.querySelector('.js-st-formula-bar');
  const manualWrapper = container.querySelector('.js-st-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-st-picker-container');

  // Outputs
  const resFitness = container.querySelector('.js-st-fitness');
  const resEvalBtn = container.querySelector('.js-st-eval-badge');
  const resEvalText = container.querySelector('.js-st-eval-text');
  const harvardBox = container.querySelector('.js-st-harvard-box');
  const resFitnessIndex = container.querySelector('.js-st-fitness-index');
  const marker = container.querySelector('.js-st-continuum-marker');

  const infoTitle = container.querySelector('.js-st-info-title');
  const infoDesc = container.querySelector('.js-st-info-desc');

  // Popup DOM
  const tableBtn = container.querySelector('.js-st-table-btn');
  const popup = container.querySelector('.js-st-popup');
  const popupClose = container.querySelector('.js-st-popup-close');
  const tableBody = container.querySelector('.js-st-table-body');

  function toggleFormulaPicker(show) {
    const isCurrentlyOpen = manualWrapper && manualWrapper.style.display === 'block';
    const open = show !== undefined ? show : !isCurrentlyOpen;

    if (open) {
      if (formulaBar) formulaBar.style.display = 'none';
      if (manualWrapper) manualWrapper.style.display = 'block';
    } else {
      if (manualWrapper) manualWrapper.style.display = 'none';
      if (formulaBar) formulaBar.style.display = 'flex';
    }
  }

  function renderFormulaPicker() {
    if (!pickerContainer || availableFormulas.length <= 1) {
      if (manualWrapper) manualWrapper.style.display = 'none';
      return;
    }

    pickerContainer.innerHTML = availableFormulas.map(key => {
      const f = STEPTEST_FORMULAS[key];
      const isSelected = key === activeFormulaKey;

      return `
        <div class="mp-st-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${f.isRecommended ? '<span class="mp-st-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-st-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
            ${f.desc}${f.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${f.see})</span>` : ''}
          </div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-st-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeFormulaKey = card.getAttribute('data-formula-key');
        toggleFormulaPicker(false);
        calculate();
      });
    });
  }

  function saveAnthroState() {
    try {
      const state = {
        age: container.querySelector('[name="st_age"]')?.value || '40',
        gender: container.querySelector('input[name="st_gender"]:checked')?.value || 'male',
        height: container.querySelector('[name="st_height"]')?.value || '180',
        weight: container.querySelector('[name="st_weight"]')?.value || '80'
      };
      localStorage.setItem(ANTHRO_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadAnthroState() {
    try {
      const saved = localStorage.getItem(ANTHRO_STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.age && container.querySelector('[name="st_age"]')) {
          container.querySelector('[name="st_age"]').value = state.age;
        }
        if (state.height && container.querySelector('[name="st_height"]')) {
          container.querySelector('[name="st_height"]').value = state.height;
        }
        if (state.weight && container.querySelector('[name="st_weight"]')) {
          container.querySelector('[name="st_weight"]').value = state.weight;
        }
        if (state.gender) {
          const radio = container.querySelector(`input[name="st_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function saveTestStateAndResult(res) {
    try {
      const testState = {
        activeFormulaKey: activeFormulaKey,
        hr: container.querySelector('[name="st_hr"]')?.value || '',
        maxHr: container.querySelector('[name="st_max_hr"]')?.value || '',
        stepHeight: container.querySelector('[name="st_step_height"]')?.value || '',
        duration: container.querySelector('[name="st_duration"]')?.value || '',
        p1: container.querySelector('[name="st_p1"]')?.value || '',
        p2: container.querySelector('[name="st_p2"]')?.value || '',
        p3: container.querySelector('[name="st_p3"]')?.value || '',
        chesterL1: container.querySelector('[name="st_chester_l1"]')?.value || '',
        chesterL2: container.querySelector('[name="st_chester_l2"]')?.value || '',
        chesterL3: container.querySelector('[name="st_chester_l3"]')?.value || '',
        chesterL4: container.querySelector('[name="st_chester_l4"]')?.value || '',
        chesterL5: container.querySelector('[name="st_chester_l5"]')?.value || ''
      };

      if (res && res.isValid) {
        let dashboardKey = activeFormulaKey;
        if (activeFormulaKey === 'ymca_kieu' || activeFormulaKey === 'ymca_golding') {
          dashboardKey = 'ymca';
        }

        const unit = (activeFormulaKey === 'harvard') ? 'Fitness Index' : 'ml/kg/min';

        testState.lastResult = {
          score: res.fitnessLevel,
          unit: unit
        };

        const allResults = JSON.parse(localStorage.getItem(RESULTS_STORAGE_KEY) || '{}');
        allResults[dashboardKey] = {
          score: res.fitnessLevel,
          unit: unit,
          timestamp: new Date().toISOString()
        };
        localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(allResults));
      }

      localStorage.setItem(TEST_STATE_KEY, JSON.stringify(testState));
    } catch (e) {}
  }

  function loadTestState() {
    try {
      const saved = localStorage.getItem(TEST_STATE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.activeFormulaKey && availableFormulas.includes(state.activeFormulaKey)) {
          activeFormulaKey = state.activeFormulaKey;
        }
        if (state.hr && container.querySelector('[name="st_hr"]')) {
          container.querySelector('[name="st_hr"]').value = state.hr;
        }
        if (state.maxHr && container.querySelector('[name="st_max_hr"]')) {
          const maxHrInput = container.querySelector('[name="st_max_hr"]');
          maxHrInput.value = state.maxHr;
          maxHrInput.dataset.isCustom = 'true';
        }
        if (state.stepHeight && container.querySelector('[name="st_step_height"]')) {
          container.querySelector('[name="st_step_height"]').value = state.stepHeight;
        }
        if (state.duration && container.querySelector('[name="st_duration"]')) {
          container.querySelector('[name="st_duration"]').value = state.duration;
        }
        if (state.p1 && container.querySelector('[name="st_p1"]')) {
          container.querySelector('[name="st_p1"]').value = state.p1;
        }
        if (state.p2 && container.querySelector('[name="st_p2"]')) {
          container.querySelector('[name="st_p2"]').value = state.p2;
        }
        if (state.p3 && container.querySelector('[name="st_p3"]')) {
          container.querySelector('[name="st_p3"]').value = state.p3;
        }
        if (state.chesterL1 && container.querySelector('[name="st_chester_l1"]')) {
          container.querySelector('[name="st_chester_l1"]').value = state.chesterL1;
        }
        if (state.chesterL2 && container.querySelector('[name="st_chester_l2"]')) {
          container.querySelector('[name="st_chester_l2"]').value = state.chesterL2;
        }
        if (state.chesterL3 && container.querySelector('[name="st_chester_l3"]')) {
          container.querySelector('[name="st_chester_l3"]').value = state.chesterL3;
        }
        if (state.chesterL4 && container.querySelector('[name="st_chester_l4"]')) {
          container.querySelector('[name="st_chester_l4"]').value = state.chesterL4;
        }
        if (state.chesterL5 && container.querySelector('[name="st_chester_l5"]')) {
          container.querySelector('[name="st_chester_l5"]').value = state.chesterL5;
        }
      }
    } catch (e) {}
  }

  function updateGenderUI() {
    const genderRadios = container.querySelectorAll('input[name="st_gender"]');
    genderRadios.forEach(r => {
      const box = r.nextElementSibling;
      if (box) {
        if (r.checked) {
          box.style.backgroundColor = '#2563eb';
          box.style.color = '#ffffff';
        } else {
          box.style.backgroundColor = 'transparent';
          box.style.color = '#475569';
        }
      }
    });
  }

  function updateFieldVisibilities(activeDef) {
    if (heightWrapper) heightWrapper.style.display = activeDef.requiresHeight ? 'block' : 'none';
    if (weightWrapper) weightWrapper.style.display = activeDef.requiresWeight ? 'block' : 'none';

    if (testNameTag) testNameTag.textContent = activeDef.shortName || activeDef.name;

    if (hrWrapper) hrWrapper.style.display = activeDef.requiresPulse ? 'block' : 'none';
    if (stepHeightWrapper) stepHeightWrapper.style.display = activeDef.requiresStepHeight ? 'block' : 'none';
    if (durationWrapper) durationWrapper.style.display = activeDef.requiresDuration ? 'block' : 'none';

    if (harvardP1Wrapper) harvardP1Wrapper.style.display = activeDef.requiresHarvardP ? 'block' : 'none';
    if (harvardP2Wrapper) harvardP2Wrapper.style.display = activeDef.requiresHarvardP ? 'block' : 'none';
    if (harvardP3Wrapper) harvardP3Wrapper.style.display = activeDef.requiresHarvardP ? 'block' : 'none';

    if (activeFormulaKey === 'chester') {
      if (maxHrWrapper) maxHrWrapper.style.display = 'block';
      if (chesterLevelsWrapper) chesterLevelsWrapper.style.display = 'block';

      const age = parseInt(container.querySelector('[name="st_age"]')?.value || 40, 10);
      const maxHrInput = container.querySelector('[name="st_max_hr"]');
      const tanakaMax = Math.round(208 - (0.7 * age));

      if (maxHrInput && maxHrInput.dataset.isCustom !== 'true') {
        maxHrInput.value = tanakaMax;
      }

      const activeMaxHr = parseFloat(maxHrInput?.value) || tanakaMax;
      const stopHr = Math.round(activeMaxHr * 0.80);

      if (stopHrBadge) {
        stopHrBadge.textContent = `🛑 Stop-puls (80% HRmax): ${stopHr} BPM`;
        stopHrBadge.style.display = 'inline-block';
      }
    } else {
      if (maxHrWrapper) maxHrWrapper.style.display = 'none';
      if (chesterLevelsWrapper) chesterLevelsWrapper.style.display = 'none';
      if (stopHrBadge) stopHrBadge.style.display = 'none';
    }
  }

  function calculate() {
    saveAnthroState();
    updateGenderUI();

    const activeDef = STEPTEST_FORMULAS[activeFormulaKey] || STEPTEST_FORMULAS.ymca_kieu;
    updateFieldVisibilities(activeDef);

    const hr = container.querySelector('[name="st_hr"]')?.value || '';
    const maxHr = container.querySelector('[name="st_max_hr"]')?.value || '';
    const age = parseInt(container.querySelector('[name="st_age"]')?.value || 0, 10);
    const height = parseFloat(container.querySelector('[name="st_height"]')?.value || 180);
    const weight = parseFloat(container.querySelector('[name="st_weight"]')?.value || 80);
    const stepHeight = parseFloat(container.querySelector('[name="st_step_height"]')?.value || 25);
    const duration = parseFloat(container.querySelector('[name="st_duration"]')?.value || 300);

    const p1 = container.querySelector('[name="st_p1"]')?.value || '';
    const p2 = container.querySelector('[name="st_p2"]')?.value || '';
    const p3 = container.querySelector('[name="st_p3"]')?.value || '';

    const chesterL1 = container.querySelector('[name="st_chester_l1"]')?.value || '';
    const chesterL2 = container.querySelector('[name="st_chester_l2"]')?.value || '';
    const chesterL3 = container.querySelector('[name="st_chester_l3"]')?.value || '';
    const chesterL4 = container.querySelector('[name="st_chester_l4"]')?.value || '';
    const chesterL5 = container.querySelector('[name="st_chester_l5"]')?.value || '';

    const genderEl = container.querySelector('input[name="st_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    if (formulaBar && activeDef) {
      const showGear = availableFormulas.length > 1;
      formulaBar.innerHTML = `
        <div class="mp-st-badge-header">
          <div class="mp-st-badge-title-group">
            <strong class="mp-st-badge-title">${activeDef.name}</strong>
            ${activeDef.isRecommended ? '<span class="mp-st-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          ${showGear ? `
            <button type="button" class="js-st-toggle-override mp-st-btn-gear" title="Skift formel">
              ⚙️
            </button>
          ` : ''}
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35; margin-top: 0.15rem;">
          ${activeDef.desc}${activeDef.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${activeDef.see})</span>` : ''}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-st-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    const res = calculateStepTest({
      formulaKey: activeFormulaKey,
      hr,
      p1, p2, p3,
      duration,
      age,
      gender,
      height,
      weight,
      stepHeight,
      maxHr,
      chesterL1, chesterL2, chesterL3, chesterL4, chesterL5
    });

    saveTestStateAndResult(res);

    if (res && res.isValid) {
      if (resFitness) resFitness.textContent = res.fitnessLevel;

      if (infoTitle) infoTitle.textContent = activeDef.name;
      if (infoDesc) infoDesc.textContent = activeDef.desc;

      if (harvardBox && resFitnessIndex) {
        if (activeFormulaKey === 'harvard') {
          resFitnessIndex.textContent = res.fitnessIndex;
          harvardBox.style.display = 'flex';
        } else {
          harvardBox.style.display = 'none';
        }
      }

      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const userAge = age > 0 ? age : 40;
      const evaluation = evaluateFitnessLevel(parseFloat(res.fitnessLevel), userAge, normGender);

      if (evaluation && age > 0) {
        if (resEvalBtn && resEvalText) {
          resEvalText.textContent = evaluation.label;
          resEvalBtn.style.backgroundColor = evaluation.color;
          resEvalBtn.style.color = '#ffffff';
        }
      } else if (resEvalBtn && resEvalText) {
        resEvalText.textContent = 'Mangler alder';
        resEvalBtn.style.backgroundColor = '#e2e8f0';
        resEvalBtn.style.color = '#64748b';
      }

      const thresholds = getFitnessThresholds(userAge, normGender);
      if (thresholds && age > 0) {
        const v = parseFloat(res.fitnessLevel);
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
        if (marker) {
          marker.style.left = `${percent}%`;
          marker.style.display = 'block';
        }
      } else if (marker) {
        marker.style.display = 'none';
      }

      if (thresholds && tableBody && age > 0) {
        const tableData = [
          { name: 'Meget lavt', range: `< ${thresholds[0]}`, color: '#ef4444' },
          { name: 'Lavt', range: `${thresholds[0]} - ${thresholds[1] - 1}`, color: '#f97316' },
          { name: 'Middel', range: `${thresholds[1]} - ${thresholds[2]}`, color: '#eab308' },
          { name: 'Højt', range: `${thresholds[2] + 1} - ${thresholds[3]}`, color: '#22c55e' },
          { name: 'Meget højt', range: `> ${thresholds[3]}`, color: '#3b82f6' }
        ];

        tableBody.innerHTML = '';
        tableData.forEach(row => {
          const isMatch = evaluation && row.name === evaluation.label;
          const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
          const fontStyle = isMatch ? 'font-weight: 800; color: #0f172a;' : 'color: #334155;';
          const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
          
          let badgeHtml = '';
          if (isMatch) {
            badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">${res.fitnessLevel}</span>`;
          }

          const tr = document.createElement('tr');
          tr.style = `border-bottom: 1px solid #e2e8f0; ${bgStyle}`;
          tr.innerHTML = `
            <td style="padding: 0.75rem 0.5rem; font-size: 0.9rem; ${fontStyle}">
              <div style="display:flex; align-items:center;">${dot}${row.name}</div>
            </td>
            <td style="padding: 0.75rem 0.5rem; text-align: right; font-size: 0.9rem; ${fontStyle}">
              ${row.range} ${badgeHtml}
            </td>
          `;
          tableBody.appendChild(tr);
        });
      }
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (resEvalBtn) {
      resEvalBtn.style.backgroundColor = '#e2e8f0';
      resEvalBtn.style.color = '#64748b';
    }
    if (infoTitle) infoTitle.textContent = 'Valgt Steptest';
    if (infoDesc) infoDesc.textContent = 'Indtast måledata for at se dit kondital.';
    if (harvardBox) harvardBox.style.display = 'none';
    if (marker) marker.style.display = 'none';
  }

  const maxHrInput = container.querySelector('[name="st_max_hr"]');
  if (maxHrInput) {
    maxHrInput.addEventListener('input', () => {
      maxHrInput.dataset.isCustom = 'true';
    });
  }

  anthroInputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, () => {
      if (input.name === 'st_age' && maxHrInput && maxHrInput.dataset.isCustom !== 'true') {
        const age = parseInt(input.value || 40, 10);
        maxHrInput.value = Math.round(208 - (0.7 * age));
      }
      calculate();
    }));
  });

  testInputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseInt(container.querySelector('[name="st_age"]')?.value || 0, 10);
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
      testInputs.forEach(inp => {
        inp.value = '';
        if (inp.name === 'st_max_hr') {
          delete inp.dataset.isCustom;
        }
      });
      try {
        localStorage.removeItem(TEST_STATE_KEY);

        let dashboardKey = activeFormulaKey;
        if (activeFormulaKey === 'ymca_kieu' || activeFormulaKey === 'ymca_golding') {
          dashboardKey = 'ymca';
        }

        const allResults = JSON.parse(localStorage.getItem(RESULTS_STORAGE_KEY) || '{}');
        delete allResults[dashboardKey];
        localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(allResults));
      } catch (e) {}

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
            link.download = 'steptest-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadAnthroState();
  loadTestState();
  calculate();
}

export const initStepTest = initCalculator;
export default initCalculator;