// assets/js/ui/fat-pct-ui.js
import { calculateFatPercent } from '../core/fat-pct.js';

export function initCalculator(container) {
  const inputs = container.querySelectorAll('.js-fp-input');
  const formulaSelect = container.querySelector('.js-fp-formula');
  
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

  // --- STATE MANAGEMENT ---
  function saveState() {
    const state = {
      formula: formulaSelect ? formulaSelect.value : 'auto',
      isManuallySelected: isManuallySelected,
      age: container.querySelector('[name="age"]').value,
      height: container.querySelector('[name="height"]').value,
      weight: container.querySelector('[name="weight"]').value,
      gender: container.querySelector('input[name="gender"]:checked')?.value || 'man'
    };
    localStorage.setItem('mp_fatpct_state', JSON.stringify(state));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_fatpct_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.formula && formulaSelect) formulaSelect.value = state.formula;
        if (state.isManuallySelected !== undefined) isManuallySelected = state.isManuallySelected;
        if (state.age) container.querySelector('[name="age"]').value = state.age;
        if (state.height) container.querySelector('[name="height"]').value = state.height;
        if (state.weight) container.querySelector('[name="weight"]').value = state.weight;
        if (state.gender) {
          const radio = container.querySelector(`input[name="gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      } catch (e) {
        console.error("Kunne ikke indlæse gemt data.");
      }
    }
  }

  // --- EVENT LISTENERS ---
  if (formulaSelect) {
    formulaSelect.addEventListener('change', () => {
      isManuallySelected = (formulaSelect.value !== 'auto');
      saveState();
      calculate();
    });
  }

  inputs.forEach(input => {
    if (input !== formulaSelect) {
      input.addEventListener('input', () => { saveState(); calculate(); });
      input.addEventListener('change', () => { saveState(); calculate(); });
    }
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const height = parseFloat(container.querySelector('[name="height"]').value);
      if (height > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst dine data for at se tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  // --- BEREGNINGSLOGIK ---
  function calculate() {
    const height = parseFloat(container.querySelector('[name="height"]').value);
    const weight = parseFloat(container.querySelector('[name="weight"]').value);
    const age = parseInt(container.querySelector('[name="age"]').value, 10);
    const genderEl = container.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : 'man';
    
    let chosenFormula = formulaSelect ? formulaSelect.value : 'auto';
    if (!isManuallySelected) {
      chosenFormula = 'auto';
    }

    const fp = calculateFatPercent(height, weight, age, gender, chosenFormula);

    if (fp && fp.isValid) {
      // Find laveste og højeste resultat til spændet
      const sortedList = Object.values(fp.allResults).sort((a, b) => a.value - b.value);
      const minVal = sortedList[0].formatted;
      const maxVal = sortedList[sortedList.length - 1].formatted;

      // Hovedresultat (Valgt formel)
      if (resBestName) resBestName.textContent = fp.chosenResult.name;
      if (resBestVal) resBestVal.textContent = `${fp.chosenResult.formatted}`;
      if (resSdText) resSdText.textContent = `Standardafvigelse (SD): ±${fp.chosenResult.sd}%`;
      
      // Gennemsnit (Kun tallet, HTML har %-span)
      if (resAvg) resAvg.textContent = `${fp.average.toFixed(1)}`;
      
      // Spænd under gennemsnittet (Uden ordet "Spænd:")
      if (resAvgRange) resAvgRange.textContent = `${minVal}% - ${maxVal}%`;

      // BMI og Fedtmasse
      if (resBmi) resBmi.textContent = fp.bmi.toFixed(1);
      if (resFatmass) resFatmass.textContent = `${fp.fatMass.toFixed(1)}`;

      // Opbygning af Popup-tabel (Lavest, Højest og Valgt markeringer)
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
      saveState();
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
  loadState();
  calculate();
}
