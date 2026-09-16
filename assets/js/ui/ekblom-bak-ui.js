// assets/js/ui/ekblom-bak-ui.js
import { calculateEkblomBak } from '../core/ekblom-bak.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

const TEST_ID = 'ekblom_bak';

export function initEkblomBak(container) {
  if (!container) return;

  const inputs = container.querySelectorAll('.js-eb-input');
  
  // DOM elementer til resultater
  const resFitness = container.querySelector('.js-eb-fitness');
  const resEvalBadge = container.querySelector('.js-eb-eval-badge');
  const resVo2Max = container.querySelector('.js-eb-vo2max');
  const resDeltaHr = container.querySelector('.js-eb-deltahr');
  const resDeltaPo = container.querySelector('.js-eb-deltapo');

  // Fieldset DOM elementer til timer-highlighting
  const fieldset1 = container.querySelector('.js-eb-fieldset-1');
  const fieldset2 = container.querySelector('.js-eb-fieldset-2');

  // Timer DOM elementer
  const timerBtn = container.querySelector('.js-eb-timer-btn');
  const timerDisplay = container.querySelector('.js-eb-timer-display');
  const timerBar = container.querySelector('.js-eb-timer-bar');
  const timerGuide = container.querySelector('.js-eb-timer-guide');
  
  // DOM elementer til Popup Table
  const tableBtn = container.querySelector('.js-eb-table-btn');
  const popup = container.querySelector('.js-eb-popup');
  const popupClose = container.querySelector('.js-eb-popup-close');
  const tableBody = container.querySelector('.js-eb-table-body');
  
  const saveBtn = container.querySelector('.js-eb-save-btn') || container.querySelector('.js-save-btn');
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // --- TIMER STATE (DRIFT-FRI DATE.NOW) ---
  let timerInterval = null;
  let timerStartTime = null;
  let isTimerRunning = false;
  let wakeLock = null;
  const TOTAL_TEST_SECONDS = 480; // 8 minutter i alt (4 min baseline + 4 min arbejde)

  async function requestWakeLock() {
    if ('wakeLock' in navigator) {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
      } catch (err) {}
    }
  }

  function releaseWakeLock() {
    if (wakeLock) {
      wakeLock.release().catch(() => {});
      wakeLock = null;
    }
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function startTimer() {
    isTimerRunning = true;
    timerStartTime = Date.now();
    requestWakeLock();
    if (timerBtn) {
      timerBtn.textContent = '🛑 Stop';
      timerBtn.style.background = '#ef4444';
    }
    updateTimer();

    timerInterval = setInterval(() => {
      updateTimer();
    }, 250);
  }

  function stopTimer() {
    isTimerRunning = false;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    releaseWakeLock();
    if (timerBtn) {
      timerBtn.textContent = '🚀 Start Timer';
      timerBtn.style.background = '#2563eb';
    }
    if (timerGuide) timerGuide.textContent = 'Timer stoppet (8 min i alt)';
    resetFieldsetHighlighting();
  }

  function resetFieldsetHighlighting() {
    if (fieldset1) {
      fieldset1.style.borderColor = '#e2e8f0';
      fieldset1.style.background = '#f8fafc';
      fieldset1.style.boxShadow = 'none';
    }
    if (fieldset2) {
      fieldset2.style.borderColor = '#e2e8f0';
      fieldset2.style.background = '#f8fafc';
      fieldset2.style.boxShadow = 'none';
    }
  }

  function updateTimer() {
    if (!isTimerRunning || !timerStartTime) return;

    const elapsedSecs = Math.min(TOTAL_TEST_SECONDS, (Date.now() - timerStartTime) / 1000);
    const pct = (elapsedSecs / TOTAL_TEST_SECONDS) * 100;

    if (timerDisplay) timerDisplay.textContent = formatTime(elapsedSecs);
    if (timerBar) timerBar.style.width = `${pct}%`;

    // Trin 1: Baseline 0 - 240s (0-4 min)
    if (elapsedSecs < 240) {
      if (elapsedSecs >= 180) { // Minut 3-4
        if (timerGuide) timerGuide.textContent = '⚡ AFLÆS BASELINE PULS (32W) NU (min 4)!';
        if (fieldset1) {
          fieldset1.style.borderColor = '#2563eb';
          fieldset1.style.background = '#eff6ff';
          fieldset1.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.2)';
        }
        if (fieldset2) resetFieldset2();
      } else {
        if (timerGuide) timerGuide.textContent = `Trin 1 (Opvarmning 32W): ${formatTime(240 - elapsedSecs)} tilbage`;
        if (fieldset1) {
          fieldset1.style.borderColor = '#2563eb';
          fieldset1.style.background = '#f8fafc';
        }
        if (fieldset2) resetFieldset2();
      }
    } 
    // Trin 2: Arbejdsbelastning 240s - 480s (4-8 min)
    else {
      if (fieldset1) resetFieldset1();

      if (elapsedSecs >= 420) { // Minut 7-8
        if (timerGuide) timerGuide.textContent = '⚡ AFLÆS ARBEJDSPULS NU (min 8)!';
        if (fieldset2) {
          fieldset2.style.borderColor = '#2563eb';
          fieldset2.style.background = '#eff6ff';
          fieldset2.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.2)';
        }
      } else {
        if (timerGuide) timerGuide.textContent = `Trin 2 (Arbejdsbelastning): ${formatTime(480 - elapsedSecs)} tilbage`;
        if (fieldset2) {
          fieldset2.style.borderColor = '#2563eb';
          fieldset2.style.background = '#f8fafc';
        }
      }
    }

    if (elapsedSecs >= TOTAL_TEST_SECONDS) {
      stopTimer();
      if (timerGuide) timerGuide.textContent = '✅ Test gennemført! Indtast værdierne for at beregne.';
    }
  }

  function resetFieldset1() {
    if (fieldset1) {
      fieldset1.style.borderColor = '#e2e8f0';
      fieldset1.style.background = '#f8fafc';
      fieldset1.style.boxShadow = 'none';
    }
  }

  function resetFieldset2() {
    if (fieldset2) {
      fieldset2.style.borderColor = '#e2e8f0';
      fieldset2.style.background = '#f8fafc';
      fieldset2.style.boxShadow = 'none';
    }
  }

  if (timerBtn) {
    timerBtn.addEventListener('click', () => {
      if (isTimerRunning) stopTimer();
      else startTimer();
    });
  }

  // --- 1. GEM KLADDE & PROFIL ---
  function saveDraftAndProfile() {
    const age = parseInt(container.querySelector('[name="eb_age"]')?.value || '0', 10);
    const weight = parseFloat(container.querySelector('[name="eb_weight"]')?.value || '');
    const genderEl = container.querySelector('input[name="eb_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    if (age > 0 || weight > 0) {
      StorageAdapter.saveProfile({
        ...(age > 0 && { age }),
        ...(weight > 0 && { weight }),
        gender
      });
    }

    StorageAdapter.saveDraft(TEST_ID, {
      work1: container.querySelector('[name="eb_work1"]')?.value || '32',
      hr1: container.querySelector('[name="eb_hr1"]')?.value || '',
      work2: container.querySelector('[name="eb_work2"]')?.value || '',
      hr2: container.querySelector('[name="eb_hr2"]')?.value || '',
      age: container.querySelector('[name="eb_age"]')?.value || '',
      weight: container.querySelector('[name="eb_weight"]')?.value || '',
      gender
    });
  }

  // --- 2. INDLÆS KLADDE ELLER PROFIL ---
  function loadInitialData() {
    const profile = StorageAdapter.getProfile();
    const draft = StorageAdapter.loadDraft(TEST_ID);

    if (draft) {
      if (draft.work1 && container.querySelector('[name="eb_work1"]')) container.querySelector('[name="eb_work1"]').value = draft.work1;
      if (draft.hr1 && container.querySelector('[name="eb_hr1"]')) container.querySelector('[name="eb_hr1"]').value = draft.hr1;
      if (draft.work2 && container.querySelector('[name="eb_work2"]')) container.querySelector('[name="eb_work2"]').value = draft.work2;
      if (draft.hr2 && container.querySelector('[name="eb_hr2"]')) container.querySelector('[name="eb_hr2"]').value = draft.hr2;
      if (draft.age && container.querySelector('[name="eb_age"]')) container.querySelector('[name="eb_age"]').value = draft.age;
      if (draft.weight && container.querySelector('[name="eb_weight"]')) container.querySelector('[name="eb_weight"]').value = draft.weight;
      if (draft.gender) {
        const radio = container.querySelector(`input[name="eb_gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }
    } else {
      if (profile.age && container.querySelector('[name="eb_age"]')) container.querySelector('[name="eb_age"]').value = profile.age;
      if (profile.weight && container.querySelector('[name="eb_weight"]')) container.querySelector('[name="eb_weight"]').value = profile.weight;
      if (profile.gender) {
        const radio = container.querySelector(`input[name="eb_gender"][value="${profile.gender}"]`);
        if (radio) radio.checked = true;
      }
    }
  }

  // Event listeners
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      saveDraftAndProfile();
      calculate();
    });
    input.addEventListener('change', () => {
      saveDraftAndProfile();
      calculate();
    });
  });

  function commitResult() {
    const age = parseFloat(container.querySelector('[name="eb_age"]')?.value || 0);
    const weight = parseFloat(container.querySelector('[name="eb_weight"]')?.value || 0);
    const genderEl = container.querySelector('input[name="eb_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const params = {
      work1: parseFloat(container.querySelector('[name="eb_work1"]')?.value || 32),
      hr1: parseFloat(container.querySelector('[name="eb_hr1"]')?.value || 0),
      work2: parseFloat(container.querySelector('[name="eb_work2"]')?.value || 0),
      hr2: parseFloat(container.querySelector('[name="eb_hr2"]')?.value || 0),
      age,
      weight,
      gender
    };

    const result = calculateEkblomBak(params);

    if (!result.isValid) {
      alert('Udfyld venligst alle felter med gyldige tal for at gemme resultatet.');
      return;
    }

    let evaluation = null;
    if (age > 0) {
      evaluation = evaluateFitnessLevel(result.fitnessLevel, age, gender);
    }

    StorageAdapter.commitToLog(TEST_ID, {
      type: 'physical',
      primary: {
        value: parseFloat(result.fitnessLevel),
        unit: 'ml/kg/min',
        label: 'Kondital (Ekblom-Bak)'
      },
      norm: evaluation ? {
        label: evaluation.label,
        color: evaluation.color,
        bg: evaluation.color + '18'
      } : undefined,
      subMetrics: {
        vo2maxLmin: parseFloat(result.maxOxygenUptake),
        deltaHR: result.deltaHR,
        deltaPO: result.deltaPO,
        work1: params.work1,
        hr1: params.hr1,
        work2: params.work2,
        hr2: params.hr2
      },
      context: {
        age,
        gender,
        weight
      }
    });

    if (saveBtn) {
      const originalText = saveBtn.innerHTML;
      saveBtn.innerHTML = '✅ Gemt!';
      saveBtn.style.background = '#16a34a';
      saveBtn.disabled = true;

      setTimeout(() => {
        saveBtn.innerHTML = originalText;
        saveBtn.style.background = '#2563eb';
        saveBtn.disabled = false;
      }, 2000);
    }
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', commitResult);
  }

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      if (container.querySelector('[name="eb_age"]')?.value > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld alder for at se tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  function calculate() {
    saveDraftAndProfile();

    const age = parseFloat(container.querySelector('[name="eb_age"]')?.value || 0);
    const weight = parseFloat(container.querySelector('[name="eb_weight"]')?.value || 0);
    const genderEl = container.querySelector('input[name="eb_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const params = {
      work1: parseFloat(container.querySelector('[name="eb_work1"]')?.value || 32),
      hr1: parseFloat(container.querySelector('[name="eb_hr1"]')?.value || 0),
      work2: parseFloat(container.querySelector('[name="eb_work2"]')?.value || 0),
      hr2: parseFloat(container.querySelector('[name="eb_hr2"]')?.value || 0),
      age,
      weight,
      gender
    };

    const result = calculateEkblomBak(params);

    if (result.isValid) {
      if (resFitness) resFitness.textContent = result.fitnessLevel;
      if (resVo2Max) resVo2Max.textContent = result.maxOxygenUptake;
      if (resDeltaHr) resDeltaHr.textContent = `+${result.deltaHR} bpm`;
      if (resDeltaPo) resDeltaPo.textContent = `+${result.deltaPO} W`;

      let evaluation = null;
      if (age > 0) {
        evaluation = evaluateFitnessLevel(result.fitnessLevel, age, gender);
        if (evaluation && resEvalBadge) {
          resEvalBadge.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        }

        const t = getFitnessThresholds(age, gender);
        if (t) {
          const marker = container.querySelector('.js-eb-continuum-marker');
          if (marker) {
            const v = parseFloat(result.fitnessLevel);
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

          if (tableBody) {
            const tableData = [
              { name: 'Meget lavt', range: `< ${t[0]}`, color: '#ef4444' },
              { name: 'Lavt',       range: `${t[0]} - ${t[1] - 1}`, color: '#f97316' },
              { name: 'Middel',     range: `${t[1]} - ${t[2]}`, color: '#eab308' },
              { name: 'Højt',       range: `${t[2] + 1} - ${t[3]}`, color: '#22c55e' },
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
        resetBadge();
      }
    } else {
      if (resFitness) resFitness.textContent = '-';
      if (resVo2Max) resVo2Max.textContent = '-';
      if (resDeltaHr) resDeltaHr.textContent = '-';
      if (resDeltaPo) resDeltaPo.textContent = '-';
      resetBadge();
    }
  }

  function resetBadge() {
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      stopTimer();
      StorageAdapter.clearDraft(TEST_ID);

      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
        else if (input.name === 'eb_work1') input.value = '32';
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
            link.download = 'ekblom-bak-resultat.png';
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

export const initCalculator = initEkblomBak;