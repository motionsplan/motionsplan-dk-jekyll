// assets/js/ui/vbt-ui.js
import { calculateVBTProfile, MVT_PRESETS, roundTo2Point5, DEFAULT_TARGET_PERCENTAGES } from '../core/vbt.js';

const STORAGE_KEY_STATE = 'vbt_calculator_state_v20';
const STORAGE_KEY_HISTORY = 'vbt_calculator_history_v20';

const DEFAULT_ATTEMPTS = [
  { id: 1, load: '', velocity: '' },
  { id: 2, load: '', velocity: '' },
  { id: 3, load: '', velocity: '' },
  { id: 4, load: '', velocity: '' },
  { id: 5, load: '', velocity: '' }
];

const DEFAULT_STATE = {
  sessionName: 'Bænkpres Profil',
  exercise: 'bench',
  customMVT: 0.15,
  isMvtUnlocked: false,
  attempts: DEFAULT_ATTEMPTS
};

export function initCalculator(container) {
  let state = loadState();
  let history = loadHistory();

  let activeTimerIdx = null;
  let timerInterval = null;
  let timerSecondsLeft = 120;

  const fullscreenBtn = container.querySelector('#vbt-fullscreen-btn');
  const sessionNameInput = container.querySelector('#vbt-session-name');
  const exerciseSelect = container.querySelector('#vbt-exercise');
  const mvtInput = container.querySelector('#vbt-mvt');
  const mvtLockBtn = container.querySelector('#vbt-mvt-lock-btn');
  const attemptsContainer = container.querySelector('#vbt-attempts-list');
  const addAttemptBtn = container.querySelector('#vbt-add-attempt-btn');
  const resetBtn = container.querySelector('#vbt-reset-btn');
  const saveProfileBtn = container.querySelector('#vbt-save-profile-btn');
  const historyListContainer = container.querySelector('#vbt-history-list');
  const clearHistoryBtn = container.querySelector('#vbt-clear-history-btn');

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(state));
    } catch (e) {
      console.warn('Kunne ikke gemme VBT tilstandsdata', e);
    }
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATE);
      if (!saved) return JSON.parse(JSON.stringify(DEFAULT_STATE));
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_STATE,
        ...parsed,
        attempts: Array.isArray(parsed.attempts) && parsed.attempts.length > 0
          ? parsed.attempts
          : JSON.parse(JSON.stringify(DEFAULT_ATTEMPTS))
      };
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
    } catch (e) {
      console.warn('Kunne ikke gemme historik', e);
    }
  }

  function loadHistory() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  function render() {
    if (sessionNameInput) sessionNameInput.value = state.sessionName || 'Bænkpres Profil';
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

    renderAttempts(currentMVT);
    updateResultsAndChart(currentMVT);
    renderHistory();
  }

  function renderAttempts(mvt) {
    if (!attemptsContainer) return;
    attemptsContainer.innerHTML = '';

    state.attempts.forEach((att, idx) => {
      const isWarmup = parseFloat(att.velocity) > 1.0;
      const tr = document.createElement('tr');
      tr.className = `vbt-attempt-row ${isWarmup ? 'vbt-row-warmup' : ''}`;
      
      tr.innerHTML = `
        <td class="vbt-col-num" style="text-align:center; font-weight:700; color:#64748b;">#${idx + 1}</td>
        <td>
          <input type="number" step="0.5" class="vbt-input-cell vbt-load-input" data-idx="${idx}" value="${att.load !== '' && att.load !== undefined ? att.load : ''}" placeholder="kg">
        </td>
        <td>
          <input type="number" step="0.01" class="vbt-input-cell vbt-vel-input" data-idx="${idx}" value="${att.velocity !== '' && att.velocity !== undefined ? att.velocity : ''}" placeholder="m/s">
        </td>
        <td style="text-align:center;">
          <button type="button" class="vbt-btn-delete-row vbt-del-btn" data-idx="${idx}" title="Slet række">🗑️</button>
        </td>
      `;
      attemptsContainer.appendChild(tr);

      // Inline timer (folder sig ud under rækken ved indtastning)
      const timerTr = document.createElement('tr');
      timerTr.id = `vbt-timer-row-${idx}`;
      timerTr.className = 'vbt-timer-row';
      timerTr.style.display = activeTimerIdx === idx ? 'table-row' : 'none';

      const m = Math.floor(timerSecondsLeft / 60);
      const s = timerSecondsLeft % 60;
      const timeStr = timerSecondsLeft <= 0 ? '💪 Klar til næste løft!' : `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

      timerTr.innerHTML = `
        <td colspan="4" style="padding: 0.35rem 0.6rem; background: #eff6ff; border-bottom: 1px solid #bfdbfe;">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; color:#1e40af; font-weight:700;">
            <span>⏱️ Pause til næste løft: <strong class="vbt-timer-count-${idx}" style="font-size:0.95rem; color:#1d4ed8;">${timeStr}</strong></span>
            <button type="button" class="vbt-btn-xs vbt-stop-timer-btn" data-idx="${idx}" style="border-color:#93c5fd;">Luk</button>
          </div>
        </td>
      `;
      attemptsContainer.appendChild(timerTr);
    });

    // Listeners for inputs
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

        // Automatisk opstart af pausetimer, når et gyldigt løft udfyldes
        if (val > 0 && state.attempts[idx].load > 0) {
          startInlineTimer(idx, 120);
        }
      });
    });

    attemptsContainer.querySelectorAll('.vbt-stop-timer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        stopInlineTimer();
      });
    });

    attemptsContainer.querySelectorAll('.vbt-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.idx, 10);
        if (activeTimerIdx === idx) stopInlineTimer();
        state.attempts.splice(idx, 1);
        saveState();
        render();
      });
    });
  }

  function startInlineTimer(rowIdx, seconds = 120) {
    clearInterval(timerInterval);
    activeTimerIdx = rowIdx;
    timerSecondsLeft = seconds;

    container.querySelectorAll('.vbt-timer-row').forEach(row => row.style.display = 'none');
    const targetRow = container.querySelector(`#vbt-timer-row-${rowIdx}`);
    if (targetRow) targetRow.style.display = 'table-row';

    const updateText = () => {
      const timerDisplay = container.querySelector(`.vbt-timer-count-${rowIdx}`);
      if (!timerDisplay) return;

      if (timerSecondsLeft <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = '💪 Klar til næste løft!';
      } else {
        const m = Math.floor(timerSecondsLeft / 60);
        const s = timerSecondsLeft % 60;
        timerDisplay.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
      }
    };

    updateText();
    timerInterval = setInterval(() => {
      timerSecondsLeft--;
      updateText();
    }, 1000);
  }

  function stopInlineTimer() {
    clearInterval(timerInterval);
    if (activeTimerIdx !== null) {
      const targetRow = container.querySelector(`#vbt-timer-row-${activeTimerIdx}`);
      if (targetRow) targetRow.style.display = 'none';
    }
    activeTimerIdx = null;
  }

  function updateResultsAndChart(mvt) {
    const res = calculateVBTProfile(state.attempts, mvt);

    const e1rmEl = container.querySelector('[data-result="e1rm"]');
    const r2El = container.querySelector('[data-result="r2"]');
    const guidanceBox = container.querySelector('#vbt-guidance-box');
    const overlayBox = container.querySelector('.vbt-chart-overlay-1rm');

    updateDynamicPlaceholders(res);

    if (!res.isValid) {
      if (e1rmEl) e1rmEl.textContent = '0';
      if (r2El) r2El.textContent = '0.00';
      if (overlayBox) overlayBox.style.opacity = '0.4';
      if (guidanceBox) {
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-info';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">Indtast <strong>mindst 2 forsøg</strong> for at beregne e1RM og oprette profil. Anbefalet mængde er <strong>5-6 forsøg</strong>.</div>
        `;
      }
      renderSvgChart([], mvt, 0, 0, 0);
      return;
    }

    if (overlayBox) overlayBox.style.opacity = '1';
    if (e1rmEl) e1rmEl.textContent = Math.round(res.e1RM);
    if (r2El) r2El.textContent = res.rSquared.toFixed(2);
    
    if (guidanceBox) {
      const count = res.validPointsCount;

      if (res.isCutoffReached) {
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-success';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">🎯</span>
          <div class="vbt-info-text">
            <strong>Cutoff nået!</strong> Hastighed er ≤ ${(res.cutoffThreshold).toFixed(2)} m/s (MVT + 0.20). Profilen er komplet.
          </div>
        `;
      } else if (count >= 5) {
        const rec6th = roundTo2Point5(res.e1RM * 0.95);
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-warning';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">
            Du har gennemført <strong>${count} forsøg</strong>. Tilføj evt. et 6. forsøg på <strong>ca. ${rec6th} kg</strong> (~95% e1RM) for at nå Cutoff.
          </div>
        `;
      } else {
        const nextKg = res.suggestedNextLoad > 0 ? `${res.suggestedNextLoad} kg` : 'næste vægt';
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-info';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">
            Gennemført <strong>${count} af 5-6 forsøg</strong>. Foreslået belastning til næste løft er <strong>${nextKg}</strong>.
          </div>
        `;
      }
    }

    renderSvgChart(res.processedPoints || [], mvt, res.slope, res.intercept, res.e1RM);
  }

  function updateDynamicPlaceholders(res) {
    if (!attemptsContainer) return;
    const inputs = attemptsContainer.querySelectorAll('.vbt-load-input');

    const enteredLoads = state.attempts
      .map(a => parseFloat(a.load))
      .filter(l => !isNaN(l) && l > 0);
    const maxEntered = enteredLoads.length > 0 ? Math.max(...enteredLoads) : 0;

    inputs.forEach((input, idx) => {
      if (state.attempts[idx] && (state.attempts[idx].load === '' || state.attempts[idx].load === undefined)) {
        const targetPct = DEFAULT_TARGET_PERCENTAGES[Math.min(idx, DEFAULT_TARGET_PERCENTAGES.length - 1)];

        if (res.isValid && res.e1RM > 0 && !res.isCutoffReached) {
          let recKg = roundTo2Point5(res.e1RM * targetPct);
          if (recKg <= maxEntered) {
            recKg = roundTo2Point5(maxEntered + 2.5);
          }
          input.placeholder = `fx ${recKg} kg (${Math.round(targetPct * 100)}%)`;
        } else {
          input.placeholder = `fx ${Math.round(targetPct * 100)}% 1RM`;
        }
      }
    });
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
      ? Math.max(e1RM * 1.08, ...points.map(p => p.load), 100) 
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
      const x1Val = 0;
      const y1Val = intercept;
      const x2Val = maxLoad;
      const y2Val = slope * maxLoad + intercept;

      const x1 = xScale(x1Val);
      const y1 = yScale(y1Val);
      const x2 = xScale(x2Val);
      const y2 = yScale(y2Val);

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

  function renderHistory() {
    if (!historyListContainer) return;
    historyListContainer.innerHTML = '';

    if (history.length === 0) {
      historyListContainer.innerHTML = `<div style="color:#94a3b8; font-size:0.85rem; padding:0.25rem 0;">Ingen gemte profiler i historikken endnu.</div>`;
      return;
    }

    history.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'vbt-history-row';
      div.innerHTML = `
        <div class="vbt-history-info">
          <span class="vbt-history-name-tag">${item.sessionName}</span>
          <span class="vbt-history-stats-tag">(${item.exerciseName}) | 📅 ${item.date} | <strong>e1RM: ${item.e1RM} kg</strong> | R²: ${item.rSquared} | MVT: ${item.mvt} m/s</span>
        </div>
        <div class="vbt-history-actions-inline">
          <button type="button" class="vbt-btn-xs vbt-load-history-btn" data-idx="${idx}">Gendan</button>
          <button type="button" class="vbt-btn-xs vbt-rename-history-btn" data-idx="${idx}">Omdøb</button>
          <button type="button" class="vbt-btn-xs vbt-btn-xs-danger vbt-delete-history-btn" data-idx="${idx}">Slet</button>
        </div>
      `;
      historyListContainer.appendChild(div);
    });

    historyListContainer.querySelectorAll('.vbt-load-history-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        const item = history[idx];
        if (item) {
          state.sessionName = item.sessionName;
          state.exercise = item.exercise;
          state.customMVT = item.mvt;
          state.attempts = JSON.parse(JSON.stringify(item.attempts));
          saveState();
          render();
        }
      });
    });

    historyListContainer.querySelectorAll('.vbt-rename-history-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        const newName = prompt('Omdøb gemt profil:', history[idx].sessionName);
        if (newName && newName.trim()) {
          history[idx].sessionName = newName.trim();
          saveHistory();
          renderHistory();
        }
      });
    });

    historyListContainer.querySelectorAll('.vbt-delete-history-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        history.splice(idx, 1);
        saveHistory();
        renderHistory();
      });
    });
  }

  // Global listeners
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      const card = container.closest('.mp-calc-card') || container;
      if (!document.fullscreenElement) {
        if (card.requestFullscreen) card.requestFullscreen();
        else if (card.webkitRequestFullscreen) card.webkitRequestFullscreen();
        card.classList.add('vbt-is-fullscreen');
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        card.classList.remove('vbt-is-fullscreen');
      }
    });
  }

  if (sessionNameInput) {
    sessionNameInput.addEventListener('input', (e) => {
      state.sessionName = e.target.value;
      saveState();
    });
  }

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
      const nextId = state.attempts.length + 1;
      state.attempts.push({ id: nextId, load: '', velocity: '' });
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
      if (confirm('Vil du nulstille testen og starte forfra med 5 tomme rækker?')) {
        stopInlineTimer();
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
        render();
      }
    });
  }

  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      const currentMVT = state.exercise === 'custom' 
        ? state.customMVT 
        : (MVT_PRESETS[state.exercise] ? MVT_PRESETS[state.exercise].mvt : 0.15);
      
      const res = calculateVBTProfile(state.attempts, currentMVT);

      if (!res.isValid) {
        saveProfileBtn.style.background = '#ef4444';
        saveProfileBtn.style.borderColor = '#dc2626';
        saveProfileBtn.innerHTML = '⚠️ Indtast min. 2 forsøg';
        setTimeout(() => {
          saveProfileBtn.style.background = '#16a34a';
          saveProfileBtn.style.borderColor = '#15803d';
          saveProfileBtn.innerHTML = '💾 Gem profil';
        }, 2200);
        return;
      }

      const exerciseObj = MVT_PRESETS[state.exercise];
      const exName = exerciseObj ? exerciseObj.name : 'Brugerdefineret';

      const historyItem = {
        id: Date.now(),
        date: new Date().toLocaleDateString('da-DK', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        sessionName: state.sessionName || `${exName} Profil`,
        exercise: state.exercise,
        exerciseName: exName,
        mvt: currentMVT,
        e1RM: Math.round(res.e1RM),
        rSquared: res.rSquared.toFixed(2),
        attempts: JSON.parse(JSON.stringify(state.attempts))
      };

      history.unshift(historyItem);
      saveHistory();
      renderHistory();

      saveProfileBtn.style.background = '#059669';
      saveProfileBtn.innerHTML = '✓ Profil gemt!';
      setTimeout(() => {
        saveProfileBtn.style.background = '#16a34a';
        saveProfileBtn.innerHTML = '💾 Gem profil';
      }, 2000);
    });
  }

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      if (confirm('Vil du slette alle gemte profiler i historikken?')) {
        history = [];
        saveHistory();
        renderHistory();
      }
    });
  }

  render();
}