// assets/js/ui/wattmax-test-ui.js
import { calculateWattMax, getRecommendedFormulaKey, WATTMAX_FORMULAS } from '../core/wattmax-test.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_wattmax_state_v2';
  let activeFormulaKey = 'auto';

  const inputs = container.querySelectorAll('.js-wm-input');
  
  // Formel UI elementer
  const formulaBar = container.querySelector('.js-wm-formula-bar');
  const manualWrapper = container.querySelector('.js-wm-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-wm-picker-container');

  // Gender mærkater
  const maleLabel = container.querySelector('.js-wm-gender-male-label');
  const femaleLabel = container.querySelector('.js-wm-gender-female-label');

  // Resultat DOM elementer
  const resFitness = container.querySelector('.js-wm-fitness');
  const resMpo = container.querySelector('.js-wm-mpo');
  const resVo2Max = container.querySelector('.js-wm-vo2max');
  const resEvalBadge = container.querySelector('.js-wm-eval-badge');
  const marker = container.querySelector('.js-wm-continuum-marker');
  
  // Popup DOM
  const tableBtn = container.querySelector('.js-wm-table-btn');
  const popup = container.querySelector('.js-wm-popup');
  const popupClose = container.querySelector('.js-wm-popup-close');
  const tableBody = container.querySelector('.js-wm-table-body');

  function updateGenderLabels(age) {
    if (maleLabel && femaleLabel) {
      if (age > 0 && age < 15) {
        maleLabel.textContent = 'Dreng';
        femaleLabel.textContent = 'Pige';
      } else {
        maleLabel.textContent = 'Mand';
        femaleLabel.textContent = 'Kvinde';
      }
    }
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

  function renderFormulaPicker(recommendedKey) {
    if (!pickerContainer) return;

    pickerContainer.innerHTML = Object.keys(WATTMAX_FORMULAS).map(key => {
      const f = WATTMAX_FORMULAS[key];
      const isSelected = (key === activeFormulaKey) || (activeFormulaKey === 'auto' && key === recommendedKey);
      const isRec = key === recommendedKey;

      return `
        <div class="mp-wm-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${isRec ? '<span class="mp-wm-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-wm-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">${f.desc}</div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-wm-picker-card').forEach(card => {
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
        age: container.querySelector('[name="wm_age"]')?.value || '',
        weight: container.querySelector('[name="wm_weight"]')?.value || '',
        watt: container.querySelector('[name="wm_watt"]')?.value || '',
        sec: container.querySelector('[name="wm_sec"]')?.value || '',
        gender: container.querySelector('input[name="wm_gender"]:checked')?.value || 'male'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.activeFormulaKey) activeFormulaKey = state.activeFormulaKey;
        if (state.age !== undefined && state.age !== '') container.querySelector('[name="wm_age"]').value = state.age;
        if (state.weight !== undefined && state.weight !== '') container.querySelector('[name="wm_weight"]').value = state.weight;
        if (state.watt !== undefined && state.watt !== '') container.querySelector('[name="wm_watt"]').value = state.watt;
        if (state.sec !== undefined && state.sec !== '') container.querySelector('[name="wm_sec"]').value = state.sec;
        if (state.gender) {
          const radio = container.querySelector(`input[name="wm_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function calculate() {
    saveState();

    const age = parseFloat(container.querySelector('[name="wm_age"]')?.value || 0);
    const weight = parseFloat(container.querySelector('[name="wm_weight"]')?.value || 0);
    const wmax = parseFloat(container.querySelector('[name="wm_watt"]')?.value || 0);
    const sec = parseFloat(container.querySelector('[name="wm_sec"]')?.value || 0);
    const genderEl = container.querySelector('input[name="wm_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    updateGenderLabels(age);

    const recommendedKey = getRecommendedFormulaKey(age, weight);
    const params = { wmax, sec, weight, age, formula: activeFormulaKey };
    const result = calculateWattMax(params);

    const resolvedKey = (activeFormulaKey === 'auto') ? recommendedKey : activeFormulaKey;
    const activeDef = WATTMAX_FORMULAS[resolvedKey] || WATTMAX_FORMULAS.andersen;
    const isRecommended = (resolvedKey === recommendedKey);

    // Opdater Formel Badge i toppen med den KONKRETE testbeskrivelse
    if (formulaBar && activeDef) {
      formulaBar.innerHTML = `
        <div class="mp-wm-badge-header">
          <div class="mp-wm-badge-title-group">
            <strong class="mp-wm-badge-title">${activeDef.name}</strong>
            ${isRecommended ? '<span class="mp-wm-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-wm-toggle-override mp-wm-btn-gear" title="Skift formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35; margin-top: 0.15rem;">
          ${activeDef.desc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-wm-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker(recommendedKey);

    if (result.isValid) {
      resFitness.textContent = result.fitnessLevel;
      resMpo.textContent = result.mpo;
      resVo2Max.textContent = result.vo2max;

      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const evaluation = evaluateFitnessLevel(result.fitnessLevel, age, normGender);
      
      if (evaluation) {
        resEvalBadge.textContent = evaluation.label;
        resEvalBadge.style.backgroundColor = evaluation.color;
        resEvalBadge.style.color = '#ffffff';
      }

      // Slider Marker positionering
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

        // Opbyg Popuptabel
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
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resMpo) resMpo.textContent = '-';
    if (resVo2Max) resVo2Max.textContent = '-';
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
    if (marker) marker.style.display = 'none';
  }

  // Event Listeners
  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="wm_age"]')?.value || 0);
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
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      activeFormulaKey = 'auto';
      toggleFormulaPicker(false);
      
      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
        else if (input.type !== 'radio') input.value = input.getAttribute('placeholder') || '';
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
            link.download = 'wattmax-test-rapport.png';
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

export const initWattMaxUI = initCalculator;