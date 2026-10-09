// assets/js/ui/energy-unit-converter-ui.js

export function initEnergyUnitConverterUI(container, calcId = 'energy-unit-converter') {
  if (!container) return;

  const STORAGE_KEY = `mp_energy_conv_state_${calcId}`;

  const inputs = container.querySelectorAll('.js-energy-input');
  const presetBtns = container.querySelectorAll('.js-preset-btn');
  const formulaText = container.querySelector('.js-res-formula-text');

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // Omregningsfaktorer til baseenhed: Joules (J)
  const CONVERSION_TO_JOULES = {
    j: 1,
    kj: 1000,
    mj: 1000000,
    kcal: 4184, // 1 kcal = 4184 J
    wh: 3600,   // 1 Wh = 3600 J
    kwh: 3600000
  };

  let isUpdating = false;

  function updateAllFromBase(joules, sourceUnit) {
    if (isUpdating) return;
    isUpdating = true;

    inputs.forEach(input => {
      const unit = input.getAttribute('data-unit');
      if (unit === sourceUnit) return; // Ændr ikke det felt, brugeren skriver i

      if (isNaN(joules) || joules === null || joules === undefined || joules < 0) {
        input.value = '';
        return;
      }

      const rawVal = joules / CONVERSION_TO_JOULES[unit];
      
      // Pæn afrunding afhængig af enhedens størrelse
      if (unit === 'j') {
        input.value = Math.round(rawVal);
      } else if (unit === 'kcal' || unit === 'kj') {
        input.value = Math.round(rawVal * 10) / 10;
      } else if (unit === 'mj' || unit === 'kwh') {
        input.value = (Math.round(rawVal * 1000) / 1000).toString();
      } else {
        input.value = (Math.round(rawVal * 100) / 100).toString();
      }
    });

    // Opdater dynamisk forklaring
    if (formulaText && !isNaN(joules) && joules > 0) {
      const kcalVal = Math.round((joules / CONVERSION_TO_JOULES.kcal) * 10) / 10;
      const kjVal = Math.round((joules / CONVERSION_TO_JOULES.kj) * 10) / 10;
      formulaText.innerHTML = `<strong>${kcalVal.toLocaleString('da-DK')} kcal</strong> svarer nøjagtigt til <strong>${kjVal.toLocaleString('da-DK')} kJ</strong> (${Math.round(joules).toLocaleString('da-DK')} Joule).`;
    }

    isUpdating = false;
  }

  function handleInputChange(e) {
    const input = e.target;
    const unit = input.getAttribute('data-unit');
    const val = parseFloat(input.value);

    if (isNaN(val) || input.value === '') {
      updateAllFromBase(null, unit);
      return;
    }

    const joules = val * CONVERSION_TO_JOULES[unit];
    updateAllFromBase(joules, unit);
    saveState(unit, val);
  }

  function setPreset(unit, value) {
    const targetInput = container.querySelector(`.js-energy-input[data-unit="${unit}"]`);
    if (targetInput) {
      targetInput.value = value;
      const joules = value * CONVERSION_TO_JOULES[unit];
      updateAllFromBase(joules, unit);
      saveState(unit, value);
    }
  }

  function saveState(unit, val) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ unit, val }));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.unit && state.val) {
          setPreset(state.unit, state.val);
          return;
        }
      }
    } catch (e) {}

    // Standard opstart: 500 kcal
    setPreset('kcal', 500);
  }

  // Events
  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, handleInputChange));
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const unit = btn.getAttribute('data-unit');
      const val = parseFloat(btn.getAttribute('data-val'));
      setPreset(unit, val);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      setPreset('kcal', 500);
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'energi-omregning-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadState();
}

export const initCalculator = initEnergyUnitConverterUI;