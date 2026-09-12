// assets/js/ui/fitness-jogging-ui.js
import { calculateFitnessJogging, getRecommendedJoggingFormula } from '../core/fitness-jogging.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

const TEST_ID = 'jogging_test';

export function initCalculator(container) {
  if (!container) return;

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

  const saveBtn = container.querySelector('.js-jog-save-btn') || container.querySelector('.js-save-btn');

  let isManuallySelected = false;

  // --- 1. GEM KLADDE & PROFIL VIA STORAGEADAPTER ---
  function saveDraftAndProfile() {
    const age = parseInt(container.querySelector('[name="age"]')?.value || '0', 10);
    const weight = parseFloat(container.querySelector('[name="weight"]')?.value || '');
    const genderEl = container.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : 'man';

    if (age > 0 || weight > 0) {
      StorageAdapter.saveProfile({
        ...(age > 0 && { age }),
        ...(weight > 0 && { weight }),
        gender: (gender === 'man' || gender === 'male') ? 'male' : 'female'
      });
    }

    StorageAdapter.saveDraft(TEST_ID, {
      formula: formulaSelect ? formulaSelect.value : 'auto',
      isManuallySelected,
      age: container.querySelector('[name="age"]')?.value || '',
      weight: container.querySelector('[name="weight"]')?.value || '',
      time_min: container.querySelector('[name="time_min"]')?.value || '',
      time_sec: container.querySelector('[name="time_sec"]')?.value || '',
      hr: container.querySelector('[name="hr"]')?.value || '',
      gender
    });
  }

  // --- 2. INDLÆS KLADDE ELLER PROFIL ---
  function loadInitialData() {
    const profile = StorageAdapter.getProfile();
    const draft = StorageAdapter.loadDraft(TEST_ID);

    if (draft) {
      if (draft.formula && formulaSelect) formulaSelect.value = draft.formula;
      if (draft.isManuallySelected !== undefined) isManuallySelected = draft.isManuallySelected;
      if (draft.age && container.querySelector('[name="age"]')) container.querySelector('[name="age"]').value = draft.age;
      if (draft.weight && container.querySelector('[name="weight"]')) container.querySelector('[name="weight"]').value = draft.weight;
      if (draft.time_min && container.querySelector('[name="time_min"]')) container.querySelector('[name="time_min"]').value = draft.time_min;
      if (draft.time_sec && container.querySelector('[name="time_sec"]')) container.querySelector('[name="time_sec"]').value = draft.time_sec;
      if (draft.hr && container.querySelector('[name="hr"]')) container.querySelector('[name="hr"]').value = draft.hr;
      if (draft.gender) {
        const radio = container.querySelector(`input[name="gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }
    } else {
      if (profile.age && container.querySelector('[name="age"]')) container.querySelector('[name="age"]').value = profile.age;
      if (profile.weight && container.querySelector('[name="weight"]')) container.querySelector('[name="weight"]').value = profile.weight;
      if (profile.gender) {
        const val = (profile.gender === 'male' || profile.gender === 'mand') ? 'man' : 'woman';
        const radio = container.querySelector(`input[name="gender"][value="${val}"]`);
        if (radio) radio.checked = true;
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
      saveDraftAndProfile();
      calculate();
    });
  }

  inputs.forEach(input => {
    if (input !== formulaSelect) {
      ['input', 'change', 'keyup'].forEach(ev => {
        input.addEventListener(ev, () => {
          saveDraftAndProfile();
          calculate();
        });
      });
    }
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      calculate();
    });
  }

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="age"]')?.value || 0);
      if (age > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst din alder for at se norm-tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  function calculate() {
    saveDraftAndProfile();

    const gender = container.querySelector('input[name="gender"]:checked')?.value || 'man';
    const age = parseInt(container.querySelector('[name="age"]')?.value || '0', 10);
    const weight = parseFloat(container.querySelector('[name="weight"]')?.value || '0');
    const hr = parseInt(container.querySelector('[name="hr"]')?.value || '0', 10);
    const min = parseInt(container.querySelector('[name="time_min"]')?.value || '0', 10);
    const sec = parseInt(container.querySelector('[name="time_sec"]')?.value || '0', 10);

    const timeMinutes = min + (sec / 60);

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

      if (infoTitle) infoTitle.textContent = res.formulaName;
      if (infoDesc) {
        const badgeText = res.isRecommended ? ' (Anbefalet)' : ' (Manuelt valgt)';
        infoDesc.textContent = res.description + badgeText;
      }
      if (infoIcon) infoIcon.textContent = res.isRecommended ? '🏆' : '⚙️';

      const normGender = (gender === 'man' || gender === 'male') ? 'male' : 'female';
      const evaluation = evaluateFitnessLevel(res.fitnessLevel, age, normGender);
      
      if (evaluation) {
        resEvalBadge.textContent = evaluation.label;
        resEvalBadge.style.backgroundColor = evaluation.color;
        resEvalBadge.style.color = '#ffffff';
      }

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

      // AUTOMATISK GEM I LOGGEN VIA STORAGEADAPTER
      StorageAdapter.commitToLog(TEST_ID, {
        type: 'physical',
        primary: {
          value: parseFloat(res.formattedFitnessLevel),
          unit: 'ml/kg/min',
          label: 'Kondital'
        },
        norm: evaluation ? {
          label: evaluation.label,
          color: evaluation.color,
          bg: evaluation.color + '18'
        } : undefined,
        subMetrics: {
          vo2maxLmin: parseFloat(res.formattedVO2Max),
          timeMinutes: parseFloat(timeMinutes.toFixed(2)),
          heartRate: hr
        },
        context: {
          age,
          gender: normGender,
          weight,
          formula: chosenFormula
        }
      });

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

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      StorageAdapter.clearDraft(TEST_ID);
      StorageAdapter.clearLog(TEST_ID);

      isManuallySelected = false;
      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'man') input.checked = true;
        else if (input.tagName === 'SELECT') input.value = 'auto';
        else if (input.type !== 'radio') input.value = '';
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
            link.download = 'joggingtest-resultat.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadInitialData();
  calculate();
}