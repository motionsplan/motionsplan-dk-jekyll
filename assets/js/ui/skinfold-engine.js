// assets/js/ui/skinfold-engine.js

// Ordbog med 2-linjers navne og billedreferencer til hvert målepunkt
const SITES = {
  triceps: { main: 'Triceps', sub: '(Triceps)', imgName: 'triceps.jpg' },
  subscapular: { main: 'Skulderblad', sub: '(Subscapularis)', imgName: 'subscapular.jpg' },
  suprailiac: { main: 'Hoftekam', sub: '(Suprailiac)', imgName: 'suprailiac.jpg' },
  thigh: { main: 'Låret', sub: '(Midthigh)', imgName: 'thigh.jpg' },
  chest: { main: 'Brystet', sub: '(Chest)', imgName: 'chest.jpg' },
  abdomen: { main: 'Maven', sub: '(Abdomen)', imgName: 'abdominal.jpg' },
  calf: { main: 'Læggen', sub: '(Calf)', imgName: 'calf.jpg' },
  biceps: { main: 'Biceps', sub: '(Biceps)', imgName: 'biceps.jpg' },
  midaxillary: { main: 'Armhulen', sub: '(Midaxillary)', imgName: 'midaxillary.jpg' }
};

export function initSkinfoldEngine(container, calcId, formula) {
  if (!container || !formula) return;

  const STORAGE_KEY = `mp_skinfold_state_${calcId}`;
  
  // DOM Elementer
  const cardsGrid = container.querySelector('.js-dynamic-cards');
  const resultsBox = container.querySelector('.js-results');
  const demographicGrid = container.querySelector('.js-demographics-grid');
  
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');
  
  const ageWarningBox = container.querySelector('.js-age-warning');
  const ageWarningText = container.querySelector('.js-age-warning-text');

  // 1. Skjul unødvendig demografi baseret på formula.demographics
  ['age', 'weight', 'height'].forEach(field => {
    if (!formula.demographics.includes(field)) {
      const groupEl = container.querySelector(`.js-demo-group-${field}`);
      if (groupEl) groupEl.style.display = 'none';
    }
  });

  if (formula.demographics.length === 0 && demographicGrid) {
    demographicGrid.style.display = 'none';
  }

  function getGender() {
    const checked = container.querySelector('.js-gender-radio:checked');
    return checked ? checked.value : 'male';
  }

  // 2. Byg målekort dynamisk ud fra køn og påkrævede punkter fra formula.sites
  function renderMeasurementCards(gender) {
    const requiredSites = formula.sites[gender] || [];
    if (!cardsGrid) return;
    cardsGrid.innerHTML = ''; 

    requiredSites.forEach(siteKey => {
      const site = SITES[siteKey];
      if (!site) return;

      const imgPath = `/assets/images/skinfold/${gender}/${site.imgName}`;
      const uniqueInputId = `sf-site-${siteKey}-${calcId}`;
      
      const cardHTML = `
        <div class="mp-skinfold-card">
          <div class="mp-skinfold-img-wrapper">
            <img src="${imgPath}" alt="${site.main}" class="mp-skinfold-img">
          </div>
          <div class="mp-skinfold-card-content">
            <label for="${uniqueInputId}" style="cursor: pointer; display: block;">
              <span class="mp-skinfold-title-main">${site.main}</span>
              <span class="mp-skinfold-title-sub">${site.sub}</span>
            </label>
            <div class="mp-skinfold-input-group">
              <input type="number" step="0.5" id="${uniqueInputId}" class="vbt-input-cell mp-skinfold-input js-dynamic-site-input" placeholder="0.0" data-site="${siteKey}">
              <span class="mp-skinfold-unit">mm</span>
            </div>
          </div>
        </div>
      `;
      cardsGrid.insertAdjacentHTML('beforeend', cardHTML);
    });

    container.querySelectorAll('.js-dynamic-site-input').forEach(input => {
      input.addEventListener('input', calculate);
    });
  }

  function saveState() {
    let state = {};
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        state = JSON.parse(saved);
      }
    } catch (e) {}

    state.gender = getGender();
    
    formula.demographics.forEach(f => {
      const inputEl = container.querySelector(`.js-demo-input[data-demo="${f}"]`);
      if (inputEl) state[f] = inputEl.value;
    });

    container.querySelectorAll('.js-dynamic-site-input').forEach(input => {
      state[input.dataset.site] = input.value;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        const genderInput = container.querySelector(`.js-gender-radio[value="${state.gender || 'male'}"]`);
        if (genderInput) genderInput.checked = true;
        
        renderMeasurementCards(state.gender || 'male');

        formula.demographics.forEach(f => {
          const inputEl = container.querySelector(`.js-demo-input[data-demo="${f}"]`);
          if (inputEl && state[f]) inputEl.value = state[f];
        });

        container.querySelectorAll('.js-dynamic-site-input').forEach(input => {
          if (state[input.dataset.site]) input.value = state[input.dataset.site];
        });
      } else {
        renderMeasurementCards('male');
      }
    } catch (e) {
      renderMeasurementCards('male');
    }
  }

  function calculate() {
    const gender = getGender();
    saveState();

    const params = { gender };
    
    formula.demographics.forEach(f => {
      const inputEl = container.querySelector(`.js-demo-input[data-demo="${f}"]`);
      params[f] = inputEl ? parseFloat(inputEl.value) || 0 : 0;
    });

    // Alderstjek / advarsel i forhold til formula.targetAudience
    if (ageWarningBox && params.age > 0) {
      if (formula.targetAudience === 'adult' && params.age < 18) {
        ageWarningText.textContent = 'Denne formel er primært udviklet og valideret til voksne (18+ år). Resultatet kan være upræcist for børn og unge.';
        ageWarningBox.style.display = 'block';
      } else if (formula.targetAudience === 'child' && params.age >= 18) {
        ageWarningText.textContent = 'Denne formel er primært udviklet til børn og unge under 18 år. Vi anbefaler at bruge en voksenformel.';
        ageWarningBox.style.display = 'block';
      } else {
        ageWarningBox.style.display = 'none';
      }
    } else if (ageWarningBox) {
      ageWarningBox.style.display = 'none';
    }

    // Saml alle hudfoldsmålinger krævet for det valgte køn
    let totalSkinfold = 0;
    const requiredSites = formula.sites[gender] || [];
    requiredSites.forEach(siteKey => {
      const input = container.querySelector(`.js-dynamic-site-input[data-site="${siteKey}"]`);
      const val = input ? parseFloat(input.value) || 0 : 0;
      params[siteKey] = val;
      totalSkinfold += val;
    });

    // Kør den matematiske beregning fra core
    const res = formula.calculate(params);

    if (resultsBox) {
      const lmBox = resultsBox.querySelector('.js-box-leanmass');
      const fmBox = resultsBox.querySelector('.js-box-fatmass');
      const sdEl = resultsBox.querySelector('.js-sd-text');

      if (!res || !res.isValid) {
        resultsBox.querySelector('[data-result="fat-pct"]').textContent = '0.0';
        resultsBox.querySelector('[data-result="sum-skinfold"]').textContent = '0';
        if (sdEl) sdEl.textContent = '-';
        if (lmBox) lmBox.querySelector('[data-result="lean-mass"]').textContent = '0.0';
        if (fmBox) fmBox.querySelector('[data-result="fat-mass"]').textContent = '0.0';
      } else {
        // Hovedresultat
        resultsBox.querySelector('[data-result="fat-pct"]').textContent = res.fatPct.toFixed(1);
        resultsBox.querySelector('[data-result="sum-skinfold"]').textContent = totalSkinfold.toString();

        // Skriv Standardafvigelse / SEE direkte fra formlens metadata
        if (sdEl) {
          sdEl.textContent = `± ${formula.see}% SEE`;
        }
        
        // Fedtmasse & Mager masse
        if (res.leanMass && res.fatMass) {
          if (lmBox) { 
            lmBox.style.display = 'flex'; 
            lmBox.querySelector('[data-result="lean-mass"]').textContent = res.leanMass.toFixed(1); 
          }
          if (fmBox) { 
            fmBox.style.display = 'flex'; 
            fmBox.querySelector('[data-result="fat-mass"]').textContent = res.fatMass.toFixed(1); 
          }
        } else {
          if (lmBox) lmBox.style.display = 'none';
          if (fmBox) fmBox.style.display = 'none';
        }
      }
    }
  }

  // --- ACTIONS (Nulstil & Download) ---
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du nulstille alle indtastninger for denne test?')) {
        localStorage.removeItem(STORAGE_KEY);
        const maleRadio = container.querySelector('.js-gender-radio[value="male"]');
        if (maleRadio) maleRadio.checked = true;
        
        container.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
        renderMeasurementCards('male');
        calculate();
      }
    });
  }

  function downloadCardAsImage() {
    const doExport = () => {
      const card = container.closest('.mp-calc-card') || container;

      window.html2canvas(card, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true,
        onclone: (clonedDoc) => {
          const clonedCard = clonedDoc.querySelector('.mp-calc-card') || clonedDoc.body;

          const elementsToHide = clonedCard.querySelectorAll('.mp-action-group, #sf-actions, .mp-btn-header-reset, button');
          elementsToHide.forEach(el => {
            el.style.display = 'none';
          });

          clonedCard.querySelectorAll('input').forEach(input => {
            input.style.border = 'none';
            input.style.background = 'transparent';
            input.style.boxShadow = 'none';
            input.style.color = '#0f172a';
            input.style.fontWeight = '800';
            input.style.appearance = 'textfield';
          });

          if (clonedCard.classList.contains('mp-calc-card')) {
            clonedCard.style.padding = '2rem';
            clonedCard.style.borderRadius = '16px';
            clonedCard.style.boxShadow = 'none';
            clonedCard.style.border = '2px solid #e2e8f0';
          }
        }
      }).then(canvas => {
        const imageUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const fatPct = container.querySelector('[data-result="fat-pct"]')?.textContent || '0';
        
        link.download = `Hudfoldstest-${calcId}-${fatPct}pct.png`;
        link.href = imageUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch(err => {
        console.error('Fejl ved generering af billede:', err);
        alert('Der opstod en fejl under oprettelse af billedet. Prøv igen.');
      });
    };

    if (window.html2canvas) {
      doExport();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      script.onload = doExport;
      script.onerror = () => alert('Kunne ikke hente billed-generatoren.');
      document.head.appendChild(script);
    }
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadCardAsImage);
  }

  // Event Listeners for kønsskift
  container.querySelectorAll('.js-gender-radio').forEach(input => {
    input.addEventListener('change', () => {
      saveState();
      renderMeasurementCards(input.value);
      loadState();
      calculate();
    });
  });

  // Event Listeners for demografi
  container.querySelectorAll('.js-demo-input').forEach(input => {
    input.addEventListener('input', calculate);
  });

  // Initialisering
  loadState();
  calculate();
}