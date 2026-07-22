// assets/js/ui/running-performance-ui.js
import { RUNNING_PERFORMANCE_FORMULAS } from '../core/running-performance-health.js';

const ZONE_DESCRIPTIONS = {
  E: {
    title: '🟢 Jog / Rolig (E - Easy Pace)',
    badgeColor: '#15803d',
    content: `
      <p style="margin-top:0; margin-bottom:0.6rem;"><strong>Formål:</strong> Opbygger din aerobe base, øger hjertets slagvolumen, forbedrer kapillærtætheden i musklerne og fremmer hurtig restitution.</p>
      <p style="margin-bottom:0.6rem;"><strong>Intensitet:</strong> Ca. 65–79% af maxpuls (%HRmax) eller 59–74% af VO₂max. Tempoet skal føles helt uanstrengt, hvor du nemt kan føre en uafbrudt samtale.</p>
      <p style="margin-bottom:0;"><strong>I dit træningsprogram:</strong> Bør udgøre hovedparten (ca. 70–80%) af din samlede ugentlige løbemængde. Bruges til opvarmning, afjog, restitutionsture og lange weekendture.</p>
    `
  },
  M: {
    title: '🟡 Maraton (M - Marathon Pace)',
    badgeColor: '#a16207',
    content: `
      <p style="margin-top:0; margin-bottom:0.6rem;"><strong>Formål:</strong> Vænner kroppen og hovedet til den specifikke belastning og tempo ved maratonløb. Optimerer fedtforbrændingen ved højere hastighed.</p>
      <p style="margin-bottom:0.6rem;"><strong>Intensitet:</strong> Ca. 80–90% af maxpuls (%HRmax) eller 75–84% af VO₂max. Føles kontrolleret, men kræver koncentration over længere tid.</p>
      <p style="margin-bottom:0;"><strong>I dit træningsprogram:</strong> Indlægges i de lange ture i ugerne op til et maraton (f.eks. 2 x 5 km eller 10–16 km kontinuerligt i M-tempo). Bør max udgøre 25% af ugemængden.</p>
    `
  },
  T: {
    title: '🟠 Tempo / Tærskel (T - Threshold Pace)',
    badgeColor: '#c2410c',
    content: `
      <p style="margin-top:0; margin-bottom:0.6rem;"><strong>Formål:</strong> Flytter din laktattærskel (syregrænse). Lærer kroppen at fjerne mælkesyre i musklerne i samme tempo, som den produceres.</p>
      <p style="margin-bottom:0.6rem;"><strong>Intensitet:</strong> Ca. 88–92% af maxpuls (%HRmax) eller 83–88% af VO₂max. Det svarer til det tempo, du maksimalt ville kunne holde i ca. 60 minutter i en konkurrence ("komfortabelt hårdt").</p>
      <p style="margin-bottom:0;"><strong>I dit træningsprogram:</strong> Kører ofte som 20 minutters uafbrudt tempoløb eller tærskel-intervaller (f.eks. 5 x 6 min med 1 min pause). Max 10% af ugemængden.</p>
    `
  },
  I: {
    title: '🔴 Interval (I - Interval Pace)',
    badgeColor: '#b91c1c',
    content: `
      <p style="margin-top:0; margin-bottom:0.6rem;"><strong>Formål:</strong> Maksimerer din iltoptagelse (VO₂max). Øger hjertets pumpekapacitet og forbedrer din evne til at arbejde ved høj iltgæld.</p>
      <p style="margin-bottom:0.6rem;"><strong>Intensitet:</strong> Ca. 98–100% af maxpuls (%HRmax) eller 95–100% af VO₂max. Meget hårdt tempo, hvor du kun kan sige enkelte ord.</p>
      <p style="margin-bottom:0;"><strong>I dit træningsprogram:</strong> Korte til mellemlange intervaller på 3–5 minutters varighed (f.eks. 5 x 3 minutter med 2–3 minutters joggepause). Max 8% af ugemængden.</p>
    `
  },
  R: {
    title: '🟣 Repetition (R - Repetition Pace)',
    badgeColor: '#6d28d9',
    content: `
      <p style="margin-top:0; margin-bottom:0.6rem;"><strong>Formål:</strong> Forbedrer din løbeøkonomi, neuromuskulære koordinering, skridtlængde og kropsholdning ved topfart.</p>
      <p style="margin-bottom:0.6rem;"><strong>Intensitet:</strong> Hurtigere end VO₂max-tempo (svarer ca. til dit 1500m konkurrencetempo). Fysisk hurtigt, men ikke udmattende for kredsløbet, da pauserne er lange.</p>
      <p style="margin-bottom:0;"><strong>I dit træningsprogram:</strong> Korte, eksplosive ryk (f.eks. 10 x 200m eller 8 x 400m) med lange gå/joggepauser til fuld restitution mellem hvert ryk. Max 5% af ugemængden.</p>
    `
  }
};

