// assets/js/ui/aastrand-topunktstest-ui.js
import { calculateAstrand2Point } from '../core/aastrand-topunktstest.js';
import { estimateMaxHr } from '../core/max-hr.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';
import { StorageAdapter } from '../core/StorageAdapter.js';

const TEST_ID = 'astrand_2point';

export function initAstrand(container) {
  if (!container) return;

  const inputs = container.querySelectorAll('.js-as-input');
  const estimateBtn = container.querySelector('.js-as-estimate-btn');
  const maxHrHelper = container.querySelector('.js-as-maxhr-helper');
  const chartDetailsEl = container.querySelector('.js-as-chart-details');
  const canvas = container.querySelector('.js-as-chart');
  
  // DOM elementer til resultater
  const resFitness = container.querySelector('.js-as-fitness');
  const resEvalBadge = container.querySelector('.js-as-eval-badge');
  const resVo2Max = container.querySelector('.js-as-vo2max');
  const resMaxWatt = container.querySelector('.js-as-maxwatt');

  // Fieldset DOM elementer til timer-highlighting
  const fieldset1 = container.querySelector('.js-as-fieldset-1');
  const fieldset2 = container.querySelector('.js-as-fieldset-2');

  // Timer DOM elementer
  const timerBtn = container.querySelector('.js-as-timer-btn');
  const timerDisplay = container.querySelector('.js-as-timer-display');
  const timerBar = container.querySelector('.js-as-timer-bar');
  const timerGuide = container.querySelector('.js-as-timer-guide');
  
  // DOM elementer til Popup Table
  const tableBtn = container.querySelector('.js-as-table-btn');
  const popup = container.querySelector('.js-as-popup');
  const popupClose = container.querySelector('.js-as-popup-close');
  const tableBody = container.querySelector('.js-as-table-body');
  
  const saveBtn = container.querySelector('.js-as-save-btn') || container.querySelector('.js-save-btn');
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  let chartInstance = null;

  // --- TIMER STATE (DRIFT-FRI DATE.NOW) ---
  let timerInterval = null;
  let timerStartTime = null;
  let isTimerRunning = false;
  const TOTAL_TEST_SECONDS = 600; // 10 minutter i alt (6 min level 1 + 4 min level 2)

  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function startTimer() {
    isTimerRunning = true;
    timerStartTime = Date.now();
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
    if (timerBtn) {
      timerBtn.textContent = '🚀 Start Timer';
      timerBtn.style.background = '#2563eb';
    }
    if (timerGuide) timerGuide.textContent = 'Timer stoppet (10 min i alt)';
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

    // Trin 1: 0 - 360s (0-6 min)
    if (elapsedSecs < 360) {
      // Pulsaflæsning ved minut 5-6 (300s - 360s)
      if (elapsedSecs >= 300) {
        if (timerGuide) timerGuide.textContent = '⚡ AFLÆS PULS FOR 1. BELASTNING NU (min 5-6)!';
        if (fieldset1) {
          fieldset1.style.borderColor = '#2563eb';
          fieldset1.style.background = '#eff6ff';
          fieldset1.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.2)';
        }
        if (fieldset2) resetFieldset2();
      } else {
        if (timerGuide) timerGuide.textContent = `Trin 1 (aflæs puls mellem 5-6 minut): ${formatTime(360 - elapsedSecs)} tilbage`;
        if (fieldset1) {
          fieldset1.style.borderColor = '#2563eb';
          fieldset1.style.background = '#f8fafc';
        }
        if (fieldset2) resetFieldset2();
      }
    } 
    // Trin 2: 360s - 600s (6-10 min)
    else {
      if (fieldset1) resetFieldset1();

      // Pulsaflæsning ved minut 9-10 (540s - 600s)
      if (elapsedSecs >= 540) {
        if (timerGuide) timerGuide.textContent = '⚡ AFLÆS PULS FOR 2. BELASTNING NU (min 9-10)!';
        if (fieldset2) {
          fieldset2.style.borderColor = '#2563eb';
          fieldset2.style.background = '#eff6ff';
          fieldset2.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.2)';
        }
      } else {
        if (timerGuide) timerGuide.textContent = `Trin 2 (aflæs puls efter 10 min): ${formatTime(600 - elapsedSecs)} tilbage`;
        if (fieldset2) {
          fieldset2.style.borderColor = '#2563eb';
          fieldset2.style.background = '#f8fafc';
        }
      }
    }

    if (elapsedSecs >= TOTAL_TEST_SECONDS) {
      stopTimer();
      if (timerGuide) timerGuide.textContent = '✅ Test gennemført! Indtast puls og intensitet.';
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
    const age = parseInt(container.querySelector('[name="as_age"]')?.value || '0', 10);
    const weight = parseFloat(container.querySelector('[name="as_weight"]')?.value || '');
    const genderEl = container.querySelector('input[name="as_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    if (age > 0 || weight > 0) {
      StorageAdapter.saveProfile({
        ...(age > 0 && { age }),
        ...(weight > 0 && { weight }),
        gender
      });
    }

    StorageAdapter.saveDraft(TEST_ID, {
      work1: container.querySelector('[name="as_work1"]')?.value || '',
      hr1: container.querySelector('[name="as_hr1"]')?.value || '',
      work2: container.querySelector('[name="as_work2"]')?.value || '',
      hr2: container.querySelector('[name="as_hr2"]')?.value || '',
      age: container.querySelector('[name="as_age"]')?.value || '',
      weight: container.querySelector('[name="as_weight"]')?.value || '',
      maxHr: container.querySelector('[name="as_maxhr"]')?.value || '',
      gender
    });
  }

  // --- 2. INDLÆS KLADDE ELLER PROFIL ---
  function loadInitialData() {
    const profile = StorageAdapter.getProfile();
    const draft = StorageAdapter.loadDraft(TEST_ID);

    if (draft) {
      if (draft.work1 && container.querySelector('[name="as_work1"]')) container.querySelector('[name="as_work1"]').value = draft.work1;
      if (draft.hr1 && container.querySelector('[name="as_hr1"]')) container.querySelector('[name="as_hr1"]').value = draft.hr1;
      if (draft.work2 && container.querySelector('[name="as_work2"]')) container.querySelector('[name="as_work2"]').value = draft.work2;
      if (draft.hr2 && container.querySelector('[name="as_hr2"]')) container.querySelector('[name="as_hr2"]').value = draft.hr2;
      if (draft.age && container.querySelector('[name="as_age"]')) container.querySelector('[name="as_age"]').value = draft.age;
      if (draft.weight && container.querySelector('[name="as_weight"]')) container.querySelector('[name="as_weight"]').value = draft.weight;
      if (draft.maxHr && container.querySelector('[name="as_maxhr"]')) container.querySelector('[name="as_maxhr"]').value = draft.maxHr;
      if (draft.gender) {
        const radio = container.querySelector(`input[name="as_gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }
    } else {
      if (profile.age && container.querySelector('[name="as_age"]')) container.querySelector('[name="as_age"]').value = profile.age;
      if (profile.weight && container.querySelector('[name="as_weight"]')) container.querySelector('[name="as_weight"]').value = profile.weight;
      if (profile.gender) {
        const radio = container.querySelector(`input[name="as_gender"][value="${profile.gender}"]`);
        if (radio) radio.checked = true;
      }
    }
  }

  // Event listeners
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.name === 'as_maxhr' && maxHrHelper) maxHrHelper.style.display = 'none';
      saveDraftAndProfile(); 
      calculate();
    });
    input.addEventListener('change', () => {
      saveDraftAndProfile(); 
      calculate();
    });
  });

  if (estimateBtn) {
    estimateBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="as_age"]')?.value || 0);
      if (age > 0) {
        const estimatedHr = estimateMaxHr(age);
        container.querySelector('[name="as_maxhr"]').value = estimatedHr;
        if (maxHrHelper) maxHrHelper.style.display = 'block';
        saveDraftAndProfile(); 
        calculate();
      } else {
        alert('Indtast venligst din alder først for at estimere maxpulsen.');
      }
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      calculate();
    });
  }

  // Popup Event Listeners
  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      if (container.querySelector('[name="as_age"]')?.value > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld alder for at se tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  if (chartDetailsEl) {
    chartDetailsEl.addEventListener('toggle', () => {
      if (chartDetailsEl.open && chartInstance) chartInstance.resize();
    });
  }

  function calculate() {
    saveDraftAndProfile();

    const params = {
      work1: parseFloat(container.querySelector('[name="as_work1"]')?.value || 0),
      hr1: parseFloat(container.querySelector('[name="as_hr1"]')?.value || 0),
      work2: parseFloat(container.querySelector('[name="as_work2"]')?.value || 0),
      hr2: parseFloat(container.querySelector('[name="as_hr2"]')?.value || 0),
      age: parseFloat(container.querySelector('[name="as_age"]')?.value || 0),
      weight: parseFloat(container.querySelector('[name="as_weight"]')?.value || 0),
      maxHr: parseFloat(container.querySelector('[name="as_maxhr"]')?.value || 0)
    };
    const genderEl = container.querySelector('input[name="as_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const result = calculateAstrand2Point(params);

    if (result.isValid) {
      if (resFitness) resFitness.textContent = result.fitnessLevel;
      if (resVo2Max) resVo2Max.textContent = result.maxOxygenUptake;
      if (resMaxWatt) resMaxWatt.textContent = result.maxWork;

      let evaluation = null;
      if (params.age > 0) {
        evaluation = evaluateFitnessLevel(result.fitnessLevel, params.age, gender);
        if (evaluation && resEvalBadge) {
          resEvalBadge.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        }

        const t = getFitnessThresholds(params.age, gender);
        if (t) {
          // --- KONTINUUM SLIDER LOGIK ---
          const marker = container.querySelector('.js-as-continuum-marker');
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

          // --- POPUP TABEL BYGGER ---
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

      // AUTOMATISK GEM I LOGGEN VIA STORAGEADAPTER
      StorageAdapter.commitToLog(TEST_ID, {
        type: 'physical',
        primary: {
          value: parseFloat(result.fitnessLevel),
          unit: 'ml/kg/min',
          label: 'Kondital'
        },
        norm: evaluation ? {
          label: evaluation.label,
          color: evaluation.color,
          bg: evaluation.color + '18'
        } : undefined,
        subMetrics: {
          vo2maxLmin: parseFloat(result.maxOxygenUptake),
          maxWork: parseFloat(result.maxWork),
          work1: params.work1,
          hr1: params.hr1,
          work2: params.work2,
          hr2: params.hr2
        },
        context: {
          age: params.age,
          gender,
          weight: params.weight,
          maxHr: params.maxHr
        }
      });

      updateChart(params, result.maxWork);
    } else {
      if (resFitness) resFitness.textContent = '-';
      if (resVo2Max) resVo2Max.textContent = '-';
      if (resMaxWatt) resMaxWatt.textContent = '-';
      resetBadge();
      if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
    }
  }

  function resetBadge() {
    if (resEvalBadge) {
      resEvalBadge.textContent = 'Mangler data';
      resEvalBadge.style.backgroundColor = '#e2e8f0';
      resEvalBadge.style.color = '#64748b';
    }
  }

  function updateChart(p, calculatedMaxWork) {
    if (!window.Chart || !canvas) return;
    const dataPoints = [
      { x: p.work1, y: p.hr1 },
      { x: p.work2, y: p.hr2 },
      { x: calculatedMaxWork, y: p.maxHr }
    ];

    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(canvas, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Fremskrivning',
          data: dataPoints,
          borderColor: '#dc2626',
          borderWidth: 2,
          borderDash: [8, 6],     
          pointBackgroundColor: ['#dc2626', '#dc2626', '#2563eb'],
          pointBorderColor: ['#dc2626', '#dc2626', '#2563eb'],
          pointStyle: ['circle', 'circle', 'triangle'], 
          pointRadius: [6, 6, 8],
          pointHoverRadius: [8, 8, 10],
          showLine: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `Belastning: ${context.parsed.x} W | Puls: ${context.parsed.y} slag/min`
            }
          }
        },
        scales: {
          x: {
            type: 'linear',
            title: { display: true, text: 'Arbejdsbelastning (watt)', font: { weight: 'bold' } },
            min: Math.max(0, p.work1 - 20) 
          },
          y: {
            title: { display: true, text: 'Puls (slag/min)', font: { weight: 'bold' } },
            min: 0,
            max: Math.max(220, p.maxHr + 10)
          }
        }
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      stopTimer();
      StorageAdapter.clearDraft(TEST_ID);
      StorageAdapter.clearLog(TEST_ID);

      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
        else if (input.type !== 'radio') input.value = '';
      });
      if (maxHrHelper) maxHrHelper.style.display = 'none';
      if (popup) popup.style.display = 'none';
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (popup) popup.style.display = 'none';
      if (chartDetailsEl) chartDetailsEl.open = true; 
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'astrand-2punktstest-resultat.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 300);
    });
  }

  loadInitialData();
  calculate();
}

export const initCalculator = initAstrand;