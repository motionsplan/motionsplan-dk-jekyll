import { calculateFatPercent } from '../core/fat-pct.js';
import { SKINFOLD_FORMULAS } from '../core/skinfold.js';

// Målebåndssteder
const GIRTH_SITES = {
  neck: { main: 'Hals', sub: '(Under strubehoved)', imgMale: '/assets/images/tools/mneck.jpg', imgFemale: '/assets/images/tools/fneck.jpg' },
  waist: { main: 'Talje', sub: '(Ved navle/smalle)', imgMale: '/assets/images/tools/mabdomen.jpg', imgFemale: '/assets/images/tools/fwaist.jpg' },
  hip: { main: 'Hofte', sub: '(Bredeste sted)', imgMale: '/assets/images/tools/fhip.jpg', imgFemale: '/assets/images/tools/fhip.jpg' },
  forearm: { main: 'Underarm', sub: '(Bredeste sted)', imgMale: '/assets/images/skinfold/male/biceps.jpg', imgFemale: '/assets/images/skinfold/female/biceps.jpg' },
  upperarm: { main: 'Overarm', sub: '(Midt på overarm)', imgMale: '/assets/images/skinfold/male/triceps.jpg', imgFemale: '/assets/images/skinfold/female/triceps.jpg' },
  thigh: { main: 'Lår', sub: '(Øverste lår)', imgMale: '/assets/images/skinfold/male/thigh.jpg', imgFemale: '/assets/images/skinfold/female/thigh.jpg' },
  calf: { main: 'Læg', sub: '(Bredeste sted)', imgMale: '/assets/images/skinfold/male/calf.jpg', imgFemale: '/assets/images/skinfold/female/calf.jpg' }
};

// Fedttangssteder
const SKINFOLD_SITES = {
  triceps: { main: 'Triceps', sub: '(Triceps)', imgName: 'triceps.jpg' },
  biceps: { main: 'Biceps', sub: '(Biceps)', imgName: 'biceps.jpg' },
  subscapular: { main: 'Skulderblad', sub: '(Subscapularis)', imgName: 'subscapular.jpg' },
  suprailiac: { main: 'Hoftekam', sub: '(Suprailiac)', imgName: 'suprailiac.jpg' },
  chest: { main: 'Bryst', sub: '(Chest)', imgName: 'chest.jpg' },
  abdomen: { main: 'Mave', sub: '(Abdomen)', imgName: 'abdominal.jpg' },
  thigh: { main: 'Lår', sub: '(Midthigh)', imgName: 'thigh.jpg' }
};

