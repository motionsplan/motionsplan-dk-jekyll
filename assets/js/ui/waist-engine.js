// assets/js/ui/waist-engine.js

export function initWaistEngine(container, calcId, formula) {
  if (!container || !formula) return;

  const STORAGE_KEY = `mp_waist_state_${calcId}`;
  const isDashboard = formula.isDashboard || false;

  // DOM-elementer til enkeltvis beregner
  const resMain = container.querySelector('.js-res-main');
  const resUnit = container.querySelector('.js-res-unit');
  const resBadge = container.querySelector('.js-res-badge');
  const resPin = container.querySelector('.js-res-pin');
  const resText = container.querySelector('.js-res-text');
  const resDisclaimer = container.querySelector('.js-res-disclaimer');
  const resCardRight = container.querySelector('.js-res-card-right');

  // Modal-elementer
  const criteriaBtn = container.querySelector('.js-criteria-btn');
  const criteriaModal = container.querySelector('.js-criteria-modal');
  const criteriaClose = container.querySelector('.js-criteria-close');
  const criteriaContent = container.querySelector('.js-criteria-content');

  // Knapper
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // Indsæt forbeholdstekst fra core hvis tilgængelig
  if (resDisclaimer && formula.disclaimer) {
    resDisclaimer.textContent = formula.disclaimer;
  }

  // Skjul uaktuelle input-grupper ved enkeltvise beregnere
  if (!isDashboard && formula.inputs) {
    ['waist', 'hip', 'height'].forEach(inputKey => {
      const groupEl = container.querySelector(`.js-input-group-${inputKey}`);
      if (groupEl) {
        groupEl.style.display = formula.inputs.includes(inputKey) ? 'block' : 'none';
      }
    });
  }

  // Åbn/Luk logik for modal med grænseværdier
  if (criteriaBtn && criteriaModal && criteriaClose) {
    if (!formula.criteria) {
      criteriaBtn.style.display = 'none';
    } else {
      criteriaBtn.addEventListener('click', () => {
        criteriaModal.style.opacity = '1';
        criteriaModal.style.pointerEvents = 'auto';
      });
      criteriaClose.addEventListener('click', () => {
        criteriaModal.style.opacity = '0';
        criteriaModal.style.pointerEvents = 'none';
      });
    }
  }

  function getGender() {
    const checked = container.querySelector('.js-gender-radio:checked');
    return checked ? checked.value : 'male';
  }

  function saveState() {
    let state = { gender: getGender() };
    const inputKeys = formula.inputs || ['waist', 'hip', 'height'];

    inputKeys.forEach(key => {
      const el = container.querySelector(`.js-waist-input[data-input="${key}"]`);
      if (el) state[key] = el.value;
    });

    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        const radio = container.querySelector(`.js-gender-radio[value="${state.gender || 'male'}"]`);
        if (radio) radio.checked = true;

        const inputKeys = formula.inputs || ['waist', 'hip', 'height'];
        inputKeys.forEach(key => {
          const el = container.querySelector(`.js-waist-input[data-input="${key}"]`);
          if (el && state[key]) el.value = state[key];
        });
      }
    } catch (e) {}
  }

  // Bygger tabellen over grænseværdier i modalen og markerer brugerens zone
  function updateCriteriaView(evalResult, gender) {
    if (!formula.criteria || !criteriaContent) return;

    const critList = formula.criteria.both || formula.criteria[gender];
    if (!critList) return;

    const rawVal = evalResult && evalResult.isValid ? parseFloat(evalResult.mainValue) : -1;

    let html = '<div style="display: flex; flex-direction: column; gap: 0.5rem;">';

    critList.forEach(c => {
      const isActive = rawVal >= c.min && rawVal <= c.max;
      const bg = isActive ? `${c.color}15` : '#ffffff';
      const border = isActive ? `2px solid ${c.color}` : '1px solid #e2e8f0';
      const weight = isActive ? '800' : '600';
      const badge = isActive ? `<span style="font-size:0.65rem; background:${c.color}; color:#ffffff; padding:2px 6px; border-radius:4px; margin-left:8px; font-weight:800; text-transform:uppercase;">Dit mål</span>` : '';

      html += `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.75rem; background: ${bg}; border: ${border}; border-radius: 8px; transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: ${c.color}; flex-shrink: 0;"></div>
            <span style="font-size: 0.85rem; font-weight: ${weight}; color: #334155;">${c.label}${badge}</span>
          </div>
          <span style="font-size: 0.85rem; font-weight: 800; color: #64748b;">${c.limit}</span>
        </div>
      `;
    });

    html += '</div>';
    criteriaContent.innerHTML = html;
  }

  function calculate() {
    saveState();
    const gender = getGender();
    const params = { gender };

    const inputKeys = formula.inputs || ['waist', 'hip', 'height'];
    inputKeys.forEach(key => {
      const el = container.querySelector(`.js-waist-input[data-input="${key}"]`);
      params[key] = el ? parseFloat(el.value) || 0 : 0;
    });

    const evalResult = formula.evaluate(params);

    // DASHBOARD VISNING
    if (isDashboard) {
      const results = evalResult ? evalResult.results || {} : {};

      Object.keys(results).forEach(key => {
        const card = container.querySelector(`.js-dash-card[data-dash="${key}"]`);
        if (!card) return;

        const res = results[key];
        const valEl = card.querySelector('.js-d-val');
        const unitEl = card.querySelector('.js-d-unit');
        const badgeEl = card.querySelector('.js-d-badge');

        if (res && res.isValid) {
          if (valEl) valEl.textContent = res.mainValue;
          if (unitEl) unitEl.textContent = res.subUnit;
          if (badgeEl) {
            badgeEl.textContent = res.status;
            badgeEl.style.backgroundColor = res.color;
            badgeEl.style.color = '#ffffff';
          }
        } else {
          if (valEl) valEl.textContent = '0.0';
          if (badgeEl) {
            badgeEl.textContent = 'Mangler data';
            badgeEl.style.backgroundColor = '#cbd5e1';
            badgeEl.style.color = '#475569';
          }
        }
      });
      return;
    }

    // ENKELTVIS BEREGNER VISNING
    updateCriteriaView(evalResult, gender);

    if (!evalResult || !evalResult.isValid) {
      if (resMain) resMain.textContent = '0.0';
      if (resUnit) resUnit.textContent = formula.unit || '-';
      if (resBadge) {
        resBadge.textContent = 'Indtast værdier';
        resBadge.style.backgroundColor = '#cbd5e1';
        resBadge.style.color = '#475569';
      }
      if (resPin) resPin.style.left = '0%';
      if (resText) resText.textContent = 'Indtast dine mål ovenfor for at beregne din sundhedsprofil.';
      if (resCardRight) resCardRight.style.borderColor = '#e2e8f0';
    } else {
      if (resMain) resMain.textContent = evalResult.mainValue;
      if (resUnit) resUnit.textContent = evalResult.subUnit;

      if (resBadge) {
        resBadge.textContent = evalResult.status;
        resBadge.style.backgroundColor = evalResult.color;
        resBadge.style.color = '#ffffff';
      }

      if (resPin) resPin.style.left = `${evalResult.pct}%`;
      if (resText) resText.textContent = evalResult.text;

      // Dynamisk kantfarve på højre resultatboks
      if (resCardRight) resCardRight.style.borderColor = evalResult.color;
    }
  }

  // --- ACTIONS (Reset & Download) ---
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('.js-waist-input').forEach(i => i.value = '');
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
            const elementsToHide = clonedCard.querySelectorAll('#waist-actions, button, .js-criteria-modal');
            elementsToHide.forEach(el => el.style.display = 'none');
          }
        }).then(canvas => {
          const a = document.createElement('a');
          a.download = `kropsmaal-rapport-${calcId}.png`;
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

  // Event Listeners
  container.querySelectorAll('.js-gender-radio').forEach(r => r.addEventListener('change', calculate));
  container.querySelectorAll('.js-waist-input').forEach(i => i.addEventListener('input', calculate));

  // Initialisering
  loadState();
  calculate();
}