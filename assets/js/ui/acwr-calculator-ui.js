(function() {
  const card = document.getElementById('mp-acwr-calculator-card');
  if (!card) return;

  const STORAGE_KEY = 'mp_acwr_calculator_state';

  // Standardværdier tilpasset hver enkelt enhed
  const DEFAULTS = {
    km:   { w1: '25',  w2: '28',  w3: '30',  w4: '35',  unitText: 'km', hint: 'Bedst til løbere og distancetræning.' },
    min:  { w1: '180', w2: '200', w3: '210', w4: '260', unitText: 'min', hint: 'Bedst hvis din træningsintensitet er nogenlunde ens uge for uge.' },
    srpe: { w1: '900', w2: '1100', w3: '1200', w4: '1500', unitText: 'pt', hint: 'Bedst til holdidræt & styrke (Varighed i min × RPE 1-10).' }
  };

  let state = { unit: 'km', w1: '25', w2: '28', w3: '30', w4: '35' };

  function updateUnitUI() {
    card.querySelectorAll('.js-acwr-unit-lbl').forEach(lbl => {
      if (lbl.dataset.value === state.unit) {
        lbl.style.background = '#2563eb';
        lbl.style.color = '#ffffff';
      } else {
        lbl.style.background = 'transparent';
        lbl.style.color = '#475569';
      }
    });

    const def = DEFAULTS[state.unit] || DEFAULTS.km;

    // Opdater enhedstekster på resultatkortet
    card.querySelectorAll('.js-acwr-res-unit').forEach(el => {
      el.textContent = def.unitText;
    });

    // Opdater hjælpetekst i toppen hvis den findes
    const hintEl = card.querySelector('.js-acwr-unit-hint');
    if (hintEl) {
      hintEl.textContent = def.hint;
    }
  }

  function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {} }
  function loadState() { try { const saved = localStorage.getItem(STORAGE_KEY); if (saved) Object.assign(state, JSON.parse(saved)); } catch(e) {} }

  function syncDOM() {
    updateUnitUI();
    card.querySelectorAll('.js-acwr-input').forEach(inp => {
      const f = inp.dataset.field;
      if (state[f] !== undefined) inp.value = state[f];
    });
    const uRadio = card.querySelector(`.js-acwr-unit-radio[value="${state.unit}"]`);
    if (uRadio) uRadio.checked = true;
  }

  function calculate() {
    saveState();

    const w1 = parseFloat(state.w1) || 0;
    const w2 = parseFloat(state.w2) || 0;
    const w3 = parseFloat(state.w3) || 0;
    const w4 = parseFloat(state.w4) || 0;

    const resScoreEl = card.querySelector('.js-acwr-res-score');
    const resBadgeEl = card.querySelector('.js-acwr-res-badge');
    const resDescEl = card.querySelector('.js-acwr-res-desc');
    const resAcuteEl = card.querySelector('.js-acwr-res-acute');
    const resChronicEl = card.querySelector('.js-acwr-res-chronic');
    const heroBgEl = card.querySelector('.js-acwr-hero-bg');

    if (w4 <= 0) {
      if (resScoreEl) resScoreEl.textContent = '0.00';
      return;
    }

    const chronic = (w1 + w2 + w3 + w4) / 4;
    const acwr = chronic > 0 ? (w4 / chronic) : 0;

    if (resAcuteEl) resAcuteEl.textContent = state.unit === 'min' ? Math.round(w4) : w4;
    if (resChronicEl) resChronicEl.textContent = state.unit === 'min' ? Math.round(chronic) : chronic.toFixed(1);
    if (resScoreEl) resScoreEl.textContent = acwr.toFixed(2);

    if (acwr < 0.8) {
      if (heroBgEl) heroBgEl.style.background = 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)';
      if (resBadgeEl) resBadgeEl.textContent = '🔵 Underbelastning (<0,8)';
      if (resDescEl) resDescEl.textContent = 'Træningsmængden er faldet. Risiko for at miste form.';
    } else if (acwr >= 0.8 && acwr <= 1.3) {
      if (heroBgEl) heroBgEl.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
      if (resBadgeEl) resBadgeEl.textContent = '🟢 Sweet Spot (0,8–1,3)';
      if (resDescEl) resDescEl.textContent = 'Optimal progression & lav skadesrisiko!';
    } else if (acwr > 1.3 && acwr <= 1.5) {
      if (heroBgEl) heroBgEl.style.background = 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)';
      if (resBadgeEl) resBadgeEl.textContent = '🟡 Øget Risiko (1,3–1,5)';
      if (resDescEl) resDescEl.textContent = 'Træningen øges hurtigt. Vær opmærksom på ømhed.';
    } else {
      if (heroBgEl) heroBgEl.style.background = 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)';
      if (resBadgeEl) resBadgeEl.textContent = '🔴 Danger Zone (>1,5)';
      if (resDescEl) resDescEl.textContent = 'Høj risiko for overbelastningsskade! Sænk mængden.';
    }
  }

  // EVENT LISTENERS: Skift af enhed opdaterer automatisk tallene til realistiske defaults
  card.querySelectorAll('.js-acwr-unit-radio').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const newUnit = e.target.value;
      state.unit = newUnit;

      // Nulstil felter til den nye enheds standardværdier
      const def = DEFAULTS[newUnit] || DEFAULTS.km;
      state.w1 = def.w1;
      state.w2 = def.w2;
      state.w3 = def.w3;
      state.w4 = def.w4;

      syncDOM();
      calculate();
    });
  });

  card.querySelectorAll('.js-acwr-input').forEach(inp => {
    inp.addEventListener('input', (e) => {
      state[e.target.dataset.field] = e.target.value;
      calculate();
    });
  });

  const resetBtn = card.querySelector('.js-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du nulstille ACWR-beregneren?')) {
        localStorage.removeItem(STORAGE_KEY);
        const def = DEFAULTS[state.unit] || DEFAULTS.km;
        state.w1 = def.w1; state.w2 = def.w2; state.w3 = def.w3; state.w4 = def.w4;
        syncDOM();
        calculate();
      }
    });
  }

  loadState();
  syncDOM();
  calculate();
})();