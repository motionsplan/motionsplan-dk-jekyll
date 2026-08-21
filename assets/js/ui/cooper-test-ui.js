// assets/js/ui/cooper-test-ui.js
import { calculateCooperTest } from '../core/cooper-test.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initCooperTest(container) {
  if (!container) return;

  const formulaSelect = container.querySelector('.js-cooper-formula');
  const distInput = container.querySelector('[name="cooper_distance"]');
  const ageInput = container.querySelector('[name="cooper_age"]');
  const weightInput = container.querySelector('[name="cooper_weight"]');
  const weightHelper = container.querySelector('.js-cooper-weight-helper');

  // DOM elementer til resultater
  const resFitness = container.querySelector('.js-cooper-fitness');
  const resSdText = container.querySelector('.js-cooper-sd-text');
  const resEvalBadge = container.querySelector('.js-cooper-eval-badge');
  const resVo2Max = container.querySelector('.js-cooper-vo2max');
  const marker = container.querySelector('.js-cooper-continuum-marker');

  // Formel Info Boks
  const infoTitle = container.querySelector('.js-cooper-formula-title');
  const infoDesc = container.querySelector('.js-cooper-formula-desc');
  const infoIcon = container.querySelector('.js-cooper-info-icon');

  // Popup DOM
  const tableBtn = container.querySelector('.js-cooper-table-btn');
  const popup = container.querySelector('.js-cooper-popup');
  const popupClose = container.querySelector('.js-cooper-popup-close');
  const tableBody = container.querySelector('.js-cooper-table-body');

  let isManuallySelected = false;

  // --- STATE MANAGEMENT (Sikker) ---
  function saveState() {
    try {
      const genderEl = container.querySelector('input[name="cooper_gender"]:checked');
      const state = {
        formula: formulaSelect ? formulaSelect.value : 'auto',
        isManuallySelected: isManuallySelected,
        distance: distInput ? distInput.value : '',
        age: ageInput ? ageInput.value : '',
        weight: weightInput ? weightInput.value : '',
        gender: genderEl ? genderEl.value : 'male'
      };
      localStorage.setItem('mp_cooper_state', JSON.stringify(state));
    } catch (e) {
      // Ignorer localStorage fejl
    }
  }

  function loadState() {
    try {
      const saved = localStorage.getItem('mp_cooper_state');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.formula && formulaSelect) formulaSelect.value = state.formula;
        if (state.isManuallySelected !== undefined) isManuallySelected = state.isManuallySelected;
        if (state.distance && distInput) distInput.value = state.distance;
        if (state.age && ageInput) ageInput.value = state.age;
        if (state.weight && weightInput) weightInput.value = state.weight;
        if (state.gender) {
          const radio = container.querySelector(`input[name="cooper_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {
      console.warn("Kunne ikke indlæse gemt tilstand", e);
    }
  }

  // --- BEREGNINGSLOGIK ---
  function calculate() {
    const genderEl = container.querySelector('input[name="cooper_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const distance = distInput ? distInput.value : '';
    const age = parseInt(ageInput ? ageInput.value : '0', 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');

    let chosenFormula = formulaSelect ? formulaSelect.value : 'auto';
    if (!isManuallySelected) {
      chosenFormula = 'auto';
    }

    const res = calculateCooperTest(distance, weight, chosenFormula);

    if (res && res.isValid) {
      if (weightHelper) {
        weightHelper.textContent = weight > 0 ? '✓ Vægt angivet' : 'Valgfri (til iltoptagelse i L/min)';
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
      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const userAge = age > 0 ? age : 30; 
      const evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);

      if (resEvalBadge) {
        if (evaluation && age > 0) {
          resEvalBadge.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        } else {
          resEvalBadge.textContent = 'Mangler alder';
          resEvalBadge.style.backgroundColor = '#e2e8f0';
          resEvalBadge.style.color = '#64748b';
        }
      }

      const thresholds = getFitnessThresholds(userAge, normGender);
      if (thresholds && age > 0 && marker) {
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
        marker.style.left = `${percent}%`;
        marker.style.display = 'block';
      }

      // Popup tabel
      if (thresholds && tableBody && age > 0) {
        const tableData = [
          { name: 'Meget højt', range: `> ${thresholds[3]}` },
          { name: 'Højt', range: `${thresholds[2] + 1} - ${thresholds[3]}` },
          { name: 'Middel', range: `${thresholds[1]} - ${thresholds[2]}` },
          { name: 'Lavt', range: `${thresholds[0]} - ${thresholds[1] - 1}` },
          { name: 'Meget lavt', range: `< ${thresholds[0]}` }
        ];

        tableBody.innerHTML = '';
        tableData.forEach(row => {
          let rowStyle = 'border-bottom: 1px solid #e2e8f0;';
          let nameStyle = 'color: #334155; font-size: 0.8rem; padding: 0.6rem 0.25rem;';
          let valStyle = 'text-align: right; font-weight: 600; color: #0f172a; font-size: 0.85rem; padding: 0.6rem 0.25rem;';
          let badgeHtml = '';

          if (evaluation && row.name === evaluation.label) {
            rowStyle = 'border-bottom: 1px solid #e2e8f0; background-color: #eff6ff; font-weight: 700;';
            nameStyle = 'color: #0f172a; font-weight: 700; font-size: 0.8rem; padding: 0.6rem 0.25rem;';
            valStyle = 'text-align: right; font-weight: 800; color: #0f172a; font-size: 0.85rem; padding: 0.6rem 0.25rem;';
            badgeHtml = `<span style="font-size: 0.65rem; background: #3b82f6; color: #fff; padding: 2px 6px; border-radius: 4px; margin-left: 8px; vertical-align: middle;">${res.formattedFitnessLevel}</span>`;
          }

          const tr = document.createElement('tr');
          tr.style = rowStyle;
          tr.innerHTML = `<td style="${nameStyle}">${row.name}</td><td style="${valStyle}">${row.range} ${badgeHtml}</td>`;
          tableBody.appendChild(tr);
        });
      }
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resSdText) resSdText.textContent = '-';
    if (resVo2Max) resVo2Max.textContent = '-';
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
    if (weightHelper) {
      weightHelper.textContent = 'Valgfri (til iltoptagelse i L/min)';
      weightHelper.style.color = '#94a3b8';
    }
    if (infoTitle) infoTitle.textContent = 'Anvendt formel';
    if (infoDesc) infoDesc.textContent = 'Indtast distance for at se resultat og formelinfo.';
    if (infoIcon) infoIcon.textContent = 'ℹ️';
    if (marker) marker.style.display = 'none';
  }

  // --- EVENT LISTENERS ---
  const allInputs = container.querySelectorAll('input, select');
  allInputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(eventType => {
      input.addEventListener(eventType, () => {
        if (input === formulaSelect && eventType === 'change') {
          isManuallySelected = (formulaSelect.value !== 'auto');
        }
        saveState();
        calculate();
      });
    });
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseFloat(ageInput ? ageInput.value : '0');
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
      isManuallySelected = false;
      allInputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
        else if (input.tagName === 'SELECT') input.value = 'auto';
        else if (input.type !== 'radio') input.value = '';
      });
      if (popup) popup.style.display = 'none';
      try { localStorage.removeItem('mp_cooper_state'); } catch(e){}
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
            link.download = 'cooper-test-resultat.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // Kør opstart
  loadState();
  calculate();
}

export const initCalculator = initCooperTest;