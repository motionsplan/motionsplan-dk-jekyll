// assets/js/ui/aastrand-topunktstest-ui.js
import { calculateAstrand2Point } from '../core/aastrand-topunktstest.js'; // Husk at sikre navnet på din core fil matcher
import { estimateMaxHr } from '../core/max-hr.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initAstrand(container) {
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
  
  // DOM elementer til Popup Table
  const tableBtn = container.querySelector('.js-as-table-btn');
  const popup = container.querySelector('.js-as-popup');
  const popupClose = container.querySelector('.js-as-popup-close');
  const tableBody = container.querySelector('.js-as-table-body');
  
  let chartInstance = null;

  // --- STATE MANAGEMENT ---
  function saveState() {
    const state = {
      work1: container.querySelector('[name="as_work1"]').value,
      hr1: container.querySelector('[name="as_hr1"]').value,
      work2: container.querySelector('[name="as_work2"]').value,
      hr2: container.querySelector('[name="as_hr2"]').value,
      age: container.querySelector('[name="as_age"]').value,
      weight: container.querySelector('[name="as_weight"]').value,
      maxHr: container.querySelector('[name="as_maxhr"]').value,
      gender: container.querySelector('input[name="as_gender"]:checked').value
    };
    localStorage.setItem('mp_astrand_state', JSON.stringify(state));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_astrand_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.work1) container.querySelector('[name="as_work1"]').value = state.work1;
        if (state.hr1) container.querySelector('[name="as_hr1"]').value = state.hr1;
        if (state.work2) container.querySelector('[name="as_work2"]').value = state.work2;
        if (state.hr2) container.querySelector('[name="as_hr2"]').value = state.hr2;
        if (state.age) container.querySelector('[name="as_age"]').value = state.age;
        if (state.weight) container.querySelector('[name="as_weight"]').value = state.weight;
        if (state.maxHr) container.querySelector('[name="as_maxhr"]').value = state.maxHr;
        if (state.gender) {
          const radio = container.querySelector(`input[name="as_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      } catch (e) {
        console.error("Kunne ikke indlæse gemt data.");
      }
    }
  }

  // Event listeners
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.name === 'as_maxhr') maxHrHelper.style.display = 'none';
      saveState(); calculate();
    });
    input.addEventListener('change', () => {
      saveState(); calculate();
    });
  });

  if (estimateBtn) {
    estimateBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="as_age"]').value);
      if (age > 0) {
        const estimatedHr = estimateMaxHr(age);
        container.querySelector('[name="as_maxhr"]').value = estimatedHr;
        maxHrHelper.style.display = 'block';
        saveState(); 
        calculate();
      } else {
        alert('Indtast venligst din alder først for at estimere maxpulsen.');
      }
    });
  }

  // Popup Event Listeners
  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      if (container.querySelector('[name="as_age"]').value > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld alder for at se tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  chartDetailsEl.addEventListener('toggle', () => {
    if (chartDetailsEl.open && chartInstance) chartInstance.resize();
  });

  function calculate() {
    const params = {
      work1: parseFloat(container.querySelector('[name="as_work1"]').value),
      hr1: parseFloat(container.querySelector('[name="as_hr1"]').value),
      work2: parseFloat(container.querySelector('[name="as_work2"]').value),
      hr2: parseFloat(container.querySelector('[name="as_hr2"]').value),
      age: parseFloat(container.querySelector('[name="as_age"]').value),
      weight: parseFloat(container.querySelector('[name="as_weight"]').value),
      maxHr: parseFloat(container.querySelector('[name="as_maxhr"]').value)
    };
    const gender = container.querySelector('input[name="as_gender"]:checked').value;

    const result = calculateAstrand2Point(params);

    if (result.isValid) {
      resFitness.textContent = result.fitnessLevel;
      resVo2Max.textContent = result.maxOxygenUptake;
      resMaxWatt.textContent = result.maxWork;

      if (params.age > 0) {
        // Vurder level og opdater badge
        const evaluation = evaluateFitnessLevel(result.fitnessLevel, params.age, gender);
        if (evaluation) {
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
            // Sorteret fra Laveste til Højeste
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
              
              // Elegant farveprik ud for navnet
              const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
              
              let badgeHtml = '';
              if (isMatch) {
                // Den lille blå boks med dit eget tal (fra screenshot)
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

      updateChart(params, result.maxWork);
    } else {
      resFitness.textContent = '-';
      resVo2Max.textContent = '-';
      resMaxWatt.textContent = '-';
      resetBadge();
      if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
    }
  }

  function resetBadge() {
    resEvalBadge.textContent = 'Mangler data';
    resEvalBadge.style.backgroundColor = '#e2e8f0';
    resEvalBadge.style.color = '#64748b';
  }

  function updateChart(p, calculatedMaxWork) {
    if (!window.Chart) return;
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

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
        else if (input.type !== 'radio') input.value = '';
      });
      maxHrHelper.style.display = 'none';
      if(popup) popup.style.display = 'none';
      saveState(); 
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if(popup) popup.style.display = 'none';
      chartDetailsEl.open = true; 
      setTimeout(() => {
        html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
          const link = document.createElement('a');
          link.download = 'astrand-test-resultat.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }, 300);
    });
  }

  loadState();
  calculate();
}

export const initCalculator = initAstrand;