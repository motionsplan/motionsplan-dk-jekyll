// assets/js/ui/skridtlaengde-ui.js
import {
  calculateStepLength,
  kmToSteps,
  estimateTimeMinutes,
  formatMinutes
} from '../core/skridt-core.js';

export function initSkridtlaengdeUI(container, calcId = 'skridtlaengde-calculator') {
  if (!container) return;

  const STORAGE_KEY = `mp_skridtlaengde_state_v3_${calcId}`;

  let currentGender = 'man';

  const genderBtns = container.querySelectorAll('.js-gender-btn');
  const heightInput = container.querySelector('.js-height-input');

  const resStepVal = container.querySelector('.js-res-step-val');
  const resStrideVal = container.querySelector('.js-res-stride-val');
  const tableBody = container.querySelector('.js-table-body');

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  function saveState() {
    try {
      const state = {
        gender: currentGender,
        height: heightInput ? heightInput.value : '180'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.gender) setGender(state.gender);
        if (heightInput && state.height !== undefined) heightInput.value = state.height;
      }
    } catch (e) {}
  }

  function setGender(gender) {
    currentGender = gender;
    genderBtns.forEach(btn => {
      btn.classList.toggle('is-selected', btn.getAttribute('data-gender') === gender);
    });
    calculate();
  }

  function calculate() {
    saveState();

    const h = parseFloat(heightInput ? heightInput.value : 180) || 180;
    
    // 1 Skridt (fx 74,3 cm)
    const stepLen = calculateStepLength(h, currentGender);
    
    // Fuld Gangcyklus = 2 Skridt (fx 148,6 cm)
    const strideLen = Math.round(stepLen * 2 * 10) / 10;

    if (resStepVal) resStepVal.textContent = stepLen.toString().replace('.', ',');
    if (resStrideVal) resStrideVal.textContent = strideLen.toString().replace('.', ',');

    // Generer distancetabel
    const dists = [
      { name: '1 km', km: 1 },
      { name: '2 km', km: 2 },
      { name: '5 km', km: 5 },
      { name: '10 km', km: 10 },
      { name: '10.000 skridt', isSteps: true, steps: 10000 }
    ];

    if (tableBody) {
      tableBody.innerHTML = dists.map(d => {
        let steps = 0;
        let km = 0;

        if (d.isSteps) {
          steps = d.steps;
          km = (steps * stepLen) / 100000;
        } else {
          km = d.km;
          steps = kmToSteps(km, stepLen);
        }

        const timeMin = estimateTimeMinutes(km, 'brisk');

        return `
          <tr>
            <td><strong>${d.isSteps ? `${km.toFixed(2).replace('.', ',')} km` : d.name}</strong></td>
            <td style="text-align: right;"><strong style="color: #2563eb;">${steps.toLocaleString('da-DK')}</strong> skridt</td>
            <td style="text-align: right; color: #64748b;">ca. ${formatMinutes(timeMin)}</td>
          </tr>
        `;
      }).join('');
    }
  }

  // Event Listeners
  genderBtns.forEach(btn => btn.addEventListener('click', () => setGender(btn.getAttribute('data-gender'))));

  if (heightInput) {
    ['input', 'change', 'keyup'].forEach(ev => heightInput.addEventListener(ev, calculate));
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      setGender('man');
      if (heightInput) heightInput.value = '180';
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'skridtlaengde-rapport.png';
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

export const initCalculator = initSkridtlaengdeUI;