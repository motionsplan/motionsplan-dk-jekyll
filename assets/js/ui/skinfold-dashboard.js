import { SKINFOLD_FORMULAS } from '../core/skinfold.js';

// Ordbog over alle unikke voksenmålesteder og deres billeder
const ADULT_SITES = {
  triceps: { main: 'Triceps', sub: '(Triceps)', imgName: 'triceps.jpg' },
  biceps: { main: 'Biceps', sub: '(Biceps)', imgName: 'biceps.jpg' },
  subscapular: { main: 'Skulderblad', sub: '(Subscapularis)', imgName: 'subscapular.jpg' },
  suprailiac: { main: 'Hoftekam', sub: '(Suprailiac)', imgName: 'suprailiac.jpg' },
  chest: { main: 'Brystet', sub: '(Chest)', imgName: 'chest.jpg' },
  abdomen: { main: 'Maven', sub: '(Abdomen)', imgName: 'abdominal.jpg' },
  thigh: { main: 'Låret', sub: '(Midthigh)', imgName: 'thigh.jpg' }
};

// ID'er på de 4 voksenformler fra SKINFOLD_FORMULAS
const DASHBOARD_FORMULA_IDS = [
  'jackson-pollock-3',
  'durnin-4',
  'peterson-4',
  'ymca-4'
];

