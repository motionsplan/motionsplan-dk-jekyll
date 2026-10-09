// assets/js/ui/ideal-weight-engine.js

export function initIdealWeightEngine(container, calcId, formula) {
  if (!container || !formula) return;

  const STORAGE_KEY = `mp_iw_state_${calcId}`;

  // DOM Elements
  const resMain = container.querySelector('.js-res-main');
  const resFormulaName = container.querySelector('.js-res-formula-name');
  const resAvg = container.querySelector('.js-res-avg');
  const resAvgRange = container.querySelector('.js-res-avg-range');
  const resSkeletonNote = container.querySelector('.js-res-skeleton-note');
  const resMargin = container.querySelector('.js-res-margin');
  const resRangeMin = container.querySelector('.js-res-range-min');
  const resRangeMax = container.querySelector('.js-res-range-max');
  const resComments = container.querySelector('.js-res-comments');
  const resDisclaimer = container.querySelector('.js-res-disclaimer');

  // Formel selector & Target BMI Wrapper
  const formulaSelect = container.querySelector('.js-formula-select');
  const targetBmiWrapper = container.querySelector('.js-target-bmi-wrapper');
  const targetBmiInput = container.querySelector('.js-iw-input[data-input="targetBmi"]');

  // Modal Elements
  const criteriaBtn = container.querySelector('.js-criteria-btn');
  const criteriaModal = container.querySelector('.js-criteria-modal');
  const criteriaClose = container.querySelector('.js-criteria-close');
  const criteriaContent = container.querySelector('.js-criteria-content');

  // Action Buttons
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resDisclaimer && formula.disclaimer) {
    resDisclaimer.textContent = formula.disclaimer;
  }

  // Modal logik
  if (criteriaBtn && criteriaModal && criteriaClose) {
    criteriaBtn.addEventListener('click', () => {
      criteriaModal.style.opacity = '1';
      criteriaModal.style.pointerEvents = 'auto';
    });
    criteriaClose.addEventListener('click', () => {
      criteriaModal.style.opacity = '0';
      criteriaModal.style.pointerEvents = 'none';
    });
  }

  function getGender() {
    const checked = container.querySelector('.js-gender-radio:checked');
    return checked ? checked.value : 'male';
  }

  function getFrame() {
    const checked = container.querySelector('.js-frame-radio:checked');
    return checked ? checked.value : 'medium';
  }

  function saveState() {
    let state = {
      gender: getGender(),
      frame: getFrame(),
      formulaKey: formulaSelect ? formulaSelect.value : 'auto',
      height: (container.querySelector('.js-iw-input[data-input="height"]') || {}).value || '',
      targetBmi: targetBmiInput ? targetBmiInput.value : ''
    };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        
        const genderRadio = container.querySelector(`.js-gender-radio[value="${state.gender || 'male'}"]`);
        if (genderRadio) genderRadio.checked = true;

        const frameRadio = container.querySelector(`.js-frame-radio[value="${state.frame || 'medium'}"]`);
        if (frameRadio) frameRadio.checked = true;

        if (formulaSelect && state.formulaKey) formulaSelect.value = state.formulaKey;

        const hInput = container.querySelector('.js-iw-input[data-input="height"]');
        if (hInput && state.height) hInput.value = state.height;

        if (targetBmiInput && state.targetBmi) targetBmiInput.value = state.targetBmi;
      }
    } catch (e) {}
  }

  function renderModalComparison(evalResult) {
    if (!criteriaContent || !evalResult || !evalResult.allAdjusted) return;

    const allAdj = evalResult.allAdjusted;

    let html = '<div style="display: flex; flex-direction: column; gap: 0.75rem;">';

    Object.keys(allAdj).forEach(key => {
      const val = allAdj[key].toFixed(1);
      const meta = formula.formulaMeta[key];
      const isSelected = key === evalResult.activeKey;

      const bg = isSelected ? '#eff6ff' : '#ffffff';
      const border = isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0';
      const badgeHtml = isSelected 
        ? `<span style="font-size:0.65rem; background:#2563eb; color:#ffffff; padding:2px 6px; border-radius:4px; margin-left:6px; font-weight:800; text-transform:uppercase;">Valgt</span>` 
        : '';

      html += `
        <div style="background: ${bg}; border: ${border}; border-radius: 10px; padding: 0.75rem 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="font-size: 0.875rem; font-weight: 800; color: #1e293b;">${meta.name}</span>${badgeHtml}
            </div>
            <div style="text-align: right;">
              <span style="font-size: 1.15rem; font-weight: 900; color: #1e3a8a;">${val} kg</span>
            </div>
          </div>
        </div>
      `;
    });

    html += '</div>';
    criteriaContent.innerHTML = html;
  }

  function calculate() {
    saveState();
    const gender = getGender();
    const frame = getFrame();
    const formulaKey = formulaSelect ? formulaSelect.value : 'auto';

    const meta = formula.formulaMeta[formulaKey] || formula.formulaMeta['auto'];
    if (meta.needsBmi) {
      if (targetBmiWrapper) targetBmiWrapper.style.display = 'block';
      if (targetBmiInput && !targetBmiInput.value) {
        targetBmiInput.placeholder = gender === 'female' ? (meta.defaultBmiFemale || 22.5) : (meta.defaultBmiMale || 24.5);
      }
    } else {
      if (targetBmiWrapper) targetBmiWrapper.style.display = 'none';
    }

    const hEl = container.querySelector('.js-iw-input[data-input="height"]');
    const height = hEl ? parseFloat(hEl.value) || 0 : 0;
    const tBmi = targetBmiInput ? parseFloat(targetBmiInput.value) || 0 : 0;

    const evalResult = formula.evaluate({
      height,
      gender,
      frame,
      formulaKey,
      targetBmi: tBmi
    });

    renderModalComparison(evalResult);

    // HÅNDTERING AF FEJL / FOR LAV HØJDE (< 152 cm)
    if (!evalResult || !evalResult.isValid) {
      if (resMain) resMain.textContent = '0.0';
      if (resFormulaName) resFormulaName.textContent = evalResult && evalResult.activeMeta ? evalResult.activeMeta.name : 'Morten Zacho (2000)';
      if (resAvg) resAvg.textContent = '0.0';
      if (resAvgRange) resAvgRange.textContent = '0.0 - 0.0'; // Ingen 'kg' i bunden
      if (resMargin) resMargin.textContent = '6.0';
      if (resRangeMin) resRangeMin.textContent = '0';
      if (resRangeMax) resRangeMax.textContent = '0';

      if (evalResult && evalResult.isTooShort) {
        if (resSkeletonNote) resSkeletonNote.innerHTML = '🦴 <span style="color:#c2410c; font-weight:700;">Højde skal være min. 152 cm</span>';
        if (resComments) {
          resComments.innerHTML = `
            <div style="font-size: 0.85rem; color: #c2410c; line-height: 1.45; font-weight: 600; background: #fff7ed; padding: 0.75rem; border-radius: 8px; border: 1px solid #fdba74;">
              ${evalResult.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
            </div>
          `;
        }
      } else {
        if (resSkeletonNote) resSkeletonNote.innerHTML = '🦴 <span>Normalt skelet</span>';
        if (resComments) {
          resComments.innerHTML = `
            <div style="font-size:0.85rem; color:#64748b; font-style:italic;">
              Indtast din højde for at se faglige kommentarer til formlen.
            </div>
          `;
        }
      }
    } else {
      if (resMain) resMain.textContent = evalResult.mainValue;
      if (resFormulaName) resFormulaName.textContent = evalResult.activeMeta.name;
      if (resAvg) resAvg.textContent = evalResult.averageValue;
      if (resAvgRange) resAvgRange.textContent = `${evalResult.avgMinRange} - ${evalResult.avgMaxRange}`; // Ingen 'kg' her
      if (resMargin) resMargin.textContent = evalResult.stdDevMargin;
      if (resRangeMin) resRangeMin.textContent = evalResult.rangeMin;
      if (resRangeMax) resRangeMax.textContent = evalResult.rangeMax;

      if (resSkeletonNote) {
        resSkeletonNote.innerHTML = `🦴 <span>${evalResult.frameLabel}</span>`;
      }

      // Render rene kommentarer i den nederste højre kasse
      if (resComments && evalResult.comments) {
        let html = '';
        evalResult.comments.forEach(comment => {
          html += `
            <div style="font-size: 0.875rem; color: #334155; line-height: 1.45; font-weight: 500;">
              ${comment.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
            </div>
          `;
        });
        resComments.innerHTML = html;
      }
    }
  }

  // Event Listeners
  container.querySelectorAll('.js-gender-radio').forEach(r => r.addEventListener('change', calculate));
  container.querySelectorAll('.js-frame-radio').forEach(r => r.addEventListener('change', calculate));
  container.querySelectorAll('.js-iw-input').forEach(i => i.addEventListener('input', calculate));
  if (formulaSelect) formulaSelect.addEventListener('change', calculate);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('.js-iw-input').forEach(i => i.value = '');
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const doExport = () => {
        const card = container.closest('.mp-calc-card') || container;
        window.html2canvas(card, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true,
          onclone: (clonedDoc) => {
            const clonedCard = clonedDoc.querySelector('.mp-calc-card') || clonedDoc.body;
            clonedCard.querySelectorAll('#iw-actions, button, .js-criteria-modal').forEach(el => el.style.display = 'none');
          }
        }).then(canvas => {
          const a = document.createElement('a');
          a.download = `idealvaegt-rapport-${calcId}.png`;
          a.href = canvas.toDataURL('image/png');
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });
      };

      if (window.html2canvas) {
        doExport();
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = doExport;
        document.head.appendChild(script);
      }
    });
  }

  loadState();
  calculate();
}