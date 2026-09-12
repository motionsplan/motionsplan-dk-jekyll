// assets/js/ui/sargent-jump-ui.js
import { calculateJumpReach, evaluateJumpHeight, JUMP_POWER_FORMULAS } from '../core/jump-reach.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_sargent_jump_state_v1';
  let activeFormulaKey = 'sayers_cmj';

  const inputs = container.querySelectorAll('.js-sg-input');
  const bodyHeightWrapper = container.querySelector('.js-sg-body-height-wrapper');

  const formulaBar = container.querySelector('.js-sg-formula-bar');
  const manualWrapper = container.querySelector('.js-sg-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-sg-picker-container');

  const resHeightOut = container.querySelector('.js-sg-height-out');
  const resPowerW = container.querySelector('.js-sg-power-w');
  const resPowerWKg = container.querySelector('.js-sg-power-wkg');
  const resEvalBtn = container.querySelector('.js-sg-eval-badge');
  const resEvalText = container.querySelector('.js-sg-eval-text');
  const marker = container.querySelector('.js-sg-continuum-marker');

  const infoTitle = container.querySelector('.js-sg-info-title');
  const infoDesc = container.querySelector('.js-sg-info-desc');

  const tableBtn = container.querySelector('.js-sg-table-btn');
  const popup = container.querySelector('.js-sg-popup');
  const popupClose = container.querySelector('.js-sg-popup-close');
  const tableBody = container.querySelector('.js-sg-table-body');

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

    pickerContainer.innerHTML = Object.keys(JUMP_POWER_FORMULAS).map(key => {
      const f = JUMP_POWER_FORMULAS[key];
      const isSelected = key === activeFormulaKey;

      return `
        <div class="mp-sg-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${f.isRecommended ? '<span class="mp-sg-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-sg-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
            ${f.desc}
          </div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-sg-picker-card').forEach(card => {
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
        standingReach: container.querySelector('[name="sg_standing_reach"]')?.value || '',
        jumpReach: container.querySelector('[name="sg_jump_reach"]')?.value || '',
        weight: container.querySelector('[name="sg_weight"]')?.value || '',
        bodyHeight: container.querySelector('[name="sg_body_height"]')?.value || '',
        age: container.querySelector('[name="sg_age"]')?.value || '',
        gender: container.querySelector('input[name="sg_gender"]:checked')?.value || 'male'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.activeFormulaKey && JUMP_POWER_FORMULAS[state.activeFormulaKey]) {
          activeFormulaKey = state.activeFormulaKey;
        }
        if (state.standingReach && container.querySelector('[name="sg_standing_reach"]')) {
          container.querySelector('[name="sg_standing_reach"]').value = state.standingReach;
        }
        if (state.jumpReach && container.querySelector('[name="sg_jump_reach"]')) {
          container.querySelector('[name="sg_jump_reach"]').value = state.jumpReach;
        }
        if (state.weight && container.querySelector('[name="sg_weight"]')) {
          container.querySelector('[name="sg_weight"]').value = state.weight;
        }
        if (state.bodyHeight && container.querySelector('[name="sg_body_height"]')) {
          container.querySelector('[name="sg_body_height"]').value = state.bodyHeight;
        }
        if (state.age && container.querySelector('[name="sg_age"]')) {
          container.querySelector('[name="sg_age"]').value = state.age;
        }
        if (state.gender) {
          const radio = container.querySelector(`input[name="sg_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function updateGenderUI() {
    const ageVal = parseInt(container.querySelector('[name="sg_age"]')?.value || 0, 10);
    const isAdult = ageVal >= 18;

    const labelMale = container.querySelector('.js-sg-label-male');
    const labelFemale = container.querySelector('.js-sg-label-female');

    if (labelMale) labelMale.textContent = isAdult ? 'Mand' : 'Dreng';
    if (labelFemale) labelFemale.textContent = isAdult ? 'Kvinde' : 'Pige';

    const genderRadios = container.querySelectorAll('input[name="sg_gender"]');
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

    const standingReach = container.querySelector('[name="sg_standing_reach"]')?.value || '';
    const jumpReach = container.querySelector('[name="sg_jump_reach"]')?.value || '';
    const weight = container.querySelector('[name="sg_weight"]')?.value || '';
    const bodyHeight = container.querySelector('[name="sg_body_height"]')?.value || '';
    const age = parseInt(container.querySelector('[name="sg_age"]')?.value || 0, 10);
    const genderEl = container.querySelector('input[name="sg_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const activeDef = JUMP_POWER_FORMULAS[activeFormulaKey] || JUMP_POWER_FORMULAS.sayers_cmj;

    if (bodyHeightWrapper) {
      bodyHeightWrapper.style.display = activeDef.requiresHeight ? 'block' : 'none';
    }

    if (formulaBar && activeDef) {
      formulaBar.innerHTML = `
        <div class="mp-sg-badge-header">
          <div class="mp-sg-badge-title-group">
            <strong class="mp-sg-badge-title">${activeDef.name}</strong>
            ${activeDef.isRecommended ? '<span class="mp-sg-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-sg-toggle-override mp-sg-btn-gear" title="Skift formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35; margin-top: 0.15rem;">
          ${activeDef.desc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-sg-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    const res = calculateJumpReach({
      inputMode: 'reach',
      standingReach,
      jumpReach,
      weight,
      bodyHeight,
      powerFormulaKey: activeFormulaKey
    });

    if (res && res.isValid) {
      if (resHeightOut) resHeightOut.textContent = res.jumpHeightCm;

      if (res.hasPower) {
        if (resPowerW) resPowerW.textContent = res.peakPowerW;
        if (resPowerWKg) resPowerWKg.textContent = res.relativePowerWKg;
        if (infoTitle) infoTitle.textContent = activeDef.name;
        if (infoDesc) infoDesc.textContent = activeDef.desc;
      } else {
        if (resPowerW) resPowerW.textContent = '-';
        if (resPowerWKg) resPowerWKg.textContent = '-';
        if (infoTitle) infoTitle.textContent = 'Indtast kropsvægt';
        if (infoDesc) infoDesc.textContent = 'Indtast din vægt i kg for at beregne Peak Power (Watt).';
      }

      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const userAge = age > 0 ? age : 25;
      const evaluation = evaluateJumpHeight(res.jumpHeightNumber, userAge, normGender);

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

      const t = evaluation.thresholds;
      if (t && marker) {
        const v = res.jumpHeightNumber;
        let percent = 0;

        if (v <= t[0]) {
          const minBound = Math.max(0, t[0] - 15);
          percent = ((v - minBound) / (t[0] - minBound)) * 20;
        } else if (v <= t[1]) {
          percent = 20 + ((v - t[0]) / (t[1] - t[0])) * 20;
        } else if (v <= t[2]) {
          percent = 40 + ((v - t[1]) / (t[2] - t[1])) * 20;
        } else if (v <= t[3]) {
          percent = 60 + ((v - t[2]) / (t[3] - t[2])) * 20;
        } else {
          const maxBound = t[3] + 20;
          percent = 80 + ((v - t[3]) / (maxBound - t[3])) * 20;
        }

        percent = Math.max(2, Math.min(98, percent));
        marker.style.left = `${percent}%`;
        marker.style.display = 'block';
      }

      if (t && tableBody && age > 0) {
        const tableData = [
          { name: 'Under middel', range: `< ${t[0]} cm`, color: '#ef4444' },
          { name: 'Middel', range: `${t[0]} - ${t[1]} cm`, color: '#f97316' },
          { name: 'Over middel', range: `${t[1] + 1} - ${t[2]} cm`, color: '#eab308' },
          { name: 'Godt', range: `${t[2] + 1} - ${t[3]} cm`, color: '#22c55e' },
          { name: 'Fremragende', range: `> ${t[3]} cm`, color: '#3b82f6' }
        ];

        tableBody.innerHTML = '';
        tableData.forEach(row => {
          const isMatch = evaluation && row.name === evaluation.label;
          const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
          const fontStyle = isMatch ? 'font-weight: 800; color: #0f172a;' : 'color: #334155;';
          const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
          
          let badgeHtml = '';
          if (isMatch) {
            badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">${res.jumpHeightCm} cm</span>`;
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
    if (resHeightOut) resHeightOut.textContent = '-';
    if (resPowerW) resPowerW.textContent = '-';
    if (resPowerWKg) resPowerWKg.textContent = '-';
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (resEvalBtn) {
      resEvalBtn.style.backgroundColor = '#e2e8f0';
      resEvalBtn.style.color = '#64748b';
    }
    if (infoTitle) infoTitle.textContent = 'Formel Info';
    if (infoDesc) infoDesc.textContent = 'Indtast rækkehøjde for at se resultat og power.';
    if (marker) marker.style.display = 'none';
  }

  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseInt(container.querySelector('[name="sg_age"]')?.value || 0, 10);
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
      activeFormulaKey = 'sayers_cmj';
      toggleFormulaPicker(false);
      
      const sReach = container.querySelector('[name="sg_standing_reach"]');
      const jReach = container.querySelector('[name="sg_jump_reach"]');
      const wInput = container.querySelector('[name="sg_weight"]');
      const bHeight = container.querySelector('[name="sg_body_height"]');
      const ageInput = container.querySelector('[name="sg_age"]');
      const maleRadio = container.querySelector('input[name="sg_gender"][value="male"]');

      if (sReach) sReach.value = '220';
      if (jReach) jReach.value = '270';
      if (wInput) wInput.value = '75';
      if (bHeight) bHeight.value = '180';
      if (ageInput) ageInput.value = '25';
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
            link.download = 'sargent-jump-rapport.png';
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

export const initSargentJump = initCalculator;
export default initCalculator;