export function initSkinfoldDashboard(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_skinfold_dashboard_state';

  // Central tilstand for at forhindre, at felter bliver overskrevet eller mistet
  const state = {
    gender: 'male',
    demographics: { age: '30', weight: '80', height: '180' },
    sites: {
      triceps: '',
      biceps: '',
      subscapular: '',
      suprailiac: '',
      chest: '',
      abdomen: '',
      thigh: ''
    }
  };

  // DOM elementer
  const sitesGrid = container.querySelector('.js-dashboard-sites-grid');
  const matrixGrid = container.querySelector('.js-formulas-matrix-grid');
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  function updateGenderToggleUI(gender) {
    container.querySelectorAll('.js-gender-label').forEach(lbl => {
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
    } catch (e) {
      console.warn('Kunne ikke gemme til localStorage:', e);
    }
  }

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.gender) state.gender = parsed.gender;
        if (parsed.demographics) Object.assign(state.demographics, parsed.demographics);
        if (parsed.sites) Object.assign(state.sites, parsed.sites);
      }
    } catch (e) {
      console.warn('Kunne ikke hente fra localStorage:', e);
    }
  }

  // Synkronisér demografi-inputs i DOM'en fra tilstand
  function syncDemographicsDOM() {
    container.querySelectorAll('.js-demo-input').forEach(input => {
      const field = input.dataset.demo;
      if (state.demographics[field] !== undefined) {
        input.value = state.demographics[field];
      }
    });
  }

  // Bygger dynamiske målekort og genindsætter eksisterende målinger pr. kropsdel
  function renderSiteCards(gender) {
    if (!sitesGrid) return;
    sitesGrid.innerHTML = '';

    const requiredSitesSet = new Set();
    
    DASHBOARD_FORMULA_IDS.forEach(fId => {
      const fObj = SKINFOLD_FORMULAS[fId];
      if (fObj && fObj.sites && fObj.sites[gender]) {
        fObj.sites[gender].forEach(site => requiredSitesSet.add(site));
      }
    });

    requiredSitesSet.forEach(siteKey => {
      const site = ADULT_SITES[siteKey];
      if (!site) return;

      const imgPath = `/assets/images/skinfold/${gender}/${site.imgName}`;
      const uniqueInputId = `sf-dash-site-${siteKey}`;
      const existingVal = state.sites[siteKey] !== undefined ? state.sites[siteKey] : '';

      const cardHTML = `
        <div class="mp-skinfold-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px; display: flex; flex-direction: column; align-items: center; text-align: center;">
          <div style="width: 100%; height: 95px; border-radius: 8px; overflow: hidden; background: #f8fafc; margin-bottom: 8px; display: flex; align-items: center; justify-content: center;">
            <img src="${imgPath}" alt="${site.main}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
          </div>
          <label for="${uniqueInputId}" style="cursor: pointer; display: block; margin-bottom: 6px;">
            <span style="display: block; font-size: 0.85rem; font-weight: 800; color: #0f172a;">${site.main}</span>
            <span style="display: block; font-size: 0.7rem; color: #64748b;">${site.sub}</span>
          </label>
          <div style="position: relative; width: 100%;">
            <input type="number" step="0.5" id="${uniqueInputId}" class="js-dash-site-input" data-site="${siteKey}" value="${existingVal}" placeholder="0.0" style="width: 100%; padding: 8px 28px 8px 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-weight: 700; text-align: center;">
            <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); font-size: 0.75rem; color: #94a3b8; font-weight: 600;">mm</span>
          </div>
        </div>
      `;
      sitesGrid.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Event listeners på alle målekort
    container.querySelectorAll('.js-dash-site-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const siteKey = e.target.dataset.site;
        if (siteKey) {
          state.sites[siteKey] = e.target.value;
          saveState();
          calculateAll();
        }
      });
    });
  }

  // Beregningslogik der overfører målinger til SKINFOLD_FORMULAS
  function calculateAll() {
    const gender = state.gender;

    const params = {
      gender: gender,
      age: parseFloat(state.demographics.age) || 0,
      weight: parseFloat(state.demographics.weight) || 0,
      height: parseFloat(state.demographics.height) || 0
    };

    // Tilføj alle indtastede kropsmål til beregningsparametrene
    Object.keys(state.sites).forEach(siteKey => {
      params[siteKey] = parseFloat(state.sites[siteKey]) || 0;
    });

    let activeCount = 0;
    let sumFatPct = 0;
    let sumFatMass = 0;
    let sumLeanMass = 0;

    let matrixHTML = '';

    DASHBOARD_FORMULA_IDS.forEach(fId => {
      const formula = SKINFOLD_FORMULAS[fId];
      if (!formula) return;

      const requiredSites = formula.sites[gender] || [];
      const missingSites = [];
      const missingDemo = [];

      requiredSites.forEach(s => {
        if (!params[s] || params[s] <= 0) {
          const siteLabel = ADULT_SITES[s] ? ADULT_SITES[s].main : s;
          missingSites.push(siteLabel);
        }
      });

      formula.demographics.forEach(d => {
        if (!params[d] || params[d] <= 0) {
          if (d === 'age') missingDemo.push('Alder');
          if (d === 'weight') missingDemo.push('Vægt');
          if (d === 'height') missingDemo.push('Højde');
        }
      });

      const allMissing = [...missingSites, ...missingDemo];
      const isUnlocked = allMissing.length === 0;

      let resultObj = null;
      if (isUnlocked) {
        resultObj = formula.calculate(params);
      }

      if (isUnlocked && resultObj && resultObj.isValid) {
        activeCount++;
        sumFatPct += resultObj.fatPct;
        sumFatMass += resultObj.fatMass;
        sumLeanMass += resultObj.leanMass;

        matrixHTML += `
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 12px 14px; box-shadow: 0 2px 4px rgba(37,99,235,0.04);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #0f172a;">${formula.name}</span>
              <span style="background: #dcfce7; color: #15803d; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 10px;">Aktiv</span>
            </div>
            <div style="font-size: 1.6rem; font-weight: 900; color: #2563eb; line-height: 1.1;">
              ${resultObj.fatPct.toFixed(1)} <small style="font-size: 0.9rem;">%</small>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #64748b; margin-top: 6px; padding-top: 6px; border-top: 1px solid #f1f5f9;">
              <span>Fedt: <strong>${resultObj.fatMass.toFixed(1)} kg</strong></span>
              <span>Fedtfri: <strong>${resultObj.leanMass.toFixed(1)} kg</strong></span>
            </div>
          </div>
        `;
      } else {
        const missingText = allMissing.join(', ');
        matrixHTML += `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 14px; opacity: 0.85;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #64748b;">${formula.name}</span>
              <span style="background: #f1f5f9; color: #64748b; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 10px;">Låst</span>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #94a3b8;">
              -- <small style="font-size: 0.8rem;">%</small>
            </div>
            <div style="font-size: 0.72rem; color: #ef4444; margin-top: 6px;">
              Mangler: ${missingText || 'Indtastninger'}
            </div>
          </div>
        `;
      }
    });

    if (matrixGrid) matrixGrid.innerHTML = matrixHTML;

    // Opdater gennemsnit
    const avgFatPctEl = container.querySelector('.js-avg-fatpct');
    const avgFatMassEl = container.querySelector('.js-avg-fatmass');
    const avgLeanMassEl = container.querySelector('.js-avg-leanmass');
    const activeCountEl = container.querySelector('.js-active-formulas-count');

    if (activeCount > 0) {
      const avgPct = sumFatPct / activeCount;
      const avgFatKg = sumFatMass / activeCount;
      const avgLeanKg = sumLeanMass / activeCount;

      if (avgFatPctEl) avgFatPctEl.textContent = avgPct.toFixed(1);
      if (avgFatMassEl) avgFatMassEl.textContent = avgFatKg.toFixed(1);
      if (avgLeanMassEl) avgLeanMassEl.textContent = avgLeanKg.toFixed(1);
      if (activeCountEl) activeCountEl.textContent = `${activeCount} af 4 voksenformler oplåst`;
    } else {
      if (avgFatPctEl) avgFatPctEl.textContent = '0.0';
      if (avgFatMassEl) avgFatMassEl.textContent = '0.0';
      if (avgLeanMassEl) avgLeanMassEl.textContent = '0.0';
      if (activeCountEl) activeCountEl.textContent = '0 af 4 formler oplåst';
    }
  }

  // --- EVENT LISTENERS ---

  // Kønsskift
  container.querySelectorAll('.js-gender-radio').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.gender = e.target.value;
      saveState();
      updateGenderToggleUI(state.gender);
      renderSiteCards(state.gender);
      calculateAll();
    });
  });

  // Demografi inputs (Alder, Vægt, Højde)
  container.querySelectorAll('.js-demo-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const field = e.target.dataset.demo;
      if (field) {
        state.demographics[field] = e.target.value;
        saveState();
        calculateAll();
      }
    });
  });

  // Nulstil-knap
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du nulstille alle indtastninger i dashboardet?')) {
        localStorage.removeItem(STORAGE_KEY);
        
        state.gender = 'male';
        state.demographics = { age: '30', weight: '80', height: '180' };
        Object.keys(state.sites).forEach(k => state.sites[k] = '');

        const maleRadio = container.querySelector('.js-gender-radio[value="male"]');
        if (maleRadio) maleRadio.checked = true;

        syncDemographicsDOM();
        updateGenderToggleUI('male');
        renderSiteCards('male');
        calculateAll();
      }
    });
  }

  // INITIALISERING
  loadSavedState();

  // Opdater køn-radioknap ud fra hentet tilstand
  const currentGenderRadio = container.querySelector(`.js-gender-radio[value="${state.gender}"]`);
  if (currentGenderRadio) currentGenderRadio.checked = true;

  syncDemographicsDOM();
  updateGenderToggleUI(state.gender);
  renderSiteCards(state.gender);
  calculateAll();
}

export const initCalculator = initSkinfoldDashboard;
export default initSkinfoldDashboard;