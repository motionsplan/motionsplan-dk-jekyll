import { estimateMaxHr } from '../core/max-hr.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initMasterKondital(container) {
  const inputs = container.querySelectorAll('.js-kt-input');
  const modeBtns = container.querySelectorAll('.js-kt-mode-btn');
  const sections = container.querySelectorAll('.js-kt-section');
  const infoBox = container.querySelector('.js-kt-mode-info');
  const pillGroups = container.querySelectorAll('.js-kt-pill-group');
  
  const estimateBtn = container.querySelector('.js-kt-estimate-btn');
  const maxHrHelper = container.querySelector('.js-kt-maxhr-helper');
  
  // Results DOM
  const resFitness = container.querySelector('.js-kt-fitness');
  const resEvalBadge = container.querySelector('.js-kt-eval-badge');
  const resEvalText = container.querySelector('.js-kt-eval-text');
  const resVo2Max = container.querySelector('.js-kt-vo2max');
  const resSdText = container.querySelector('.js-kt-sd-text');
  const resFitnessAge = container.querySelector('.js-kt-fitness-age');
  const marker = container.querySelector('.js-kt-continuum-marker');
  
  // Modal Popup
  const tableBtn = container.querySelector('.js-kt-table-btn');
  const popup = container.querySelector('.js-kt-popup');
  const popupClose = container.querySelector('.js-kt-popup-close');
  const tableBody = container.querySelector('.js-kt-table-body');

  let activeMode = 'uth';
  const selectedPills = {
    kt_nes_pa: '3',
    kt_jackson_par: '4'
  };

  // Enkel reference-info i bunden
  const MODE_META = {
    uth: {
      title: "Uth et al. (2004)",
      ref: "Uth et al. (2004), Heart Rate Ratio Method",
      desc: "Estimerer din VO₂max ud fra forholdet mellem hvilepuls og makspuls."
    },
    nes: {
      title: "Nes et al. (2011)",
      ref: "Nes et al. (2011), NTNU / CERG Norge (HUNT-studiet)",
      desc: "Fysiologisk model udarbejdet på over 37.000 personer i Norge."
    },
    jackson: {
      title: "Jackson et al. (1990)",
      ref: "Jackson et al. (1990), Non-Exercise Model",
      desc: "Estimerer dit kondital ud fra BMI og dit samlede aktivitetsniveau."
    }
  };

  // BEREGNINGSFORMELER
  function calcUth(maxHr, restHr) {
    if (!maxHr || !restHr || maxHr <= restHr || restHr < 30 || maxHr > 240) return null;
    return (maxHr / restHr) * 15.3;
  }

  function calcNes(age, gender, waist, restHr, pa) {
    if (!waist || !restHr) return null;
    let vo2 = 0;
    if (gender === 'male') {
      vo2 = 100.27 - (0.226 * age) - (0.296 * waist) - (0.000001541 * Math.pow(waist, 3)) - (0.142 * restHr) + (1.5 * pa);
    } else {
      vo2 = 74.74 - (0.247 * age) - (0.259 * waist) - (0.114 * restHr) + (1.2 * pa);
    }
    return vo2 > 10 ? vo2 : null;
  }

  function calcJackson(age, gender, height, weight, par) {
    if (!height || !weight || height <= 0 || weight <= 0) return null;
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    
    let vo2 = 0;
    if (gender === 'male') {
      vo2 = 56.363 + (1.921 * par) - (0.381 * age) - (0.754 * bmi);
    } else {
      vo2 = 45.549 + (1.921 * par) - (0.381 * age) - (0.754 * bmi);
    }
    return Math.max(18.0, Math.min(85.0, vo2));
  }

  function calcFitnessAge(vo2, gender) {
    let estAge = gender === 'male' ? (48 - vo2) / 0.35 + 20 : (40 - vo2) / 0.3 + 20;
    return Math.max(18, Math.min(80, Math.round(estAge)));
  }

  // OPTION PILLS / CARDS LOGIK (LODRET RÆKKE)
  pillGroups.forEach(group => {
    const groupName = group.dataset.name;
    const pills = group.querySelectorAll('.js-kt-pill');

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => {
          p.classList.remove('is-active');
          p.style.border = '1.5px solid #cbd5e1';
          p.style.background = '#ffffff';
          p.style.color = '#334155';
          p.style.fontWeight = 'normal';
        });

        pill.classList.add('is-active');
        pill.style.border = '2px solid #2563eb';
        pill.style.background = '#eff6ff';
        pill.style.color = '#1e40af';
        pill.style.fontWeight = '700';

        selectedPills[groupName] = pill.dataset.value;
        saveState();
        calculate();
      });
    });
  });

  // STATE MANAGEMENT
  function saveState() {
    const state = { activeMode, selectedPills };
    inputs.forEach(input => {
      if (input.type === 'radio') {
        if (input.checked) state[input.name] = input.value;
      } else {
        state[input.name] = input.value;
      }
    });
    localStorage.setItem('mp_kondital_master_state', JSON.stringify(state));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_kondital_master_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.activeMode) switchMode(state.activeMode);
        if (state.selectedPills) {
          Object.assign(selectedPills, state.selectedPills);
          Object.keys(selectedPills).forEach(groupName => {
            const group = container.querySelector(`[data-name="${groupName}"]`);
            if (group) {
              const targetPill = group.querySelector(`[data-value="${selectedPills[groupName]}"]`);
              if (targetPill) targetPill.click();
            }
          });
        }
        inputs.forEach(input => {
          if (input.type === 'radio') {
            if (state[input.name] && input.value === state[input.name]) input.checked = true;
          } else if (state[input.name] !== undefined) {
            input.value = state[input.name];
          }
        });
      } catch (e) {
        console.error("Kunne ikke indlæse gemt data.");
      }
    } else {
      switchMode('uth');
    }
  }

  function switchMode(mode) {
    activeMode = mode;
    modeBtns.forEach(btn => {
      if (btn.dataset.mode === mode) {
        btn.classList.add('is-active');
        btn.style.border = '2px solid #cbd5e1';
        btn.style.background = '#ffffff';
      } else {
        btn.classList.remove('is-active');
        btn.style.border = '2px solid #e2e8f0';
        btn.style.background = '#f8fafc';
      }
    });

    sections.forEach(sec => {
      sec.style.display = sec.dataset.section === mode ? 'block' : 'none';
    });

    const meta = MODE_META[mode];
    if (meta && infoBox) {
      infoBox.innerHTML = `
        <div style="font-weight: 800; font-size: 0.82rem; color: #0f172a; margin-bottom: 2px;">${meta.title}</div>
        <div>${meta.desc}</div>
        <div style="font-size: 0.7rem; color: #64748b; margin-top: 2px;"><strong>Kilde:</strong> ${meta.ref}</div>
      `;
    }

    saveState();
    calculate();
  }

  // EVENT LISTENERS
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.name === 'kt_maxhr') maxHrHelper.style.display = 'none';
      saveState(); calculate();
    });
    input.addEventListener('change', () => {
      saveState(); calculate();
    });
  });

  if (estimateBtn) {
    estimateBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="kt_age"]').value);
      if (age > 0) {
        const estimatedHr = estimateMaxHr(age);
        container.querySelector('[name="kt_maxhr"]').value = estimatedHr;
        maxHrHelper.style.display = 'block';
        saveState(); calculate();
      } else {
        alert('Indtast venligst din alder først for at estimere maxpulsen.');
      }
    });
  }

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseFloat(container.querySelector('[name="kt_age"]').value);
      if (age > 0) {
        popup.style.display = 'flex';
      } else {
        alert('Udfyld venligst din alder for at se norm-tabellen.');
      }
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  // BEREGNING
  function calculate() {
    const age = parseFloat(container.querySelector('[name="kt_age"]').value) || 0;
    const weight = parseFloat(container.querySelector('[name="kt_weight"]').value) || 0;
    const genderEl = container.querySelector('input[name="kt_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    let vo2 = null;
    let sdText = "± 4.9 ml/kg/min";

    if (activeMode === 'uth') {
      const restHr = parseFloat(container.querySelector('[name="kt_resthr"]').value);
      const maxHr = parseFloat(container.querySelector('[name="kt_maxhr"]').value);
      vo2 = calcUth(maxHr, restHr);
      sdText = "± 4.9 ml/kg/min (Uth)";
    } else if (activeMode === 'nes') {
      const waist = parseFloat(container.querySelector('[name="kt_waist"]').value);
      const restHr = parseFloat(container.querySelector('[name="kt_nes_resthr"]').value);
      const pa = parseFloat(selectedPills.kt_nes_pa || '3');
      vo2 = calcNes(age, gender, waist, restHr, pa);
      sdText = "± 5.0 ml/kg/min (HUNT)";
    } else if (activeMode === 'jackson') {
      const height = parseFloat(container.querySelector('[name="kt_height"]').value);
      const par = parseFloat(selectedPills.kt_jackson_par || '4');
      vo2 = calcJackson(age, gender, height, weight, par);
      sdText = "± 5.5 ml/kg/min (Jackson)";
    }

    if (vo2 && vo2 > 10 && vo2 < 95) {
      resFitness.textContent = vo2.toFixed(1);
      resSdText.textContent = sdText;

      if (weight > 0) {
        const vo2Lmin = (vo2 * weight) / 1000;
        resVo2Max.textContent = vo2Lmin.toFixed(2);
      } else {
        resVo2Max.textContent = '-';
      }

      const fitAge = calcFitnessAge(vo2, gender);
      resFitnessAge.textContent = `${fitAge}`;

      if (age > 0) {
        const evaluation = evaluateFitnessLevel(vo2, age, gender);
        if (evaluation) {
          resEvalText.textContent = evaluation.label;
          resEvalBadge.style.backgroundColor = evaluation.color;
          resEvalBadge.style.color = '#ffffff';
        }

        const thresholds = getFitnessThresholds(age, gender);
        if (thresholds && marker) {
          const v = vo2;
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

        if (thresholds && tableBody) {
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
              badgeHtml = `<span style="font-size: 0.65rem; background: #3b82f6; color: #fff; padding: 2px 6px; border-radius: 4px; margin-left: 8px; vertical-align: middle;">${vo2.toFixed(1)}</span>`;
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
      resFitnessAge.textContent = '--';
      resetBadge();
    }
  }

  function resetBadge() {
    resEvalText.textContent = 'Mangler data';
    resEvalBadge.style.backgroundColor = '#e2e8f0';
    resEvalBadge.style.color = '#64748b';
    if (marker) marker.style.display = 'none';
  }

  // ACTION BUTTONS
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      inputs.forEach(input => {
        if (input.type === 'radio' && input.value === 'male') input.checked = true;
        else if (input.type !== 'radio') input.value = '';
      });
      if (maxHrHelper) maxHrHelper.style.display = 'none';
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
          link.download = 'kondital-sofatest-resultat.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }, 100);
    });
  }

  loadState();
}

export const initCalculator = initMasterKondital;