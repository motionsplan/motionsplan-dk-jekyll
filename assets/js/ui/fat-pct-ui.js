// assets/js/ui/fat-pct-ui.js
import { calculateFatPercent } from '../core/fat-pct.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

const TEST_ID = 'fatpct_bmi';

export function initFatPct(container) {
  if (!container) return;

  const inputs = container.querySelectorAll('.js-fp-input');
  const formulaSelect = container.querySelector('.js-fp-formula');

  // Gem-knap og status-visning
  const saveBtn = container.querySelector('.js-fp-save-btn') || container.querySelector('.js-save-btn');
  const saveStatus = container.querySelector('.js-fp-save-status');
  
  // DOM elementer til resultater
  const resBestName = container.querySelector('.js-fp-best-name');
  const resBestVal = container.querySelector('.js-fp-best-val');
  const resSdText = container.querySelector('.js-fp-sd-text');
  const resAvg = container.querySelector('.js-fp-avg');
  const resAvgRange = container.querySelector('.js-fp-avg-range');
  const resBmi = container.querySelector('.js-fp-bmi');
  const resFatmass = container.querySelector('.js-fp-fatmass');

  // Popup DOM elementer
  const tableBtn = container.querySelector('.js-fp-table-btn');
  const popup = container.querySelector('.js-fp-popup');
  const popupClose = container.querySelector('.js-fp-popup-close');
  const tableBody = container.querySelector('.js-fp-table-body');

  let isManuallySelected = false;

  // --- 1. INDLÆS KLADDE ELLER PROFIL ---
  function loadInitialData() {
    const profile = StorageAdapter.getProfile();
    const draft = StorageAdapter.loadDraft(TEST_ID);

    if (draft) {
      if (draft.formula && formulaSelect) formulaSelect.value = draft.formula;
      if (draft.isManuallySelected !== undefined) isManuallySelected = draft.isManuallySelected;
      if (draft.age && container.querySelector('[name="age"]')) container.querySelector('[name="age"]').value = draft.age;
      if (draft.height && container.querySelector('[name="height"]')) container.querySelector('[name="height"]').value = draft.height;
      if (draft.weight && container.querySelector('[name="weight"]')) container.querySelector('[name="weight"]').value = draft.weight;
      if (draft.gender) {
        const radio = container.querySelector(`input[name="gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }
    } else {
      // Fallback til globale stamdata
      if (profile.age && container.querySelector('[name="age"]')) container.querySelector('[name="age"]').value = profile.age;
      if (profile.height && container.querySelector('[name="height"]')) container.querySelector('[name="height"]').value = profile.height;
      if (profile.weight && container.querySelector('[name="weight"]')) container.querySelector('[name="weight"]').value = profile.weight;
      if (profile.gender) {
        const genderVal = (profile.gender === 'male' || profile.gender === 'man') ? 'man' : 'woman';
        const radio = container.querySelector(`input[name="gender"][value="${genderVal}"]`);
        if (radio) radio.checked = true;
      }
    }
  }

  // --- 2. GEM REAKTIV KLADDE & STAMDATA ---
  function saveDraftAndProfile() {
    const age = parseInt(container.querySelector('[name="age"]')?.value || '0', 10);
    const height = parseFloat(container.querySelector('[name="height"]')?.value || '0');
    const weight = parseFloat(container.querySelector('[name="weight"]')?.value || '0');
    const genderEl = container.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : 'man';

    if (age > 0 || weight > 0 || height > 0) {
      StorageAdapter.saveProfile({
        ...(age > 0 && { age }),
        ...(height > 0 && { height }),
        ...(weight > 0 && { weight }),
        gender: (gender === 'man' || gender === 'male') ? 'male' : 'female'
      });
    }

    StorageAdapter.saveDraft(TEST_ID, {
      formula: formulaSelect ? formulaSelect.value : 'auto',
      isManuallySelected,
      age: container.querySelector('[name="age"]')?.value || '',
      height: container.querySelector('[name="height"]')?.value || '',
      weight: container.querySelector('[name="weight"]')?.value || '',
      gender
    });
  }

  // --- 3. LÅS OG GEM LOGS (COMMIT) ---
function commitResult() {
  const height = parseFloat(container.querySelector('[name="height"]')?.value || '0');
  const weight = parseFloat(container.querySelector('[name="weight"]')?.value || '0');
  const age = parseInt(container.querySelector('[name="age"]')?.value || '0', 10);
  const genderEl = container.querySelector('input[name="gender"]:checked');
  const gender = genderEl ? genderEl.value : 'man';

  let chosenFormula = formulaSelect ? formulaSelect.value : 'auto';
  if (!isManuallySelected) chosenFormula = 'auto';

  const fp = calculateFatPercent(height, weight, age, gender, chosenFormula);

  if (!fp || !fp.isValid) {
    alert('Indtast venligst højde, vægt og alder for at gemme resultatet.');
    return;
  }

  const sortedList = Object.values(fp.allResults).sort((a, b) => a.value - b.value);

  // 1. Gem i historikken via StorageAdapter
  StorageAdapter.commitToLog(TEST_ID, {
    type: 'physical',
    primary: {
      value: parseFloat(fp.chosenResult.formatted),
      unit: '%',
      label: 'Fedtprocent'
    },
    subMetrics: {
      methodName: fp.chosenResult.name,
      bmi: parseFloat(fp.bmi.toFixed(1)),
      fatMassKg: parseFloat(fp.fatMass.toFixed(1)),
      averageFatPct: parseFloat(fp.average.toFixed(1)),
      minFatPct: parseFloat(sortedList[0].formatted),
      maxFatPct: parseFloat(sortedList[sortedList.length - 1].formatted)
    },
    context: {
      age,
      gender,
      height,
      weight,
      formulaKey: fp.chosenFormulaKey
    }
  });

  // 2. Visuel feedback direkte på gem-knappen
  if (saveBtn) {
    const originalText = saveBtn.innerHTML;
    const originalBg = saveBtn.style.background;

    saveBtn.innerHTML = '✅ Gemt!';
    saveBtn.style.background = '#16a34a'; // Skifter til grøn
    saveBtn.disabled = true;

    setTimeout(() => {
      saveBtn.innerHTML = originalText;
      saveBtn.style.background = originalBg || '#2563eb'; // Nulstiller til blå
      saveBtn.disabled = false;
    }, 2000);
  }
}

  // --- EVENT LISTENERS ---
  if (formulaSelect) {
    formulaSelect.addEventListener('change', () => {
      isManuallySelected = (formulaSelect.value !== 'auto');
      saveDraftAndProfile();
      calculate();
    });
  }

  inputs.forEach(input => {
    if (input !== formulaSelect) {
      ['input', 'change', 'keyup'].forEach(eventType => {
        input.addEventListener(eventType, () => {
          saveDraftAndProfile();
          calculate();
        });
      });
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', commitResult);
  }

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const height = parseFloat(container.querySelector('[name="height"]')?.value || '0');
      if (height > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst dine data for at se tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  // --- BEREGNINGSLOGIK & VISNING ---
  function calculate() {
    const height = parseFloat(container.querySelector('[name="height"]')?.value || '0');
    const weight = parseFloat(container.querySelector('[name="weight"]')?.value || '0');
    const age = parseInt(container.querySelector('[name="age"]')?.value || '0', 10);
    const genderEl = container.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : 'man';
    
    let chosenFormula = formulaSelect ? formulaSelect.value : 'auto';
    if (!isManuallySelected) {
      chosenFormula = 'auto';
    }

    const fp = calculateFatPercent(height, weight, age, gender, chosenFormula);

    if (fp && fp.isValid) {
      const sortedList = Object.values(fp.allResults).sort((a, b) => a.value - b.value);
      const minVal = sortedList[0].formatted;
      const maxVal = sortedList[sortedList.length - 1].formatted;

      if (resBestName) resBestName.textContent = fp.chosenResult.name;
      if (resBestVal) resBestVal.textContent = `${fp.chosenResult.formatted}`;
      if (resSdText) resSdText.textContent = `Standardafvigelse (SD): ±${fp.chosenResult.sd}%`;
      
      if (resAvg) resAvg.textContent = `${fp.average.toFixed(1)}`;
      if (resAvgRange) resAvgRange.textContent = `${minVal}% - ${maxVal}%`;

      if (resBmi) resBmi.textContent = fp.bmi.toFixed(1);
      if (resFatmass) resFatmass.textContent = `${fp.fatMass.toFixed(1)}`;

      if (tableBody) {
        const minId = sortedList[0].id;
        const maxId = sortedList[sortedList.length - 1].id;
        
        tableBody.innerHTML = '';
        sortedList.forEach(item => {
          const isChosen = item.id === fp.chosenFormulaKey;
          const isMin = item.id === minId;
          const isMax = item.id === maxId;

          const bgStyle = isChosen ? 'background-color: #eff6ff;' : '';
          const fontStyle = isChosen ? 'font-weight: 700; color: #0f172a;' : 'color: #334155;';
          const dotColor = isChosen ? '#3b82f6' : (isMin ? '#f97316' : (isMax ? '#ef4444' : '#94a3b8'));
          const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${dotColor}; margin-right:8px;"></span>`;
          
          let badgeHtml = '';
          if (isChosen) {
            badgeHtml += `<span style="display:inline-block; font-size:0.65rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:6px; vertical-align:middle;">Valgt</span>`;
          }
          if (isMin) {
            badgeHtml += `<span style="display:inline-block; font-size:0.65rem; font-weight:800; background-color:#f97316; color:#fff; padding:2px 6px; border-radius:4px; margin-left:6px; vertical-align:middle;">Lavest</span>`;
          }
          if (isMax) {
            badgeHtml += `<span style="display:inline-block; font-size:0.65rem; font-weight:800; background-color:#ef4444; color:#fff; padding:2px 6px; border-radius:4px; margin-left:6px; vertical-align:middle;">Højest</span>`;
          }

          const tr = document.createElement('tr');
          tr.style = `border-bottom: 1px solid #e2e8f0; ${bgStyle}`;
          tr.innerHTML = `
            <td style="padding: 0.65rem 0.5rem; font-size: 0.85rem; ${fontStyle}">
              <div style="display:flex; align-items:center; flex-wrap:wrap; gap:2px;">${dot}${item.name} ${badgeHtml}</div>
            </td>
            <td style="padding: 0.65rem 0.5rem; text-align: right; font-size: 0.85rem; ${fontStyle}; white-space:nowrap;">
              ${item.formatted}% <span style="font-size:0.7rem; color:#64748b; font-weight:normal;">(±${item.sd}%)</span>
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
    if (resBestName) resBestName.textContent = '-';
    if (resBestVal) resBestVal.textContent = '-';
    if (resSdText) resSdText.textContent = 'SD: ±0.0%';
    if (resAvg) resAvg.textContent = '-';
    if (resAvgRange) resAvgRange.textContent = '-';
    if (resBmi) resBmi.textContent = '-';
    if (resFatmass) resFatmass.textContent = '-';
  }

  // --- ACTION KNAPPER ---
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      isManuallySelected = false;
      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'man') input.checked = true;
        else if (input.tagName === 'SELECT') input.value = 'auto';
        else if (input.type !== 'radio') input.value = '';
      });
      if (popup) popup.style.display = 'none';
      StorageAdapter.clearDraft(TEST_ID);
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
            link.download = 'fedtprocent-resultat.png';
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

export const initCalculator = initFatPct;