function formatTime(totalSecs) {
  if (!totalSecs || isNaN(totalSecs) || totalSecs <= 0) return '-';
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  let s = Math.round(totalSecs % 60);

  let finalM = m;
  let finalH = h;

  if (s === 60) {
    s = 0;
    finalM += 1;
  }
  if (finalM === 60) {
    finalM = 0;
    finalH += 1;
  }

  const sStr = s < 10 ? '0' + s : s;
  const mStr = finalM < 10 ? '0' + finalM : finalM;

  if (finalH > 0) {
    return `${finalH}:${mStr}:${sStr}`;
  }
  return `${finalM}:${sStr}`;
}

function formatPace(totalSecsPerKm) {
  if (!totalSecsPerKm || isNaN(totalSecsPerKm) || totalSecsPerKm <= 0) return '-';
  let m = Math.floor(totalSecsPerKm / 60);
  let s = Math.round(totalSecsPerKm % 60);

  if (s === 60) {
    m += 1;
    s = 0;
  }
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function formatDiff(secDiff) {
  if (isNaN(secDiff) || secDiff === 0) return '0:00';
  const absDiff = Math.abs(secDiff);
  const formatted = formatTime(absDiff);
  return secDiff > 0 ? `+${formatted}` : `-${formatted}`;
}

export function initRunningPerformanceUI(container) {
  if (!container) return;

  const distSelect = container.querySelector('[data-input="distanceKey"]');
  const hoursInput = container.querySelector('[data-input="hours"]');
  const minutesInput = container.querySelector('[data-input="minutes"]');
  const secondsInput = container.querySelector('[data-input="seconds"]');
  const riegelToggle = container.querySelector('.js-riegel-toggle');

  const resVdot = container.querySelector('.js-res-vdot');
  const resText = container.querySelector('.js-res-text');

  const distances = ['5k', '10k', 'half', 'marathon'];
  const tableElements = {};
  distances.forEach(d => {
    tableElements[d] = {
      daniels: container.querySelector(`.js-res-${d}-daniels`),
      pace: container.querySelector(`.js-res-${d}-pace`),
      riegel: container.querySelector(`.js-res-${d}-riegel`),
      diff: container.querySelector(`.js-res-${d}-diff`)
    };
  });

  const paceElements = {
    E: container.querySelector('.js-res-pace-e'),
    M: container.querySelector('.js-res-pace-m'),
    T: container.querySelector('.js-res-pace-t'),
    I: container.querySelector('.js-res-pace-i'),
    R: container.querySelector('.js-res-pace-r')
  };

  const zoneCards = container.querySelectorAll('.js-zone-card');
  const overlay = container.querySelector('.js-zone-detail-overlay');
  const overlayTitle = container.querySelector('.js-zone-detail-title');
  const overlayBody = container.querySelector('.js-zone-detail-body');
  const overlayClose = container.querySelector('.js-zone-detail-close');

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  function saveState() {
    try {
      const state = {
        distanceKey: distSelect ? distSelect.value : '10k',
        hours: hoursInput ? hoursInput.value : '',
        minutes: minutesInput ? minutesInput.value : '',
        seconds: secondsInput ? secondsInput.value : '',
        showRiegel: riegelToggle ? riegelToggle.checked : false
      };
      localStorage.setItem('mp_rp_state', JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem('mp_rp_state');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.distanceKey && distSelect) distSelect.value = state.distanceKey;
        if (state.hours !== undefined && hoursInput) hoursInput.value = state.hours;
        if (state.minutes !== undefined && minutesInput) minutesInput.value = state.minutes;
        if (state.seconds !== undefined && secondsInput) secondsInput.value = state.seconds;
        if (state.showRiegel !== undefined && riegelToggle) {
          riegelToggle.checked = state.showRiegel;
          toggleRiegelClass(state.showRiegel);
        }
      }
    } catch (e) {}
  }

  function toggleRiegelClass(show) {
    if (show) {
      container.classList.add('show-riegel');
    } else {
      container.classList.remove('show-riegel');
    }
  }

  function calculate() {
    const distKey = distSelect ? distSelect.value : '10k';
    const hrs = parseFloat(hoursInput ? hoursInput.value : 0) || 0;
    const mins = parseFloat(minutesInput ? minutesInput.value : 0) || 0;
    const secs = parseFloat(secondsInput ? secondsInput.value : 0) || 0;

    const totalSeconds = (hrs * 3600) + (mins * 60) + secs;

    const formulaEngine = RUNNING_PERFORMANCE_FORMULAS['running-performance-all'];

    if (totalSeconds > 0 && formulaEngine) {
      const evalFn = formulaEngine.evaluate || formulaEngine.calculate;
      const res = evalFn ? evalFn.call(formulaEngine, {
        distanceKey: distKey,
        hours: hrs,
        minutes: mins,
        seconds: secs
      }) : null;

      if (res && res.isValid) {
        if (resVdot) resVdot.textContent = res.vdotFormatted || res.vdot.toFixed(1);

        if (resText) {
          resText.innerHTML = `Baseret på din tid på <strong>${res.distanceLabel}</strong> (${formatTime(totalSeconds)}) er din VDOT estimeret til <strong>${res.vdotFormatted || res.vdot.toFixed(1)}</strong>. Nedenfor ser du dine forventede tider og anbefalede træningstempi.`;
        }

        distances.forEach(d => {
          const els = tableElements[d];
          const dData = res.predictions ? res.predictions[d] : null;

          if (els && dData) {
            if (els.daniels) els.daniels.textContent = formatTime(dData.danielsTime);
            if (els.pace) els.pace.textContent = formatPace(dData.danielsPaceSec);
            if (els.riegel) els.riegel.textContent = formatTime(dData.riegelTime);
            if (els.diff) els.diff.textContent = formatDiff(dData.diffSec);
          }
        });

        if (res.trainingPaces) {
          const tp = res.trainingPaces;
          if (paceElements.E) {
            paceElements.E.textContent = `${formatPace(tp.eLow)} - ${formatPace(tp.eHigh)}`;
          }
          if (paceElements.M) {
            paceElements.M.textContent = formatPace(tp.m);
          }
          if (paceElements.T) {
            paceElements.T.textContent = formatPace(tp.t);
          }
          if (paceElements.I) {
            paceElements.I.textContent = formatPace(tp.i);
          }
          if (paceElements.R) {
            paceElements.R.textContent = formatPace(tp.r);
          }
        }

        return;
      }
    }

    resetResults();
  }

  function resetResults() {
    if (resVdot) resVdot.textContent = '-';
    if (resText) {
      resText.textContent = 'Indtast din opnåede tid ovenfor for at få beregnet din VDOT-score, forventede sluttider samt anbefalede træningstempi.';
    }

    distances.forEach(d => {
      const els = tableElements[d];
      if (els) {
        if (els.daniels) els.daniels.textContent = '-';
        if (els.pace) els.pace.textContent = '-';
        if (els.riegel) els.riegel.textContent = '-';
        if (els.diff) els.diff.textContent = '-';
      }
    });

    Object.keys(paceElements).forEach(k => {
      if (paceElements[k]) paceElements[k].textContent = '-';
    });
  }

  const allInputs = container.querySelectorAll('.js-rp-input');
  allInputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(eventType => {
      input.addEventListener(eventType, () => {
        saveState();
        calculate();
      });
    });
  });

  if (riegelToggle) {
    riegelToggle.addEventListener('change', () => {
      toggleRiegelClass(riegelToggle.checked);
      saveState();
    });
  }

  if (zoneCards && overlay && overlayTitle && overlayBody && overlayClose) {
    zoneCards.forEach(card => {
      card.addEventListener('click', () => {
        const zoneKey = card.getAttribute('data-zone');
        const info = ZONE_DESCRIPTIONS[zoneKey];

        if (info) {
          overlayTitle.textContent = info.title;
          overlayTitle.style.color = info.badgeColor;
          overlayBody.innerHTML = info.content;
          overlay.style.display = 'flex';
        }
      });
    });

    overlayClose.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (distSelect) distSelect.value = '10k';
      if (hoursInput) hoursInput.value = '';
      if (minutesInput) minutesInput.value = '';
      if (secondsInput) secondsInput.value = '';
      if (riegelToggle) {
        riegelToggle.checked = false;
        toggleRiegelClass(false);
      }
      if (overlay) overlay.style.display = 'none';

      try {
        localStorage.removeItem('mp_rp_state');
      } catch (e) {}
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (overlay) overlay.style.display = 'none';

      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'vdot-lobeberegner-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  loadState();
  calculate();
}

export const initCalculator = initRunningPerformanceUI;