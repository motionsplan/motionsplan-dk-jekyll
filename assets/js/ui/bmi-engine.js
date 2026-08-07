// assets/js/ui/bmi-engine.js

export function initBmiEngine(container, calcId, formula) {
  if (!container || !formula) return;

  const STORAGE_KEY = `mp_bmi_state_${calcId}`;
  const isChild = calcId === 'bmi-child';

  // DOM Elements
  const resMain = container.querySelector('.js-res-main');
  const resUnit = container.querySelector('.js-res-unit');
  const resBadge = container.querySelector('.js-res-badge');
  const resPin = container.querySelector('.js-res-pin');
  const resText = container.querySelector('.js-res-text');
  const resDisclaimer = container.querySelector('.js-res-disclaimer');
  const resCardRight = container.querySelector('.js-res-card-right');

  // Gender Labels
  const labelMale = container.querySelector('.js-gender-label-male');
  const labelFemale = container.querySelector('.js-gender-label-female');

  // Selector & Age group
  const modelSelectorContainer = container.querySelector('.js-model-selector-container');
  const modelSelect = container.querySelector('.js-model-select');

  // Modal
  const criteriaBtn = container.querySelector('.js-criteria-btn');
  const criteriaModal = container.querySelector('.js-criteria-modal');
  const criteriaClose = container.querySelector('.js-criteria-close');
  const criteriaContent = container.querySelector('.js-criteria-content');

  // Buttons
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  // Dynamisk UI-tilpasning til Voksen vs Barn
  if (isChild) {
    if (modelSelectorContainer) modelSelectorContainer.style.display = 'none';
    if (labelMale) labelMale.textContent = 'Dreng';
    if (labelFemale) labelFemale.textContent = 'Pige';
    const ageInput = container.querySelector('.js-bmi-input[data-input="age"]');
    if (ageInput) ageInput.placeholder = 'f.eks. 12';
  } else {
    if (modelSelectorContainer) modelSelectorContainer.style.display = 'block';
    if (labelMale) labelMale.textContent = 'Mand';
    if (labelFemale) labelFemale.textContent = 'Kvinde';
    const ageInput = container.querySelector('.js-bmi-input[data-input="age"]');
    if (ageInput) ageInput.placeholder = 'f.eks. 35';
  }

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

  function saveState() {
    let state = {
      gender: getGender(),
      modelKey: modelSelect ? modelSelect.value : 'who'
    };

    ['height', 'weight', 'age'].forEach(key => {
      const el = container.querySelector(`.js-bmi-input[data-input="${key}"]`);
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

        if (modelSelect && state.modelKey) modelSelect.value = state.modelKey;

        ['height', 'weight', 'age'].forEach(key => {
          const el = container.querySelector(`.js-bmi-input[data-input="${key}"]`);
          if (el && state[key]) el.value = state[key];
        });
      }
    } catch (e) {}
  }

  function updateCriteriaView(evalResult, gender) {
    if (!criteriaContent) return;

    let critList = [];
    if (isChild) {
      const ageEl = container.querySelector('.js-bmi-input[data-input="age"]');
      const age = ageEl ? parseFloat(ageEl.value) || 12 : 12;
      critList = formula.getCriteria(age, gender);
    } else {
      critList = evalResult ? evalResult.criteria || [] : [];
    }

    const rawVal = evalResult && evalResult.isValid ? parseFloat(evalResult.mainValue) : -1;

    let html = '<div style="display: flex; flex-direction: column; gap: 0.5rem;">';
    critList.forEach(c => {
      const isActive = rawVal >= c.min && rawVal <= c.max;
      const bg = isActive ? `${c.color}15` : '#ffffff';
      const border = isActive ? `2px solid ${c.color}` : '1px solid #e2e8f0';
      const weight = isActive ? '800' : '600';
      const badge = isActive ? `<span style="font-size:0.65rem; background:${c.color}; color:#ffffff; padding:2px 6px; border-radius:4px; margin-left:8px; font-weight:800; text-transform:uppercase;">Dit BMI</span>` : '';

      html += `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.75rem; background: ${bg}; border: ${border}; border-radius: 8px;">
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
    const params = {
      gender,
      modelKey: modelSelect ? modelSelect.value : 'who'
    };

    ['height', 'weight', 'age'].forEach(key => {
      const el = container.querySelector(`.js-bmi-input[data-input="${key}"]`);
      params[key] = el ? parseFloat(el.value) || 0 : 0;
    });

    const evalResult = formula.evaluate(params);

    updateCriteriaView(evalResult, gender);

    if (!evalResult || !evalResult.isValid) {
      if (resMain) resMain.textContent = '0.0';
      if (resUnit) resUnit.textContent = 'kg/m²';
      if (resBadge) {
        resBadge.textContent = 'Indtast værdier';
        resBadge.style.backgroundColor = '#cbd5e1';
        resBadge.style.color = '#475569';
      }
      if (resPin) resPin.style.left = '0%';
      if (resText) resText.textContent = 'Indtast højder og vægt ovenfor for at få beregnet dit BMI.';
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
      if (resCardRight) resCardRight.style.borderColor = evalResult.color;
    }
  }

  // Event Listeners
  container.querySelectorAll('.js-gender-radio').forEach(r => r.addEventListener('change', calculate));
  container.querySelectorAll('.js-bmi-input').forEach(i => i.addEventListener('input', calculate));
  if (modelSelect) modelSelect.addEventListener('change', calculate);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('.js-bmi-input').forEach(i => i.value = '');
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
            clonedCard.querySelectorAll('#bmi-actions, button, .js-criteria-modal').forEach(el => el.style.display = 'none');
          }
        }).then(canvas => {
          const a = document.createElement('a');
          a.download = `bmi-rapport-${calcId}.png`;
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