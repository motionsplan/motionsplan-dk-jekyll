// assets/js/ui/max-hr-ui.js
import { estimateMaxHr, calculateMaxHrUI, HRMAX_FORMULA_DEFINITIONS } from '../core/max-hr.js';

export function initMaxHr(container) {
  if (!container) return;

  let activeFormulaKey = 'tanaka';

  const inputs = container.querySelectorAll('.js-mh-input');
  
  // Formel-elementer
  const formulaBar = container.querySelector('.js-mh-formula-bar');
  const manualWrapper = container.querySelector('.js-mh-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-mh-picker-container');

  // Gender UI
  const genderHint = container.querySelector('.js-mh-gender-hint');
  const genderRadios = container.querySelectorAll('input[name="mh_gender"]');

  // Outputs
  const outputBox = container.querySelector('.js-mh-output');
  const activeFormulaBox = container.querySelector('.js-mh-active-formula');
  
  const avgBox = container.querySelector('.js-mh-avg');
  const minBox = container.querySelector('.js-mh-min');
  const minNameBox = container.querySelector('.js-mh-min-name');
  const maxBox = container.querySelector('.js-mh-max');
  const maxNameBox = container.querySelector('.js-mh-max-name');
  
  const avgBtn = container.querySelector('.js-mh-avg-btn');
  const popup = container.querySelector('.js-mh-popup');
  const popupClose = container.querySelector('.js-mh-popup-close');
  const tableBody = container.querySelector('.js-mh-table-body');
  
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');
  const chartDetailsEl = container.querySelector('.js-mh-chart-details');
  const canvas = container.querySelector('.js-mh-chart');
  
  let chartInstance = null;

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

    const availableKeys = Object.keys(HRMAX_FORMULA_DEFINITIONS);

    pickerContainer.innerHTML = availableKeys.map(key => {
      const f = HRMAX_FORMULA_DEFINITIONS[key];
      const isSelected = key === activeFormulaKey;
      const isRec = f.isRecommended;

      return `
        <div class="mp-mh-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${isRec ? '<span class="mp-mh-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-mh-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
            ${f.desc}${f.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${f.see})</span>` : ''}
          </div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-mh-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeFormulaKey = card.getAttribute('data-formula-key');
        toggleFormulaPicker(false);
        
        // Hvis Gulati vælges, tvinges køn til Kvinde
        if (activeFormulaKey === 'gulati') {
          const femaleRadio = container.querySelector('input[name="mh_gender"][value="female"]');
          if (femaleRadio) femaleRadio.checked = true;
        }

        saveState();
        calculate();
      });
    });
  }

  function saveState() {
    const ageVal = container.querySelector('[name="mh_age"]')?.value || '';
    const genderVal = container.querySelector('input[name="mh_gender"]:checked')?.value || 'male';
    localStorage.setItem('mp_maxhr_state_v3', JSON.stringify({ age: ageVal, gender: genderVal, formula: activeFormulaKey }));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_maxhr_state_v3');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.age && container.querySelector('[name="mh_age"]')) {
          container.querySelector('[name="mh_age"]').value = state.age;
        }
        if (state.formula && HRMAX_FORMULA_DEFINITIONS[state.formula]) {
          activeFormulaKey = state.formula;
        } else {
          activeFormulaKey = 'tanaka';
        }
        if (state.gender) {
          const radio = container.querySelector(`input[name="mh_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      } catch (e) {}
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', () => { saveState(); calculate(); });
    input.addEventListener('change', () => { saveState(); calculate(); });
  });

  genderRadios.forEach(radio => {
    radio.addEventListener('change', () => { updateGenderUI(); saveState(); calculate(); });
  });

  if (avgBtn && popup && popupClose) {
    avgBtn.addEventListener('click', () => {
      if (parseFloat(container.querySelector('[name="mh_age"]').value) > 0) {
        popup.style.display = 'flex';
      }
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  if (chartDetailsEl) {
    chartDetailsEl.addEventListener('toggle', () => {
      if (chartDetailsEl.open && chartInstance) {
        chartInstance.resize();
      }
    });
  }

  function updateGenderUI() {
    const activeDef = HRMAX_FORMULA_DEFINITIONS[activeFormulaKey] || HRMAX_FORMULA_DEFINITIONS.tanaka;
    
    if (genderHint) {
      if (activeDef.requiresGender === 'female_only') {
        genderHint.textContent = '(Gulati gælder kun for kvinder)';
      } else if (activeDef.requiresGender === true) {
        genderHint.textContent = '(Formlen benytter køn)';
      } else {
        genderHint.textContent = '(Ikke påkrævet for denne formel)';
      }
    }

    genderRadios.forEach(r => {
      const box = r.nextElementSibling;
      if (r.checked) {
        box.style.borderColor = '#2563eb'; box.style.backgroundColor = '#2563eb'; box.style.color = '#ffffff';
      } else {
        box.style.borderColor = '#e2e8f0'; box.style.backgroundColor = '#f8fafc'; box.style.color = '#64748b';
      }
    });
  }

  function calculate() {
    saveState();

    const ageVal = parseFloat(container.querySelector('[name="mh_age"]')?.value) || 0;
    const genderVal = container.querySelector('input[name="mh_gender"]:checked')?.value || 'male';

    const activeDef = HRMAX_FORMULA_DEFINITIONS[activeFormulaKey] || HRMAX_FORMULA_DEFINITIONS.tanaka;
    const isRec = activeDef.isRecommended;

    // OPDATER FORMEL BADGE BAR (COLLAPSED)
    if (formulaBar && activeDef) {
      formulaBar.innerHTML = `
        <div class="mp-mh-badge-header">
          <div class="mp-mh-badge-title-group">
            <strong class="mp-mh-badge-title">${activeDef.name}</strong>
            ${isRec ? '<span class="mp-mh-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-mh-toggle-override mp-mh-btn-gear" title="Skift formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
          ${activeDef.desc}${activeDef.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${activeDef.see})</span>` : ''}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-mh-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();
    updateGenderUI();

    if (ageVal <= 0) {
      if (outputBox) outputBox.textContent = '-';
      if (activeFormulaBox) activeFormulaBox.textContent = '-';
      if (avgBox) avgBox.textContent = '-';
      if (minBox) minBox.textContent = '-';
      if (minNameBox) minNameBox.textContent = '-';
      if (maxBox) maxBox.textContent = '-';
      if (maxNameBox) maxNameBox.textContent = '-';
      if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
      return;
    }

    const result = calculateMaxHrUI({ age: ageVal, gender: genderVal, formula: activeFormulaKey });
    
    if (result.isValid && outputBox) {
      outputBox.textContent = result.maxHr;
      if (activeFormulaBox) {
        activeFormulaBox.textContent = `Udregnet vha. ${activeDef.shortName}`;
      }
    }

    let formulaResults = [];
    const keysToTest = Object.keys(HRMAX_FORMULA_DEFINITIONS);

    for (const key of keysToTest) {
      if (key === 'gulati' && genderVal === 'male') continue;
      const val = Math.round(estimateMaxHr(ageVal, genderVal, key));
      formulaResults.push({ key, name: HRMAX_FORMULA_DEFINITIONS[key].shortName, val });
    }

    const sortedResults = [...formulaResults].sort((a, b) => a.val - b.val);
    const minObj = sortedResults[0];
    const maxObj = sortedResults[sortedResults.length - 1];
    const avgHr = Math.round(estimateMaxHr(ageVal, genderVal, 'average'));

    if (avgBox) avgBox.textContent = avgHr;
    if (minBox) minBox.textContent = minObj.val;
    if (minNameBox) minNameBox.textContent = minObj.name;
    if (maxBox) maxBox.textContent = maxObj.val;
    if (maxNameBox) maxNameBox.textContent = maxObj.name;

    // Byg popup-tabellen
    if (tableBody) {
      tableBody.innerHTML = '';

      sortedResults.forEach(r => {
        let badges = '';
        if (r.key === maxObj.key) badges += `<span style="font-size: 0.6rem; background: #fee2e2; color: #991b1b; padding: 2px 5px; border-radius: 4px; margin-left: 6px; vertical-align: middle;">Højeste</span>`;
        if (r.key === minObj.key) badges += `<span style="font-size: 0.6rem; background: #f1f5f9; color: #475569; padding: 2px 5px; border-radius: 4px; margin-left: 6px; vertical-align: middle;">Laveste</span>`;
        
        let rowStyle = 'border-bottom: 1px solid #e2e8f0;';
        let nameStyle = 'color: #334155; font-size: 0.8rem;';
        let valStyle = 'text-align: right; font-weight: 600; color: #0f172a; font-size: 0.85rem; width: 60px;';

        if (r.key === activeFormulaKey) {
          rowStyle = 'border-bottom: 1px solid #e2e8f0; background-color: #eff6ff; font-weight: 700;';
          nameStyle = 'color: #0f172a; font-weight: 700; font-size: 0.8rem;';
          valStyle = 'text-align: right; font-weight: 800; color: #0f172a; font-size: 0.85rem; width: 60px;';
          badges += `<span style="font-size: 0.6rem; background: #3b82f6; color: #fff; padding: 2px 5px; border-radius: 4px; margin-left: 6px; vertical-align: middle;">Valgt</span>`;
        }

        const tr = document.createElement('tr');
        tr.style = rowStyle;
        tr.innerHTML = `
          <td style="padding: 0.6rem 0.25rem; ${nameStyle}">${r.name} ${badges}</td>
          <td style="padding: 0.6rem 0.25rem; ${valStyle}">${r.val} bpm</td>
        `;
        tableBody.appendChild(tr);
      });
    }

    updateChart(ageVal, genderVal, activeFormulaKey, result.maxHr);
  }

  function updateChart(currentAge, gender, selectedFormula, currentMaxHr) {
    if (!window.Chart || !canvas) return;
    const labels = [20, 30, 40, 50, 60, 70, 80];
    const datasets = [];

    const keysToTest = Object.keys(HRMAX_FORMULA_DEFINITIONS);

    for (const key of keysToTest) {
      if (key === 'gulati' && gender === 'male') continue;
      const dataPoints = labels.map(a => estimateMaxHr(a, gender, key));
      datasets.push({
        label: HRMAX_FORMULA_DEFINITIONS[key].shortName,
        data: dataPoints,
        borderColor: (key === selectedFormula) ? '#2563eb' : '#cbd5e1',
        borderWidth: (key === selectedFormula) ? 3 : 1,
        tension: 0.3,
        pointRadius: 0
      });
    }

    if (currentMaxHr) {
      datasets.push({
        label: 'Dit resultat',
        data: [{ x: currentAge, y: currentMaxHr }],
        backgroundColor: '#ef4444',
        borderColor: '#ef4444',
        pointRadius: 6,
        type: 'scatter'
      });
    }

    if (chartInstance) { chartInstance.destroy(); }

    chartInstance = new Chart(canvas, {
      type: 'line',
      data: { labels: labels, datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Alder (år)' }, type: 'linear', min: 15, max: 85 },
          y: { title: { display: true, text: 'Maxpuls (bpm)' }, min: 130, max: 210 }
        }
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem('mp_maxhr_state_v3'); } catch(e) {}
      activeFormulaKey = 'tanaka';
      toggleFormulaPicker(false);
      
      const ageInput = container.querySelector('[name="mh_age"]');
      if (ageInput) ageInput.value = '';
      
      const maleRadio = container.querySelector('input[name="mh_gender"][value="male"]');
      if (maleRadio) maleRadio.checked = true;
      
      if (popup) popup.style.display = 'none';
      if (chartDetailsEl) chartDetailsEl.open = false;
      
      updateGenderUI();
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (popup) popup.style.display = 'none'; 
      html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(c => {
        const link = document.createElement('a');
        link.download = 'maxpuls-rapport.png';
        link.href = c.toDataURL('image/png');
        link.click();
      });
    });
  }

  loadState();
  updateGenderUI();
  calculate();
}

export const initCalculator = initMaxHr;