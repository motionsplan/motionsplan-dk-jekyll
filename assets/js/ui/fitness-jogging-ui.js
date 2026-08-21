// assets/js/ui/fitness-jogging-ui.js
import { calculateFitnessJogging, getRecommendedJoggingFormula } from '../core/fitness-jogging.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initCalculator(container) {
  const inputs = container.querySelectorAll('.js-jog-input');
  const formulaSelect = container.querySelector('.js-jog-formula');
  
  // Option elementer til dynamisk opdatering af pokalen
  const optGeorge = container.querySelector('.js-opt-george');
  const optHunt = container.querySelector('.js-opt-hunt');

  // DOM elementer til resultater
  const resFitness = container.querySelector('.js-jog-fitness');
  const resSdText = container.querySelector('.js-jog-sd-text');
  const resEvalBadge = container.querySelector('.js-jog-eval-badge');
  const resVo2Max = container.querySelector('.js-jog-vo2max');
  const marker = container.querySelector('.js-jog-continuum-marker');

  // Formel Info Boks
  const infoTitle = container.querySelector('.js-jog-formula-title');
  const infoDesc = container.querySelector('.js-jog-formula-desc');
  const infoIcon = container.querySelector('.js-jog-info-icon');

  // Popup DOM
  const tableBtn = container.querySelector('.js-jog-table-btn');
  const popup = container.querySelector('.js-jog-popup');
  const popupClose = container.querySelector('.js-jog-popup-close');
  const tableBody = container.querySelector('.js-jog-table-body');

  let isManuallySelected = false;

  // --- STATE MANAGEMENT ---
  function saveState() {
    const state = {
      formula: formulaSelect ? formulaSelect.value : 'auto',
      isManuallySelected: isManuallySelected,
      age: container.querySelector('[name="age"]').value,
      weight: container.querySelector('[name="weight"]').value,
      time_min: container.querySelector('[name="time_min"]').value,
      time_sec: container.querySelector('[name="time_sec"]').value,
      hr: container.querySelector('[name="hr"]').value,
      gender: container.querySelector('input[name="gender"]:checked')?.value || 'man'
    };
    localStorage.setItem('mp_jogging_state', JSON.stringify(state));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_jogging_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.formula && formulaSelect) formulaSelect.value = state.formula;
        if (state.isManuallySelected !== undefined) isManuallySelected = state.isManuallySelected;
        if (state.age) container.querySelector('[name="age"]').value = state.age;
        if (state.weight) container.querySelector('[name="weight"]').value = state.weight;
        if (state.time_min) container.querySelector('[name="time_min"]').value = state.time_min;
        if (state.time_sec) container.querySelector('[name="time_sec"]').value = state.time_sec;
        if (state.hr) container.querySelector('[name="hr"]').value = state.hr;
        if (state.gender) {
          const radio = container.querySelector(`input[name="gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      } catch (e) {
        console.error("Kunne ikke indlæse gemt data.");
      }
    }
  }

  // Opdaterer hvilken formel der får pokal-ikonet i dropdown-listen
  function updateDropdownTrophy(age) {
    const recommended = getRecommendedJoggingFormula(age);
    if (optGeorge && optHunt) {
      if (recommended === 'hunt2000') {
        optHunt.textContent = 'Hunt et al. (2000) – Børn og unge (13-17 år) 🏆';
        optGeorge.textContent = 'George et al. (1993) – Voksne (18+ år)';
      } else {
        optGeorge.textContent = 'George et al. (1993) – Voksne (18+ år) 🏆';
        optHunt.textContent = 'Hunt et al. (2000) – Børn og unge (13-17 år)';
      }
    }
  }

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
      const age = parseFloat(container.querySelector('[name="age"]').value);
      if (age > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst din alder for at se norm-tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  function calculate() {
    const gender = container.querySelector('input[name="gender"]:checked')?.value || 'man';
    const age = parseInt(container.querySelector('[name="age"]').value, 10);
    const weight = parseFloat(container.querySelector('[name="weight"]').value);
    const hr = parseInt(container.querySelector('[name="hr"]').value, 10);
    const min = parseInt(container.querySelector('[name="time_min"]').value || '0', 10);
    const sec = parseInt(container.querySelector('[name="time_sec"]').value || '0', 10);

    const timeMinutes = min + (sec / 60);

    // Opdater pokalen i dropdown ud fra alder
    updateDropdownTrophy(age);

    let chosenFormula = formulaSelect ? formulaSelect.value : 'auto';
    if (!isManuallySelected) {
      chosenFormula = 'auto';
    }

    const res = calculateFitnessJogging(gender, age, weight, timeMinutes, hr, chosenFormula);

    if (res && res.isValid) {
      resFitness.textContent = res.formattedFitnessLevel;
      if (resSdText) resSdText.textContent = `± ${res.sd} ${res.sdUnit}`;
      resVo2Max.textContent = res.formattedVO2Max;

      // Opdater Infoboks om den valgte formel
      if (infoTitle) infoTitle.textContent = res.formulaName;
      if (infoDesc) {
        const badgeText = res.isRecommended ? ' (Anbefalet)' : ' (Manuelt valgt)';
        infoDesc.textContent = res.description + badgeText;
      }
      if (infoIcon) infoIcon.textContent = res.isRecommended ? '🏆' : '⚙️';

      // Norm Vurdering & Slider
      const normGender = (gender === 'man' || gender === 'male') ? 'male' : 'female';
      const evaluation = evaluateFitnessLevel(res.fitnessLevel, age, normGender);
      
      if (evaluation) {
        resEvalBadge.textContent = evaluation.label;
        resEvalBadge.style.backgroundColor = evaluation.color;
        resEvalBadge.style.color = '#ffffff';
      }

      // Slider Position
      const thresholds = getFitnessThresholds(age, normGender);
      if (thresholds) {
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
      }
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resSdText) resSdText.textContent = '± 3.0 ml/kg/min';
    if (resVo2Max) resVo2Max.textContent = '-';
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
    if (infoTitle) infoTitle.textContent = 'Anvendt formel';
    if (infoDesc) infoDesc.textContent = 'Indtast testdata for at se resultat og formelinfo.';
    if (infoIcon) infoIcon.textContent = 'ℹ️';
    if (marker) marker.style.display = 'none';
  }

  // Reset & Download knapper
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
            link.download = 'joggingtest-resultat.png';
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
