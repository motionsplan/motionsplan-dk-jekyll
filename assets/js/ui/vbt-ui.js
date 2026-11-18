// assets/js/ui/vbt-ui.js
import { calculateVBTProfile, MVT_PRESETS, roundTo2Point5, DEFAULT_TARGET_PERCENTAGES } from '../core/vbt.js';

const STORAGE_KEY_STATE = 'vbt_calculator_state_v21';
const STORAGE_KEY_HISTORY = 'vbt_calculator_history_v21';

const DEFAULT_ATTEMPTS = [
  { id: 1, load: '', velocity: '' },
  { id: 2, load: '', velocity: '' },
  { id: 3, load: '', velocity: '' },
  { id: 4, load: '', velocity: '' },
  { id: 5, load: '', velocity: '' }
];

const DEFAULT_STATE = {
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
  let timerDebounce = null;
  let timerSecondsLeft = 120;

  const fullscreenBtn = container.querySelector('#vbt-fullscreen-btn');
  const fullscreenIcon = container.querySelector('#vbt-fullscreen-icon');
  const exerciseSelect = container.querySelector('#vbt-exercise');
  const mvtInput = container.querySelector('#vbt-mvt');
  const mvtLockBtn = container.querySelector('#vbt-mvt-lock-btn');
  const attemptsContainer = container.querySelector('#vbt-attempts-list');
  const addAttemptBtn = container.querySelector('#vbt-add-attempt-btn');
  const resetBtn = container.querySelector('#vbt-reset-btn');
  const saveProfileBtn = container.querySelector('#vbt-save-profile-btn');
  const exportImgBtn = container.querySelector('#vbt-export-img-btn');
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

  function getActiveMVT() {
    if (state.isMvtUnlocked || state.exercise === 'custom') {
      return parseFloat(state.customMVT) || 0.15;
    }
    return MVT_PRESETS[state.exercise] ? MVT_PRESETS[state.exercise].mvt : 0.15;
  }

  function render() {
    if (exerciseSelect) exerciseSelect.value = state.exercise;

    const currentMVT = getActiveMVT();

    if (mvtInput) {
      mvtInput.value = currentMVT;
      mvtInput.disabled = !state.isMvtUnlocked && state.exercise !== 'custom';
    }

    if (mvtLockBtn) {
      mvtLockBtn.textContent = (state.isMvtUnlocked || state.exercise === 'custom') ? '🔓' : '🔒';
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
          <input type="number" step="0.5" class="vbt-input-cell vbt-no-spin vbt-load-input" data-idx="${idx}" value="${att.load !== '' && att.load !== undefined ? att.load : ''}" placeholder="kg">
        </td>
        <td>
          <input type="number" step="0.01" class="vbt-input-cell vbt-no-spin vbt-vel-input" data-idx="${idx}" value="${att.velocity !== '' && att.velocity !== undefined ? att.velocity : ''}" placeholder="m/s">
        </td>
        <td style="text-align:center;">
          <button type="button" class="vbt-btn-delete-row vbt-del-btn" data-idx="${idx}" title="Slet række">🗑️</button>
        </td>
      `;
      attemptsContainer.appendChild(tr);

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
            <span>⏱️ Pause: <strong class="vbt-timer-count-${idx}" style="font-size:0.95rem; color:#1d4ed8;">${timeStr}</strong></span>
            <button type="button" class="vbt-btn-xs vbt-stop-timer-btn" data-idx="${idx}" style="border-color:#93c5fd;">Luk</button>
          </div>
        </td>
      `;
      attemptsContainer.appendChild(timerTr);
    });

    attemptsContainer.querySelectorAll('.vbt-load-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        state.attempts[idx].load = e.target.value !== '' ? parseFloat(e.target.value) : '';
        saveState();
        updateResultsAndChart(getActiveMVT());
      });
    });

    attemptsContainer.querySelectorAll('.vbt-vel-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        const val = e.target.value !== '' ? parseFloat(e.target.value) : '';
        state.attempts[idx].velocity = val;
        saveState();
        updateResultsAndChart(getActiveMVT());

        clearTimeout(timerDebounce);
        if (val > 0 && state.attempts[idx].load > 0) {
          const lastFilledIdx = state.attempts.reduce((last, a, i) => (a.load > 0 && a.velocity > 0 ? i : last), -1);
          if (idx === lastFilledIdx) {
            timerDebounce = setTimeout(() => {
              startInlineTimer(idx, 120);
            }, 900);
          }
        }
      });
    });

    attemptsContainer.querySelectorAll('.vbt-stop-timer-btn').forEach(btn => {
      btn.addEventListener('click', () => stopInlineTimer());
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
    clearTimeout(timerDebounce);
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
      if (r2El) r2El.textContent = '—';
      if (overlayBox) overlayBox.style.opacity = '0.4';
      if (guidanceBox) {
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-info';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">Indtast <strong>mindst 2 forsøg</strong> for at beregne e1RM. Anbefalet mængde er <strong>5 forsøg</strong>.</div>
        `;
      }
      renderSvgChart([], mvt, 0, 0, 0);
      return;
    }

    if (!res.hasNegativeSlope) {
      if (e1rmEl) e1rmEl.textContent = '—';
      if (r2El) r2El.textContent = '—';
      if (overlayBox) overlayBox.style.opacity = '0.6';
      if (guidanceBox) {
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-warning';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">⚠️</span>
          <div class="vbt-info-text">
            Hastigheden faldt ikke på seneste løft. Øg vægten til ca. <strong>${res.suggestedNextLoad} kg</strong> og løft med maksimal eksplosiv kraft.
          </div>
        `;
      }
      renderSvgChart(res.processedPoints || [], mvt, 0, 0, 0);
      return;
    }

    if (overlayBox) overlayBox.style.opacity = '1';
    if (e1rmEl) e1rmEl.textContent = Math.round(res.e1RM);
    if (r2El) {
      r2El.textContent = res.rSquared !== null ? res.rSquared.toFixed(2) : '— (2 forsøg)';
    }
    
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
        const nextKg = res.suggestedNextLoad > 0 ? `${res.suggestedNextLoad} kg` : 'en lidt tungere vægt';
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-warning';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">
            Du har gennemført <strong>${count} forsøg</strong>. Tag evt. et sidste løft på <strong>ca. ${nextKg}</strong> for at nå Cutoff.
          </div>
        `;
      } else {
        const nextKg = res.suggestedNextLoad > 0 ? `${res.suggestedNextLoad} kg` : 'næste vægt';
        const prelimNote = count === 2 ? ' <span style="opacity:0.8;">(foreløbigt estimat)</span>' : '';
        guidanceBox.className = 'vbt-guidance-premium mp-guidance-info';
        guidanceBox.innerHTML = `
          <span class="vbt-info-icon">💡</span>
          <div class="vbt-info-text">
            Gennemført <strong>${count} af 5 forsøg</strong>${prelimNote}. Foreslået belastning til næste løft: <strong>${nextKg}</strong>.
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
    let prevSuggestedKg = enteredLoads.length > 0 ? Math.max(...enteredLoads) : 0;
    let firstEmptyAssigned = false;

    inputs.forEach((input, idx) => {
      if (state.attempts[idx] && (state.attempts[idx].load === '' || state.attempts[idx].load === undefined)) {
        const targetPct = DEFAULT_TARGET_PERCENTAGES[Math.min(idx, DEFAULT_TARGET_PERCENTAGES.length - 1)];

        if (res.isValid && res.suggestedNextLoad > 0 && !res.isCutoffReached && !firstEmptyAssigned) {
          firstEmptyAssigned = true;
          prevSuggestedKg = res.suggestedNextLoad;
          const pctLabel = res.e1RM > 0 ? ` (~${Math.round((res.suggestedNextLoad / res.e1RM) * 100)}%)` : '';
          input.placeholder = `fx ${res.suggestedNextLoad} kg${pctLabel}`;
        } else if (res.isValid && res.e1RM > 0 && !res.isCutoffReached) {
          let recKg = roundTo2Point5(res.e1RM * targetPct);
          if (recKg <= prevSuggestedKg) {
            recKg = roundTo2Point5(prevSuggestedKg + 2.5);
          }
          prevSuggestedKg = recKg;
          input.placeholder = `fx ${recKg} kg (${Math.round(targetPct * 100)}%)`;
        } else {
          input.placeholder = `fx ${Math.round(targetPct * 100)}% 1RM`;
        }
      }
    });
  }

  function getChartBounds(points, mvt, e1RM) {
    const rawMaxLoad = points && points.length > 0
      ? Math.max(e1RM > 0 ? e1RM * 1.08 : 0, ...points.map(p => p.load * 1.15), 80)
      : 120;
    const maxLoad = Math.ceil(rawMaxLoad / 20) * 20;

    const highestVel = points && points.length > 0 ? Math.max(...points.map(p => p.velocity)) : 1.0;
    const rawMaxVel = Math.max(1.25, mvt + 0.4, highestVel * 1.12);
    const maxVel = Math.ceil(rawMaxVel * 5) / 5;

    return { maxLoad, maxVel };
  }

  // Eksakt klipning af regressionslinjen til grafboksens kanter
  function getClippedLineEndpoints(slope, intercept, maxLoad, maxVel) {
    const xStart = intercept > maxVel ? Math.max(0, (maxVel - intercept) / slope) : 0;
    const yStart = Math.min(maxVel, intercept);
    const xAtZero = -intercept / slope;
    const xEnd = xAtZero <= maxLoad ? xAtZero : maxLoad;
    const yEnd = xAtZero <= maxLoad ? 0 : Math.max(0, slope * maxLoad + intercept);
    return { xStart, yStart, xEnd, yEnd };
  }

  function renderSvgChart(points, mvt, slope, intercept, e1RM) {
    const svgWrapper = container.querySelector('#vbt-svg-wrapper');
    if (!svgWrapper) return;

    const width = 600;
    const height = 320; 
    const padTop = 24;
    const padRight = 26;
    const padBottom = 46;
    const padLeft = 52;

    const { maxLoad, maxVel } = getChartBounds(points, mvt, e1RM);

    const xScale = (load) => padLeft + (load / maxLoad) * (width - padLeft - padRight);
    const yScale = (vel) => height - padBottom - (vel / maxVel) * (height - padTop - padBottom);

    const yTicks = [];
    for (let v = 0.2; v <= maxVel + 0.001; v += 0.2) {
      yTicks.push(Number(v.toFixed(1)));
    }

    const xStep = maxLoad <= 120 ? 20 : (maxLoad <= 240 ? 40 : 50);
    const xTicks = [];
    for (let kg = xStep; kg <= maxLoad; kg += xStep) {
      xTicks.push(kg);
    }

    let svgHtml = `
      <svg viewBox="0 0 ${width} ${height}" class="vbt-svg-chart" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        ${yTicks.map(v => `
          <line x1="${padLeft}" y1="${yScale(v)}" x2="${width - padRight}" y2="${yScale(v)}" stroke="#f1f5f9" stroke-width="1.5"/>
          <text x="${padLeft - 8}" y="${yScale(v) + 4}" font-size="11" font-family="inherit" fill="#64748b" text-anchor="end">${v.toFixed(1)}</text>
        `).join('')}

        ${xTicks.map(kg => `
          <line x1="${xScale(kg)}" y1="${padTop}" x2="${xScale(kg)}" y2="${height - padBottom}" stroke="#f8fafc" stroke-width="1.5"/>
          <text x="${xScale(kg)}" y="${height - padBottom + 16}" font-size="11" font-family="inherit" fill="#64748b" text-anchor="middle">${kg}</text>
        `).join('')}

        <!-- Hovedakser -->
        <line x1="${padLeft}" y1="${height - padBottom}" x2="${width - padRight}" y2="${height - padBottom}" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${height - padBottom}" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        
        <!-- MVT Linje -->
        <line x1="${padLeft}" y1="${yScale(mvt)}" x2="${width - padRight}" y2="${yScale(mvt)}" stroke="#ef4444" stroke-dasharray="5 4" stroke-width="1.5"/>
        <text x="${padLeft + 8}" y="${yScale(mvt) - 7}" font-size="11" font-family="inherit" font-weight="700" fill="#ef4444" text-anchor="start">MVT (${mvt.toFixed(2)} m/s)</text>
    `;

    if (points && points.length >= 2) {
      if (slope < 0 && e1RM > 0) {
        const { xStart, yStart, xEnd, yEnd } = getClippedLineEndpoints(slope, intercept, maxLoad, maxVel);
        svgHtml += `
          <line x1="${xScale(xStart)}" y1="${yScale(yStart)}" x2="${xScale(xEnd)}" y2="${yScale(yEnd)}" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        `;
      }

      svgHtml += points.map(p => {
        const isWarmup = p.isWarmup;
        const fillColor = isWarmup ? '#cbd5e1' : '#2563eb';
        const strokeColor = isWarmup ? '#64748b' : '#ffffff';
        const r = isWarmup ? 5.5 : 7;
        return `<circle cx="${xScale(p.load)}" cy="${yScale(p.velocity)}" r="${r}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>`;
      }).join('');

      if (slope < 0 && e1RM > 0) {
        const cx = xScale(e1RM);
        const cy = yScale(mvt);
        svgHtml += `
          <circle cx="${cx}" cy="${cy}" r="8" fill="#16a34a" stroke="#ffffff" stroke-width="2.5"/>
          <text x="${cx}" y="${cy - 12}" font-size="11" font-family="inherit" font-weight="800" fill="#15803d" text-anchor="middle">${Math.round(e1RM)} kg</text>
        `;
      }
    } else {
      svgHtml += `
        <text x="${width/2}" y="${height/2}" font-size="14" font-family="inherit" fill="#94a3b8" text-anchor="middle">Indtast forsøg for at vise profilgrafen.</text>
      `;
    }

    svgHtml += `
        <text x="${(width + padLeft - padRight) / 2}" y="${height - 8}" font-size="12" font-family="inherit" fill="#475569" font-weight="700" text-anchor="middle">Vægt (kg)</text>
        <text x="15" y="${(height + padTop - padBottom) / 2}" font-size="12" font-family="inherit" fill="#475569" font-weight="700" text-anchor="middle" transform="rotate(-90 15 ${(height + padTop - padBottom) / 2})">Hastighed (m/s)</text>
      </svg>
    `;

    svgWrapper.innerHTML = svgHtml;
  }

  function exportProfileAsImage() {
    const currentMVT = getActiveMVT();
    const res = calculateVBTProfile(state.attempts, currentMVT);

    if (!res.isValid || !res.hasNegativeSlope || res.e1RM <= 0) {
      if (exportImgBtn) {
        const origHtml = exportImgBtn.innerHTML;
        exportImgBtn.style.background = '#ef4444';
        exportImgBtn.style.borderColor = '#dc2626';
        exportImgBtn.innerHTML = '⚠️ Min. 2 forsøg';
        setTimeout(() => {
          exportImgBtn.style.background = '#2563eb';
          exportImgBtn.style.borderColor = '#1d4ed8';
          exportImgBtn.innerHTML = origHtml;
        }, 2000);
      }
      return;
    }

    const exObj = MVT_PRESETS[state.exercise];
    const exName = exObj ? exObj.name : 'Brugerdefineret';
    const dateStr = new Date().toLocaleDateString('da-DK', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const points = res.processedPoints || [];

    const scale = 2;
    const W = 680;
    const rowsNeeded = Math.ceil(points.length / 3);
    const H = 510 + rowsNeeded * 34;

    const canvas = document.createElement('canvas');
    canvas.width = W * scale;
    canvas.height = H * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);

    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    roundRect(8, 8, W - 16, H - 16, 16);
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = '800 20px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`⚡ VBT 1RM Profil — ${exName}`, 28, 44);

    ctx.fillStyle = '#64748b';
    ctx.font = '600 13px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`MVT: ${currentMVT.toFixed(2)} m/s  •  ${dateStr}`, W - 28, 43);

    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(28, 58);
    ctx.lineTo(W - 28, 58);
    ctx.stroke();

    const cardY = 72;
    const cardH = 74;
    const gap = 12;
    const cardW = (W - 56 - gap * 2) / 3;

    const cards = [
      {
        label: 'ESTIMERET 1RM',
        val: `${Math.round(res.e1RM)} kg`,
        bg: '#f0fdf4',
        border: '#bbf7d0',
        valColor: '#15803d',
        labelColor: '#166534'
      },
      {
        label: 'LINEARITET (R²)',
        val: res.rSquared !== null ? res.rSquared.toFixed(2) : '— (2 løft)',
        bg: '#f8fafc',
        border: '#e2e8f0',
        valColor: '#0f172a',
        labelColor: '#64748b'
      },
      {
        label: 'FORSØG & STATUS',
        val: `${points.length} løft${res.isCutoffReached ? ' ✓' : ''}`,
        bg: '#f8fafc',
        border: '#e2e8f0',
        valColor: '#0f172a',
        labelColor: '#64748b'
      }
    ];

    cards.forEach((c, i) => {
      const cx = 28 + i * (cardW + gap);
      ctx.fillStyle = c.bg;
      roundRect(cx, cardY, cardW, cardH, 12);
      ctx.fill();
      ctx.strokeStyle = c.border;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = c.labelColor;
      ctx.font = '700 11px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(c.label, cx + cardW / 2, cardY + 25);

      ctx.fillStyle = c.valColor;
      ctx.font = '800 23px system-ui, -apple-system, sans-serif';
      ctx.fillText(c.val, cx + cardW / 2, cardY + 54);
    });

    const boxX = 28;
    const boxY = 160;
    const boxW = W - 56;
    const boxH = 290;

    ctx.fillStyle = '#ffffff';
    roundRect(boxX, boxY, boxW, boxH, 12);
    ctx.fill();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const padL = boxX + 52;
    const padR = boxX + boxW - 24;
    const padT = boxY + 24;
    const padB = boxY + boxH - 44;

    const { maxLoad, maxVel } = getChartBounds(points, currentMVT, res.e1RM);
    const xMap = (load) => padL + (load / maxLoad) * (padR - padL);
    const yMap = (vel) => padB - (vel / maxVel) * (padB - padT);

    ctx.font = '600 11px system-ui, -apple-system, sans-serif';
    for (let v = 0.2; v <= maxVel + 0.001; v += 0.2) {
      const y = yMap(v);
      ctx.strokeStyle = '#f1f5f9';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padR, y);
      ctx.stroke();

      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'right';
      ctx.fillText(v.toFixed(1), padL - 8, y + 4);
    }

    const xStep = maxLoad <= 120 ? 20 : (maxLoad <= 240 ? 40 : 50);
    for (let kg = xStep; kg <= maxLoad; kg += xStep) {
      const x = xMap(kg);
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padB);
      ctx.stroke();

      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'center';
      ctx.fillText(String(kg), x, padB + 16);
    }

    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padL, padT);
    ctx.lineTo(padL, padB);
    ctx.lineTo(padR, padB);
    ctx.stroke();

    ctx.fillStyle = '#475569';
    ctx.font = '700 12px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Vægt (kg)', (padL + padR) / 2, boxY + boxH - 10);

    ctx.save();
    ctx.translate(boxX + 16, (padT + padB) / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Hastighed (m/s)', 0, 0);
    ctx.restore();

    const mvtY = yMap(currentMVT);
    ctx.save();
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(padL, mvtY);
    ctx.lineTo(padR, mvtY);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#ef4444';
    ctx.font = '700 11px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`MVT (${currentMVT.toFixed(2)} m/s)`, padL + 8, mvtY - 7);

    const { xStart, yStart, xEnd, yEnd } = getClippedLineEndpoints(res.slope, res.intercept, maxLoad, maxVel);
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(xMap(xStart), yMap(yStart));
    ctx.lineTo(xMap(xEnd), yMap(yEnd));
    ctx.stroke();

    points.forEach(p => {
      const px = xMap(p.load);
      const py = yMap(p.velocity);
      ctx.beginPath();
      ctx.arc(px, py, p.isWarmup ? 5.5 : 7, 0, Math.PI * 2);
      ctx.fillStyle = p.isWarmup ? '#cbd5e1' : '#2563eb';
      ctx.fill();
      ctx.strokeStyle = p.isWarmup ? '#64748b' : '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    const e1rmX = xMap(res.e1RM);
    ctx.beginPath();
    ctx.arc(e1rmX, mvtY, 8.5, 0, Math.PI * 2);
    ctx.fillStyle = '#16a34a';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = '#15803d';
    ctx.font = '800 12px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round(res.e1RM)} kg`, e1rmX, mvtY - 13);

    const listY = boxY + boxH + 16;
    ctx.fillStyle = '#475569';
    ctx.font = '700 11px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('UDFØRTE LØFT:', 28, listY + 12);

    const pillW = (W - 56 - 20) / 3;
    points.forEach((p, idx) => {
      const col = idx % 3;
      const row = Math.floor(idx / 3);
      const px = 28 + col * (pillW + 10);
      const py = listY + 20 + row * 32;

      ctx.fillStyle = '#f8fafc';
      roundRect(px, py, pillW, 25, 6);
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#334155';
      ctx.font = '600 11.5px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`#${idx + 1}:  ${p.load} kg  →  ${p.velocity.toFixed(2)} m/s`, px + 10, py + 16.5);
    });

    const link = document.createElement('a');
    const safeName = exName.toLowerCase().replace(/[^a-z0-9æøå]+/gi, '-');
    link.download = `vbt-1rm-${safeName}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    if (exportImgBtn) {
      const origHtml = exportImgBtn.innerHTML;
      exportImgBtn.style.background = '#059669';
      exportImgBtn.style.borderColor = '#047857';
      exportImgBtn.innerHTML = '✓ Billede gemt!';
      setTimeout(() => {
        exportImgBtn.style.background = '#2563eb';
        exportImgBtn.style.borderColor = '#1d4ed8';
        exportImgBtn.innerHTML = origHtml;
      }, 1800);
    }
  }

  function renderHistory() {
    if (!historyListContainer) return;
    historyListContainer.innerHTML = '';

    if (history.length === 0) {
      historyListContainer.innerHTML = `<div style="color:#94a3b8; font-size:0.85rem; padding:0.25rem 0;">Ingen gemte profiler endnu.</div>`;
      return;
    }

    history.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'vbt-history-row';
      div.innerHTML = `
        <div class="vbt-history-info">
          <span class="vbt-history-name-tag">${item.sessionName}</span>
          <span class="vbt-history-stats-tag">| 📅 ${item.date} | <strong>e1RM: ${item.e1RM} kg</strong> | R²: ${item.rSquared} | MVT: ${item.mvt}</span>
        </div>
        <div class="vbt-history-actions-inline">
          <button type="button" class="vbt-btn-xs vbt-load-history-btn" data-idx="${idx}">Hent</button>
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
          state.exercise = item.exercise;
          state.customMVT = item.mvt;
          state.isMvtUnlocked = item.isMvtUnlocked || false;
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

  function updateFullscreenIcon(isFullscreen) {
    if (!fullscreenIcon) return;
    if (isFullscreen) {
      fullscreenIcon.innerHTML = `<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>`;
    } else {
      fullscreenIcon.innerHTML = `<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>`;
    }
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      const card = container.closest('.mp-calc-card') || container;
      const isAlreadyFs = card.classList.contains('vbt-is-fullscreen') || !!document.fullscreenElement;

      if (!isAlreadyFs) {
        if (card.requestFullscreen) {
          card.requestFullscreen().catch(() => {});
        } else if (card.webkitRequestFullscreen) {
          card.webkitRequestFullscreen();
        }
        card.classList.add('vbt-is-fullscreen');
        updateFullscreenIcon(true);
      } else {
        if (document.exitFullscreen && document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen && document.webkitFullscreenElement) {
          document.webkitExitFullscreen();
        }
        card.classList.remove('vbt-is-fullscreen');
        updateFullscreenIcon(false);
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const card = container.closest('.mp-calc-card') || container;
      const isFs = !!document.fullscreenElement;
      if (!isFs) {
        card.classList.remove('vbt-is-fullscreen');
      }
      updateFullscreenIcon(card.classList.contains('vbt-is-fullscreen') || isFs);
    });
  }
  
  if (mvtLockBtn && mvtInput) {
    mvtLockBtn.addEventListener('click', () => {
      state.isMvtUnlocked = !state.isMvtUnlocked;
      if (state.isMvtUnlocked) {
        state.customMVT = getActiveMVT();
      }
      saveState();
      render();
      if (state.isMvtUnlocked) {
        mvtInput.focus();
        mvtInput.select();
      }
    });
  }

  if (mvtInput) {
    mvtInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val) && val > 0) {
        state.customMVT = val;
        saveState();
        updateResultsAndChart(val);
      }
    });
  }

  if (exerciseSelect) {
    exerciseSelect.addEventListener('change', (e) => {
      state.exercise = e.target.value;
      if (state.exercise !== 'custom') {
        state.customMVT = MVT_PRESETS[state.exercise] ? MVT_PRESETS[state.exercise].mvt : 0.15;
        state.isMvtUnlocked = false;
      } else {
        state.isMvtUnlocked = true;
      }
      saveState();
      render();
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

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Vil du starte forfra med 5 tomme rækker?')) {
        stopInlineTimer();
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
        render();
      }
    });
  }

  if (exportImgBtn) {
    exportImgBtn.addEventListener('click', exportProfileAsImage);
  }

  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      const currentMVT = getActiveMVT();
      const res = calculateVBTProfile(state.attempts, currentMVT);

      if (!res.isValid || !res.hasNegativeSlope || res.e1RM <= 0) {
        saveProfileBtn.style.background = '#ef4444';
        saveProfileBtn.style.borderColor = '#dc2626';
        saveProfileBtn.innerHTML = '⚠️ Min. 2 forsøg';
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
        date: new Date().toLocaleDateString('da-DK', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
        sessionName: `${exName} Profil`,
        exercise: state.exercise,
        exerciseName: exName,
        mvt: currentMVT,
        isMvtUnlocked: state.isMvtUnlocked,
        e1RM: Math.round(res.e1RM),
        rSquared: res.rSquared !== null ? res.rSquared.toFixed(2) : '—',
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
      }, 1800);
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