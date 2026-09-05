// assets/js/ui/rsi-ui.js
import { calculateSingleRSI, calculateIncrementalDropJump, calculateTenFiveRSI, evaluateRSI } from '../core/rsi.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_rsi_calculator_v3';

  let activeMode = 'single';
  let singleMethod = 'height_ct';

  let incrementalRows = [
    { boxHeightCm: '20', jumpHeightCm: '38', contactTimeMs: '190' },
    { boxHeightCm: '30', jumpHeightCm: '42', contactTimeMs: '210' },
    { boxHeightCm: '40', jumpHeightCm: '41', contactTimeMs: '245' },
    { boxHeightCm: '50', jumpHeightCm: '37', contactTimeMs: '280' }
  ];

  let tenFiveJumps = [
    { jumpHeightCm: '35', contactTimeMs: '190' },
    { jumpHeightCm: '38', contactTimeMs: '185' },
    { jumpHeightCm: '40', contactTimeMs: '180' },
    { jumpHeightCm: '41', contactTimeMs: '175' },
    { jumpHeightCm: '39', contactTimeMs: '180' },
    { jumpHeightCm: '37', contactTimeMs: '190' },
    { jumpHeightCm: '36', contactTimeMs: '195' },
    { jumpHeightCm: '34', contactTimeMs: '200' },
    { jumpHeightCm: '32', contactTimeMs: '210' },
    { jumpHeightCm: '30', contactTimeMs: '220' }
  ];

  const modeCards = container.querySelectorAll('.js-mode-btn');
  const sectionSingle = container.querySelector('.js-section-single');
  const sectionInc = container.querySelector('.js-section-incremental');
  const sectionTenFive = container.querySelector('.js-section-tenfive');

  const singleMethodBtns = container.querySelectorAll('.js-single-method-btn');
  const fieldJh = container.querySelector('.js-field-jh');
  const fieldFt = container.querySelector('.js-field-ft');
  const fieldCt = container.querySelector('.js-field-ct');
  const fieldContr = container.querySelector('.js-field-contr');

  const incTbody = container.querySelector('.js-inc-tbody');
  const btnAddIncRow = container.querySelector('.js-add-inc-row');

  const tenfiveTbody = container.querySelector('.js-tenfive-tbody');

  const resTitle = container.querySelector('.js-rsi-res-title');
  const resScore = container.querySelector('.js-rsi-score-out');
  const optimalBoxBadge = container.querySelector('.js-optimal-box-badge');
  const optimalBoxVal = container.querySelector('.js-optimal-box-val');
  const evalBadge = container.querySelector('.js-rsi-eval-badge');
  const sourceText = container.querySelector('.js-rsi-source-text');
  const marker = container.querySelector('.js-rsi-continuum-marker');

  const barchartWrapper = container.querySelector('.js-barchart-wrapper');
  const barchartLabel = container.querySelector('.js-barchart-label');
  const barchartContainer = container.querySelector('.js-barchart-container');

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  modeCards.forEach(card => {
    card.addEventListener('click', () => {
      modeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      activeMode = card.getAttribute('data-mode');

      if (sectionSingle) sectionSingle.style.display = activeMode === 'single' ? 'block' : 'none';
      if (sectionInc) sectionInc.style.display = activeMode === 'incremental' ? 'block' : 'none';
      if (sectionTenFive) sectionTenFive.style.display = activeMode === 'tenfive' ? 'block' : 'none';

      calculate();
    });
  });

  singleMethodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      singleMethodBtns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = '#64748b';
      });
      btn.classList.add('active');
      btn.style.background = '#ffffff';
      btn.style.color = '#0f172a';

      singleMethod = btn.getAttribute('data-method');

      if (fieldJh) fieldJh.style.display = singleMethod === 'flight_ct' ? 'none' : 'block';
      if (fieldFt) fieldFt.style.display = singleMethod === 'flight_ct' ? 'block' : 'none';
      if (fieldCt) fieldCt.style.display = singleMethod === 'rsimod' ? 'none' : 'block';
      if (fieldContr) fieldContr.style.display = singleMethod === 'rsimod' ? 'block' : 'none';

      calculate();
    });
  });

  function renderIncRows() {
    if (!incTbody) return;

    incTbody.innerHTML = incrementalRows.map((r, i) => {
      const calc = calculateSingleRSI({ method: 'height_ct', jumpHeightCm: r.jumpHeightCm, contactTimeMs: r.contactTimeMs });
      const rsiText = calc.isValid ? calc.rsi : '-';

      return `
        <tr>
          <td><input type="number" class="mp-rsi-input js-inc-box" data-idx="${i}" value="${r.boxHeightCm}" placeholder="30"></td>
          <td><input type="number" class="mp-rsi-input js-inc-jh" data-idx="${i}" value="${r.jumpHeightCm}" placeholder="40"></td>
          <td><input type="number" class="mp-rsi-input js-inc-ct" data-idx="${i}" value="${r.contactTimeMs}" placeholder="200"></td>
          <td style="font-weight:900; color:#1e3a8a;">${rsiText}</td>
          <td>
            <button type="button" class="js-remove-inc-row" data-idx="${i}" style="background:none; border:none; cursor:pointer; opacity:0.6;">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');

    incTbody.querySelectorAll('.mp-rsi-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        if (e.target.classList.contains('js-inc-box')) incrementalRows[idx].boxHeightCm = e.target.value;
        if (e.target.classList.contains('js-inc-jh')) incrementalRows[idx].jumpHeightCm = e.target.value;
        if (e.target.classList.contains('js-inc-ct')) incrementalRows[idx].contactTimeMs = e.target.value;
        calculate();
      });
    });

    incTbody.querySelectorAll('.js-remove-inc-row').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        incrementalRows.splice(idx, 1);
        renderIncRows();
        calculate();
      });
    });
  }

  if (btnAddIncRow) {
    btnAddIncRow.addEventListener('click', () => {
      const lastBox = incrementalRows.length > 0 ? parseFloat(incrementalRows[incrementalRows.length - 1].boxHeightCm) || 30 : 20;
      incrementalRows.push({ boxHeightCm: String(lastBox + 10), jumpHeightCm: '40', contactTimeMs: '220' });
      renderIncRows();
      calculate();
    });
  }

  function renderTenFiveRows() {
    if (!tenfiveTbody) return;

    tenfiveTbody.innerHTML = tenFiveJumps.map((j, i) => {
      const calc = calculateSingleRSI({ method: 'height_ct', jumpHeightCm: j.jumpHeightCm, contactTimeMs: j.contactTimeMs });
      const rsiText = calc.isValid ? calc.rsi : '-';

      return `
        <tr>
          <td style="font-weight:800; color:#64748b;">#${i + 1}</td>
          <td><input type="number" class="mp-rsi-input js-tf-jh" data-idx="${i}" value="${j.jumpHeightCm}" placeholder="35"></td>
          <td><input type="number" class="mp-rsi-input js-tf-ct" data-idx="${i}" value="${j.contactTimeMs}" placeholder="180"></td>
          <td style="font-weight:900; color:#1e3a8a;" class="js-tf-rsi-out-${i}">${rsiText}</td>
        </tr>
      `;
    }).join('');

    tenfiveTbody.querySelectorAll('.mp-rsi-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'), 10);
        if (e.target.classList.contains('js-tf-jh')) tenFiveJumps[idx].jumpHeightCm = e.target.value;
        if (e.target.classList.contains('js-tf-ct')) tenFiveJumps[idx].contactTimeMs = e.target.value;
        calculate();
      });
    });
  }

  function renderBarChart(items = [], labelKey = 'label', valKey = 'value') {
    if (!barchartContainer || items.length === 0) {
      if (barchartWrapper) barchartWrapper.style.display = 'none';
      return;
    }

    const maxVal = Math.max(...items.map(it => it[valKey] || 0), 0.1);

    barchartContainer.innerHTML = items.map(it => {
      const v = it[valKey] || 0;
      const isHighlight = it.isHighlight;
      const pct = Math.min(100, Math.max(10, (v / maxVal) * 100));

      return `
        <div class="mp-rsi-bar-col">
          <span class="mp-rsi-bar-val">${v > 0 ? v.toFixed(2) : '-'}</span>
          <div class="mp-rsi-bar-fill ${isHighlight ? 'highlight' : ''}" style="height: ${pct}%;"></div>
          <span class="mp-rsi-bar-lbl">${it[labelKey]}</span>
        </div>
      `;
    }).join('');

    if (barchartWrapper) barchartWrapper.style.display = 'block';
  }

  function calculate() {
    saveState();

    let methodForEval = 'height_ct';

    if (activeMode === 'single') {
      methodForEval = singleMethod;
      if (optimalBoxBadge) optimalBoxBadge.style.display = 'none';
      if (barchartWrapper) barchartWrapper.style.display = 'none';
      if (resTitle) resTitle.textContent = singleMethod === 'rsimod' ? 'Modified RSI (RSImod)' : 'Reactive Strength Index (RSI)';

      const jh = container.querySelector('[name="rsi_jh"]')?.value || '';
      const ct = container.querySelector('[name="rsi_ct"]')?.value || '';
      const ft = container.querySelector('[name="rsi_ft"]')?.value || '';
      const contr = container.querySelector('[name="rsi_contr"]')?.value || '';

      const res = calculateSingleRSI({
        method: singleMethod,
        jumpHeightCm: jh,
        contactTimeMs: ct,
        flightTimeMs: ft,
        contractionTimeMs: contr
      });

      if (res.isValid) {
        if (resScore) resScore.textContent = res.rsi;
        const evaluation = evaluateRSI(res.rawRsi, methodForEval);
        if (evalBadge) {
          evalBadge.textContent = evaluation.label;
          evalBadge.style.backgroundColor = evaluation.color;
        }
        if (sourceText) sourceText.textContent = evaluation.source;
        updateContinuum(res.rawRsi, singleMethod === 'rsimod');
      } else {
        resetResults();
      }

    } else if (activeMode === 'incremental') {
      methodForEval = 'height_ct';
      if (resTitle) resTitle.textContent = 'Højeste RSI (Incremental Drop Jump)';
      renderIncRows();

      const res = calculateIncrementalDropJump(incrementalRows);

      if (res.isValid) {
        if (resScore) resScore.textContent = res.bestRsi;
        if (optimalBoxBadge && optimalBoxVal) {
          optimalBoxVal.textContent = `${res.optimalBoxHeightCm} cm`;
          optimalBoxBadge.style.display = 'block';
        }

        const evaluation = evaluateRSI(parseFloat(res.bestRsi), methodForEval);
        if (evalBadge) {
          evalBadge.textContent = evaluation.label;
          evalBadge.style.backgroundColor = evaluation.color;
        }
        if (sourceText) sourceText.textContent = evaluation.source;
        updateContinuum(parseFloat(res.bestRsi), false);

        if (barchartLabel) barchartLabel.textContent = '📦 RSI pr. kassehøjde (Optimal fremhævet)';
        const chartItems = res.rows.map(r => ({
          label: `${r.boxHeightCm}cm`,
          value: r.rsi,
          isHighlight: r.boxHeightCm === res.optimalBoxHeightCm
        }));
        renderBarChart(chartItems);
      } else {
        resetResults();
      }

    } else if (activeMode === 'tenfive') {
      methodForEval = 'height_ct';
      if (optimalBoxBadge) optimalBoxBadge.style.display = 'none';
      if (resTitle) resTitle.textContent = '10/5 RSI Score (Gns. af 5 bedste hop)';
      renderTenFiveRows();

      const res = calculateTenFiveRSI(tenFiveJumps);

      if (res.isValid) {
        if (resScore) resScore.textContent = res.avgRsi;

        const topIndices = res.top5Jumps.map(j => j.jumpNum - 1);
        const trs = tenfiveTbody.querySelectorAll('tr');
        trs.forEach((tr, idx) => {
          if (topIndices.includes(idx)) {
            tr.style.backgroundColor = '#eff6ff';
            tr.style.fontWeight = 'bold';
          } else {
            tr.style.backgroundColor = 'transparent';
            tr.style.fontWeight = 'normal';
          }
        });

        const evaluation = evaluateRSI(parseFloat(res.avgRsi), methodForEval);
        if (evalBadge) {
          evalBadge.textContent = evaluation.label;
          evalBadge.style.backgroundColor = evaluation.color;
        }
        if (sourceText) sourceText.textContent = evaluation.source;
        updateContinuum(parseFloat(res.avgRsi), false);

        if (barchartLabel) barchartLabel.textContent = '🔄 Alle 10 pogo-hop (5 bedste fremhævet)';
        const chartItems = res.allJumps.map((j, idx) => ({
          label: `#${j.jumpNum}`,
          value: j.rsi,
          isHighlight: topIndices.includes(idx)
        }));
        renderBarChart(chartItems);
      } else {
        resetResults();
      }
    }
  }

  function updateContinuum(rsiVal, isRsiMod) {
    if (!marker) return;
    let percent = 0;

    if (isRsiMod) {
      // RSImod skala (0 til 0.80)
      percent = (rsiVal / 0.80) * 100;
    } else {
      // Flanagan 5-trins skala (0 til 3.50)
      percent = (rsiVal / 3.50) * 100;
    }

    percent = Math.max(2, Math.min(98, percent));
    marker.style.left = `${percent}%`;
    marker.style.display = 'block';
  }

  function resetResults() {
    if (resScore) resScore.textContent = '-';
    if (evalBadge) {
      evalBadge.textContent = 'Mangler data';
      evalBadge.style.backgroundColor = '#cbd5e1';
    }
    if (sourceText) sourceText.textContent = '';
    if (optimalBoxBadge) optimalBoxBadge.style.display = 'none';
    if (barchartWrapper) barchartWrapper.style.display = 'none';
    if (marker) marker.style.display = 'none';
  }

  function saveState() {
    try {
      const state = {
        activeMode,
        singleMethod,
        incrementalRows,
        tenFiveJumps,
        jh: container.querySelector('[name="rsi_jh"]')?.value || '',
        ct: container.querySelector('[name="rsi_ct"]')?.value || '',
        ft: container.querySelector('[name="rsi_ft"]')?.value || '',
        contr: container.querySelector('[name="rsi_contr"]')?.value || ''
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.activeMode) activeMode = state.activeMode;
        if (state.singleMethod) singleMethod = state.singleMethod;
        if (state.incrementalRows) incrementalRows = state.incrementalRows;
        if (state.tenFiveJumps) tenFiveJumps = state.tenFiveJumps;

        if (state.jh && container.querySelector('[name="rsi_jh"]')) container.querySelector('[name="rsi_jh"]').value = state.jh;
        if (state.ct && container.querySelector('[name="rsi_ct"]')) container.querySelector('[name="rsi_ct"]').value = state.ct;
        if (state.ft && container.querySelector('[name="rsi_ft"]')) container.querySelector('[name="rsi_ft"]').value = state.ft;
        if (state.contr && container.querySelector('[name="rsi_contr"]')) container.querySelector('[name="rsi_contr"]').value = state.contr;
      }
    } catch (e) {}
  }

  container.querySelectorAll('.js-rsi-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      activeMode = 'single';
      singleMethod = 'height_ct';

      incrementalRows = [
        { boxHeightCm: '20', jumpHeightCm: '38', contactTimeMs: '190' },
        { boxHeightCm: '30', jumpHeightCm: '42', contactTimeMs: '210' },
        { boxHeightCm: '40', jumpHeightCm: '41', contactTimeMs: '245' },
        { boxHeightCm: '50', jumpHeightCm: '37', contactTimeMs: '280' }
      ];

      tenFiveJumps = [
        { jumpHeightCm: '35', contactTimeMs: '190' },
        { jumpHeightCm: '38', contactTimeMs: '185' },
        { jumpHeightCm: '40', contactTimeMs: '180' },
        { jumpHeightCm: '41', contactTimeMs: '175' },
        { jumpHeightCm: '39', contactTimeMs: '180' },
        { jumpHeightCm: '37', contactTimeMs: '190' },
        { jumpHeightCm: '36', contactTimeMs: '195' },
        { jumpHeightCm: '34', contactTimeMs: '200' },
        { jumpHeightCm: '32', contactTimeMs: '210' },
        { jumpHeightCm: '30', contactTimeMs: '220' }
      ];

      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (typeof html2canvas !== 'undefined') {
        html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
          const link = document.createElement('a');
          link.download = 'rsi-beregning.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }
    });
  }

  loadState();
  calculate();
}

export const initRSI = initCalculator;
export default initCalculator;