(function() {
  const card = document.getElementById('mp-readiness-calculator-card');
  if (!card) return;

  const STORAGE_KEY = 'mp_readiness_calculator_state';
  const COMPACT_HOOPER_KEY = 'motionsplan_hooper_scores'; // Deles med compact widget

  const state = {
    sleep: 4,
    energy: 4,
    soreness: 4,
    stress: 4,
    rhrNorm: 55,
    rhrToday: 56
  };

  function saveState() { 
    try { 
      // Gem fuld tilstand
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); 

      // Gem også Hooper-tal i den delte nøgle, så compact widget opdateres
      const hooperState = {
        sleep: parseInt(state.sleep) || 4,
        energy: parseInt(state.energy) || 4,
        soreness: parseInt(state.soreness) || 4,
        stress: parseInt(state.stress) || 4
      };
      localStorage.setItem(COMPACT_HOOPER_KEY, JSON.stringify(hooperState));
    } catch(e) {} 
  }

  function loadState() { 
    try { 
      // 1. Hent den fulde beregners seneste tilstand
      const savedFull = localStorage.getItem(STORAGE_KEY); 
      if (savedFull) Object.assign(state, JSON.parse(savedFull)); 

      // 2. Tjek om der er nyere/opdaterede Hooper-tal fra compact widget
      const savedHooper = localStorage.getItem(COMPACT_HOOPER_KEY);
      if (savedHooper) {
        const hooperData = JSON.parse(savedHooper);
        if (hooperData.sleep !== undefined) state.sleep = hooperData.sleep;
        if (hooperData.energy !== undefined) state.energy = hooperData.energy;
        if (hooperData.soreness !== undefined) state.soreness = hooperData.soreness;
        if (hooperData.stress !== undefined) state.stress = hooperData.stress;
      }
    } catch(e) {} 
  }

  function syncDOM() {
    card.querySelectorAll('.js-readiness-slider').forEach(s => {
      const f = s.dataset.field;
      if (state[f] !== undefined) {
        s.value = state[f];
        const valEl = card.querySelector(`.js-readiness-val-${f}`);
        if (valEl) valEl.textContent = `${state[f]} / 5`;
      }
    });

    card.querySelectorAll('.js-readiness-input').forEach(inp => {
      const f = inp.dataset.field;
      if (state[f] !== undefined) inp.value = state[f];
    });
  }

  function calculate() {
    saveState();

    const sleep = parseInt(state.sleep) || 1;
    const energy = parseInt(state.energy) || 1;
    const soreness = parseInt(state.soreness) || 1;
    const stress = parseInt(state.stress) || 1;
    const rhrNorm = parseFloat(state.rhrNorm) || 55;
    const rhrToday = parseFloat(state.rhrToday) || 55;

    // 1. Hooper Index (Subjektiv Score 0-100%)
    const rawSum = sleep + energy + soreness + stress; // Max 20
    const wellnessScore = Math.round((rawSum / 20) * 100);

    // 2. Hvilepuls afvigelse
    const diffRhr = rhrToday - rhrNorm;

    // 3. Straf hvis pulsen er forhøjet (> 2 bpm over norm)
    let penalty = 0;
    if (diffRhr > 2) {
      penalty = Math.round((diffRhr - 2) * 3.5); // 3.5% straf pr. ekstra hr slag
    }

    // Endelig Score (clamped mellem 0 og 100%)
    let finalScore = Math.max(0, Math.min(100, wellnessScore - penalty));

    // OPDATER DOM
    const scoreEl = card.querySelector('.js-readiness-score');
    const badgeEl = card.querySelector('.js-readiness-badge');
    const descEl = card.querySelector('.js-readiness-desc');
    const wellnessEl = card.querySelector('.js-readiness-wellness');
    const rhrDiffEl = card.querySelector('.js-readiness-rhr-diff');
    const heroBgEl = card.querySelector('.js-readiness-hero-bg');

    if (scoreEl) scoreEl.textContent = finalScore;
    if (wellnessEl) wellnessEl.textContent = wellnessScore;
    
    if (rhrDiffEl) {
      const prefix = diffRhr > 0 ? '+' : '';
      rhrDiffEl.textContent = `${prefix}${diffRhr}`;
    }

    // STATUS ZONER & FARVER
    if (finalScore >= 85) {
      if (heroBgEl) heroBgEl.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
      if (badgeEl) badgeEl.textContent = '🟢 Fuld Parathed (Grønt lys)';
      if (descEl) descEl.textContent = 'Kroppen er 100 % klar! Perfekt til PR-forsøg, tunge løft eller tærskelpas.';
    } else if (finalScore >= 65) {
      if (heroBgEl) heroBgEl.style.background = 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)';
      if (badgeEl) badgeEl.textContent = '🟡 Moderat Træthed (Gult lys)';
      if (descEl) descEl.textContent = 'Gennemfør træningen, men hold RPE på 7-8 eller skær 10-20% af volumen.';
    } else {
      if (heroBgEl) heroBgEl.style.background = 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)';
      if (badgeEl) badgeEl.textContent = '🔴 Høj Belastning (Rødt lys)';
      if (descEl) descEl.textContent = 'Kroppen viser tegn på overbelastning. Tag en hviledag eller kør aktiv restitution.';
    }
  }

  // LISTENERS
  card.querySelectorAll('.js-readiness-slider').forEach(slider => {
    slider.addEventListener('input', (e) => {
      const f = e.target.dataset.field;
      state[f] = e.target.value;
      const valEl = card.querySelector(`.js-readiness-val-${f}`);
      if (valEl) valEl.textContent = `${e.target.value} / 5`;
      calculate();
    });
  });

  card.querySelectorAll('.js-readiness-input').forEach(inp => {
    inp.addEventListener('input', (e) => {
      state[e.target.dataset.field] = e.target.value;
      calculate();
    });
  });

  const resetBtn = card.querySelector('.js-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du nulstille Træningsparathed-beregneren?')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(COMPACT_HOOPER_KEY);
        state.sleep = 4; state.energy = 4; state.soreness = 4; state.stress = 4;
        state.rhrNorm = 55; state.rhrToday = 56;
        syncDOM();
        calculate();
      }
    });
  }

  loadState();
  syncDOM();
  calculate();
})();