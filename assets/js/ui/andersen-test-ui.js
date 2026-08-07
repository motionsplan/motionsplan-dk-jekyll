// assets/js/ui/andersen-test-ui.js
import { calculateAndersenTest, getRecommendedAndersenFormula, ANDERSEN_FORMULAS } from '../core/andersen-test.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_andersen_state_v3';
  let activeFormulaKey = 'auto';

  const inputs = container.querySelectorAll('.js-at-input');
  const weightInput = container.querySelector('[name="at_weight"]');
  const weightHelper = container.querySelector('.js-at-weight-helper');

  // Formel UI
  const formulaBar = container.querySelector('.js-at-formula-bar');
  const manualWrapper = container.querySelector('.js-at-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-at-picker-container');

  // Outputs
  const resFitness = container.querySelector('.js-at-fitness');
  const resSdText = container.querySelector('.js-at-sd-text');
  const resEvalBtn = container.querySelector('.js-at-eval-badge');
  const resEvalText = container.querySelector('.js-at-eval-text');
  const resVo2Max = container.querySelector('.js-at-vo2max');
  const marker = container.querySelector('.js-at-continuum-marker');

  // Info Boks
  const infoTitle = container.querySelector('.js-at-formula-title');
  const infoDesc = container.querySelector('.js-at-formula-desc');
  const infoIcon = container.querySelector('.js-at-info-icon');

  // Popup DOM
  const tableBtn = container.querySelector('.js-at-table-btn');
  const popup = container.querySelector('.js-at-popup');
  const popupClose = container.querySelector('.js-at-popup-close');
  const tableBody = container.querySelector('.js-at-table-body');

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

  function renderFormulaPicker(weight) {
    if (!pickerContainer) return;

    const recommendedKey = getRecommendedAndersenFormula(weight);

    pickerContainer.innerHTML = Object.keys(ANDERSEN_FORMULAS).map(key => {
      const f = ANDERSEN_FORMULAS[key];
      const isSelected = key === activeFormulaKey || (activeFormulaKey === 'auto' && key === recommendedKey);
      const isRec = key === recommendedKey;

      return `
        <div class="mp-at-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${isRec ? '<span class="mp-at-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-at-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
            ${f.desc}${f.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${f.see})</span>` : ''}
          </div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-at-picker-card').forEach(card => {
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
        distance: container.querySelector('[name="at_distance"]')?.value || '',
        age: container.querySelector('[name="at_age"]')?.value || '',
        weight: weightInput ? weightInput.value : '',
        gender: container.querySelector('input[name="at_gender"]:checked')?.value || 'male'
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
        if (state.distance && container.querySelector('[name="at_distance"]')) {
          container.querySelector('[name="at_distance"]').value = state.distance;
        }
        if (state.age && container.querySelector('[name="at_age"]')) {
          container.querySelector('[name="at_age"]').value = state.age;
        }
        if (state.weight && weightInput) weightInput.value = state.weight;
        if (state.gender) {
          const radio = container.querySelector(`input[name="at_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function updateGenderUI() {
    const ageVal = parseInt(container.querySelector('[name="at_age"]')?.value || 0, 10);
    const isAdult = ageVal >= 18;

    const labelMale = container.querySelector('.js-at-label-male');
    const labelFemale = container.querySelector('.js-at-label-female');

    if (labelMale) labelMale.textContent = isAdult ? 'Mand' : 'Dreng';
    if (labelFemale) labelFemale.textContent = isAdult ? 'Kvinde' : 'Pige';

    const genderRadios = container.querySelectorAll('input[name="at_gender"]');
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

  function calculate() {
    saveState();
    updateGenderUI();

    const genderEl = container.querySelector('input[name="at_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const distance = container.querySelector('[name="at_distance"]')?.value || '';
    const age = parseInt(container.querySelector('[name="at_age"]')?.value || 0, 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');

    const res = calculateAndersenTest(gender, distance, weight, activeFormulaKey);

    const recKey = getRecommendedAndersenFormula(weight);
    const activeDefKey = (activeFormulaKey === 'auto' || !ANDERSEN_FORMULAS[activeFormulaKey]) ? recKey : activeFormulaKey;
    const activeDef = ANDERSEN_FORMULAS[activeDefKey];

    // OPDATER FORMEL BADGE BAR
    if (formulaBar && activeDef) {
      const isRec = res.isRecommended || (activeFormulaKey === 'auto');

      formulaBar.innerHTML = `
        <div class="mp-at-badge-header">
          <div class="mp-at-badge-title-group">
            <strong class="mp-at-badge-title">${activeDef.name}</strong>
            ${isRec ? '<span class="mp-at-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-at-toggle-override mp-at-btn-gear" title="Skift formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35; margin-top: 0.15rem;">
          ${activeDef.desc}${activeDef.see ? ` <span style="color:#64748b; font-weight:600;">(SEE: ${activeDef.see})</span>` : ''}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-at-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker(weight);

    if (res && res.isValid) {
      if (weightHelper) {
        weightHelper.textContent = weight > 0 ? '✓ Vægt angivet' : 'Valgfri (kræves kun v. Aadland)';
        weightHelper.style.color = weight > 0 ? '#16a34a' : '#94a3b8';
      }

      if (resFitness) resFitness.textContent = res.formattedFitnessLevel;
      if (resSdText) resSdText.textContent = `± ${res.sd} ${res.sdUnit}`;
      if (resVo2Max) resVo2Max.textContent = res.formattedVO2Max;

      if (infoTitle) infoTitle.textContent = res.formulaName;
      if (infoDesc) {
        const badgeText = res.isRecommended ? ' (Anbefalet)' : ' (Manuelt valgt)';
        infoDesc.textContent = res.description + badgeText;
      }
      if (infoIcon) infoIcon.textContent = res.isRecommended ? '🏆' : '⚙️';

      // Evaluation & Slider
      const normGender = (gender === 'male' || gender === 'dreng') ? 'male' : 'female';
      const userAge = age > 0 ? age : 12;
      const evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);

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
        if (marker) {
          marker.style.left = `${percent}%`;
          marker.style.display = 'block';
        }
      } else if (marker) {
        marker.style.display = 'none';
      }

      // Popuptabel
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
            badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">${res.formattedFitnessLevel}</span>`;
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

      if (res && res.missingWeight) {
        if (weightHelper) {
          weightHelper.textContent = '⚠️ Påkrævet til Aadland (2014)';
          weightHelper.style.color = '#ef4444';
        }
        if (infoTitle) infoTitle.textContent = 'Indtast kropsvægt';
        if (infoDesc) infoDesc.textContent = 'Aadland (2014) formlen kræver, at du indtaster din vægt i kg.';
        if (infoIcon) infoIcon.textContent = '⚠️';
      }
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resSdText) resSdText.textContent = '± 4.2 ml/kg/min';
    if (resVo2Max) resVo2Max.textContent = '-';
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (resEvalBtn) {
      resEvalBtn.style.backgroundColor = '#e2e8f0';
      resEvalBtn.style.color = '#64748b';
    }
    if (weightHelper) {
      weightHelper.textContent = 'Valgfri (kræves kun v. Aadland)';
      weightHelper.style.color = '#94a3b8';
    }
    if (infoTitle) infoTitle.textContent = 'Anvendt formel';
    if (infoDesc) infoDesc.textContent = 'Indtast distance for at se resultat og formelinfo.';
    if (infoIcon) infoIcon.textContent = 'ℹ️';
    if (marker) marker.style.display = 'none';
  }

  // Event Listeners
  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseInt(container.querySelector('[name="at_age"]')?.value || 0, 10);
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
      
      const distInput = container.querySelector('[name="at_distance"]');
      const ageInput = container.querySelector('[name="at_age"]');
      const maleRadio = container.querySelector('input[name="at_gender"][value="male"]');

      if (distInput) distInput.value = '1150';
      if (ageInput) ageInput.value = '12';
      if (weightInput) weightInput.value = '';
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
            link.download = 'andersen-test-rapport.png';
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

export const initAndersenTest = initCalculator;
export default initCalculator;