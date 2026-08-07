// assets/js/ui/running-distance-vo2max-ui.js
import { calculateRunningDistanceVO2 } from '../core/running-distance-vo2max.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initRunningDistanceVO2(container) {
  if (!container) return;

  const distanceKmInput = container.querySelector('[name="rdv_distance_km"]');
  const hoursInput = container.querySelector('[name="rdv_hours"]');
  const minutesInput = container.querySelector('[name="rdv_minutes"]');
  const secondsInput = container.querySelector('[name="rdv_seconds"]');
  const ageInput = container.querySelector('[name="rdv_age"]');
  const weightInput = container.querySelector('[name="rdv_weight"]');

  const presetBtns = container.querySelectorAll('.js-rdv-preset');

  // DOM resultater
  const resFitness = container.querySelector('.js-rdv-fitness');
  const resVdot = container.querySelector('.js-rdv-vdot');
  const resSdText = container.querySelector('.js-rdv-sd-text');
  const resEvalText = container.querySelector('.js-rdv-eval-text');
  const resKmtNum = container.querySelector('.js-rdv-kmt-num');
  const resPaceNum = container.querySelector('.js-rdv-pace-num');
  const resVo2Max = container.querySelector('.js-rdv-vo2max');
  const marker = container.querySelector('.js-rdv-continuum-marker');

  // Popup 1: Normtabel DOM
  const tableBtn = container.querySelector('.js-rdv-table-btn');
  const popup = container.querySelector('.js-rdv-popup');
  const popupClose = container.querySelector('.js-rdv-popup-close');
  const tableBody = container.querySelector('.js-rdv-table-body');

  // Popup 2: VDOT Info DOM
  const vdotInfoBtn = container.querySelector('.js-vdot-info-btn');
  const vdotPopup = container.querySelector('.js-vdot-popup');
  const vdotPopupClose = container.querySelector('.js-vdot-popup-close');

  function saveState() {
    try {
      const genderEl = container.querySelector('input[name="rdv_gender"]:checked');
      const state = {
        distanceKm: distanceKmInput ? distanceKmInput.value : '',
        hours: hoursInput ? hoursInput.value : '',
        minutes: minutesInput ? minutesInput.value : '',
        seconds: secondsInput ? secondsInput.value : '',
        age: ageInput ? ageInput.value : '',
        weight: weightInput ? weightInput.value : '',
        gender: genderEl ? genderEl.value : 'male'
      };
      localStorage.setItem('mp_rdv_state', JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem('mp_rdv_state');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.distanceKm && distanceKmInput) distanceKmInput.value = state.distanceKm;
        if (state.hours && hoursInput) hoursInput.value = state.hours;
        if (state.minutes && minutesInput) minutesInput.value = state.minutes;
        if (state.seconds && secondsInput) secondsInput.value = state.seconds;
        if (state.age && ageInput) ageInput.value = state.age;
        if (state.weight && weightInput) weightInput.value = state.weight;
        if (state.gender) {
          const radio = container.querySelector(`input[name="rdv_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function calculate() {
    const distKm = parseFloat(distanceKmInput ? distanceKmInput.value : '0');
    const distanceMeters = distKm * 1000;

    const hrs = hoursInput ? hoursInput.value : '';
    const mins = minutesInput ? minutesInput.value : '';
    const secs = secondsInput ? secondsInput.value : '';
    const age = parseInt(ageInput ? ageInput.value : '0', 10);
    const weight = parseFloat(weightInput ? weightInput.value : '');
    const genderEl = container.querySelector('input[name="rdv_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const res = calculateRunningDistanceVO2(distanceMeters, hrs, mins, secs, weight);

    if (res && res.isValid) {
      if (resFitness) resFitness.textContent = res.formattedFitnessLevel;
      if (resVdot) resVdot.textContent = res.formattedVDOT;
      if (resSdText) resSdText.textContent = `± ${res.sd} ${res.sdUnit}`;
      if (resKmtNum) resKmtNum.textContent = res.formattedKmtNum;
      if (resPaceNum) resPaceNum.textContent = res.paceNum;
      if (resVo2Max) resVo2Max.textContent = res.formattedVO2Max;

      // Norm vurdering
      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const userAge = age > 0 ? age : 20;
      const evaluation = evaluateFitnessLevel(res.fitnessLevel, userAge, normGender);

      if (tableBtn && resEvalText) {
        if (evaluation && age > 0) {
          resEvalText.textContent = evaluation.label;
          tableBtn.style.backgroundColor = evaluation.color;
          resEvalText.style.color = '#ffffff';
        } else {
          resEvalText.textContent = 'Mangler alder';
          tableBtn.style.backgroundColor = '#e2e8f0';
          resEvalText.style.color = '#64748b';
        }
      }

      // Continuum Marker
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

      // Popup 1: Normtabel
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
    if (resVdot) resVdot.textContent = '-';
    if (resSdText) resSdText.textContent = '-';
    if (resKmtNum) resKmtNum.textContent = '-';
    if (resPaceNum) resPaceNum.textContent = '-';
    if (resVo2Max) resVo2Max.textContent = '-';
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (tableBtn) {
      tableBtn.style.backgroundColor = '#e2e8f0';
      if (resEvalText) resEvalText.style.color = '#64748b';
    }
    if (marker) marker.style.display = 'none';
  }

  // Preset knapper
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const km = btn.getAttribute('data-km');
      if (distanceKmInput && km) {
        distanceKmInput.value = km;
        saveState();
        calculate();
      }
    });
  });

  const allInputs = container.querySelectorAll('input');
  allInputs.forEach(input => {
    ['input', 'change', 'click', 'keyup'].forEach(eventType => {
      input.addEventListener(eventType, () => {
        saveState();
        calculate();
      });
    });
  });

  // Popup 1 Event
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

  // Popup 2 Event (VDOT Info)
  if (vdotInfoBtn && vdotPopup && vdotPopupClose) {
    vdotInfoBtn.addEventListener('click', () => {
      vdotPopup.style.display = 'flex';
    });
    vdotPopupClose.addEventListener('click', () => {
      vdotPopup.style.display = 'none';
    });
  }

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      allInputs.forEach(input => {
        if (input.name === 'rdv_gender' && input.value === 'male') input.checked = true;
        else if (input.type !== 'radio') input.value = '';
      });
      if (popup) popup.style.display = 'none';
      if (vdotPopup) vdotPopup.style.display = 'none';
      try { localStorage.removeItem('mp_rdv_state'); } catch(e){}
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (popup) popup.style.display = 'none';
      if (vdotPopup) vdotPopup.style.display = 'none';
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'kondital-lobetest-resultat.png';
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

export const initCalculator = initRunningDistanceVO2;