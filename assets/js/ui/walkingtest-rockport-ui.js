// assets/js/ui/rockport-walking-test-ui.js
import { calculateRockport } from '../core/walkingtest-rockport.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initCalculator(container) {
  const inputs = container.querySelectorAll('.js-rw-input');
  const formulaSelect = container.querySelector('.js-rw-formula');
  
  // DOM elementer til resultater
  const resFitness = container.querySelector('.js-rw-fitness');
  const resEvalBadge = container.querySelector('.js-rw-eval-badge');
  const resVo2Max = container.querySelector('.js-rw-vo2max');
  const marker = container.querySelector('.js-rw-continuum-marker');
  
  // Popup DOM
  const tableBtn = container.querySelector('.js-rw-table-btn');
  const popup = container.querySelector('.js-rw-popup');
  const popupClose = container.querySelector('.js-rw-popup-close');
  const tableBody = container.querySelector('.js-rw-table-body');

  // Track om brugeren selv har ændret formlen manuelt
  let isManuallySelected = false;

  // --- STATE MANAGEMENT ---
  function saveState() {
    const state = {
      formula: formulaSelect.value,
      isManuallySelected: isManuallySelected,
      age: container.querySelector('[name="rw_age"]').value,
      weight: container.querySelector('[name="rw_weight"]').value,
      min: container.querySelector('[name="rw_min"]').value,
      sec: container.querySelector('[name="rw_sec"]').value,
      hr: container.querySelector('[name="rw_hr"]').value,
      gender: container.querySelector('input[name="rw_gender"]:checked').value
    };
    localStorage.setItem('mp_rockport_state', JSON.stringify(state));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_rockport_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.formula) formulaSelect.value = state.formula;
        if (state.isManuallySelected !== undefined) isManuallySelected = state.isManuallySelected;
        if (state.age) container.querySelector('[name="rw_age"]').value = state.age;
        if (state.weight) container.querySelector('[name="rw_weight"]').value = state.weight;
        if (state.min) container.querySelector('[name="rw_min"]').value = state.min;
        if (state.sec) container.querySelector('[name="rw_sec"]').value = state.sec;
        if (state.hr) container.querySelector('[name="rw_hr"]').value = state.hr;
        if (state.gender) {
          const radio = container.querySelector(`input[name="rw_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      } catch (e) {
        console.error("Kunne ikke indlæse gemt data.");
      }
    }
  }

  // Hvis brugeren skifter formel manuelt
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
      const age = parseFloat(container.querySelector('[name="rw_age"]').value);
      if (age > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst din alder for at se norm-tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  function calculate() {
    const age = parseFloat(container.querySelector('[name="rw_age"]').value);
    let selectedFormula = formulaSelect.value;

    // Hvis den står på "auto" (eller ikke er valgt manuelt endnu), så vælg den bedste ud fra alderen
    if (selectedFormula === 'auto' || !isManuallySelected) {
      if (age >= 18 && age <= 39) {
        selectedFormula = 'lunt'; // Bedste til unge voksne / militær
      } else {
        selectedFormula = 'kline'; // Standard/mesta udbredt
      }
    }

    const params = {
      formula: selectedFormula,
      age: age,
      weight: parseFloat(container.querySelector('[name="rw_weight"]').value),
      min: parseFloat(container.querySelector('[name="rw_min"]').value),
      sec: parseFloat(container.querySelector('[name="rw_sec"]').value),
      hr: parseFloat(container.querySelector('[name="rw_hr"]').value),
      gender: container.querySelector('input[name="rw_gender"]:checked').value
    };

    const result = calculateRockport(params);

    if (result.isValid) {
      resFitness.textContent = result.fitnessLevel;
      resVo2Max.textContent = result.maxOxygenUptake;

      if (params.age > 0) {
        const normGender = (params.gender === 'male' || params.gender === 'mand') ? 'male' : 'female';
        const evaluation = evaluateFitnessLevel(result.fitnessLevel, params.age, normGender);
        
        if (evaluation) {
          resEvalBadge.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        }

        // Slider Position
        const thresholds = getFitnessThresholds(params.age, normGender);
        if (thresholds) {
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
          if (marker) {
            marker.style.left = `${percent}%`;
            marker.style.display = 'block';
          }

          // Popup tabel opbygning
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
    } else {
      resetResults();
    }
  }

  function resetResults() {
    resFitness.textContent = '-';
    resVo2Max.textContent = '-';
    resEvalBadge.textContent = 'Mangler data';
    resEvalBadge.style.backgroundColor = '#e2e8f0';
    resEvalBadge.style.color = '#64748b';
    if (marker) marker.style.display = 'none';
  }

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      isManuallySelected = false;
      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
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
        html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
          const link = document.createElement('a');
          link.download = 'rockport-test-resultat.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }, 100);
    });
  }

  loadState();
  calculate();
}