// assets/js/ui/jump-reach-ui.js
import { calculateJumpReach, evaluateJumpHeight, JUMP_POWER_FORMULAS, JUMP_VARIATIONS } from '../core/jump-reach.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_jump_reach_dashboard_v9';

  let activeFormulaKey = 'sayers_cmj';
  let activeMethod = 'reach';
  let activeVariationKey = 'cmj_1h';

  // ISOLERET DATA OG REKORDER PR. KORT
  let variationData = {
    cmj_1h: { standingReach: '220', jumpReach: '270', jumpHeightDirect: '50', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
    cmj_2h: { standingReach: '220', jumpReach: '265', jumpHeightDirect: '45', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
    run_2leg_1h: { standingReach: '220', jumpReach: '280', jumpHeightDirect: '60', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
    run_2leg_2h: { standingReach: '220', jumpReach: '275', jumpHeightDirect: '55', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
    run_left_1h: { standingReach: '220', jumpReach: '268', jumpHeightDirect: '48', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
    run_right_1h: { standingReach: '220', jumpReach: '268', jumpHeightDirect: '48', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' }
  };

  let savedLogEntries = [];

  const cardsGrid = container.querySelector('.js-jr-cards-grid');

  const inputs = container.querySelectorAll('.js-jr-input');
  const reachFields = container.querySelectorAll('.js-jr-reach-fields');
  const directField = container.querySelector('.js-jr-direct-field');
  const bodyHeightWrapper = container.querySelector('.js-jr-body-height-wrapper');
  const methodBtns = container.querySelectorAll('.js-jr-method-btn');

  const formulaBar = container.querySelector('.js-jr-formula-bar');
  const manualWrapper = container.querySelector('.js-jr-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-jr-picker-container');

  const resHeightOut = container.querySelector('.js-jr-height-out');
  const resPowerW = container.querySelector('.js-jr-power-w');
  const resEvalBtn = container.querySelector('.js-jr-eval-badge');
  const resEvalText = container.querySelector('.js-jr-eval-text');
  const marker = container.querySelector('.js-jr-continuum-marker');

  const btnSaveToCard = container.querySelector('.js-jr-save-to-card-btn');
  const btnClearPr = container.querySelector('.js-jr-clear-pr-btn');

  const logWrapper = container.querySelector('.js-jr-log-wrapper');
  const logTbody = container.querySelector('.js-jr-log-tbody');
  const btnClearLog = container.querySelector('.js-jr-clear-log-btn');

  const tableBtn = container.querySelector('.js-jr-table-btn');
  const popup = container.querySelector('.js-jr-popup');
  const popupClose = container.querySelector('.js-jr-popup-close');
  const tableBody = container.querySelector('.js-jr-table-body');

  function getFeetSvg(key) {
    const isLeftActive = key === 'cmj_1h' || key === 'cmj_2h' || key === 'run_2leg_1h' || key === 'run_2leg_2h' || key === 'run_left_1h';
    const isRightActive = key === 'cmj_1h' || key === 'cmj_2h' || key === 'run_2leg_1h' || key === 'run_2leg_2h' || key === 'run_right_1h';

    const colorLeft = isLeftActive ? '#2563eb' : '#cbd5e1';
    const colorRight = isRightActive ? '#2563eb' : '#cbd5e1';

    return `
      <svg width="38" height="24" viewBox="0 0 46 28" style="display:block;">
        <g fill="${colorLeft}">
          <path d="M 12 3 C 8.5 3 6 5.5 6 9.5 C 6 15 8.5 19 8.5 22.5 C 8.5 24.5 10 26 12 26 C 14 26 15.5 24.5 15.5 22.5 C 15.5 19 18 15 18 9.5 C 18 5.5 15.5 3 12 3 Z"/>
          <circle cx="7" cy="3" r="1.6"/>
          <circle cx="10" cy="1.8" r="1.8"/>
          <circle cx="13.5" cy="1.8" r="1.9"/>
          <circle cx="17" cy="2.8" r="1.7"/>
          <circle cx="19.5" cy="4.5" r="1.4"/>
        </g>
        <g fill="${colorRight}">
          <path d="M 34 3 C 30.5 3 28 5.5 28 9.5 C 28 15 30.5 19 30.5 22.5 C 30.5 24.5 32 26 34 26 C 36 26 37.5 24.5 37.5 22.5 C 37.5 19 40 15 40 9.5 C 40 5.5 37.5 3 34 3 Z"/>
          <circle cx="26.5" cy="4.5" r="1.4"/>
          <circle cx="29" cy="2.8" r="1.7"/>
          <circle cx="32.5" cy="1.8" r="1.9"/>
          <circle cx="36" cy="1.8" r="1.8"/>
          <circle cx="39" cy="3" r="1.6"/>
        </g>
      </svg>
    `;
  }

  function getVariationSubLabel(key) {
    if (key.endsWith('_2h')) return '2-hånds berøring';
    return '1-hånds rækkevidde';
  }

  function getVariationMainTitle(key) {
    const v = JUMP_VARIATIONS.find(item => item.key === key);
    if (!v) return 'Hop-type';
    if (key.startsWith('cmj_')) return 'Stående CMJ';
    if (key.startsWith('run_2leg')) return 'Tilløb dbl. afsæt';
    if (key === 'run_left_1h') return 'Tilløb v. ben';
    if (key === 'run_right_1h') return 'Tilløb h. ben';
    return v.label;
  }

  function renderVariationCards() {
    if (!cardsGrid) return;

    cardsGrid.innerHTML = JUMP_VARIATIONS.map(v => {
      const isSelected = v.key === activeVariationKey;
      const data = variationData[v.key] || {};
      const hasPr = data.prHeight > 0;

      return `
        <div class="mp-jr-variation-card ${isSelected ? 'is-selected' : ''}" data-var-key="${v.key}">
          <div>
            <div class="mp-jr-card-title">${getVariationMainTitle(v.key)}</div>
            <div class="mp-jr-card-sub">${getVariationSubLabel(v.key)}</div>
            
            <div class="mp-jr-card-val">${hasPr ? `${data.prHeight} cm` : '-'}</div>
            <div class="mp-jr-card-watt">${hasPr && data.prPowerW > 0 ? `${data.prPowerW} Watt` : 'Ingen PR endnu'}</div>
          </div>

          <div class="mp-jr-card-footer">
            <div>
              ${hasPr && data.prEvalLabel ? `<span class="mp-jr-badge-tag" style="background-color:${data.prEvalColor};">${data.prEvalLabel}</span>` : '<span></span>'}
            </div>
            <div>
              ${getFeetSvg(v.key)}
            </div>
          </div>
        </div>
      `;
    }).join('');

    cardsGrid.querySelectorAll('.mp-jr-variation-card').forEach(card => {
      card.addEventListener('click', () => {
        saveCurrentInputsToVariation();
        activeVariationKey = card.getAttribute('data-var-key');
        loadInputsFromVariation();
        calculate();
      });
    });
  }

  function saveCurrentInputsToVariation() {
    const curData = variationData[activeVariationKey] || {};
    curData.standingReach = container.querySelector('[name="jr_standing_reach"]')?.value || curData.standingReach;
    curData.jumpReach = container.querySelector('[name="jr_jump_reach"]')?.value || curData.jumpReach;
    curData.jumpHeightDirect = container.querySelector('[name="jr_jump_height_direct"]')?.value || curData.jumpHeightDirect;
  }

  function loadInputsFromVariation() {
    const curData = variationData[activeVariationKey] || {};
    const sReach = container.querySelector('[name="jr_standing_reach"]');
    const jReach = container.querySelector('[name="jr_jump_reach"]');
    const jDirect = container.querySelector('[name="jr_jump_height_direct"]');

    if (sReach) sReach.value = curData.standingReach;
    if (jReach) jReach.value = curData.jumpReach;
    if (jDirect) jDirect.value = curData.jumpHeightDirect;
  }

  function renderLogTable() {
    if (savedLogEntries.length === 0) {
      if (logWrapper) logWrapper.style.display = 'none';
      return;
    }

    if (logWrapper) logWrapper.style.display = 'block';
    if (logTbody) {
      logTbody.innerHTML = savedLogEntries.map((item, idx) => `
        <tr>
          <td><strong>${item.title}</strong></td>
          <td style="color:#2563eb; font-weight:900;">${item.heightCm} cm</td>
          <td>${item.powerW !== '-' ? item.powerW + ' W' : '-'}</td>
          <td style="text-align:right;">
            <button type="button" class="js-remove-log-entry" data-idx="${idx}" style="background:none; border:none; cursor:pointer; opacity:0.6;" title="Slet denne post">🗑️</button>
          </td>
        </tr>
      `).join('');

      logTbody.querySelectorAll('.js-remove-log-entry').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
          savedLogEntries.splice(idx, 1);
          renderLogTable();
          saveState();
        });
      });
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

  function renderFormulaPicker() {
    if (!pickerContainer) return;

    pickerContainer.innerHTML = Object.keys(JUMP_POWER_FORMULAS).map(key => {
      const f = JUMP_POWER_FORMULAS[key];
      const isSelected = key === activeFormulaKey;

      return `
        <div class="mp-jr-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.85rem; color: #0f172a;">${f.name}</strong>
              ${f.isRecommended ? '<span class="mp-jr-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-jr-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.725rem; color: #475569; line-height: 1.35;">
            ${f.desc}
          </div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-jr-picker-card').forEach(card => {
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
      saveCurrentInputsToVariation();
      const state = {
        activeFormulaKey,
        activeMethod,
        activeVariationKey,
        variationData,
        savedLogEntries,
        weight: container.querySelector('[name="jr_weight"]')?.value || '',
        bodyHeight: container.querySelector('[name="jr_body_height"]')?.value || '',
        age: container.querySelector('[name="jr_age"]')?.value || '',
        gender: container.querySelector('input[name="jr_gender"]:checked')?.value || 'male'
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
        if (state.activeMethod) {
          activeMethod = state.activeMethod;
        }
        if (state.activeVariationKey && variationData[state.activeVariationKey]) {
          activeVariationKey = state.activeVariationKey;
        }
        if (state.variationData) {
          variationData = { ...variationData, ...state.variationData };
        }
        if (state.savedLogEntries && Array.isArray(state.savedLogEntries)) {
          savedLogEntries = state.savedLogEntries;
        }
        if (state.weight && container.querySelector('[name="jr_weight"]')) {
          container.querySelector('[name="jr_weight"]').value = state.weight;
        }
        if (state.bodyHeight && container.querySelector('[name="jr_body_height"]')) {
          container.querySelector('[name="jr_body_height"]').value = state.bodyHeight;
        }
        if (state.age && container.querySelector('[name="jr_age"]')) {
          container.querySelector('[name="jr_age"]').value = state.age;
        }
        if (state.gender) {
          const radio = container.querySelector(`input[name="jr_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function updateGenderUI() {
    const ageVal = parseInt(container.querySelector('[name="jr_age"]')?.value || 0, 10);
    const isAdult = ageVal >= 18;

    const labelMale = container.querySelector('.js-jr-label-male');
    const labelFemale = container.querySelector('.js-jr-label-female');

    if (labelMale) labelMale.textContent = isAdult ? 'Mand' : 'Dreng';
    if (labelFemale) labelFemale.textContent = isAdult ? 'Kvinde' : 'Pige';

    const genderRadios = container.querySelectorAll('input[name="jr_gender"]');
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

  function updateMethodUI() {
    methodBtns.forEach(btn => {
      const m = btn.getAttribute('data-method');
      if (m === activeMethod) {
        btn.classList.add('active');
        btn.style.background = '#ffffff';
        btn.style.color = '#0f172a';
      } else {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.style.color = '#64748b';
      }
    });

    if (activeMethod === 'reach') {
      reachFields.forEach(el => el.style.display = 'block');
      if (directField) directField.style.display = 'none';
    } else {
      reachFields.forEach(el => el.style.display = 'none');
      if (directField) directField.style.display = 'block';
    }
  }

  function calculate() {
    updateGenderUI();
    updateMethodUI();

    const standingReach = container.querySelector('[name="jr_standing_reach"]')?.value || '';
    const jumpReach = container.querySelector('[name="jr_jump_reach"]')?.value || '';
    const jumpHeightDirect = container.querySelector('[name="jr_jump_height_direct"]')?.value || '';
    const weight = container.querySelector('[name="jr_weight"]')?.value || '';
    const bodyHeight = container.querySelector('[name="jr_body_height"]')?.value || '';
    const age = parseInt(container.querySelector('[name="jr_age"]')?.value || 0, 10);
    const genderEl = container.querySelector('input[name="jr_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const activeDef = JUMP_POWER_FORMULAS[activeFormulaKey] || JUMP_POWER_FORMULAS.sayers_cmj;

    if (bodyHeightWrapper) {
      bodyHeightWrapper.style.display = activeDef.requiresHeight ? 'block' : 'none';
    }

    if (formulaBar && activeDef) {
      formulaBar.innerHTML = `
        <div class="mp-jr-badge-header">
          <div class="mp-jr-badge-title-group">
            <strong class="mp-jr-badge-title">${activeDef.name}</strong>
            ${activeDef.isRecommended ? '<span class="mp-jr-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-jr-toggle-override mp-jr-btn-gear" title="Skift formel">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.725rem; color: #475569; line-height: 1.35; margin-top: 0.15rem;">
          ${activeDef.desc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-jr-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    renderFormulaPicker();

    const res = calculateJumpReach({
      inputMode: activeMethod,
      standingReach,
      jumpReach,
      jumpHeightDirect,
      weight,
      bodyHeight,
      powerFormulaKey: activeFormulaKey
    });

    if (res && res.isValid) {
      if (resHeightOut) resHeightOut.textContent = res.jumpHeightCm;
      if (resPowerW) resPowerW.textContent = res.hasPower ? res.peakPowerW : '-';

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

    renderVariationCards();
    renderLogTable();
    saveState();
  }

  function resetResults() {
    if (resHeightOut) resHeightOut.textContent = '-';
    if (resPowerW) resPowerW.textContent = '-';
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (resEvalBtn) {
      resEvalBtn.style.backgroundColor = '#e2e8f0';
      resEvalBtn.style.color = '#64748b';
    }
    if (marker) marker.style.display = 'none';
  }

  // EVENT BINDINGS
  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  methodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeMethod = btn.getAttribute('data-method');
      calculate();
    });
  });

  // GEM RESULTAT PÅ VALGT KORT & I LOG
  if (btnSaveToCard) {
    btnSaveToCard.addEventListener('click', () => {
      const currentHeight = resHeightOut ? parseFloat(resHeightOut.textContent) : 0;
      const currentPower = resPowerW ? parseInt(resPowerW.textContent, 10) || 0 : 0;

      if (!currentHeight || currentHeight <= 0) {
        alert('Indtast venligst et gyldigt hop for at gemme.');
        return;
      }

      const age = parseInt(container.querySelector('[name="jr_age"]')?.value || 0, 10);
      const genderEl = container.querySelector('input[name="jr_gender"]:checked');
      const gender = genderEl ? genderEl.value : 'male';
      const evaluation = evaluateJumpHeight(currentHeight, age > 0 ? age : 25, gender);

      // OPDATER KORTETS PR HVIS HOPPET ER STØRRE END NUVÆRENDE REKORD
      const curData = variationData[activeVariationKey] || {};
      if (currentHeight >= curData.prHeight) {
        curData.prHeight = currentHeight;
        curData.prPowerW = currentPower;
        curData.prEvalLabel = evaluation ? evaluation.label : '';
        curData.prEvalColor = evaluation ? evaluation.color : '#3b82f6';
      }

      // GEM I LOG TABELLEN
      const vDef = JUMP_VARIATIONS.find(v => v.key === activeVariationKey);
      savedLogEntries.unshift({
        title: vDef ? vDef.label : 'Hop-type',
        heightCm: currentHeight.toFixed(1),
        powerW: currentPower > 0 ? currentPower : '-'
      });

      calculate();
    });
  }

  // NULSTIL PR KUN FOR DEN AKTIVE / FREMHÆVEDE VARIATION
  if (btnClearPr) {
    btnClearPr.addEventListener('click', () => {
      if (variationData[activeVariationKey]) {
        variationData[activeVariationKey].prHeight = 0;
        variationData[activeVariationKey].prPowerW = 0;
        variationData[activeVariationKey].prEvalLabel = '';
        variationData[activeVariationKey].prEvalColor = '';
      }
      calculate();
    });
  }

  if (btnClearLog) {
    btnClearLog.addEventListener('click', () => {
      savedLogEntries = [];
      renderLogTable();
      saveState();
    });
  }

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseInt(container.querySelector('[name="jr_age"]')?.value || 0, 10);
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
      activeMethod = 'reach';
      activeVariationKey = 'cmj_1h';
      savedLogEntries = [];

      variationData = {
        cmj_1h: { standingReach: '220', jumpReach: '270', jumpHeightDirect: '50', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
        cmj_2h: { standingReach: '220', jumpReach: '265', jumpHeightDirect: '45', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
        run_2leg_1h: { standingReach: '220', jumpReach: '280', jumpHeightDirect: '60', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
        run_2leg_2h: { standingReach: '220', jumpReach: '275', jumpHeightDirect: '55', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
        run_left_1h: { standingReach: '220', jumpReach: '268', jumpHeightDirect: '48', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' },
        run_right_1h: { standingReach: '220', jumpReach: '268', jumpHeightDirect: '48', prHeight: 0, prPowerW: 0, prEvalLabel: '', prEvalColor: '' }
      };

      toggleFormulaPicker(false);
      
      const wInput = container.querySelector('[name="jr_weight"]');
      const bHeight = container.querySelector('[name="jr_body_height"]');
      const ageInput = container.querySelector('[name="jr_age"]');
      const maleRadio = container.querySelector('input[name="jr_gender"][value="male"]');

      if (wInput) wInput.value = '75';
      if (bHeight) bHeight.value = '180';
      if (ageInput) ageInput.value = '25';
      if (maleRadio) maleRadio.checked = true;

      if (popup) popup.style.display = 'none';
      loadInputsFromVariation();
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
            link.download = 'jump-reach-dashboard.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadState();
  loadInputsFromVariation();
  calculate();
}

export const initJumpReach = initCalculator;
export default initCalculator;