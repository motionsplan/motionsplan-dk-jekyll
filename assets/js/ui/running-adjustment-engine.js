// assets/js/ui/running-adjustment-engine.js

export function initRunningAdjustmentEngine(container, calcId, formula) {
  if (!container || !formula) return;

  const STORAGE_KEY = `mp_ra_state_${calcId}`;

  // DOM Elements
  const resAgeTime = container.querySelector('.js-res-age-time');
  const resAgePct = container.querySelector('.js-res-age-pct');
  const resAgeBadge = container.querySelector('.js-res-age-badge');
  const resFlyerTime = container.querySelector('.js-res-flyer-time');
  const resTargetSpec = container.querySelector('.js-res-target-spec');
  const resFlyerBadge = container.querySelector('.js-res-flyer-badge');
  const resText = container.querySelector('.js-res-text');
  const resDisclaimer = container.querySelector('.js-res-disclaimer');

  // Info Modal Elements
  const wmaToggle = container.querySelector('.js-wma-info-toggle');
  const wmaBox = container.querySelector('.js-wma-info-box');
  const wmaCloses = container.querySelectorAll('.js-wma-info-close');

  const flyerToggle = container.querySelector('.js-flyer-info-toggle');
  const flyerBox = container.querySelector('.js-flyer-info-box');
  const flyerCloses = container.querySelectorAll('.js-flyer-info-close');

  // Action Buttons
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resDisclaimer && formula.disclaimer) {
    resDisclaimer.textContent = formula.disclaimer;
  }

  // Toggle Info Overlays
  if (wmaToggle && wmaBox) {
    wmaToggle.addEventListener('click', (e) => {
      e.preventDefault();
      wmaBox.style.opacity = '1';
      wmaBox.style.pointerEvents = 'auto';
    });
    wmaCloses.forEach(btn => btn.addEventListener('click', () => {
      wmaBox.style.opacity = '0';
      wmaBox.style.pointerEvents = 'none';
    }));
  }

  if (flyerToggle && flyerBox) {
    flyerToggle.addEventListener('click', (e) => {
      e.preventDefault();
      flyerBox.style.opacity = '1';
      flyerBox.style.pointerEvents = 'auto';
    });
    flyerCloses.forEach(btn => btn.addEventListener('click', () => {
      flyerBox.style.opacity = '0';
      flyerBox.style.pointerEvents = 'none';
    }));
  }

  function getGender() {
    const checked = container.querySelector('.js-gender-radio:checked');
    return checked ? checked.value : 'male';
  }

  function saveState() {
    let state = { gender: getGender() };
    ['distanceKey', 'hours', 'minutes', 'seconds', 'age', 'weight'].forEach(key => {
      const el = container.querySelector(`.js-ra-input[data-input="${key}"]`);
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

        ['distanceKey', 'hours', 'minutes', 'seconds', 'age', 'weight'].forEach(key => {
          const el = container.querySelector(`.js-ra-input[data-input="${key}"]`);
          if (el && state[key] !== undefined) el.value = state[key];
        });
      }
    } catch (e) {}
  }

  function calculate() {
    saveState();
    const gender = getGender();
    const params = { gender };

    ['distanceKey', 'hours', 'minutes', 'seconds', 'age', 'weight'].forEach(key => {
      const el = container.querySelector(`.js-ra-input[data-input="${key}"]`);
      if (key === 'distanceKey') {
        params[key] = el ? el.value : '10k';
      } else {
        params[key] = el ? parseFloat(el.value) || 0 : 0;
      }
    });

    const evalResult = formula.evaluate(params);

    if (!evalResult || !evalResult.isValid) {
      if (resAgeTime) resAgeTime.textContent = '00:00';
      if (resAgePct) resAgePct.textContent = '0.0';
      if (resFlyerTime) resFlyerTime.textContent = '00:00';
      if (resTargetSpec) resTargetSpec.textContent = gender === 'female' ? '50 kg / 25 år' : '65 kg / 25 år';
      if (resFlyerBadge) resFlyerBadge.textContent = '⚡ 00:00 (Korrektion)';
      if (resAgeBadge) {
        resAgeBadge.textContent = 'Indtast tid';
        resAgeBadge.style.backgroundColor = '#cbd5e1';
      }
      if (resText) resText.textContent = 'Indtast din tid, alder og vægt ovenfor for at få beregnet dine alders- og vægtkorrigerede løbetider.';
    } else {
      if (resAgeTime) resAgeTime.textContent = evalResult.ageAdjustedTimeFormatted;
      if (resAgePct) resAgePct.textContent = evalResult.agePerformancePct;
      if (resFlyerTime) resFlyerTime.textContent = evalResult.flyerAdjustedTimeFormatted;
      if (resTargetSpec) resTargetSpec.textContent = evalResult.targetSpec;
      if (resFlyerBadge) resFlyerBadge.textContent = `⚡ ${evalResult.flyerDiffFormatted} (Korrektion)`;

      if (resAgeBadge) {
        resAgeBadge.textContent = evalResult.agePerformanceLevel;
        resAgeBadge.style.backgroundColor = evalResult.agePerformanceColor;
      }

      if (resText) resText.innerHTML = evalResult.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }
  }

  // Listeners
  container.querySelectorAll('.js-gender-radio').forEach(r => r.addEventListener('change', calculate));
  container.querySelectorAll('.js-ra-input').forEach(i => i.addEventListener('input', calculate));

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      container.querySelectorAll('.js-ra-input').forEach(i => {
        if (i.dataset.input === 'distanceKey') i.value = '10k';
        else i.value = '';
      });
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
            clonedCard.querySelectorAll('#ra-actions, button').forEach(el => el.style.display = 'none');
          }
        }).then(canvas => {
          const a = document.createElement('a');
          a.download = `lobeperformance-rapport-${calcId}.png`;
          a.href = canvas.toDataURL('image/png');
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });
      };

      if (window.html2canvas) doExport();
      else {
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