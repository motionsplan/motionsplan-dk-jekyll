// assets/js/ui/met-calculator-ui.js

export function initMetCalculatorUI(container, calcId = 'met-calculator') {
  if (!container) return;

  const STORAGE_KEY = `mp_met_calc_state_${calcId}`;
  const DATA_URL = '/assets/data/met.json';

  let metData = [];
  let selectedMetItem = null;

  // DOM Elements
  const searchInput = container.querySelector('.js-met-search-input');
  const dropdown = container.querySelector('.js-met-dropdown');

  const weightInput = container.querySelector('[data-input="weight"]');
  const durationInput = container.querySelector('[data-input="duration"]');

  // Outputs
  const resTotal = container.querySelector('.js-met-res-total');
  const resTotalLbl = container.querySelector('.js-met-res-total-lbl');
  const resMetVal = container.querySelector('.js-met-res-met-val');
  const resMin = container.querySelector('.js-met-res-min');
  const resHours = container.querySelector('.js-met-res-hours');
  const resMeta = container.querySelector('.js-met-res-meta');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // Load JSON Data
  async function loadMetData() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) throw new Error('Netværksfejl ved hentning af MET-data');
      metData = await response.json();
      loadState();
    } catch (err) {
      if (resMeta) resMeta.textContent = 'Kunne ikke indlæse MET-databasen.';
    }
  }

  function saveState() {
    try {
      const state = {
        weight: weightInput ? weightInput.value : '',
        duration: durationInput ? durationInput.value : '60',
        selectedActivity: selectedMetItem ? selectedMetItem.Activity : '',
        searchQuery: searchInput ? searchInput.value : ''
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (weightInput && state.weight !== undefined) weightInput.value = state.weight;
        if (durationInput && state.duration !== undefined) durationInput.value = state.duration;
        if (searchInput && state.searchQuery) searchInput.value = state.searchQuery;

        if (state.selectedActivity && metData.length > 0) {
          const match = metData.find(item => item.Activity === state.selectedActivity);
          if (match) {
            selectItem(match, false);
          }
        }
      }
    } catch (e) {}
  }

  function renderDropdown(items) {
    if (!dropdown) return;
    if (items.length === 0) {
      dropdown.style.display = 'none';
      return;
    }

    dropdown.innerHTML = items.slice(0, 30).map(item => `
      <div class="mp-met-dropdown-item" data-activity="${item.Activity}">
        <div>
          <strong style="font-size: 0.825rem; color: #0f172a; display: block;">${item.Activity}</strong>
          <span style="font-size: 0.7rem; color: #64748b;">${item.Group || 'Aktivitet'}</span>
        </div>
        <span style="font-size: 0.8rem; font-weight: 800; color: #2563eb; background: #eff6ff; padding: 2px 8px; border-radius: 6px;">
          ${parseFloat(item.MET).toFixed(1)} MET
        </span>
      </div>
    `).join('');

    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.mp-met-dropdown-item').forEach(el => {
      el.addEventListener('click', () => {
        const actName = el.getAttribute('data-activity');
        const found = metData.find(i => i.Activity === actName);
        if (found) selectItem(found, true);
      });
    });
  }

  function selectItem(item, shouldCalculate = true) {
    selectedMetItem = item;
    if (searchInput) searchInput.value = item.Activity;
    if (dropdown) dropdown.style.display = 'none';
    if (shouldCalculate) calculate();
  }

  function calculate() {
    saveState();

    const bw = weightInput ? parseFloat(weightInput.value) || 0 : 0;
    const durationMin = durationInput ? parseFloat(durationInput.value) || 0 : 0;
    const met = selectedMetItem ? parseFloat(selectedMetItem.MET) || 0 : 0;

    if (bw > 0 && durationMin > 0 && met > 0) {
      const durationHours = durationMin / 60;
      const totalKcal = met * bw * durationHours;
      const kcalMin = (met * bw) / 60;
      const metHours = met * durationHours;

      if (resTotal) resTotal.textContent = Math.round(totalKcal);
      if (resTotalLbl) resTotalLbl.textContent = `Samlet forbrænding på ${durationMin} min (kcal)`;
      if (resMetVal) resMetVal.textContent = met.toFixed(1);
      if (resMin) resMin.textContent = kcalMin.toFixed(1);
      if (resHours) resHours.textContent = metHours.toFixed(2);
      if (resMeta) resMeta.textContent = `Valgt: ${selectedMetItem.Activity} (${met.toFixed(1)} MET)`;

    } else {
      if (resTotal) resTotal.textContent = '-';
      if (resTotalLbl) resTotalLbl.textContent = 'Samlet kalorieforbrænding (kcal)';
      if (resMetVal) resMetVal.textContent = '-';
      if (resMin) resMin.textContent = '-';
      if (resHours) resHours.textContent = '-';
      if (resMeta) {
        resMeta.textContent = selectedMetItem
          ? 'Indtast vægt og varighed for at se resultat'
          : 'Vælg en aktivitet ovenfor for at starte beregningen';
      }
    }
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      selectedMetItem = null; // Reset selection på ny søgning
      calculate();

      if (q.length < 2) {
        if (dropdown) dropdown.style.display = 'none';
        return;
      }

      const matches = metData.filter(item => 
        (item.Activity && item.Activity.toLowerCase().includes(q)) ||
        (item.Group && item.Group.toLowerCase().includes(q))
      );
      renderDropdown(matches);
    });

    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length >= 2 && dropdown.children.length > 0) {
        dropdown.style.display = 'block';
      }
    });
  }

  // Luk dropdown når der klikkes udenfor
  document.addEventListener('click', (e) => {
    if (container && !container.contains(e.target)) {
      if (dropdown) dropdown.style.display = 'none';
    }
  });

  container.querySelectorAll('.js-met-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('input').forEach(i => i.value = '');
      if (durationInput) durationInput.value = '60';
      selectedMetItem = null;
      if (dropdown) dropdown.style.display = 'none';
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'met-kalorieberegner-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  // Opstart: Hent JSON og initialiser
  loadMetData();
}

export const initCalculator = initMetCalculatorUI;