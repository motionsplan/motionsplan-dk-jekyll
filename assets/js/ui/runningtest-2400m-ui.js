// assets/js/ui/runningtest-2400m-ui.js
import { calculate2400m, evaluatePolice2400m, evaluateCooper2400mTime, getCooperThresholdsMen, getCooperThresholdsWomen, RUNNING_2400M_FORMULAS } from '../core/runningtest-2400m.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_running2400m_state_v3';
  let activeFormulaKey = 'cooper';

  const inputs = container.querySelectorAll('.js-r24-input');
  
  // Formel UI
  const formulaBar = container.querySelector('.js-r24-formula-bar');
  const manualWrapper = container.querySelector('.js-r24-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-r24-picker-container');

  // Outputs
  const resFitness = container.querySelector('.js-r24-fitness');
  const resEvalBtn = container.querySelector('.js-r24-eval-badge');
  const resEvalText = container.querySelector('.js-r24-eval-text');
  
  const policeIcon = container.querySelector('.js-r24-police-icon');
  const policeBadge = container.querySelector('.js-r24-police-badge');
  const policeGrade = container.querySelector('.js-r24-police-grade');
  const policeStatus = container.querySelector('.js-r24-police-status');

  const resCooperBadge = container.querySelector('.js-r24-cooper-badge');
  const resSpeed = container.querySelector('.js-r24-speed');
  const marker = container.querySelector('.js-r24-continuum-marker');
  
  // Popup DOM
  const popupBtns = container.querySelectorAll('.js-open-popup-btn');
  const popup = container.querySelector('.js-r24-popup');
  const popupTitle = container.querySelector('.js-r24-popup-title');
  const popupClose = container.querySelector('.js-r24-popup-close');
  const tableBody = container.querySelector('.js-r24-table-body');

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

    pickerContainer.innerHTML = Object.keys(RUNNING_2400M_FORMULAS).map(key => {
      const f = RUNNING_2400M_FORMULAS[key];
      const isSelected = key === activeFormulaKey;

      return `
        <div class="mp-2400-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${f.isRecommended ? '<span class="mp-2400-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-2400-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
            ${f.desc}${f.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${f.see})</span>` : ''}
          </div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-2400-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeFormulaKey = card.getAttribute('data-formula-key');
        toggleFormulaPicker(false);
        saveState();
        calculate();
      });
    });
  }

  function saveState() {
    try {
      const state = {
        activeFormulaKey,
        min: container.querySelector('[name="r24_min"]')?.value || '',
        sec: container.querySelector('[name="r24_sec"]')?.value || '',
        age: container.querySelector('[name="r24_age"]')?.value || '',
        gender: container.querySelector('input[name="r24_gender"]:checked')?.value || 'male'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.activeFormulaKey && RUNNING_2400M_FORMULAS[state.activeFormulaKey]) {
          activeFormulaKey = state.activeFormulaKey;
        }
        if (state.min) container.querySelector('[name="r24_min"]').value = state.min;
        if (state.sec) container.querySelector('[name="r24_sec"]').value = state.sec;
        if (state.age) container.querySelector('[name="r24_age"]').value = state.age;
        if (state.gender) {
          const radio = container.querySelector(`input[name="r24_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function updateGenderUI() {
    const genderEl = container.querySelector('input[name="r24_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const isMale = (gender === 'male' || gender === 'mand');

    if (policeIcon) {
      policeIcon.textContent = isMale ? '👮‍♂️' : '👮‍♀️';
    }

    const genderRadios = container.querySelectorAll('input[name="r24_gender"]');
    genderRadios.forEach(r => {
      const box = r.nextElementSibling;
      if (box) {
        if (r.checked) {
          box.style.borderColor = '#2563eb'; box.style.backgroundColor = '#2563eb'; box.style.color = '#ffffff';
        } else {
          box.style.borderColor = '#cbd5e1'; box.style.backgroundColor = '#ffffff'; box.style.color = '#475569';
        }
      }
    });
  }

  function formatTimeFromSec(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function renderPopupTable(type) {
    if (!tableBody || !popupTitle) return;

    const min = parseFloat(container.querySelector('[name="r24_min"]')?.value || 0);
    const sec = parseFloat(container.querySelector('[name="r24_sec"]')?.value || 0);
    const age = parseFloat(container.querySelector('[name="r24_age"]')?.value || 0);
    const genderEl = container.querySelector('input[name="r24_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const isMale = (gender === 'male' || gender === 'mand');

    const result = calculate2400m({ min, sec, formula: activeFormulaKey });

    tableBody.innerHTML = '';

    if (type === 'police') {
      popupTitle.textContent = `Politiprøven (2.400m) – Karakterskala (${isMale ? 'Mænd' : 'Kvinder'})`;

      const policeData = isMale ? [
        { grade: '12', time: '≤ 9:00', pass: true },
        { grade: '10', time: '9:01 - 9:40', pass: true },
        { grade: '7', time: '9:41 - 10:20', pass: true },
        { grade: '4', time: '10:21 - 11:00', pass: true },
        { grade: '02', time: '11:01 - 12:00', pass: true },
        { grade: '00', time: '12:01 - 12:30', pass: false },
        { grade: '-3', time: '> 12:30', pass: false }
      ] : [
        { grade: '12', time: '≤ 10:30', pass: true },
        { grade: '10', time: '10:31 - 11:30', pass: true },
        { grade: '7', time: '11:31 - 12:00', pass: true },
        { grade: '4', time: '12:01 - 12:40', pass: true },
        { grade: '02', time: '12:41 - 13:30', pass: true },
        { grade: '00', time: '13:31 - 14:00', pass: false },
        { grade: '-3', time: '> 14:00', pass: false }
      ];

      const currentPoliceEval = result.isValid ? evaluatePolice2400m(result.totalTimeSeconds, gender) : null;

      policeData.forEach(row => {
        const isMatch = currentPoliceEval && row.grade === currentPoliceEval.grade;
        const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
        const fontStyle = isMatch ? 'font-weight: 800; color: #0f172a;' : 'color: #334155;';
        
        let badgeHtml = '';
        if (isMatch) {
          badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:${row.pass ? '#22c55e' : '#ef4444'}; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">Din Karakter</span>`;
        }

        const tr = document.createElement('tr');
        tr.style = `border-bottom: 1px solid #e2e8f0; ${bgStyle}`;
        tr.innerHTML = `
          <td style="padding: 0.75rem 0.5rem; font-size: 0.9rem; ${fontStyle}">
            Karakter <strong>${row.grade}</strong> ${row.pass ? '<span style="color:#22c55e; font-size:0.75rem;">(Bestået)</span>' : '<span style="color:#ef4444; font-size:0.75rem;">(Ej bestået)</span>'}
          </td>
          <td style="padding: 0.75rem 0.5rem; text-align: right; font-size: 0.9rem; ${fontStyle}">
            ${row.time} ${badgeHtml}
          </td>
        `;
        tableBody.appendChild(tr);
      });

    } else if (type === 'cooper') {
      popupTitle.textContent = `Cooper 2.400m aldersnormer (${isMale ? 'Mænd' : 'Kvinder'}, ${age > 0 ? age + ' år' : 'alle aldre'})`;

      const t = isMale ? getCooperThresholdsMen(age || 25) : getCooperThresholdsWomen(age || 25);
      const currentCooperEval = result.isValid && age > 0 ? evaluateCooper2400mTime(result.totalTimeSeconds, age, gender) : null;

      const cooperRows = [
        { key: 'superior', label: 'I særklasse', time: `≤ ${formatTimeFromSec(t.superior)}`, color: '#3b82f6' },
        { key: 'excellent', label: 'Fremragende', time: `${formatTimeFromSec(t.superior + 1)} - ${formatTimeFromSec(t.excellent)}`, color: '#22c55e' },
        { key: 'good', label: 'God', time: `${formatTimeFromSec(t.excellent + 1)} - ${formatTimeFromSec(t.good)}`, color: '#eab308' },
        { key: 'fair', label: 'Middel', time: `${formatTimeFromSec(t.good + 1)} - ${formatTimeFromSec(t.fair)}`, color: '#f97316' },
        { key: 'poor', label: 'Lav', time: `> ${formatTimeFromSec(t.fair)}`, color: '#ef4444' }
      ];

      cooperRows.forEach(row => {
        const isMatch = currentCooperEval && row.label === currentCooperEval.label;
        const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
        const fontStyle = isMatch ? 'font-weight: 800; color: #0f172a;' : 'color: #334155;';
        const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
        
        let badgeHtml = '';
        if (isMatch) {
          badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">Dit Niveau</span>`;
        }

        const tr = document.createElement('tr');
        tr.style = `border-bottom: 1px solid #e2e8f0; ${bgStyle}`;
        tr.innerHTML = `
          <td style="padding: 0.75rem 0.5rem; font-size: 0.9rem; ${fontStyle}">
            <div style="display:flex; align-items:center;">${dot}${row.label}</div>
          </td>
          <td style="padding: 0.75rem 0.5rem; text-align: right; font-size: 0.9rem; ${fontStyle}">
            ${row.time} ${badgeHtml}
          </td>
        `;
        tableBody.appendChild(tr);
      });

    } else {
      popupTitle.textContent = `Kondital (VO₂max) for din alder (${isMale ? 'Mænd' : 'Kvinder'})`;
      const normGender = isMale ? 'male' : 'female';
      const thresholds = getFitnessThresholds(age || 30, normGender);
      const evaluation = result.isValid && age > 0 ? evaluateFitnessLevel(result.fitnessLevel, age, normGender) : null;

      if (thresholds) {
        const tableData = [
          { name: 'Meget lavt', range: `< ${thresholds[0]}`, color: '#ef4444' },
          { name: 'Lavt', range: `${thresholds[0]} - ${thresholds[1] - 1}`, color: '#f97316' },
          { name: 'Middel', range: `${thresholds[1]} - ${thresholds[2]}`, color: '#eab308' },
          { name: 'Højt', range: `${thresholds[2] + 1} - ${thresholds[3]}`, color: '#22c55e' },
          { name: 'Meget højt', range: `> ${thresholds[3]}`, color: '#3b82f6' }
        ];

        tableData.forEach(row => {
          const isMatch = evaluation && row.name === evaluation.label;
          const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
          const fontStyle = isMatch ? 'font-weight: 800; color: #0f172a;' : 'color: #334155;';
          const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
          
          let badgeHtml = '';
          if (isMatch) {
            badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">${result.fitnessLevel}</span>`;
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
    }
  }

  function calculate() {
    saveState();
    updateGenderUI();

    const min = parseFloat(container.querySelector('[name="r24_min"]')?.value || 0);
    const sec = parseFloat(container.querySelector('[name="r24_sec"]')?.value || 0);
    const age = parseFloat(container.querySelector('[name="r24_age"]')?.value || 0);
    const genderEl = container.querySelector('input[name="r24_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const result = calculate2400m({ min, sec, formula: activeFormulaKey });

    // Opdater Formel Badge
    const activeDef = RUNNING_2400M_FORMULAS[activeFormulaKey] || RUNNING_2400M_FORMULAS.cooper;
    if (formulaBar && activeDef) {
      formulaBar.innerHTML = `
        <div class="mp-2400-badge-header">
          <div class="mp-2400-badge-title-group">
            <strong class="mp-2400-badge-title">${activeDef.name}</strong>
            ${activeDef.isRecommended ? '<span class="mp-2400-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-r24-toggle-override mp-2400-btn-gear" title="Skift formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35; margin-top: 0.15rem;">
          ${activeDef.desc}${activeDef.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${activeDef.see})</span>` : ''}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-r24-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    if (result.isValid) {
      resFitness.textContent = result.fitnessLevel;

      // 1. GNS HASTIGHED
      const speedKmH = (2.4 / (result.totalTimeMinutes / 60)).toFixed(1);
      if (resSpeed) resSpeed.textContent = speedKmH.replace('.', ',');

      // 2. POLITIETS PRØVE VURDERING
      const policeEval = evaluatePolice2400m(result.totalTimeSeconds, gender);
      if (policeBadge && policeGrade && policeStatus && policeEval) {
        policeGrade.textContent = policeEval.grade;
        policeStatus.textContent = policeEval.status;
        policeBadge.style.backgroundColor = policeEval.color;
        policeBadge.style.color = '#ffffff';
      }

      // 3. COOPER ALDERSNORM VURDERING
      if (age > 0) {
        const cooperEval = evaluateCooper2400mTime(result.totalTimeSeconds, age, gender);
        if (resCooperBadge && cooperEval) {
          resCooperBadge.textContent = cooperEval.label;
          resCooperBadge.style.backgroundColor = cooperEval.color;
          resCooperBadge.style.color = '#ffffff';
        }

        // 4. VO2MAX ALDERSNORM (HERO)
        const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
        const evaluation = evaluateFitnessLevel(result.fitnessLevel, age, normGender);
        
        if (evaluation && resEvalBtn && resEvalText) {
          resEvalText.textContent = evaluation.label;
          resEvalBtn.style.backgroundColor = evaluation.color;
          resEvalBtn.style.color = '#ffffff';
        }

        // Slider Marker Position
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
        }
      } else {
        if (resCooperBadge) {
          resCooperBadge.textContent = 'Mangler alder';
          resCooperBadge.style.backgroundColor = '#e2e8f0';
          resCooperBadge.style.color = '#64748b';
        }
      }
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resSpeed) resSpeed.textContent = '-';
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (resEvalBtn) {
      resEvalBtn.style.backgroundColor = '#e2e8f0';
      resEvalBtn.style.color = '#64748b';
    }
    if (policeBadge && policeGrade && policeStatus) {
      policeGrade.textContent = '-';
      policeStatus.textContent = '-';
      policeBadge.style.backgroundColor = '#e2e8f0';
      policeBadge.style.color = '#64748b';
    }
    if (resCooperBadge) {
      resCooperBadge.textContent = '-';
      resCooperBadge.style.backgroundColor = '#e2e8f0';
      resCooperBadge.style.color = '#64748b';
    }
    if (marker) marker.style.display = 'none';
  }

  // Popup triggers
  popupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const popupType = btn.getAttribute('data-popup-type') || 'vo2max';
      renderPopupTable(popupType);
      if (popup) popup.style.display = 'flex';
    });
  });

  if (popupClose && popup) {
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      activeFormulaKey = 'cooper';
      toggleFormulaPicker(false);
      
      const minInput = container.querySelector('[name="r24_min"]');
      const secInput = container.querySelector('[name="r24_sec"]');
      const ageInput = container.querySelector('[name="r24_age"]');
      const maleRadio = container.querySelector('input[name="r24_gender"][value="male"]');

      if (minInput) minInput.value = '10';
      if (secInput) secInput.value = '30';
      if (ageInput) ageInput.value = '30';
      if (maleRadio) maleRadio.checked = true;

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
            link.download = '2400m-test-rapport.png';
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