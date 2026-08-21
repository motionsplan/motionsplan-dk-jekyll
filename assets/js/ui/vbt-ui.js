// assets/js/ui/vbt-ui.js
import { calculateVBTProfile, MVT_PRESETS } from '../core/vbt.js';

const STORAGE_KEY = 'vbt_calculator_state_v15';

// Store, skarpe SVG Vektorikoner
const SVG_SAVE_DISK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`;
const SVG_CHECK = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const SVG_CAMERA = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
const SVG_EDIT = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;

const DEFAULT_STATE = {
  exercise: 'bench',
  customMVT: 0.15,
  isMvtUnlocked: false,
  isFinished: false,
  attempts: [
    { id: 1, load: '', velocity: '' }
  ]
};

export function initCalculator(container) {
  let state = loadState();
  let timerInterval = null;
  let activeTimerRow = null;
  let timerTimeLeft = 120;

  const exerciseSelect = container.querySelector('#vbt-exercise');
  const mvtInput = container.querySelector('#vbt-mvt');
  const mvtLockBtn = container.querySelector('#vbt-mvt-lock-btn');
  const attemptsContainer = container.querySelector('#vbt-attempts-list');
  const addAttemptBtn = container.querySelector('#vbt-add-attempt-btn');
  const resetBtn = container.querySelector('#vbt-reset-btn');

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Kunne ikke gemme VBT data', e);
    }
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return JSON.parse(JSON.stringify(DEFAULT_STATE));
      
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_STATE,
        ...parsed,
        attempts: Array.isArray(parsed.attempts) && parsed.attempts.length > 0 
          ? parsed.attempts 
          : JSON.parse(JSON.stringify(DEFAULT_STATE.attempts))
      };
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }

  function render() {
    if (exerciseSelect) exerciseSelect.value = state.exercise;
    
    const currentMVT = state.exercise === 'custom' 
      ? state.customMVT 
      : (MVT_PRESETS[state.exercise] ? MVT_PRESETS[state.exercise].mvt : 0.15);

    if (mvtInput) {
      mvtInput.value = state.exercise === 'custom' ? state.customMVT : currentMVT;
      mvtInput.disabled = !state.isMvtUnlocked && state.exercise !== 'custom';
    }

    if (mvtLockBtn) {
      mvtLockBtn.textContent = state.isMvtUnlocked ? '🔓' : '🔒';
      mvtLockBtn.classList.toggle('unlocked', state.isMvtUnlocked);
    }

    if (addAttemptBtn) {
      addAttemptBtn.style.display = state.isFinished ? 'none' : 'inline-flex';
    }

    renderAttempts(currentMVT);
    updateResultsAndChart(currentMVT);
  }

  function renderAttempts(mvt) {
    if (!attemptsContainer) return;
    attemptsContainer.innerHTML = '';

    const res = calculateVBTProfile(state.attempts, mvt);

    state.attempts.forEach((att, idx) => {
      let loadPlaceholder = 'kg';
      if (res.isValid && res.suggestedNextLoad > 0 && !att.load && idx === state.attempts.length - 1) {
        loadPlaceholder = `fx ${res.suggestedNextLoad}`;
      }

      const isWarmup = parseFloat(att.velocity) > 1.0;
      const isDisabled = state.isFinished ? 'disabled' : '';

      const tr = document.createElement('tr');
      tr.className = `vbt-attempt-row ${isWarmup ? 'vbt-row-warmup' : ''}`;
      tr.innerHTML = `
        <td class="vbt-col-num">#${idx + 1}</td>
        <td>
          <input type="number" step="0.5" class="vbt-input-cell vbt-load-input" data-idx="${idx}" value="${att.load !== '' && att.load !== undefined ? att.load : ''}" placeholder="${loadPlaceholder}" ${isDisabled}>
        </td>
        <td>
          <input type="number" step="0.01" class="vbt-input-cell vbt-vel-input" data-idx="${idx}" value="${att.velocity !== '' && att.velocity !== undefined ? att.velocity : ''}" placeholder="m/s" ${isDisabled}>
        </td>
        <td class="vbt-col-action">
          <button type="button" class="vbt-save-diskette-btn" data-idx="${idx}" title="Gem & start pause" ${isDisabled}>
            ${SVG_SAVE_DISK}
          </button>
        </td>
      `;
      attemptsContainer.appendChild(tr);

      const timerTr = document.createElement('tr');
      timerTr.id = `vbt-timer-row-${idx}`;
      timerTr.className = 'vbt-timer-row';
      timerTr.style.display = activeTimerRow === idx ? 'table-row' : 'none';

      const m = Math.floor(timerTimeLeft / 60);
      const s = timerTimeLeft % 60;
      const initialTimerText = timerTimeLeft <= 0 ? 'Start næste forsøg! 💪' : `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

      timerTr.innerHTML = `
        <td colspan="4" style="padding:0;">
          <div class="vbt-inline-timer">
            <span>⏱️ Pause: <strong class="vbt-timer-count-${idx}">${initialTimerText}</strong></span>
            <button type="button" class="vbt-btn-timer-close vbt-stop-timer" data-idx="${idx}">Luk</button>
          </div>
        </td>
      `;
      attemptsContainer.appendChild(timerTr);
    });

    if (state.isFinished) return;

    attemptsContainer.querySelectorAll('.vbt-load-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        state.attempts[idx].load = e.target.value !== '' ? parseFloat(e.target.value) : '';
        saveState();
        updateResultsAndChart(mvt);
      });
    });

    attemptsContainer.querySelectorAll('.vbt-vel-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        const val = e.target.value !== '' ? parseFloat(e.target.value) : '';
        state.attempts[idx].velocity = val;
        saveState();
        updateResultsAndChart(mvt);
      });
    });

    attemptsContainer.querySelectorAll('.vbt-save-diskette-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.idx, 10);
        if (idx === state.attempts.length - 1 && (state.attempts[idx].load || state.attempts[idx].velocity)) {
          state.attempts.push({ id: state.attempts.length + 1, load: '', velocity: '' });
        }
        saveState();
        render();
        startInlineTimer(idx, 120);
      });
    });

    attemptsContainer.querySelectorAll('.vbt-stop-timer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.idx, 10);
        stopInlineTimer(idx);
      });
    });
  }

  function startInlineTimer(rowIdx, seconds = 120) {
    clearInterval(timerInterval);
    activeTimerRow = rowIdx;
    timerTimeLeft = seconds;

    container.querySelectorAll('.vbt-timer-row').forEach(row => row.style.display = 'none');
    const targetRow = container.querySelector(`#vbt-timer-row-${rowIdx}`);
    if (targetRow) targetRow.style.display = 'table-row';

    const updateText = () => {
      const timerDisplay = container.querySelector(`.vbt-timer-count-${rowIdx}`);
      if (!timerDisplay) return;

      if (timerTimeLeft <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Start næste forsøg! 💪';
      } else {
        const m = Math.floor(timerTimeLeft / 60);
        const s = timerTimeLeft % 60;
        timerDisplay.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
      }
    };

    updateText();
    timerInterval = setInterval(() => { timerTimeLeft--; updateText(); }, 1000);
  }

  function stopInlineTimer(rowIdx) {
    clearInterval(timerInterval);
    activeTimerRow = null;
    const targetRow = container.querySelector(`#vbt-timer-row-${rowIdx}`);
    if (targetRow) targetRow.style.display = 'none';
  }

  function updateResultsAndChart(mvt) {
    const res = calculateVBTProfile(state.attempts, mvt);

    const e1rmEl = container.querySelector('[data-result="e1rm"]');
    const r2El = container.querySelector('[data-result="r2"]');
    const guidanceBox = container.querySelector('#vbt-guidance-box');
    const overlayBox = container.querySelector('.vbt-chart-overlay-1rm');

    if (!res.isValid) {
      if (e1rmEl) e1rmEl.textContent = '0';
      if (r2El) r2El.textContent = '0.00';
      if (overlayBox) overlayBox.style.opacity = '0.4';
      if (guidanceBox) {
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-info';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">Indtast <strong>min. 2 forsøg</strong> for at oprette graf og beregne e1RM. Målet er <strong>5-6 forsøg</strong> for maksimal præcision.</div>
        `;
      }
      renderSvgChart([], mvt, 0, 0, 0);
      return;
    }

    if (overlayBox) overlayBox.style.opacity = '1';
    if (e1rmEl) e1rmEl.textContent = Math.round(res.e1RM);
    if (r2El) r2El.textContent = res.rSquared.toFixed(2);
    
    if (guidanceBox) {
      if (state.isFinished) {
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-success vbt-finished-layout';
        guidanceBox.innerHTML = `
          <div class="vbt-success-info">
            <span class="vbt-info-icon">🏆</span>
            <div class="vbt-info-text">
              <strong>Testen er gemt og afsluttet!</strong><br>
              Endeligt resultat: Estimeret 1RM er <strong>${Math.round(res.e1RM)} kg</strong> (R² = ${res.rSquared.toFixed(2)}).
            </div>
          </div>
          <div class="vbt-square-btn-group">
            <button type="button" class="vbt-btn-square vbt-btn-download" id="vbt-download-btn" title="Download fuld rapport som PNG">
              <span class="vbt-square-icon">${SVG_CAMERA}</span>
              <span class="vbt-square-text">Download</span>
            </button>
            <button type="button" class="vbt-btn-square vbt-btn-reopen" id="vbt-reopen-btn" title="Lås op og redigér">
              <span class="vbt-square-icon">${SVG_EDIT}</span>
              <span class="vbt-square-text">Redigér</span>
            </button>
          </div>
        `;
      } else if (res.isCutoffReached) {
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-success vbt-success-layout';
        guidanceBox.innerHTML = `
          <div class="vbt-success-info">
            <span class="vbt-info-icon">🎯</span>
            <div class="vbt-info-text">
              <strong>Cutoff nået!</strong> Hastighed er ≤ ${res.cutoffThreshold.toFixed(2)} m/s (MVT + 0.20). Testen er godkendt.
            </div>
          </div>
          <button type="button" class="vbt-btn-square vbt-btn-finish" id="vbt-finish-ok-btn" title="Gem og afslut test">
            <span class="vbt-square-icon">${SVG_CHECK}</span>
            <span class="vbt-square-text">Gem test</span>
          </button>
        `;
      } else {
        const count = res.validPointsCount;
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-warning';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">Du har gennemført <strong>${count} af 5-6 forsøg</strong>. Øg vægten til næste løft for at nå nærmere din MVT cutoff.</div>
        `;
      }
    }

    renderSvgChart(res.processedPoints || [], mvt, res.slope, res.intercept, res.e1RM);
  }

  function renderSvgChart(points, mvt, slope, intercept, e1RM) {
    const svgWrapper = container.querySelector('#vbt-svg-wrapper');
    if (!svgWrapper) return;

    const width = 650;
    const height = 340; 
    const padTop = 20;
    const padRight = 20;
    const padBottom = 45;
    const padLeft = 55;

    const maxLoad = points && points.length >= 2 
      ? Math.max(e1RM * 1.06, ...points.map(p => p.load), 100) 
      : 120;
    const maxVel = 1.30;

    const xScale = (load) => padLeft + (load / maxLoad) * (width - padLeft - padRight);
    const yScale = (vel) => height - padBottom - (vel / maxVel) * (height - padTop - padBottom);

    let svgHtml = `
      <svg viewBox="0 0 ${width} ${height}" class="vbt-svg-chart" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="${padLeft}" y1="${yScale(0.5)}" x2="${width - padRight}" y2="${yScale(0.5)}" stroke="#f1f5f9" stroke-width="1.5"/>
        <line x1="${padLeft}" y1="${yScale(1.0)}" x2="${width - padRight}" y2="${yScale(1.0)}" stroke="#f1f5f9" stroke-width="1.5"/>

        <line x1="${padLeft}" y1="${height - padBottom}" x2="${width - padRight}" y2="${height - padBottom}" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${height - padBottom}" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        
        <line x1="${padLeft}" y1="${yScale(mvt)}" x2="${width - padRight}" y2="${yScale(mvt)}" stroke="#ef4444" stroke-dasharray="4 4" stroke-width="1.5"/>
        <text x="${padLeft + 8}" y="${yScale(mvt) - 8}" font-size="11" font-family="inherit" font-weight="700" fill="#ef4444" text-anchor="start">MVT (${mvt} m/s)</text>
    `;

    if (points && points.length >= 2) {
      const zeroSpeedX = slope < 0 ? Math.min(maxLoad, -intercept / slope) : maxLoad;
      const x1 = xScale(0);
      const y1 = yScale(intercept);
      const x2 = xScale(zeroSpeedX);
      const y2 = yScale(0);

      svgHtml += `
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>

        ${points.map(p => {
          const isWarmup = p.isWarmup;
          const fillColor = isWarmup ? '#e2e8f0' : '#2563eb';
          const strokeColor = isWarmup ? '#94a3b8' : '#ffffff';
          const r = isWarmup ? 5.5 : 7;
          return `<circle cx="${xScale(p.load)}" cy="${yScale(p.velocity)}" r="${r}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>`;
        }).join('')}

        <circle cx="${xScale(e1RM)}" cy="${yScale(mvt)}" r="8" fill="#16a34a" stroke="#ffffff" stroke-width="2.5"/>
      `;
    } else if (points && points.length === 1) {
      const p = points[0];
      const fillColor = p.isWarmup ? '#e2e8f0' : '#2563eb';
      svgHtml += `
        <circle cx="${xScale(p.load)}" cy="${yScale(p.velocity)}" r="7" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
      `;
    } else {
      svgHtml += `
        <text x="${width/2}" y="${height/2}" font-size="14" font-family="inherit" fill="#94a3b8" text-anchor="middle">Indtast forsøg for at vise profilgrafen.</text>
      `;
    }

    svgHtml += `
        <text x="${(width + padLeft - padRight) / 2}" y="${height - 10}" font-size="12" font-family="inherit" fill="#475569" font-weight="700" text-anchor="middle">Vægt (kg)</text>
        <text x="16" y="${(height + padTop - padBottom) / 2}" font-size="12" font-family="inherit" fill="#475569" font-weight="700" text-anchor="middle" transform="rotate(-90 16 ${(height + padTop - padBottom) / 2})">Hastighed (m/s)</text>
      </svg>
    `;

    svgWrapper.innerHTML = svgHtml;
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
          const clonedCard = clonedDoc.querySelector('.mp-calc-card') || clonedDoc.querySelector('.vbt-container');
          if (!clonedCard) return;

          clonedCard.querySelectorAll('.vbt-action-bar, .vbt-square-btn-group, .vbt-save-diskette-btn, .vbt-lock-inside-btn, .vbt-timer-row').forEach(el => {
            el.style.display = 'none';
          });

          clonedCard.querySelectorAll('.vbt-table th:last-child, .vbt-table td:last-child').forEach(el => {
            el.style.display = 'none';
          });

          clonedCard.querySelectorAll('.vbt-input-cell, .vbt-input-mega').forEach(input => {
            input.style.border = 'none';
            input.style.background = 'transparent';
            input.style.boxShadow = 'none';
            input.style.color = '#0f172a';
            input.style.fontWeight = '800';
            
            if (input.tagName === 'SELECT') {
              input.style.appearance = 'none';
              input.style.backgroundImage = 'none';
              input.style.paddingRight = '0';
            }
          });

          clonedCard.style.padding = '1.5rem';
          clonedCard.style.borderRadius = '16px';
          clonedCard.style.boxShadow = 'none';
          clonedCard.style.border = '2px solid #e2e8f0';
        }
      }).then(canvas => {
        const imageUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const e1rmVal = container.querySelector('[data-result="e1rm"]')?.textContent || '0';
        
        link.download = `VBT-1RM-Profil-${e1rmVal}kg.png`;
        link.href = imageUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch(err => {
        console.error('Fejl ved generering af billede:', err);
        alert('Der opstod en fejl under oprettelse af billedet. Prøv venligst igen.');
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

  container.addEventListener('click', (e) => {
    if (e.target.closest('#vbt-finish-ok-btn')) {
      state.isFinished = true;
      stopInlineTimer(activeTimerRow);
      saveState();
      render();
    } else if (e.target.closest('#vbt-reopen-btn')) {
      state.isFinished = false;
      saveState();
      render();
    } else if (e.target.closest('#vbt-download-btn')) {
      downloadCardAsImage();
    }
  });

  if (mvtLockBtn && mvtInput) {
    mvtLockBtn.addEventListener('click', () => {
      state.isMvtUnlocked = !state.isMvtUnlocked;
      saveState();
      render();
      if (state.isMvtUnlocked && mvtInput) mvtInput.focus();
    });
  }

  if (addAttemptBtn) {
    addAttemptBtn.addEventListener('click', () => {
      state.attempts.push({ id: state.attempts.length + 1, load: '', velocity: '' });
      saveState();
      render();
    });
  }

  if (exerciseSelect) {
    exerciseSelect.addEventListener('change', (e) => {
      state.exercise = e.target.value;
      if (state.exercise !== 'custom') {
        state.customMVT = MVT_PRESETS[state.exercise] ? MVT_PRESETS[state.exercise].mvt : 0.15;
        state.isMvtUnlocked = false;
      }
      saveState();
      render();
    });
  }

  if (mvtInput) {
    mvtInput.addEventListener('input', (e) => {
      state.customMVT = parseFloat(e.target.value) || 0.15;
      saveState();
      render();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du nulstille testen og starte forfra?')) {
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
        render();
      }
    });
  }

  render();
}