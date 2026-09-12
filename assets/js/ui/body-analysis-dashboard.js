import { calculateFatPercent } from '../core/fat-pct.js';

export function initBodyAnalysisDashboard(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_body_analysis_dashboard_state';

  // Central tilstand
  const state = {
    gender: 'male',
    demo: { age: '30', height: '180', weight: '80' },
    girths: { waist: '', hip: '' },
    heart: { hrRest: '', hrMax: '' }
  };

  const resultsGrid = container.querySelector('.js-body-results-grid');
  const unlockedStatusEl = container.querySelector('.js-body-unlocked-status');
  const resetBtn = container.querySelector('.js-reset-btn');

  function updateGenderToggleUI(gender) {
    container.querySelectorAll('.js-body-gender-lbl').forEach(lbl => {
      if (lbl.dataset.value === gender) {
        lbl.style.background = '#2563eb';
        lbl.style.color = '#ffffff';
        lbl.style.boxShadow = '0 2px 4px rgba(37, 99, 235, 0.2)';
      } else {
        lbl.style.background = 'transparent';
        lbl.style.color = '#475569';
        lbl.style.boxShadow = 'none';
      }
    });
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.gender) state.gender = parsed.gender;
        if (parsed.demo) Object.assign(state.demo, parsed.demo);
        if (parsed.girths) Object.assign(state.girths, parsed.girths);
        if (parsed.heart) Object.assign(state.heart, parsed.heart);
      }
    } catch (e) {}
  }

  function syncDOM() {
    const genderRadio = container.querySelector(`.js-body-gender-radio[value="${state.gender}"]`);
    if (genderRadio) genderRadio.checked = true;
    updateGenderToggleUI(state.gender);

    container.querySelectorAll('.js-body-demo').forEach(inp => {
      const f = inp.dataset.field;
      if (state.demo[f] !== undefined) inp.value = state.demo[f];
    });

    container.querySelectorAll('.js-body-girth').forEach(inp => {
      const s = inp.dataset.site;
      if (state.girths[s] !== undefined) inp.value = state.girths[s];
    });

    container.querySelectorAll('.js-body-heart').forEach(inp => {
      const f = inp.dataset.field;
      if (state.heart[f] !== undefined) inp.value = state.heart[f];
    });
  }

  function updateBadges() {
    const age = parseFloat(state.demo.age) || 0;
    const height = parseFloat(state.demo.height) || 0;
    const weight = parseFloat(state.demo.weight) || 0;

    const bDemo = container.querySelector('.js-body-badge-demo');
    if (bDemo) {
      if (age > 0 && height > 0 && weight > 0) {
        bDemo.textContent = 'Udfyldt';
        bDemo.style.background = '#eff6ff';
        bDemo.style.color = '#2563eb';
        bDemo.style.borderColor = '#bfdbfe';
      } else {
        const m = [];
        if (!age) m.push('Alder');
        if (!height) m.push('Højde');
        if (!weight) m.push('Vægt');
        bDemo.textContent = `Mangler ${m.join(', ')}`;
        bDemo.style.background = '#fef2f2';
        bDemo.style.color = '#dc2626';
        bDemo.style.borderColor = '#fecaca';
      }
    }

    const waist = parseFloat(state.girths.waist) || 0;
    const hip = parseFloat(state.girths.hip) || 0;
    const bGirth = container.querySelector('.js-body-badge-girths');
    if (bGirth) {
      let count = (waist > 0 ? 1 : 0) + (hip > 0 ? 1 : 0);
      if (count > 0) {
        bGirth.textContent = `${count} mål indtastet`;
        bGirth.style.background = '#ecfdf5';
        bGirth.style.color = '#059669';
        bGirth.style.borderColor = '#a7f3d0';
      } else {
        bGirth.textContent = '0 mål indtastet';
        bGirth.style.background = '#f1f5f9';
        bGirth.style.color = '#64748b';
        bGirth.style.borderColor = '#cbd5e1';
      }
    }

    const hrRest = parseFloat(state.heart.hrRest) || 0;
    const bHeart = container.querySelector('.js-body-badge-heart');
    if (bHeart) {
      if (hrRest > 0) {
        bHeart.textContent = `Hvilepuls ${hrRest} bpm`;
        bHeart.style.background = '#f5f3ff';
        bHeart.style.color = '#7c3aed';
        bHeart.style.borderColor = '#ddd6fe';
      } else {
        bHeart.textContent = '0 pulstal indtastet';
        bHeart.style.background = '#f1f5f9';
        bHeart.style.color = '#64748b';
        bHeart.style.borderColor = '#cbd5e1';
      }
    }
  }

  // --- BEREGNING AF ALLE ANALYSER ---
  function calculateAll() {
    saveState();
    updateBadges();

    const age = parseFloat(state.demo.age) || 0;
    const height = parseFloat(state.demo.height) || 0; // cm
    const weight = parseFloat(state.demo.weight) || 0; // kg
    const gender = state.gender;
    const isMale = gender === 'male';

    const waist = parseFloat(state.girths.waist) || 0; // cm
    const hip = parseFloat(state.girths.hip) || 0; // cm

    const hrRest = parseFloat(state.heart.hrRest) || 0;
    let hrMax = parseFloat(state.heart.hrMax) || 0;

    const cards = [];

    // LEVEL 1: KRÆVER HØJDE, VÆGT, ALDER
    const hasDemo = age > 0 && height > 0 && weight > 0;
    const missingDemoText = !hasDemo ? 'Mangler Højde/Vægt/Alder' : '';

    const hM = height / 100;
    const bmi = hasDemo ? weight / (hM * hM) : 0;

    // 1. BMI
    cards.push({
      emoji: '📐',
      title: 'BMI (Body Mass Index)',
      url: '/bmi/',
      unlocked: hasDemo,
      val: hasDemo ? bmi.toFixed(1) : null,
      unit: 'kg/m²',
      sub: hasDemo ? (bmi < 18.5 ? 'Undervægtig' : bmi < 25 ? 'Normalvægtig' : bmi < 30 ? 'Overvægtig' : 'Svært overvægtig') : missingDemoText
    });

    // 2. Ponderal Index
    const ponderal = hasDemo ? weight / Math.pow(hM, 3) : 0;
    cards.push({
      emoji: '🧊',
      title: 'Ponderal Index',
      url: '/ponderal-index/',
      unlocked: hasDemo,
      val: hasDemo ? ponderal.toFixed(1) : null,
      unit: 'kg/m³',
      sub: hasDemo ? (ponderal < 11 ? 'Lav' : ponderal <= 15 ? 'Normal' : 'Høj') : missingDemoText
    });

    // 3. Idealvægt (Gns. af Lorentz / Devine)
    let idealW = 0;
    if (hasDemo) {
      const devine = isMale ? 50 + 0.9 * (height - 152) : 45.5 + 0.9 * (height - 152);
      idealW = Math.max(40, devine);
    }
    cards.push({
      emoji: '⚖️',
      title: 'Estimeret Idealvægt',
      url: '/idealvaegt/',
      unlocked: hasDemo,
      val: hasDemo ? idealW.toFixed(1) : null,
      unit: 'kg',
      sub: hasDemo ? `Gns. for ${height} cm` : missingDemoText
    });

    // 4. Overfladeareal (Mosteller)
    const bsa = hasDemo ? Math.sqrt((height * weight) / 3600) : 0;
    cards.push({
      emoji: '🗺️',
      title: 'Overfladeareal (BSA)',
      url: '/kroppens-overfladeareal/',
      unlocked: hasDemo,
      val: hasDemo ? bsa.toFixed(2) : null,
      unit: 'm²',
      sub: hasDemo ? 'Mostellers formel' : missingDemoText
    });

    // 5. Kroppens Rumfang
    const volume = hasDemo ? weight / 1.06 : 0; // ~1.06 kg/L
    cards.push({
      emoji: '📦',
      title: 'Kroppens Rumfang',
      url: '/kroppens-rumfang/',
      unlocked: hasDemo,
      val: hasDemo ? volume.toFixed(1) : null,
      unit: 'Liter',
      sub: hasDemo ? 'Baseret på kropstæthed' : missingDemoText
    });

    // 6. Blodvolumen (Nadler)
    let bloodL = 0;
    if (hasDemo) {
      bloodL = isMale
        ? 0.3669 * Math.pow(hM, 3) + 0.03219 * weight + 0.6041
        : 0.3561 * Math.pow(hM, 3) + 0.03308 * weight + 0.1833;
    }
    cards.push({
      emoji: '🩸',
      title: 'Estimeret Blodvolumen',
      url: '/hvor-meget-blod-har-mennesket/',
      unlocked: hasDemo,
      val: hasDemo ? bloodL.toFixed(2) : null,
      unit: 'Liter',
      sub: hasDemo ? 'Nadlers formel' : missingDemoText
    });

    // 7. Lungekapacitet (FVC)
    let lungL = 0;
    if (hasDemo) {
      lungL = isMale
        ? (0.052 * height) - (0.022 * age) - 3.60
        : (0.041 * height) - (0.018 * age) - 2.69;
    }
    cards.push({
      emoji: '🫁',
      title: 'Forventet Vital Lungekapacitet',
      url: '/lunger-lungekapacitet/',
      unlocked: hasDemo,
      val: hasDemo ? Math.max(1.5, lungL).toFixed(2) : null,
      unit: 'Liter',
      sub: hasDemo ? 'FVC estimat' : missingDemoText
    });

    // 8. Vandbehov
    const waterL = hasDemo ? weight * 0.035 : 0; // 35 ml/kg
    cards.push({
      emoji: '💧',
      title: 'Dagligt Vandbehov',
      url: '/hvor-meget-vand-skal-man-drikke-om-dagen/',
      unlocked: hasDemo,
      val: hasDemo ? waterL.toFixed(1) : null,
      unit: 'Liter/dag',
      sub: hasDemo ? 'Væskebehov (35 ml/kg)' : missingDemoText
    });

    // 9. BMR (Mifflin-St Jeor)
    let bmr = 0;
    if (hasDemo) {
      bmr = isMale
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    cards.push({
      emoji: '🔥',
      title: 'BMR (Basalstofskifte)',
      url: '/bmr-beregner/',
      unlocked: hasDemo,
      val: hasDemo ? Math.round(bmr) : null,
      unit: 'kcal/dag',
      sub: hasDemo ? 'Mifflin-St Jeor formel' : missingDemoText
    });

    // 10. Fedtprocent (Gns. af BMI-formler)
    let fatPct = 0;
    if (hasDemo) {
      const fRes = calculateFatPercent(height, weight, age, gender, 'auto');
      if (fRes && fRes.isValid) fatPct = fRes.average;
    }
    cards.push({
      emoji: '🥑',
      title: 'Fedtprocent (Gns. Formler)',
      url: '/artikel/udregning-af-fedtprocent/',
      unlocked: hasDemo,
      val: hasDemo ? fatPct.toFixed(1) : null,
      unit: '%',
      sub: hasDemo ? `Fedtmasse: ${(weight * (fatPct/100)).toFixed(1)} kg` : missingDemoText
    });

    // 11. Muskelmasse
    let muscleKg = 0;
    if (hasDemo) {
      const leanKg = weight * (1 - (fatPct / 100));
      muscleKg = leanKg * 0.72; // Estimeret skeletal muskelmasse
    }
    cards.push({
      emoji: '💪',
      title: 'Estimeret Muskelmasse',
      url: '/muskelmasse-beregner/',
      unlocked: hasDemo,
      val: hasDemo ? muscleKg.toFixed(1) : null,
      unit: 'kg',
      sub: hasDemo ? 'Skeletmuskulatur estimat' : missingDemoText
    });


    // LEVEL 2: KRÆVER OMKREDSMÅL
    // 12. WHtR (Talje-Højde Ratio)
    const hasWhtr = height > 0 && waist > 0;
    const whtr = hasWhtr ? waist / height : 0;
    cards.push({
      emoji: '📏',
      title: 'Talje-Højde Ratio (WHtR)',
      url: '/taljemaal/',
      unlocked: hasWhtr,
      val: hasWhtr ? whtr.toFixed(2) : null,
      unit: '',
      sub: hasWhtr ? (whtr < 0.5 ? 'Sund ratio (<0.5)' : 'Forhøjet risiko (≥0.5)') : 'Mangler Talje & Højde'
    });

    // 13. WHR (Talje-Hofte Ratio)
    const hasWhr = waist > 0 && hip > 0;
    const whr = hasWhr ? waist / hip : 0;
    cards.push({
      emoji: '⏳',
      title: 'Talje-Hofte Ratio (WHR)',
      url: '/taljemaal/',
      unlocked: hasWhr,
      val: hasWhr ? whr.toFixed(2) : null,
      unit: '',
      sub: hasWhr ? (isMale ? (whr < 0.9 ? 'Lav risiko' : 'Forhøjet risiko') : (whr < 0.85 ? 'Lav risiko' : 'Forhøjet risiko')) : 'Mangler Talje & Hofte'
    });

    // 14. ABSI (A Body Shape Index)
    const hasAbsi = hasDemo && waist > 0;
    let absi = 0;
    if (hasAbsi) {
      const waistM = waist / 100;
      absi = waistM / (Math.pow(bmi, 2/3) * Math.pow(hM, 1/2));
    }
    cards.push({
      emoji: '🍐',
      title: 'ABSI (A Body Shape Index)',
      url: '/absi/',
      unlocked: hasAbsi,
      val: hasAbsi ? absi.toFixed(4) : null,
      unit: '',
      sub: hasAbsi ? 'Mavefedt risikoprofil' : 'Mangler Talje & Stamdata'
    });

    // 15. BAI (Body Adiposity Index)
    const hasBai = height > 0 && hip > 0;
    let bai = 0;
    if (hasBai) {
      bai = (hip / Math.pow(hM, 1.5)) - 18;
    }
    cards.push({
      emoji: '📊',
      title: 'BAI (Body Adiposity Index)',
      url: '/bai-body-adiposity-index/',
      unlocked: hasBai,
      val: hasBai ? bai.toFixed(1) : null,
      unit: '%',
      sub: hasBai ? 'Hofte/Højde fedtestimat' : 'Mangler Hofte & Højde'
    });


    // LEVEL 3: KRÆVER PULSDATA
    if (age > 0 && !hrMax) {
      hrMax = 208 - (0.7 * age); // Tanaka formel
    }

    const hasUth = hrRest > 0 && hrMax > 0;
    const vo2maxUth = hasUth ? 15 * (hrMax / hrRest) : 0;

    // 16. Maxpuls
    cards.push({
      emoji: '⚡',
      title: 'Maxpuls (HR max)',
      url: '/kondital-fra-puls/',
      unlocked: age > 0 || hrMax > 0,
      val: (age > 0 || hrMax > 0) ? Math.round(hrMax) : null,
      unit: 'bpm',
      sub: hrMax > 0 ? (state.heart.hrMax ? 'Manuelt indtastet' : 'Tanaka estimat (208-0.7*alder)') : 'Mangler Alder'
    });

    // 17. Kondital (Uths Formel)
    cards.push({
      emoji: '🫀',
      title: 'Kondital (Uths Pulsformel)',
      url: '/kondital-fra-puls/',
      unlocked: hasUth,
      val: hasUth ? vo2maxUth.toFixed(1) : null,
      unit: 'ml O₂/kg/min',
      sub: hasUth ? 'Estimeret ud fra puls-ratio' : 'Mangler Hvilepuls'
    });

    // 18. Pulsslag pr. Døgn
    const hasBeats = hrRest > 0;
    const beatsDay = hasBeats ? hrRest * 60 * 24 : 0;
    cards.push({
      emoji: '💓',
      title: 'Hjerteslag pr. Døgn',
      url: '/kondital-fra-puls/',
      unlocked: hasBeats,
      val: hasBeats ? beatsDay.toLocaleString('da-DK') : null,
      unit: 'slag/døgn',
      sub: hasBeats ? `I hvile ved ${hrRest} bpm` : 'Mangler Hvilepuls'
    });

    // BYG DOM RESULTATER
    let unlockedCount = 0;
    let html = '';

    cards.forEach(c => {
      if (c.unlocked && c.val !== null) {
        unlockedCount++;
        html += `
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 10px 12px; box-shadow: 0 2px 4px rgba(37,99,235,0.04); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                <span style="font-size: 1.1rem;">${c.emoji}</span>
                <span style="background: #dcfce7; color: #15803d; font-size: 0.62rem; font-weight: 800; padding: 1px 6px; border-radius: 6px;">Aktiv</span>
              </div>
              <div style="font-size: 0.8rem; font-weight: 800; color: #0f172a; line-height: 1.2; margin-bottom: 4px;">${c.title}</div>
            </div>
            <div>
              <div style="font-size: 1.35rem; font-weight: 900; color: #1e3a8a; line-height: 1.1;">
                ${c.val} <small style="font-size: 0.78rem; color: #2563eb; font-weight:700;">${c.unit}</small>
              </div>
              <div style="font-size: 0.68rem; color: #64748b; font-weight: 600; margin-top: 2px;">${c.sub}</div>
              ${c.url ? `<a href="${c.url}" style="font-size: 0.68rem; color: #2563eb; font-weight: 700; text-decoration: none; display: inline-block; margin-top: 4px;">Læs om formlen →</a>` : ''}
            </div>
          </div>
        `;
      } else {
        html += `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 12px; opacity: 0.75; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                <span style="font-size: 1.1rem; filter: grayscale(100%); opacity: 0.6;">${c.emoji}</span>
                <span style="background: #f1f5f9; color: #64748b; font-size: 0.62rem; font-weight: 700; padding: 1px 6px; border-radius: 6px;">Låst</span>
              </div>
              <div style="font-size: 0.8rem; font-weight: 700; color: #64748b; line-height: 1.2;">${c.title}</div>
            </div>
            <div style="font-size: 0.68rem; color: #ef4444; margin-top: 6px; font-weight: 600;">
              ${c.sub || 'Mangler data'}
            </div>
          </div>
        `;
      }
    });

    if (resultsGrid) resultsGrid.innerHTML = html;
    if (unlockedStatusEl) unlockedStatusEl.textContent = `${unlockedCount} af ${cards.length} analyser aktiveret`;
  }

  // ACCORDION LOGIK
  container.querySelectorAll('.js-body-acc-toggle').forEach(header => {
    header.addEventListener('click', () => {
      const box = header.closest('.js-body-acc');
      if (box) box.classList.toggle('is-open');
    });
  });

  // LISTENERS
  container.querySelectorAll('.js-body-gender-radio').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.gender = e.target.value;
      updateGenderToggleUI(state.gender);
      calculateAll();
    });
  });

  container.querySelectorAll('.js-body-demo').forEach(inp => {
    inp.addEventListener('input', (e) => {
      state.demo[e.target.dataset.field] = e.target.value;
      calculateAll();
    });
  });

  container.querySelectorAll('.js-body-girth').forEach(inp => {
    inp.addEventListener('input', (e) => {
      state.girths[e.target.dataset.site] = e.target.value;
      calculateAll();
    });
  });

  container.querySelectorAll('.js-body-heart').forEach(inp => {
    inp.addEventListener('input', (e) => {
      state.heart[e.target.dataset.field] = e.target.value;
      calculateAll();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du nulstille alle indtastninger i kropsanalysen?')) {
        localStorage.removeItem(STORAGE_KEY);
        state.gender = 'male';
        state.demo = { age: '30', height: '180', weight: '80' };
        state.girths = { waist: '', hip: '' };
        state.heart = { hrRest: '', hrMax: '' };
        syncDOM();
        calculateAll();
      }
    });
  }

  // INIT
  loadState();
  syncDOM();
  calculateAll();
}

export const initCalculator = initBodyAnalysisDashboard;
export default initBodyAnalysisDashboard;