// assets/js/ui/andersen-test-ui.js
import { calculateAndersenTest, getRecommendedAndersenFormula } from '../core/andersen-test.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initAndersenTest(container) {
  if (!container) return;

  const inputs = container.querySelectorAll('.js-at-input');
  const formulaSelect = container.querySelector('.js-at-formula');
  const weightInput = container.querySelector('[name="at_weight"]');
  const weightHelper = container.querySelector('.js-at-weight-helper');

  const optAndersen = container.querySelector('.js-opt-andersen');
  const optAadland = container.querySelector('.js-opt-aadland');

  // DOM elementer
  const resFitness = container.querySelector('.js-at-fitness');
  const resSdText = container.querySelector('.js-at-sd-text');
  const resEvalBadge = container.querySelector('.js-at-eval-badge');
  const resVo2Max = container.querySelector('.js-at-vo2max');
  const marker = container.querySelector('.js-at-continuum-marker');

  // Formel Info Boks
  const infoTitle = container.querySelector('.js-at-formula-title');
  const infoDesc = container.querySelector('.js-at-formula-desc');
  const infoIcon = container.querySelector('.js-at-info-icon');

  // Popup DOM
  const tableBtn = container.querySelector('.js-at-table-btn');
  const popup = container.querySelector('.js-at-popup');
  const popupClose = container.querySelector('.js-at-popup-close');
  const tableBody = container.querySelector('.js-at-table-body');

  let isManuallySelected = false;

  // --- STATE MANAGEMENT ---
  function saveState() {
    try {
      const state = {
        formula: formulaSelect ? formulaSelect.value : 'auto',
        isManuallySelected: isManuallySelected,
        distance: container.querySelector('[name="at_distance"]')?.value || '',
        age: container.querySelector('[name="at_age"]')?.value || '',
        weight: weightInput ? weightInput.value : '',
        gender: container.querySelector('input[name="at_gender"]:checked')?.value || 'male'
      };
      localStorage.setItem('mp_andersen_state', JSON.stringify(state));
    } catch (e) {
      // Ignorer hvis storage er blokeret
    }
  }

  function loadState() {
    try {
      const saved = localStorage.getItem('mp_andersen_state');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.formula && formulaSelect) formulaSelect.value = state.formula;
        if (state.isManuallySelected !== undefined) isManuallySelected = state.isManuallySelected;
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
    } catch (e) {
      console.error("Kunne ikke indlæse gemt data.");
    }
  }

  function updateDropdownTrophy(weight) {
    const rec = getRecommendedAndersenFormula(weight);
    if (optAndersen && optAadland) {
      if (rec === 'aadland_2014') {
        optAadland.textContent = 'Aadland et al. (2014) – Med kropsvægt 🏆';
        optAndersen.textContent = 'Andersen et al. (2008) – Standard (Uden vægt)';
      } else {
        optAndersen.textContent = 'Andersen et al. (2008) – Standard (Uden vægt) 🏆';
        optAadland.textContent = 'Aadland et al. (2014) – Med kropsvægt';
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
      const ageVal = container.querySelector('[name="at_age"]')?.value;
      const age = parseFloat(ageVal);
      if (age > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst din alder for at se norm-tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  function calculate() {
    const genderEl = container.querySelector('input[name="at_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const distInput = container.querySelector('[name="at_distance"]');
    const ageInput = container.querySelector('[name="at_age"]');

    const distance = distInput ? distInput.value : '';
    const age = ageInput ? parseInt(ageInput.value, 10) : 0;
    const weight = parseFloat(weightInput ? weightInput.value : '');

    updateDropdownTrophy(weight);

    let chosenFormula = formulaSelect ? formulaSelect.value : 'auto';
    if (!isManuallySelected) {
      chosenFormula = 'auto';
    }

    const res = calculateAndersenTest(gender, distance, weight, chosenFormula);

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
      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const userAge = age > 0 ? age : 12;
      const evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);

      if (evaluation && age > 0) {
        if (resEvalBadge) {
          resEvalBadge.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        }
      } else if (resEvalBadge) {
        resEvalBadge.textContent = 'Mangler alder';
        resEvalBadge.style.backgroundColor = '#e2e8f0';
        resEvalBadge.style.color = '#64748b';
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

      // Popup tabel (Rettet til cssText)
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
          tr.style.cssText = rowStyle;
          tr.innerHTML = `<td style="${nameStyle}">${row.name}</td><td style="${valStyle}">${row.range} ${badgeHtml}</td>`;
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
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
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
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'andersen-test-resultat.png';
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

// EKSPORTERES TIL DIVERSE LOADER-MØNSTRE
export const initCalculator = initAndersenTest;
export const init = initAndersenTest;
export default initAndersenTest;