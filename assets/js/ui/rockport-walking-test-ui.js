// assets/js/ui/rockport-walking-test-ui.js
import { calculateWalkingTest, ROCKPORT_FORMULAS, UKK_FORMULAS } from '../core/rockport-walking-test.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

// Mapping fra UI-testtyper til dashboardets storageKeys
const TEST_STORAGE_MAP = {
  'rockport': 'rockport_walk',
  'ukk': 'ukk_walk'
};

export function initCalculator(container) {
  if (!container) return;

  let activeTestType = 'rockport';
  let activeFormulaKey = 'auto';

  // Hukommelse til tider opdelt pr. testtype
  let timesByTest = {
    rockport: { min: '', sec: '' },
    ukk: { min: '', sec: '' }
  };

  const inputs = container.querySelectorAll('.js-rw-input');
  const testTypeBtns = container.querySelectorAll('.js-test-type-btn');

  // Text Elements
  const sectionTestTitle = container.querySelector('.js-section-test-title');

  // Formel UI
  const formulaBar = container.querySelector('.js-rw-formula-bar');
  const manualWrapper = container.querySelector('.js-rw-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-rw-picker-container');

  // Resultat DOM
  const resFitness = container.querySelector('.js-rw-fitness');
  const resSee = container.querySelector('.js-rw-see');
  const resEvalBadge = container.querySelector('.js-rw-eval-badge');
  const resVo2Max = container.querySelector('.js-rw-vo2max');
  const marker = container.querySelector('.js-rw-continuum-marker');
  
  // Popup DOM
  const tableBtn = container.querySelector('.js-rw-table-btn');
  const popup = container.querySelector('.js-rw-popup');
  const popupClose = container.querySelector('.js-rw-popup-close');
  const tableBody = container.querySelector('.js-rw-table-body');

  const saveBtn = container.querySelector('.js-rw-save-btn') || container.querySelector('.js-save-btn');

  function getActiveStorageKey() {
    return TEST_STORAGE_MAP[activeTestType] || 'rockport_walk';
  }

  function getAvailableFormulas() {
    return activeTestType === 'ukk' ? UKK_FORMULAS : ROCKPORT_FORMULAS;
  }

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
    if (!pickerContainer) return;

    const formulas = getAvailableFormulas();
    pickerContainer.innerHTML = Object.keys(formulas).map(key => {
      const f = formulas[key];
      const isSelected = key === activeFormulaKey;
      const isAuto = key === 'auto' || key === 'ukk_std';

      return `
        <div class="mp-rw-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.15rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.825rem; color: #0f172a;">${f.name}</strong>
              ${isAuto ? '<span class="mp-rw-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-rw-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.7rem; color: #475569; line-height: 1.3;">${f.desc}</div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-rw-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeFormulaKey = card.getAttribute('data-formula-key');
        toggleFormulaPicker(false);
        saveDraftAndProfile();
        calculate();
      });
    });
  }

  function updateTestTypeUI() {
    testTypeBtns.forEach(btn => {
      const isMatch = btn.getAttribute('data-test-type') === activeTestType;
      btn.classList.toggle('is-active', isMatch);
    });

    if (activeTestType === 'ukk') {
      if (sectionTestTitle) sectionTestTitle.textContent = '2. Testresultat (2,0 km)';
      activeFormulaKey = 'ukk_std';
    } else {
      if (sectionTestTitle) sectionTestTitle.textContent = '2. Testresultat (1,6 km)';
      if (activeFormulaKey === 'ukk_std') activeFormulaKey = 'auto';
    }
  }

  function updateTimeFieldsForActiveTest() {
    const times = timesByTest[activeTestType] || { min: '', sec: '' };
    const minInput = container.querySelector('[name="rw_min"]');
    const secInput = container.querySelector('[name="rw_sec"]');
    if (minInput) minInput.value = times.min;
    if (secInput) secInput.value = times.sec;
  }

  function saveDraftAndProfile() {
    const age = parseInt(container.querySelector('[name="rw_age"]')?.value || '0', 10);
    const weight = parseFloat(container.querySelector('[name="rw_weight"]')?.value || '');
    const genderEl = container.querySelector('input[name="rw_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const activeKey = getActiveStorageKey();

    if (age > 0 || weight > 0) {
      StorageAdapter.saveProfile({
        ...(age > 0 && { age }),
        ...(weight > 0 && { weight }),
        gender
      });
    }

    timesByTest[activeTestType] = {
      min: container.querySelector('[name="rw_min"]')?.value || '',
      sec: container.querySelector('[name="rw_sec"]')?.value || ''
    };

    StorageAdapter.saveDraft(activeKey, {
      activeTestType,
      activeFormulaKey,
      age: container.querySelector('[name="rw_age"]')?.value || '',
      weight: container.querySelector('[name="rw_weight"]')?.value || '',
      height: container.querySelector('[name="rw_height"]')?.value || '',
      hr: container.querySelector('[name="rw_hr"]')?.value || '',
      gender,
      timesByTest
    });
  }

  function loadInitialData() {
    const profile = StorageAdapter.getProfile();
    const activeKey = getActiveStorageKey();
    const draft = StorageAdapter.loadDraft(activeKey);

    if (draft) {
      if (draft.activeTestType) activeTestType = draft.activeTestType;
      if (draft.activeFormulaKey) activeFormulaKey = draft.activeFormulaKey;
      if (draft.age !== undefined && draft.age !== '' && container.querySelector('[name="rw_age"]')) container.querySelector('[name="rw_age"]').value = draft.age;
      if (draft.weight !== undefined && draft.weight !== '' && container.querySelector('[name="rw_weight"]')) container.querySelector('[name="rw_weight"]').value = draft.weight;
      if (draft.height !== undefined && draft.height !== '' && container.querySelector('[name="rw_height"]')) container.querySelector('[name="rw_height"]').value = draft.height;
      if (draft.hr !== undefined && draft.hr !== '' && container.querySelector('[name="rw_hr"]')) container.querySelector('[name="rw_hr"]').value = draft.hr;
      if (draft.gender) {
        const radio = container.querySelector(`input[name="rw_gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }
      if (draft.timesByTest) {
        timesByTest = draft.timesByTest;
      }
    } else {
      if (profile.age && container.querySelector('[name="rw_age"]')) container.querySelector('[name="rw_age"]').value = profile.age;
      if (profile.weight && container.querySelector('[name="rw_weight"]')) container.querySelector('[name="rw_weight"]').value = profile.weight;
      if (profile.gender) {
        const radio = container.querySelector(`input[name="rw_gender"][value="${profile.gender}"]`);
        if (radio) radio.checked = true;
      }
    }
  }

  function calculate() {
    saveDraftAndProfile();

    const age = parseFloat(container.querySelector('[name="rw_age"]')?.value || 0);
    const weight = parseFloat(container.querySelector('[name="rw_weight"]')?.value || 0);
    const height = parseFloat(container.querySelector('[name="rw_height"]')?.value || 175);
    const min = parseFloat(container.querySelector('[name="rw_min"]')?.value || 0);
    const sec = parseFloat(container.querySelector('[name="rw_sec"]')?.value || 0);
    const hr = parseFloat(container.querySelector('[name="rw_hr"]')?.value || 0);
    const genderEl = container.querySelector('input[name="rw_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const activeKey = getActiveStorageKey();

    const params = { testType: activeTestType, formula: activeFormulaKey, age, weight, height, min, sec, hr, gender };
    const result = calculateWalkingTest(params);

    const formulas = getAvailableFormulas();
    let usedFormulaKey = activeFormulaKey;
    if (activeTestType === 'rockport' && activeFormulaKey === 'auto') {
      usedFormulaKey = (age >= 18 && age <= 39) ? 'lunt' : 'kline';
    }
    const usedFormulaObj = formulas[usedFormulaKey] || formulas.kline || formulas.ukk_std;

    const activeDef = formulas[activeFormulaKey] || formulas.auto || formulas.ukk_std;
    if (formulaBar && activeDef) {
      let subDesc = activeDef.desc;
      if (activeTestType === 'rockport' && activeFormulaKey === 'auto' && age > 0) {
        subDesc = `Automatisk valgt: <strong>${usedFormulaKey === 'lunt' ? 'Lunt et al. (2013)' : 'Kline et al. (1987)'}</strong> ud fra en alder på ${age} år.`;
      }

      formulaBar.innerHTML = `
        <div class="mp-rw-badge-header">
          <div class="mp-rw-badge-title-group">
            <strong class="mp-rw-badge-title">${activeDef.name}</strong>
            ${(activeFormulaKey === 'auto' || activeFormulaKey === 'ukk_std') ? '<span class="mp-rw-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          ${activeTestType === 'rockport' ? `
            <button type="button" class="js-rw-toggle-override mp-rw-btn-gear" title="Skift formel">⚙️</button>
          ` : ''}
        </div>
        <div style="font-size: 0.7rem; color: #475569; line-height: 1.3; margin-top: 0.1rem;">
          ${subDesc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-rw-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    if (resSee && usedFormulaObj) {
      resSee.textContent = `SEE: ${usedFormulaObj.see}`;
    }

    if (result.isValid) {
      resFitness.textContent = result.fitnessLevel;
      resVo2Max.textContent = result.maxOxygenUptake;

      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const evaluation = evaluateFitnessLevel(result.fitnessLevel, age, normGender);
      
      if (evaluation) {
        resEvalBadge.textContent = evaluation.label;
        resEvalBadge.style.backgroundColor = evaluation.color;
        resEvalBadge.style.color = '#ffffff';
      }

      const thresholds = getFitnessThresholds(age, normGender);
      if (thresholds && marker) {
        const v = parseFloat(result.fitnessLevel);
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

        if (tableBody) {
          const tableData = [
            { name: 'Meget lavt', range: `< ${t[0]}`, color: '#ef4444' },
            { name: 'Lavt', range: `${t[0]} - ${t[1] - 1}`, color: '#f97316' },
            { name: 'Middel', range: `${t[1]} - ${t[2]}`, color: '#eab308' },
            { name: 'Højt', range: `${t[2] + 1} - ${t[3]}`, color: '#22c55e' },
            { name: 'Meget højt', range: `> ${t[3]}`, color: '#3b82f6' }
          ];

          tableBody.innerHTML = '';
          tableData.forEach(row => {
            const isMatch = evaluation && row.name === evaluation.label;
            const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
            const fontStyle = isMatch ? 'font-weight: 700; color: #0f172a;' : 'color: #334155;';
            const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
            
            let badgeHtml = '';
            if (isMatch) {
              badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">${result.fitnessLevel}</span>`;
            }

            const tr = document.createElement('tr');
            tr.style = `border-bottom: 1px solid #e2e8f0; ${bgStyle}`;
            tr.innerHTML = `
              <td style="padding: 0.65rem 0.5rem; font-size: 0.85rem; ${fontStyle}">
                <div style="display:flex; align-items:center;">${dot}${row.name}</div>
              </td>
              <td style="padding: 0.65rem 0.5rem; text-align: right; font-size: 0.85rem; ${fontStyle}">
                ${row.range} ${badgeHtml}
              </td>
            `;
            tableBody.appendChild(tr);
          });
        }
      }

      // AUTOMATISK GEM I LOGGEN VIA STORAGEADAPTER
      StorageAdapter.commitToLog(activeKey, {
        type: 'physical',
        primary: {
          value: parseFloat(result.fitnessLevel),
          unit: 'ml/kg/min',
          label: 'Kondital'
        },
        norm: evaluation ? {
          label: evaluation.label,
          color: evaluation.color,
          bg: evaluation.color + '18'
        } : undefined,
        subMetrics: {
          testType: activeTestType,
          vo2maxLmin: parseFloat(result.maxOxygenUptake),
          timeMin: min,
          timeSec: sec,
          heartRate: hr
        },
        context: {
          age,
          gender,
          weight,
          height,
          formulaKey: usedFormulaKey
        }
      });

    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resVo2Max) resVo2Max.textContent = '-';
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
    if (marker) marker.style.display = 'none';
  }

  // Event listeners for Test Type Selector
  testTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      saveDraftAndProfile();
      activeTestType = btn.getAttribute('data-test-type');
      loadInitialData();
      updateTimeFieldsForActiveTest();
      updateTestTypeUI();
      toggleFormulaPicker(false);
      calculate();
    });
  });

  // Inputs event listeners
  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      calculate();
    });
  }

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="rw_age"]')?.value || 0);
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
      StorageAdapter.clearDraft(activeKey);
      StorageAdapter.clearLog(activeKey);

      activeTestType = 'rockport';
      activeFormulaKey = 'auto';
      timesByTest = { rockport: { min: '', sec: '' }, ukk: { min: '', sec: '' } };
      
      updateTestTypeUI();
      updateTimeFieldsForActiveTest();
      toggleFormulaPicker(false);
      
      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
        else if (input.type !== 'radio') input.value = '';
      });

      if (popup) popup.style.display = 'none';
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
            link.download = `${activeTestType}-test-rapport.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadInitialData();
  updateTimeFieldsForActiveTest();
  updateTestTypeUI();
  calculate();
}

export const initRockportUI = initCalculator;