// assets/js/ui/sitko-test-ui.js
import { calculateSitkoTest } from '../core/sitko-test.js';
import { evaluateFitnessLevel, getFitnessThresholds } from '../core/vo2max-norms.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_sitkotest_state_v1';

  const inputs = container.querySelectorAll('.js-sk-input');
  
  const resFitness = container.querySelector('.js-sk-fitness');
  const resWperKg = container.querySelector('.js-sk-wperkg');
  const resEvalBtn = container.querySelector('.js-sk-eval-badge');
  const resEvalText = container.querySelector('.js-sk-eval-text');
  const marker = container.querySelector('.js-sk-continuum-marker');

  const tableBtn = container.querySelector('.js-sk-table-btn');
  const popup = container.querySelector('.js-sk-popup');
  const popupClose = container.querySelector('.js-sk-popup-close');
  const tableBody = container.querySelector('.js-sk-table-body');

  function saveState() {
    try {
      const state = {
        watt: container.querySelector('[name="sk_watt"]')?.value || '',
        weight: container.querySelector('[name="sk_weight"]')?.value || '',
        age: container.querySelector('[name="sk_age"]')?.value || '',
        gender: container.querySelector('input[name="sk_gender"]:checked')?.value || 'male'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.watt && container.querySelector('[name="sk_watt"]')) {
          container.querySelector('[name="sk_watt"]').value = state.watt;
        }
        if (state.weight && container.querySelector('[name="sk_weight"]')) {
          container.querySelector('[name="sk_weight"]').value = state.weight;
        }
        if (state.age && container.querySelector('[name="sk_age"]')) {
          container.querySelector('[name="sk_age"]').value = state.age;
        }
        if (state.gender) {
          const radio = container.querySelector(`input[name="sk_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function updateGenderUI() {
    const ageVal = parseInt(container.querySelector('[name="sk_age"]')?.value || 0, 10);
    const isAdult = ageVal >= 18;

    const labelMale = container.querySelector('.js-sk-label-male');
    const labelFemale = container.querySelector('.js-sk-label-female');

    if (labelMale) labelMale.textContent = isAdult ? 'Mand' : 'Dreng';
    if (labelFemale) labelFemale.textContent = isAdult ? 'Kvinde' : 'Pige';

    const genderRadios = container.querySelectorAll('input[name="sk_gender"]');
    genderRadios.forEach(r => {
      const box = r.nextElementSibling;
      if (box) {
        if (r.checked) {
          box.style.backgroundColor = '#2563eb';
          box.style.color = '#ffffff';
        } else {
          box.style.backgroundColor = 'transparent';
          box.style.color = '#475569';
        }
      }
    });
  }

  function calculate() {
    saveState();
    updateGenderUI();

    const watt = container.querySelector('[name="sk_watt"]')?.value || '';
    const weight = container.querySelector('[name="sk_weight"]')?.value || '';
    const age = parseInt(container.querySelector('[name="sk_age"]')?.value || 0, 10);
    const genderEl = container.querySelector('input[name="sk_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';

    const res = calculateSitkoTest({ watt, weight, age, gender });

    if (res && res.isValid) {
      if (resFitness) resFitness.textContent = res.fitnessLevel;
      if (resWperKg) resWperKg.textContent = res.wPerKg;

      const normGender = (gender === 'male' || gender === 'mand') ? 'male' : 'female';
      const userAge = age > 0 ? age : 30;
      const evaluation = evaluateFitnessLevel(parseFloat(res.fitnessLevel), userAge, normGender);

      if (evaluation && age > 0) {
        if (resEvalBtn && resEvalText) {
          resEvalText.textContent = evaluation.label;
          resEvalBtn.style.backgroundColor = evaluation.color;
          resEvalBtn.style.color = '#ffffff';
        }
      } else if (resEvalBtn && resEvalText) {
        resEvalText.textContent = 'Mangler alder';
        resEvalBtn.style.backgroundColor = '#e2e8f0';
        resEvalBtn.style.color = '#64748b';
      }

      const thresholds = getFitnessThresholds(userAge, normGender);
      if (thresholds && age > 0) {
        const v = parseFloat(res.fitnessLevel);
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

      if (thresholds && tableBody && age > 0) {
        const tableData = [
          { name: 'Meget lavt', range: `< ${thresholds[0]}`, color: '#ef4444' },
          { name: 'Lavt', range: `${thresholds[0]} - ${thresholds[1] - 1}`, color: '#f97316' },
          { name: 'Middel', range: `${thresholds[1]} - ${thresholds[2]}`, color: '#eab308' },
          { name: 'Højt', range: `${thresholds[2] + 1} - ${thresholds[3]}`, color: '#22c55e' },
          { name: 'Meget højt', range: `> ${thresholds[3]}`, color: '#3b82f6' }
        ];

        tableBody.innerHTML = '';
        tableData.forEach(row => {
          const isMatch = evaluation && row.name === evaluation.label;
          const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
          const fontStyle = isMatch ? 'font-weight: 800; color: #0f172a;' : 'color: #334155;';
          const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${row.color}; margin-right:8px;"></span>`;
          
          let badgeHtml = '';
          if (isMatch) {
            badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">${res.fitnessLevel}</span>`;
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
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resFitness) resFitness.textContent = '-';
    if (resWperKg) resWperKg.textContent = '-';
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (resEvalBtn) {
      resEvalBtn.style.backgroundColor = '#e2e8f0';
      resEvalBtn.style.color = '#64748b';
    }
    if (marker) marker.style.display = 'none';
  }

  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      const age = parseInt(container.querySelector('[name="sk_age"]')?.value || 0, 10);
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
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      
      const wattInput = container.querySelector('[name="sk_watt"]');
      const weightInput = container.querySelector('[name="sk_weight"]');
      const ageInput = container.querySelector('[name="sk_age"]');
      const maleRadio = container.querySelector('input[name="sk_gender"][value="male"]');

      if (wattInput) wattInput.value = '300';
      if (weightInput) weightInput.value = '75';
      if (ageInput) ageInput.value = '35';
      if (maleRadio) maleRadio.checked = true;

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
            link.download = 'sitko-cykeltest-rapport.png';
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

export const initSitkoTest = initCalculator;
export default initCalculator;