// assets/js/ui/aastrand-etpunktstest-ui.js
import { AASTRAND_ETPUNKTSTEST_FORMULAS } from '../core/aastrand-etpunktstest.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

const TEST_ID = 'astrand_bike';

export function initAAstrandEtpunktstestUI(container, calcId = 'aastrand-etpunktstest-all') {
  if (!container) return;

  const formulaEngine = AASTRAND_ETPUNKTSTEST_FORMULAS['aastrand-etpunktstest-all'];

  // DOM Køn-knapper
  const genderBtns = container.querySelectorAll('.js-astrand-gender');
  
  // DOM Inputs
  const ageInput = container.querySelector('[data-input="age"]');
  const weightInput = container.querySelector('[data-input="weight"]');
  const wattInput = container.querySelector('[data-input="watt"]');
  const hrInput = container.querySelector('[data-input="hr"]');

  // DOM Notice / Advarsel
  const noticeEl = container.querySelector('#aastrand-etpunktstest-notice');
  const wattGuide = container.querySelector('.js-astrand-watt-guide');

  // DOM Resultatfelter
  const resFitness = container.querySelector('.js-astrand-res-fitness');
  const resVo2 = container.querySelector('.js-astrand-res-vo2');
  const resAgeFactor = container.querySelector('.js-astrand-res-agefactor');
  const resBadge = container.querySelector('.js-astrand-res-badge');
  const scalePin = container.querySelector('.js-astrand-scale-pin');

  // DOM Popup Modal elements
  const tableBtn = container.querySelector('.js-astrand-table-btn');
  const popup = container.querySelector('.js-astrand-popup');
  const popupClose = container.querySelector('.js-astrand-popup-close');
  const tableBody = container.querySelector('.js-astrand-table-body');

  // Action Buttons
  const saveBtn = container.querySelector('.js-astrand-save-btn') || container.querySelector('.js-save-btn');
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  let currentGender = 'male';

  function saveDraftAndProfile() {
    const ageVal = ageInput ? parseFloat(ageInput.value) || 0 : 0;
    const weightVal = weightInput ? parseFloat(weightInput.value) || 0 : 0;

    if (ageVal > 0 || weightVal > 0) {
      StorageAdapter.saveProfile({
        ...(ageVal > 0 && { age: ageVal }),
        ...(weightVal > 0 && { weight: weightVal }),
        gender: currentGender
      });
    }

    StorageAdapter.saveDraft(TEST_ID, {
      gender: currentGender,
      age: ageInput ? ageInput.value : '',
      weight: weightInput ? weightInput.value : '',
      watt: wattInput ? wattInput.value : '',
      hr: hrInput ? hrInput.value : ''
    });
  }

  function loadInitialData() {
    const profile = StorageAdapter.getProfile();
    const draft = StorageAdapter.loadDraft(TEST_ID);

    if (draft) {
      if (draft.gender) currentGender = draft.gender;
      if (ageInput && draft.age !== undefined && draft.age !== '') ageInput.value = draft.age;
      if (weightInput && draft.weight !== undefined && draft.weight !== '') weightInput.value = draft.weight;
      if (wattInput && draft.watt !== undefined && draft.watt !== '') wattInput.value = draft.watt;
      if (hrInput && draft.hr !== undefined && draft.hr !== '') hrInput.value = draft.hr;
    } else {
      if (profile.gender) currentGender = profile.gender;
      if (profile.age && ageInput) ageInput.value = profile.age;
      if (profile.weight && weightInput) weightInput.value = profile.weight;
    }
  }

  function updateGenderUI(gender) {
    currentGender = gender;
    genderBtns.forEach(btn => {
      if (btn.getAttribute('data-gender') === gender) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (wattGuide) {
      wattGuide.textContent = (gender === 'female') ? '(Vejledende: 50–100W)' : '(Vejledende: 100–150W)';
    }

    calculate();
  }

  function updateNoticeUI(hrVal) {
    if (!noticeEl) return;

    const wattText = (currentGender === 'female') ? '(Vejledende: 50–100W)' : '(Vejledende: 100–150W)';

    if (!hrVal || isNaN(hrVal)) {
      noticeEl.style.color = '#64748b';
      noticeEl.innerHTML = `
        <span>💡</span>
        <span>Puls skal ramme steady state (~120–170 bpm) efter ca. 5–6 min. <span class="js-astrand-watt-guide" style="font-weight: 700; color: #475569;">${wattText}</span></span>
      `;
    } else if (hrVal < 120) {
      noticeEl.style.color = '#dc2626';
      noticeEl.innerHTML = `
        <span>⚠️</span>
        <span><strong>Pulsen er for lav (${hrVal} bpm):</strong> Arbejdspulsen nåede ikke det gyldige steady-state interval (120–170 bpm). Gentag testen med en højere belastning (+25–50 W).</span>
      `;
    } else if (hrVal > 170) {
      noticeEl.style.color = '#dc2626';
      noticeEl.innerHTML = `
        <span>⚠️</span>
        <span><strong>Pulsen er for høj (${hrVal} bpm):</strong> Arbejdspulsen ligger over det gyldige interval (120–170 bpm). Gentag testen med en lavere belastning.</span>
      `;
    } else {
      noticeEl.style.color = '#16a34a';
      noticeEl.innerHTML = `
        <span>✅</span>
        <span><strong>Godkendt arbejdspuls (${hrVal} bpm):</strong> Pulsen er inden for det gyldige steady-state interval (120–170 bpm).</span>
      `;
    }
  }

  function calculate() {
    saveDraftAndProfile();

    const ageVal = ageInput ? parseFloat(ageInput.value) || 0 : 0;
    const weightVal = weightInput ? parseFloat(weightInput.value) || 0 : 0;
    const wattVal = wattInput ? parseFloat(wattInput.value) || 0 : 0;
    const hrVal = hrInput ? parseFloat(hrInput.value) || 0 : 0;

    // Opdater dynamisk advarselstekst
    updateNoticeUI(hrVal);

    const params = {
      gender: currentGender,
      age: ageVal,
      weight: weightVal,
      watt: wattVal,
      hr: hrVal
    };

    const res = formulaEngine ? formulaEngine.evaluate(params) : null;

    if (res && res.isValid) {
      if (resFitness) resFitness.textContent = res.fitnessLevel.toFixed(1);
      if (resVo2) resVo2.textContent = res.correctedVo2.toFixed(2);
      if (resAgeFactor) resAgeFactor.textContent = res.ageFactor.toFixed(2);

      const evaluation = evaluateFitnessLevel(res.fitnessLevel, ageVal, currentGender);
      if (evaluation && resBadge) {
        resBadge.textContent = evaluation.label;
        resBadge.style.backgroundColor = evaluation.color;
        resBadge.style.color = '#ffffff';
      } else if (resBadge) {
        resBadge.textContent = res.category.label;
        resBadge.style.backgroundColor = res.category.color;
        resBadge.style.color = '#ffffff';
      }

      if (scalePin) {
        const pct = Math.min(100, Math.max(0, ((res.fitnessLevel - 15) / (65 - 15)) * 100));
        scalePin.style.left = `${pct}%`;
      }

      buildPopupTable(res.fitnessLevel, ageVal, currentGender, evaluation);

      StorageAdapter.commitToLog(TEST_ID, {
        type: 'physical',
        primary: {
          value: parseFloat(res.fitnessLevel.toFixed(1)),
          unit: 'ml/kg/min',
          label: 'Kondital'
        },
        norm: evaluation ? {
          label: evaluation.label,
          color: evaluation.color,
          bg: evaluation.color + '18'
        } : undefined,
        subMetrics: {
          correctedVo2: parseFloat(res.correctedVo2.toFixed(2)),
          ageFactor: parseFloat(res.ageFactor.toFixed(2)),
          watt: wattVal,
          heartRate: hrVal
        },
        context: {
          age: ageVal,
          gender: currentGender,
          weight: weightVal
        }
      });

    } else {
      if (resFitness) resFitness.textContent = '-';
      if (resVo2) resVo2.textContent = '-';
      if (resAgeFactor) resAgeFactor.textContent = '-';
      if (resBadge) {
        resBadge.textContent = '-';
        resBadge.style.backgroundColor = '#94a3b8';
        resBadge.style.color = '#ffffff';
      }
      if (scalePin) scalePin.style.left = '0%';
      if (tableBody) tableBody.innerHTML = '';
    }
  }

  function buildPopupTable(fitnessVal, age, gender, evaluation) {
    if (!tableBody || age <= 0) return;

    const t = getFitnessThresholds(age, gender);
    if (!t) return;

    const currentScoreStr = fitnessVal ? fitnessVal.toFixed(1) : '';

    const tableData = [
      { name: 'Meget lavt', range: `< ${t[0]}`, color: '#ef4444' },
      { name: 'Lavt',       range: `${t[0]} - ${t[1] - 1}`, color: '#f97316' },
      { name: 'Middel',     range: `${t[1]} - ${t[2]}`, color: '#eab308' },
      { name: 'Højt',       range: `${t[2] + 1} - ${t[3]}`, color: '#22c55e' },
      { name: 'Meget højt', range: `> ${t[3]}`, color: '#3b82f6' }
    ];

    tableBody.innerHTML = '';
    tableData.forEach(row => {
      const isMatch = evaluation && row.name === evaluation.label;
      const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
      const fontStyle = isMatch ? 'font-weight: 700; color: #0f172a;' : 'color: #334155;';
      
      const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
      
      let badgeHtml = '';
      if (isMatch && currentScoreStr) {
        badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">${currentScoreStr}</span>`;
      }

      const tr = document.createElement('tr');
      tr.style = `border-bottom: 1px solid #e2e8f0; ${bgStyle}`;
      tr.innerHTML = `
        <td style="padding: 0.75rem 0.5rem; font-size: 0.875rem; ${fontStyle}">
          <div style="display:flex; align-items:center;">${dot}${row.name}</div>
        </td>
        <td style="padding: 0.75rem 0.5rem; text-align: right; font-size: 0.875rem; ${fontStyle}">
          ${row.range} ${badgeHtml}
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Popup Event Listeners
  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const ageVal = ageInput ? parseFloat(ageInput.value) || 0 : 0;
      if (ageVal > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Indtast venligst din alder først for at se tabellen.');
      }
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => updateGenderUI(btn.getAttribute('data-gender')));
  });

  container.querySelectorAll('.js-astrand-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(e => input.addEventListener(e, calculate));
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', calculate);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      StorageAdapter.clearDraft(TEST_ID);
      StorageAdapter.clearLog(TEST_ID);

      container.querySelectorAll('input').forEach(i => i.value = '');
      if (popup) popup.style.display = 'none';
      updateGenderUI('male');
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (popup) popup.style.display = 'none';
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'aastrand-etpunktstest-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadInitialData();
  updateGenderUI(currentGender);
}

export const initCalculator = initAAstrandEtpunktstestUI;