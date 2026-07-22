// assets/js/ui/max-hr-ui.js
import { estimateMaxHr, calculateMaxHrUI } from '../core/max-hr.js';

export function initMaxHr(container) {
  const inputs = container.querySelectorAll('.js-mh-input');
  
  const outputBox = container.querySelector('.js-mh-output');
  const activeFormulaBox = container.querySelector('.js-mh-active-formula');
  
  const avgBox = container.querySelector('.js-mh-avg');
  const minBox = container.querySelector('.js-mh-min');
  const minNameBox = container.querySelector('.js-mh-min-name');
  const maxBox = container.querySelector('.js-mh-max');
  const maxNameBox = container.querySelector('.js-mh-max-name');
  
  const avgBtn = container.querySelector('.js-mh-avg-btn');
  const popup = container.querySelector('.js-mh-popup');
  const popupClose = container.querySelector('.js-mh-popup-close');
  const tableBody = container.querySelector('.js-mh-table-body');
  
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');
  const genderRadios = container.querySelectorAll('input[name="mh_gender"]');
  const chartDetailsEl = container.querySelector('.js-mh-chart-details');
  const canvas = container.querySelector('.js-mh-chart');
  
  let chartInstance = null;

  const allFormulas = {
    'tanaka': 'Tanaka (2001)',
    'aastrand': 'Åstrand',
    'fox': 'Haskell & Fox',
    'gellish': 'Gellish (Ikke-lineær)',
    'gellish_linear': 'Gellish (Lineær)',
    'gulati': 'Gulati',
    'fairbarn': 'Fairbarn',
    'whyte': 'Whyte',
    'inbar': 'Inbar',
    'nes': 'Nes',
    'londeree_moeschberger': 'Londeree & Moeschberger'
  };

  function saveState() {
    const ageVal = container.querySelector('[name="mh_age"]').value;
    const genderVal = container.querySelector('input[name="mh_gender"]:checked').value;
    const formulaVal = container.querySelector('[name="mh_formula"]').value;
    localStorage.setItem('mp_maxhr_state', JSON.stringify({ age: ageVal, gender: genderVal, formula: formulaVal }));
  }

  function loadState() {
    const saved = localStorage.getItem('mp_maxhr_state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.age) container.querySelector('[name="mh_age"]').value = state.age;
        if (state.formula) container.querySelector('[name="mh_formula"]').value = state.formula;
        if (state.gender) {
          const radio = container.querySelector(`input[name="mh_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      } catch (e) {}
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', () => { saveState(); calculate(); });
    input.addEventListener('change', () => { saveState(); calculate(); });
  });

  genderRadios.forEach(radio => {
    radio.addEventListener('change', () => { updateGenderUI(); saveState(); calculate(); });
  });

  if (avgBtn && popup && popupClose) {
    avgBtn.addEventListener('click', () => {
      if (container.querySelector('[name="mh_age"]').value > 0) {
        popup.style.display = 'flex';
      }
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  chartDetailsEl.addEventListener('toggle', () => {
    if (chartDetailsEl.open && chartInstance) {
      chartInstance.resize();
    }
  });

  function updateGenderUI() {
    genderRadios.forEach(r => {
      const box = r.nextElementSibling;
      if (r.checked) {
        box.style.borderColor = '#2563eb'; box.style.backgroundColor = '#2563eb'; box.style.color = '#ffffff';
      } else {
        box.style.borderColor = '#e2e8f0'; box.style.backgroundColor = '#f8fafc'; box.style.color = '#64748b';
      }
    });
  }

  function calculate() {
    const ageVal = parseFloat(container.querySelector('[name="mh_age"]').value) || 0;
    const genderVal = container.querySelector('input[name="mh_gender"]:checked').value;
    const formulaVal = container.querySelector('[name="mh_formula"]').value;

    if (ageVal <= 0) {
      outputBox.textContent = '-';
      activeFormulaBox.textContent = '-';
      if(avgBox) avgBox.textContent = '-';
      if(minBox) minBox.textContent = '-';
      if(minNameBox) minNameBox.textContent = '-';
      if(maxBox) maxBox.textContent = '-';
      if(maxNameBox) maxNameBox.textContent = '-';
      if(chartInstance) { chartInstance.destroy(); chartInstance = null; }
      return;
    }

    const result = calculateMaxHrUI({ age: ageVal, gender: genderVal, formula: formulaVal });
    
    if (result.isValid) {
      outputBox.textContent = result.maxHr;
      activeFormulaBox.textContent = `Udregnet vha. ${allFormulas[formulaVal] || 'Gennemsnit'}`;
    }

    let formulaResults = [];
    for (const [key, name] of Object.entries(allFormulas)) {
      if (key === 'gulati' && genderVal === 'male') continue;
      const val = Math.round(estimateMaxHr(ageVal, genderVal, key));
      formulaResults.push({ key, name, val });
    }

    // Sortér formlerne fra lavest til højest for at finde min/max
    const sortedResults = [...formulaResults].sort((a, b) => a.val - b.val);
    const minObj = sortedResults[0];
    const maxObj = sortedResults[sortedResults.length - 1];
    const avgHr = Math.round(estimateMaxHr(ageVal, genderVal, 'average'));

    if(avgBox) avgBox.textContent = avgHr;
    if(minBox) minBox.textContent = minObj.val;
    if(minNameBox) minNameBox.textContent = minObj.name;
    if(maxBox) maxBox.textContent = maxObj.val;
    if(maxNameBox) maxNameBox.textContent = maxObj.name;

    // Byg popup-tabellen: Arrayet er automatisk sorteret fra LAVEST til HØJEST
    tableBody.innerHTML = '';
    sortedResults.forEach(r => {
      let badges = '';
      if (r.key === maxObj.key) badges += `<span style="font-size: 0.6rem; background: #fee2e2; color: #991b1b; padding: 2px 5px; border-radius: 4px; margin-left: 6px; vertical-align: middle;">Højeste</span>`;
      if (r.key === minObj.key) badges += `<span style="font-size: 0.6rem; background: #f1f5f9; color: #475569; padding: 2px 5px; border-radius: 4px; margin-left: 6px; vertical-align: middle;">Laveste</span>`;
      
      let rowStyle = 'border-bottom: 1px solid #e2e8f0;';
      let nameStyle = 'color: #334155; font-size: 0.8rem;';
      
      // Fast bredde på tal-kolonnen for at sikre, at tallene flugter snorlige i højre side
      let valStyle = 'text-align: right; font-weight: 600; color: #0f172a; font-size: 0.85rem; width: 60px;';

      if (r.key === formulaVal) {
        rowStyle = 'border-bottom: 1px solid #e2e8f0; background-color: #eff6ff; font-weight: 700;';
        nameStyle = 'color: #0f172a; font-weight: 700; font-size: 0.8rem;';
        valStyle = 'text-align: right; font-weight: 800; color: #0f172a; font-size: 0.85rem; width: 60px;';
        badges += `<span style="font-size: 0.6rem; background: #3b82f6; color: #fff; padding: 2px 5px; border-radius: 4px; margin-left: 6px; vertical-align: middle;">Valgt</span>`;
      }

      const tr = document.createElement('tr');
      tr.style = rowStyle;
      tr.innerHTML = `
        <td style="padding: 0.6rem 0.25rem; ${nameStyle}">${r.name} ${badges}</td>
        <td style="padding: 0.6rem 0.25rem; ${valStyle}">${r.val}</td>
      `;
      tableBody.appendChild(tr);
    });

    updateChart(ageVal, genderVal, formulaVal, result.maxHr);
  }

  function updateChart(currentAge, gender, selectedFormula, currentMaxHr) {
    if (!window.Chart) return;
    const labels = [20, 30, 40, 50, 60, 70, 80];
    const datasets = [];

    for (const key of Object.keys(allFormulas)) {
      if (key === 'gulati' && gender === 'male') continue;
      const dataPoints = labels.map(a => estimateMaxHr(a, gender, key));
      datasets.push({
        label: allFormulas[key],
        data: dataPoints,
        borderColor: (key === selectedFormula && selectedFormula !== 'average') ? '#3b82f6' : '#cbd5e1',
        borderWidth: (key === selectedFormula) ? 3 : 1,
        tension: 0.3,
        pointRadius: 0
      });
    }

    if (currentMaxHr) {
      datasets.push({
        label: 'Dit resultat',
        data: [{ x: currentAge, y: currentMaxHr }],
        backgroundColor: '#ef4444',
        borderColor: '#ef4444',
        pointRadius: 6,
        type: 'scatter'
      });
    }

    if (chartInstance) { chartInstance.destroy(); }

    chartInstance = new Chart(canvas, {
      type: 'line',
      data: { labels: labels, datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Alder' }, type: 'linear', min: 15, max: 85 },
          y: { title: { display: true, text: 'Maxpuls' }, min: 130, max: 210 }
        }
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelector('[name="mh_age"]').value = '';
      container.querySelector('[name="mh_formula"]').value = 'tanaka';
      container.querySelector('[value="male"]').checked = true;
      if(popup) popup.style.display = 'none';
      if(chartDetailsEl) chartDetailsEl.open = false;
      updateGenderUI();
      saveState();
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if(popup) popup.style.display = 'none'; 
      html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'maxpuls-rapport.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
  }

  loadState();
  updateGenderUI();
  calculate();
}

export const initCalculator = initMaxHr;