export function initFatPctMasterDashboard(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_fatpct_master_dashboard_state';

  // Tilstand
  const state = {
    gender: 'male',
    demo: { age: '30', height: '180', weight: '80' },
    girths: { neck: '', waist: '', hip: '', forearm: '', upperarm: '', thigh: '', calf: '' },
    skinfolds: { triceps: '', biceps: '', subscapular: '', suprailiac: '', chest: '', abdomen: '', thigh: '' },
    direct: { dexa: '', bia: '', hydro: '' }
  };

  // DOM
  const girthsGrid = container.querySelector('.js-master-girths-grid');
  const skinfoldsGrid = container.querySelector('.js-master-skinfolds-grid');
  const matrixGrid = container.querySelector('.js-master-matrix-grid');
  const resetBtn = container.querySelector('.js-reset-btn');

  function updateGenderToggleUI(gender) {
    container.querySelectorAll('.js-master-gender-lbl').forEach(lbl => {
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
        if (parsed.skinfolds) Object.assign(state.skinfolds, parsed.skinfolds);
        if (parsed.direct) Object.assign(state.direct, parsed.direct);
      }
    } catch (e) {}
  }

  // Render Målebåndskort
  function renderGirthCards(gender) {
    if (!girthsGrid) return;
    girthsGrid.innerHTML = '';

    Object.keys(GIRTH_SITES).forEach(siteKey => {
      const site = GIRTH_SITES[siteKey];
      const imgPath = gender === 'female' ? site.imgFemale : site.imgMale;
      const uniqueId = `mp-master-girth-${siteKey}`;
      const val = state.girths[siteKey] !== undefined ? state.girths[siteKey] : '';

      const html = `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <div style="width: 100%; height: 80px; border-radius: 6px; overflow: hidden; background: #f8fafc; margin-bottom: 6px; display: flex; align-items: center; justify-content: center; border: 1px solid #f1f5f9;">
            <img src="${imgPath}" alt="${site.main}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
          </div>
          <label for="${uniqueId}" style="cursor: pointer; display: block; margin-bottom: 4px;">
            <span style="display: block; font-size: 0.8rem; font-weight: 800; color: #0f172a;">${site.main}</span>
          </label>
          <div style="position: relative; width: 100%;">
            <input type="number" step="0.5" id="${uniqueId}" class="js-master-girth" data-site="${siteKey}" value="${val}" placeholder="0.0" style="width: 100%; padding: 6px 24px 6px 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 700; text-align: center; font-size: 0.85rem; box-sizing: border-box;">
            <span style="position: absolute; right: 6px; top: 50%; transform: translateY(-50%); font-size: 0.7rem; color: #94a3b8; font-weight: 600;">cm</span>
          </div>
        </div>
      `;
      girthsGrid.insertAdjacentHTML('beforeend', html);
    });

    container.querySelectorAll('.js-master-girth').forEach(inp => {
      inp.addEventListener('input', (e) => {
        state.girths[e.target.dataset.site] = e.target.value;
        calculateAll();
      });
    });
  }

  // Render Hudfoldskort
  function renderSkinfoldCards(gender) {
    if (!skinfoldsGrid) return;
    skinfoldsGrid.innerHTML = '';

    Object.keys(SKINFOLD_SITES).forEach(siteKey => {
      const site = SKINFOLD_SITES[siteKey];
      const imgPath = `/assets/images/skinfold/${gender}/${site.imgName}`;
      const uniqueId = `mp-master-sf-${siteKey}`;
      const val = state.skinfolds[siteKey] !== undefined ? state.skinfolds[siteKey] : '';

      const html = `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <div style="width: 100%; height: 80px; border-radius: 6px; overflow: hidden; background: #f8fafc; margin-bottom: 6px; display: flex; align-items: center; justify-content: center; border: 1px solid #f1f5f9;">
            <img src="${imgPath}" alt="${site.main}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
          </div>
          <label for="${uniqueId}" style="cursor: pointer; display: block; margin-bottom: 4px;">
            <span style="display: block; font-size: 0.8rem; font-weight: 800; color: #0f172a;">${site.main}</span>
          </label>
          <div style="position: relative; width: 100%;">
            <input type="number" step="0.5" id="${uniqueId}" class="js-master-sf" data-site="${siteKey}" value="${val}" placeholder="0.0" style="width: 100%; padding: 6px 24px 6px 6px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 700; text-align: center; font-size: 0.85rem; box-sizing: border-box;">
            <span style="position: absolute; right: 6px; top: 50%; transform: translateY(-50%); font-size: 0.7rem; color: #94a3b8; font-weight: 600;">mm</span>
          </div>
        </div>
      `;
      skinfoldsGrid.insertAdjacentHTML('beforeend', html);
    });

    container.querySelectorAll('.js-master-sf').forEach(inp => {
      inp.addEventListener('input', (e) => {
        state.skinfolds[e.target.dataset.site] = e.target.value;
        calculateAll();
      });
    });
  }

  function syncDOM() {
    const genderRadio = container.querySelector(`.js-master-gender-radio[value="${state.gender}"]`);
    if (genderRadio) genderRadio.checked = true;
    updateGenderToggleUI(state.gender);

    container.querySelectorAll('.js-master-demo').forEach(inp => {
      const f = inp.dataset.field;
      if (state.demo[f] !== undefined) inp.value = state.demo[f];
    });

    container.querySelectorAll('.js-master-direct').forEach(inp => {
      const m = inp.dataset.method;
      if (state.direct[m] !== undefined) inp.value = state.direct[m];
    });

    renderGirthCards(state.gender);
    renderSkinfoldCards(state.gender);
  }

  function updateAccordionBadges() {
    // Stamdata
    const badgeDemo = container.querySelector('.js-acc-badge-demo');
    const ageVal = parseFloat(state.demo.age) || 0;
    const heightVal = parseFloat(state.demo.height) || 0;
    const weightVal = parseFloat(state.demo.weight) || 0;

    if (badgeDemo) {
      if (ageVal > 0 && heightVal > 0 && weightVal > 0) {
        badgeDemo.textContent = 'Udfyldt';
        badgeDemo.style.background = '#eff6ff';
        badgeDemo.style.color = '#2563eb';
        badgeDemo.style.borderColor = '#bfdbfe';
      } else {
        const missingDemoList = [];
        if (!ageVal) missingDemoList.push('Alder');
        if (!heightVal) missingDemoList.push('Højde');
        if (!weightVal) missingDemoList.push('Vægt');
        badgeDemo.textContent = `Mangler ${missingDemoList.join(', ')}`;
        badgeDemo.style.background = '#fef2f2';
        badgeDemo.style.color = '#dc2626';
        badgeDemo.style.borderColor = '#fecaca';
      }
    }

    // Målebånd
    const filledGirths = Object.values(state.girths).filter(v => parseFloat(v) > 0).length;
    const badgeG = container.querySelector('.js-acc-badge-girths');
    if (badgeG) {
      if (filledGirths > 0) {
        badgeG.textContent = `${filledGirths} mål indtastet`;
        badgeG.style.background = '#ecfdf5';
        badgeG.style.color = '#059669';
        badgeG.style.borderColor = '#a7f3d0';
      } else {
        badgeG.textContent = '0 mål indtastet';
        badgeG.style.background = '#f1f5f9';
        badgeG.style.color = '#64748b';
        badgeG.style.borderColor = '#cbd5e1';
      }
    }

    // Fedttang
    const filledSf = Object.values(state.skinfolds).filter(v => parseFloat(v) > 0).length;
    const badgeSf = container.querySelector('.js-acc-badge-skinfolds');
    if (badgeSf) {
      if (filledSf > 0) {
        badgeSf.textContent = `${filledSf} mål indtastet`;
        badgeSf.style.background = '#fffbeb';
        badgeSf.style.color = '#d97706';
        badgeSf.style.borderColor = '#fde68a';
      } else {
        badgeSf.textContent = '0 mål indtastet';
        badgeSf.style.background = '#f1f5f9';
        badgeSf.style.color = '#64748b';
        badgeSf.style.borderColor = '#cbd5e1';
      }
    }

    // Direkte
    const filledDir = Object.values(state.direct).filter(v => parseFloat(v) > 0).length;
    const badgeDir = container.querySelector('.js-acc-badge-direct');
    if (badgeDir) {
      if (filledDir > 0) {
        badgeDir.textContent = `${filledDir} test indtastet`;
        badgeDir.style.background = '#f5f3ff';
        badgeDir.style.color = '#7c3aed';
        badgeDir.style.borderColor = '#ddd6fe';
      } else {
        badgeDir.textContent = '0 tests indtastet';
        badgeDir.style.background = '#f1f5f9';
        badgeDir.style.color = '#64748b';
        badgeDir.style.borderColor = '#cbd5e1';
      }
    }
  }

  // --- BEREGNING AF ALLE 16 METODER ---
  function calculateAll() {
    saveState();
    updateAccordionBadges();

    const age = parseFloat(state.demo.age) || 0;
    const height = parseFloat(state.demo.height) || 0;
    const weight = parseFloat(state.demo.weight) || 0;
    const gender = state.gender;

    const methods = [];

    // Tjek hvad der mangler af stamdata
    const missingDemoList = [];
    if (!age) missingDemoList.push('Alder');
    if (!height) missingDemoList.push('Højde');
    if (!weight) missingDemoList.push('Vægt');
    const demoMissingText = missingDemoList.length ? `Mangler ${missingDemoList.join(', ')}` : '';

    // A. ANTROPOMETRISKE FORMLER (7 stk)
    if (missingDemoList.length === 0) {
      const bmiRes = calculateFatPercent(height, weight, age, gender, 'auto');
      if (bmiRes && bmiRes.isValid && bmiRes.allResults) {
        Object.keys(bmiRes.allResults).forEach(key => {
          const item = bmiRes.allResults[key];
          methods.push({
            icon: '📐',
            tagColor: '#2563eb',
            category: 'Antropometri',
            name: item.name,
            isUnlocked: true,
            fatPct: item.value,
            missing: ''
          });
        });
      }
    } else {
      [
        'Deurenberg et al. (1991)',
        'Deurenberg et al. (1998)',
        'Gallagher et al. (2000)',
        'Jackson & Pollock (1980)',
        'Heitmann (1990)',
        'Durnin & Womersley (1977)',
        'HERITAGE Study (2002)'
      ].forEach(name => {
        methods.push({
          icon: '📐',
          tagColor: '#2563eb',
          category: 'Antropometri',
          name: name,
          isUnlocked: false,
          fatPct: null,
          missing: demoMissingText
        });
      });
    }

    // B. MÅLEBÅND: US NAVY
    const neckG = parseFloat(state.girths.neck) || 0;
    const waistG = parseFloat(state.girths.waist) || 0;
    const hipG = parseFloat(state.girths.hip) || 0;

    if (height > 0 && neckG > 0 && waistG > 0 && (gender === 'male' || hipG > 0)) {
      let navyFat = 0;
      if (gender === 'male') {
        const diff = waistG - neckG;
        if (diff > 0) navyFat = 495 / (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(height)) - 450;
      } else {
        const sum = waistG + hipG - neckG;
        if (sum > 0) navyFat = 495 / (1.29579 - 0.35004 * Math.log10(sum) + 0.22100 * Math.log10(height)) - 450;
      }

      if (navyFat > 2 && navyFat < 60) {
        methods.push({ icon: '📏', tagColor: '#059669', category: 'Målebånd', name: 'US Navy Metoden', isUnlocked: true, fatPct: navyFat, missing: '' });
      }
    } else {
      const missingNavy = [];
      if (!height) missingNavy.push('Højde');
      if (!neckG) missingNavy.push('Hals');
      if (!waistG) missingNavy.push('Talje');
      if (gender === 'female' && !hipG) missingNavy.push('Hofte');
      methods.push({ icon: '📏', tagColor: '#059669', category: 'Målebånd', name: 'US Navy Metoden', isUnlocked: false, fatPct: null, missing: missingNavy.length ? `Mangler ${missingNavy.join(', ')}` : 'Mangler omkredse' });
    }

    // C. MÅLEBÅND: MCARDLE & KATCH
    const forearmG = parseFloat(state.girths.forearm) || 0;
    const upperarmG = parseFloat(state.girths.upperarm) || 0;
    const thighG = parseFloat(state.girths.thigh) || 0;
    const calfG = parseFloat(state.girths.calf) || 0;
    const isYoung = age < 27;

    const missingMc = [];
    let mcDensity = 0;
    let mcUnlocked = false;

    if (gender === 'male') {
      if (isYoung) {
        if (!upperarmG) missingMc.push('Overarm');
        if (!forearmG) missingMc.push('Underarm');
        if (!waistG) missingMc.push('Talje');
      } else {
        if (!forearmG) missingMc.push('Underarm');
        if (!waistG) missingMc.push('Talje');
        if (!hipG) missingMc.push('Hofte');
      }
    } else {
      if (isYoung) {
        if (!forearmG) missingMc.push('Underarm');
        if (!waistG) missingMc.push('Talje');
        if (!thighG) missingMc.push('Lår');
      } else {
        if (!waistG) missingMc.push('Talje');
        if (!thighG) missingMc.push('Lår');
        if (!calfG) missingMc.push('Læg');
      }
    }

    if (missingMc.length === 0) {
      if (gender === 'male') {
        if (isYoung) mcDensity = 1.1017 - (0.000282 * waistG) + (0.000736 * forearmG) - (0.0003 * upperarmG);
        else mcDensity = 1.03 - (0.000288 * waistG) + (0.0007 * forearmG) - (0.0002 * hipG);
      } else {
        if (isYoung) mcDensity = 1.0764 - (0.00081 * waistG) - (0.00088 * thighG) + (0.00133 * forearmG);
        else mcDensity = 1.0602 - (0.00048 * waistG) - (0.0005 * thighG) + (0.00075 * calfG);
      }
      mcUnlocked = true;
    }

    if (mcUnlocked && mcDensity > 0) {
      const mcFat = (495 / mcDensity) - 450;
      methods.push({ icon: '📏', tagColor: '#059669', category: 'Målebånd', name: 'McArdle & Katch', isUnlocked: true, fatPct: Math.max(3, Math.min(55, mcFat)), missing: '' });
    } else {
      methods.push({ icon: '📏', tagColor: '#059669', category: 'Målebånd', name: 'McArdle & Katch', isUnlocked: false, fatPct: null, missing: missingMc.length ? `Mangler ${missingMc.join(', ')}` : 'Mangler mål' });
    }

    // D. FEDTTANG (4 VOKSENFORMLER MED DANSKE NAVNE)
    const sfParams = {
      gender, age, weight, height,
      triceps: parseFloat(state.skinfolds.triceps) || 0,
      biceps: parseFloat(state.skinfolds.biceps) || 0,
      subscapular: parseFloat(state.skinfolds.subscapular) || 0,
      suprailiac: parseFloat(state.skinfolds.suprailiac) || 0,
      chest: parseFloat(state.skinfolds.chest) || 0,
      abdomen: parseFloat(state.skinfolds.abdomen) || 0,
      thigh: parseFloat(state.skinfolds.thigh) || 0
    };

    ['jackson-pollock-3', 'durnin-4', 'peterson-4', 'ymca-4'].forEach(sfId => {
      const fObj = SKINFOLD_FORMULAS[sfId];
      if (!fObj) return;

      const reqSites = fObj.sites[gender] || [];
      const missing = [];

      reqSites.forEach(s => {
        if (!sfParams[s]) {
          const dName = SKINFOLD_SITES[s] ? SKINFOLD_SITES[s].main.toLowerCase() : s;
          missing.push(dName);
        }
      });

      if (!age) missing.push('alder');
      if (!weight) missing.push('vægt');

      if (missing.length === 0) {
        const res = fObj.calculate(sfParams);
        if (res && res.isValid) {
          methods.push({ icon: '🎯', tagColor: '#d97706', category: 'Fedttang', name: fObj.name, isUnlocked: true, fatPct: res.fatPct, missing: '' });
        }
      } else {
        methods.push({ icon: '🎯', tagColor: '#d97706', category: 'Fedttang', name: fObj.name, isUnlocked: false, fatPct: null, missing: `Mangler ${missing.join(', ')}` });
      }
    });

    // E. DIREKTE SKANNINGER
    const dexaVal = parseFloat(state.direct.dexa) || 0;
    const biaVal = parseFloat(state.direct.bia) || 0;
    const hydroVal = parseFloat(state.direct.hydro) || 0;

    if (dexaVal > 0) methods.push({ icon: '🔬', tagColor: '#7c3aed', category: 'Lab / Direkte', name: 'DEXA-scanning', isUnlocked: true, fatPct: dexaVal, missing: '' });
    if (biaVal > 0) methods.push({ icon: '🔬', tagColor: '#7c3aed', category: 'Lab / Direkte', name: 'Badevægt / BIA', isUnlocked: true, fatPct: biaVal, missing: '' });
    if (hydroVal > 0) methods.push({ icon: '🔬', tagColor: '#7c3aed', category: 'Lab / Direkte', name: 'BodPod / Vand', isUnlocked: true, fatPct: hydroVal, missing: '' });

    // BYG KOMPAKTE STATUSKORT
    let unlockedCount = 0;
    let sumPct = 0;
    let matrixHTML = '';

    methods.forEach(m => {
      if (m.isUnlocked && m.fatPct !== null && !isNaN(m.fatPct)) {
        unlockedCount++;
        sumPct += m.fatPct;

        matrixHTML += `
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 8px 10px; box-shadow: 0 1px 3px rgba(37,99,235,0.04);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
              <span style="font-size: 0.68rem; font-weight: 800; color: ${m.tagColor}; text-transform: uppercase;">${m.icon} ${m.category}</span>
              <span style="background: #dcfce7; color: #15803d; font-size: 0.62rem; font-weight: 800; padding: 1px 6px; border-radius: 6px;">Aktiv</span>
            </div>
            <div style="font-size: 0.8rem; font-weight: 800; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.name}</div>
            <div style="font-size: 1.25rem; font-weight: 900; color: #1e3a8a; margin-top: 1px; line-height: 1.1;">
              ${m.fatPct.toFixed(1)} <small style="font-size: 0.78rem; color: #2563eb;">%</small>
            </div>
          </div>
        `;
      } else {
        matrixHTML += `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px 10px; opacity: 0.75;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
              <span style="font-size: 0.68rem; font-weight: 700; color: #64748b; text-transform: uppercase;">${m.icon} ${m.category}</span>
              <span style="background: #f1f5f9; color: #64748b; font-size: 0.62rem; font-weight: 700; padding: 1px 6px; border-radius: 6px;">Låst</span>
            </div>
            <div style="font-size: 0.8rem; font-weight: 700; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.name}</div>
            <div style="font-size: 0.68rem; color: #ef4444; margin-top: 2px; font-weight: 600;">
              ${m.missing || 'Mangler data'}
            </div>
          </div>
        `;
      }
    });

    if (matrixGrid) matrixGrid.innerHTML = matrixHTML;

    // Opdater Hovedresultat
    const avgFatPctEl = container.querySelector('.js-master-avg-fatpct');
    const avgFatMassEl = container.querySelector('.js-master-avg-fatmass');
    const avgLeanMassEl = container.querySelector('.js-master-avg-leanmass');
    const unlockedStatusEl = container.querySelector('.js-master-unlocked-status');

    if (unlockedCount > 0) {
      const avgPct = sumPct / unlockedCount;
      avgFatPctEl.textContent = avgPct.toFixed(1);

      if (weight > 0) {
        const fatKg = weight * (avgPct / 100);
        const leanKg = weight - fatKg;
        avgFatMassEl.textContent = fatKg.toFixed(1);
        avgLeanMassEl.textContent = leanKg.toFixed(1);
      } else {
        avgFatMassEl.textContent = '0.0';
        avgLeanMassEl.textContent = '0.0';
      }

      unlockedStatusEl.textContent = `${unlockedCount} af ${methods.length} metoder aktiveret`;
    } else {
      avgFatPctEl.textContent = '0.0';
      avgFatMassEl.textContent = '0.0';
      avgLeanMassEl.textContent = '0.0';
      unlockedStatusEl.textContent = `0 af ${methods.length} metoder aktiveret`;
    }
  }

  // --- HARMONIKA / ACCORDION LOGIK ---
  container.querySelectorAll('.js-master-acc-toggle').forEach(header => {
    header.addEventListener('click', () => {
      const box = header.closest('.js-master-acc');
      if (box) {
        box.classList.toggle('is-open');
      }
    });
  });

  // --- EVENT LISTENERS ---
  container.querySelectorAll('.js-master-gender-radio').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.gender = e.target.value;
      updateGenderToggleUI(state.gender);
      renderGirthCards(state.gender);
      renderSkinfoldCards(state.gender);
      calculateAll();
    });
  });

  container.querySelectorAll('.js-master-demo').forEach(inp => {
    inp.addEventListener('input', (e) => {
      state.demo[e.target.dataset.field] = e.target.value;
      calculateAll();
    });
  });

  container.querySelectorAll('.js-master-direct').forEach(inp => {
    inp.addEventListener('input', (e) => {
      state.direct[e.target.dataset.method] = e.target.value;
      calculateAll();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du nulstille alle indtastninger i det samlede dashboard?')) {
        localStorage.removeItem(STORAGE_KEY);
        
        state.gender = 'male';
        state.demo = { age: '30', height: '180', weight: '80' };
        Object.keys(state.girths).forEach(k => state.girths[k] = '');
        Object.keys(state.skinfolds).forEach(k => state.skinfolds[k] = '');
        Object.keys(state.direct).forEach(k => state.direct[k] = '');

        syncDOM();
        calculateAll();
      }
    });
  }

  // INITIALISERING
  loadState();
  syncDOM();
  calculateAll();
}

export const initCalculator = initFatPctMasterDashboard;
export default initFatPctMasterDashboard;