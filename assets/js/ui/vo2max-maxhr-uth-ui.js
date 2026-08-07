// assets/js/ui/kondital-hvilepuls-maxpuls-ui.js
import { calculateVo2MaxFromPulse } from '../core/vo2max-maxhr-uth.js';
import { estimateMaxHr } from '../core/max-hr.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initPulseVo2Max(container) {
  const inputs = container.querySelectorAll('.js-vp-input');
  const estimateBtn = container.querySelector('.js-vp-estimate-btn');
  const maxHrHelper = container.querySelector('.js-vp-maxhr-helper');
  
  // DOM elementer til resultater
  const resFitness = container.querySelector('.js-vp-fitness');
  const resEvalBadge = container.querySelector('.js-vp-eval-badge');
  const resVo2Max = container.querySelector('.js-vp-vo2max');
  const marker = container.querySelector('.js-vp-continuum-marker');
  
  // Popup
  const tableBtn = container.querySelector('.js-vp-table-btn');
  const popup = container.querySelector('.js-vp-popup');
  const popupClose = container.querySelector('.js-vp-popup-close');
  const tableBody = container.querySelector('.js-vp-table-body');

  // --- STATE MANAGEMENT ---
  function saveState() {
    const state = {
      age: container.querySelector('[name="vp_age"]').value,
      weight: container.querySelector('[name="vp_weight"]').value,
      restHr: container.querySelector('[name="vp_resthr"]').value,
      maxHr: container.querySelector('[name="vp_maxhr"]').value,
      gender: container.querySelector('input[name="vp_gender"]:checked').value
    };
    localStorage.setItem('mp_pulse_vo2max_state', JSON.stringify(state));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_pulse_vo2max_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.age) container.querySelector('[name="vp_age"]').value = state.age;
        if (state.weight) container.querySelector('[name="vp_weight"]').value = state.weight;
        if (state.restHr) container.querySelector('[name="vp_resthr"]').value = state.restHr;
        if (state.maxHr) container.querySelector('[name="vp_maxhr"]').value = state.maxHr;
        if (state.gender) {
          const radio = container.querySelector(`input[name="vp_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      } catch (e) {
        console.error("Kunne ikke indlæse gemt data.");
      }
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.name === 'vp_maxhr') maxHrHelper.style.display = 'none';
      saveState(); calculate();
    });
    input.addEventListener('change', () => {
      saveState(); calculate();
    });
  });

  if (estimateBtn) {
    estimateBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="vp_age"]').value);
      if (age > 0) {
        const estimatedHr = estimateMaxHr(age);
        container.querySelector('[name="vp_maxhr"]').value = estimatedHr;
        maxHrHelper.style.display = 'block';
        saveState(); calculate();
      } else {
        alert('Indtast venligst din alder først for at estimere maxpulsen.');
      }
    });
  }

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      if (container.querySelector('[name="vp_age"]').value > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld alder for at se tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  function calculate() {
    const params = {
      restHr: parseFloat(container.querySelector('[name="vp_resthr"]').value),
      maxHr: parseFloat(container.querySelector('[name="vp_maxhr"]').value),
      age: parseFloat(container.querySelector('[name="vp_age"]').value),
      weight: parseFloat(container.querySelector('[name="vp_weight"]').value)
    };
    const gender = container.querySelector('input[name="vp_gender"]:checked').value;

    const result = calculateVo2MaxFromPulse(params);

    if (result.isValid) {
      resFitness.textContent = result.fitnessLevel;
      resVo2Max.textContent = result.maxOxygenUptake;

      if (params.age > 0) {
        const evaluation = evaluateFitnessLevel(result.fitnessLevel, params.age, gender);
        if (evaluation) {
          resEvalBadge.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        }

        // Slider marker
        const thresholds = getFitnessThresholds(params.age, gender);
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
        }

        // Popup tabel
        const t = getFitnessThresholds(params.age, gender);
        if (t && tableBody) {
          const tableData = [
            { name: 'Meget højt', range: `> ${t[3]}` },
            { name: 'Højt', range: `${t[2] + 1} - ${t[3]}` },
            { name: 'Middel', range: `${t[1]} - ${t[2]}` },
            { name: 'Lavt', range: `${t[0]} - ${t[1] - 1}` },
            { name: 'Meget lavt', range: `< ${t[0]}` }
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
              badgeHtml = `<span style="font-size: 0.65rem; background: #3b82f6; color: #fff; padding: 2px 6px; border-radius: 4px; margin-left: 8px; vertical-align: middle;">${result.fitnessLevel}</span>`;
            }

            const tr = document.createElement('tr');
            tr.style = rowStyle;
            tr.innerHTML = `<td style="${nameStyle}">${row.name}</td><td style="${valStyle}">${row.range} ${badgeHtml}</td>`;
            tableBody.appendChild(tr);
          });
        }
      } else {
        resetBadge();
      }
    } else {
      resFitness.textContent = '-';
      resVo2Max.textContent = '-';
      resetBadge();
    }
  }

  function resetBadge() {
    resEvalBadge.textContent = 'Mangler data';
    resEvalBadge.style.backgroundColor = '#e2e8f0';
    resEvalBadge.style.color = '#64748b';
    if (marker) marker.style.display = 'none';
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
      if (popup) popup.style.display = 'none';
      saveState(); calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (popup) popup.style.display = 'none';
      setTimeout(() => {
        html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
          const link = document.createElement('a');
          link.download = 'kondital-puls-resultat.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }, 100);
    });
  }

  loadState();
  calculate();
}

export const initCalculator = initPulseVo2Max;