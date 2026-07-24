// assets/js/ui/power-zone-calculator-ui.js
import {
  POWER_ZONE_MODELS,
  calculatePowerZones
} from '../core/power-zone-core.js';

export function initPowerZoneCalculatorUI(container, calcId = 'power-zone-calculator') {
  if (!container) return;

  let currentSport = 'cycling'; // 'cycling', 'running'
  let isManualOverride = false;
  let activeManualFormulaKey = '';

  // Main Inputs
  const ftpInput = container.querySelector('[data-key="ftp"]');
  const weightInput = container.querySelector('[data-key="weight"]');

  // Switchers & Controls
  const modeBtns = container.querySelectorAll('.js-pw-mode-btn');
  const formulaBar = container.querySelector('.js-pw-formula-bar');
  const manualWrapper = container.querySelector('.js-pw-manual-dropdown-wrapper');
  const pickerContainer = container.querySelector('.js-pw-picker-container');

  // Results & Popover
  const basisBadge = container.querySelector('.js-pw-basis-badge');
  const cardContainer = container.querySelector('.js-pw-zone-card-container');
  const zonePopover = container.querySelector('.js-pw-zone-popover');
  const zonePopoverBody = container.querySelector('.js-pw-zone-popover-body');
  const zonePopoverCloseBtn = container.querySelector('.js-pw-zone-popover-close');

  // Actions
  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  const INFO_TEXTS = {
    power_basics: `
      <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 800; color: #0f172a;">⚡ Hvad er FTP og Wattzoner?</h4>
      <p style="margin: 0 0 0.65rem 0; font-size: 0.825rem; color: #475569; line-height: 1.4;"><strong>FTP (Functional Threshold Power):</strong> Den maksimale gennemsnitseffekt i watt, som du fysiologisk kan opretholde over 1 time.</p>
      <p style="margin: 0 0 0.65rem 0; font-size: 0.825rem; color: #475569; line-height: 1.4;"><strong>Watt/kg (Relativ effekt):</strong> Ved at dividere din FTP med din kropsvægt i kg, får du et objektivt sammenligningstal. Eksempel: 300W på 75kg = 4.0 W/kg.</p>
      <p style="margin: 0; font-size: 0.8rem; color: #64748b; line-height: 1.4;"><strong>💬 Snakketesten & RPE:</strong> En praktisk guide til, hvordan din vejrtrækning bør føles i den enkelte zone.</p>
    `
  };

  function openZonePopover(z) {
    if (!zonePopover || !zonePopoverBody) return;

    zonePopoverBody.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem;">
        <span style="width: 14px; height: 14px; border-radius: 50%; background: ${z.color}; display: inline-block;"></span>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin: 0;">${z.name}</h4>
        <span class="mp-pw-rec-tag" style="margin-left: auto;">${z.minPct}% – ${z.maxPct}% FTP</span>
      </div>

      <div style="background: ${z.bgColor}; border: 1px solid ${z.borderColor}; border-radius: 12px; padding: 1rem; text-align: center; margin-bottom: 0.85rem;">
        <div style="font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em;">Målrettet Wattområde</div>
        <div style="font-size: 2.2rem; font-weight: 900; color: #0f172a; line-height: 1.1; margin-top: 0.2rem;">${z.fromWatt} – ${z.toWatt} <span style="font-size: 1.1rem; color: #64748b;">W</span></div>
      </div>

      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.85rem;">
        <span class="mp-pw-rpe-badge" style="font-size: 0.775rem;">${z.rpe}</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: #334155;">💬 Snakketest: ${z.talkTest}</span>
      </div>

      ${z.timeInZone ? `
        <div style="margin-bottom: 0.85rem;">
          <span class="mp-pw-time-badge">⏱️ Anbefalet tid i zone: <strong>${z.timeInZone}</strong></span>
        </div>
      ` : ''}

      <div style="font-size: 0.825rem; color: #334155; line-height: 1.45; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.85rem;">
        <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: #0f172a;">${z.desc}</p>
        ${z.extendedDetails ? `<div style="border-top: 1px dashed #cbd5e1; padding-top: 0.65rem; margin-top: 0.65rem;">${z.extendedDetails}</div>` : ''}
      </div>
    `;

    zonePopover.style.display = 'flex';
  }

  function closeZonePopover() {
    if (zonePopover) zonePopover.style.display = 'none';
  }

  function openSectionOverlay(btn) {
    const type = btn.getAttribute('data-info-type');
    const panel = btn.closest('.mp-pw-section-rel');
    if (!panel) return;

    const overlay = panel.querySelector('.js-section-info-overlay');
    const body = panel.querySelector('.js-info-overlay-body');

    if (overlay && body) {
      body.innerHTML = INFO_TEXTS[type] || '';
      overlay.style.display = 'flex';
    }
  }

  function closeSectionOverlay(closeBtn) {
    const overlay = closeBtn.closest('.js-section-info-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  function toggleFormulaPicker(show) {
    const isCurrentlyOpen = manualWrapper && manualWrapper.style.display === 'block';
    const open = show !== undefined ? show : !isCurrentlyOpen;

    if (open) {
      if (formulaBar) formulaBar.style.display = 'none';
      if (manualWrapper) manualWrapper.style.display = 'block';
    } else {
      if (manualWrapper) manualWrapper.style.display = 'none';
      if (formulaBar) formulaBar.style.display = 'flex';
    }
  }

  function switchSport(sport) {
    currentSport = sport;
    modeBtns.forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-sport') === sport);
    });

    isManualOverride = false;
    activeManualFormulaKey = '';
    toggleFormulaPicker(false);

    calculate();
  }

  function renderFormulaPicker(activeKey, autoRecKey) {
    if (!pickerContainer) return;

    const availableKeys = Object.keys(POWER_ZONE_MODELS).filter(key => {
      const model = POWER_ZONE_MODELS[key];
      return model.sport === currentSport;
    });

    pickerContainer.innerHTML = availableKeys.map(key => {
      const m = POWER_ZONE_MODELS[key];
      const isSelected = key === activeKey;
      const isAutoRecommended = key === autoRecKey;

      return `
        <div class="mp-pw-picker-card ${isSelected ? 'is-selected' : ''}" data-formula-key="${key}">
          
          <!-- PRIKKERNE LIGGER NU DIREKTE OVENOVER OVERSKRIFTEN -->
          <div class="mp-pw-dots-indicator" style="margin-bottom: 0.35rem;">
            ${m.zones.map(z => `<span class="dot" style="background:${z.color};"></span>`).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <strong style="font-size: 0.875rem; color: #0f172a;">${m.name}</strong>
              ${isAutoRecommended ? '<span class="mp-pw-rec-tag">⭐ Anbefalet</span>' : ''}
            </div>
            <span class="mp-pw-check-icon ${isSelected ? 'is-selected' : ''}">✓</span>
          </div>
          <div style="font-size: 0.75rem; color: #475569; line-height: 1.35;">${m.formulaDesc}</div>
        </div>
      `;
    }).join('');

    pickerContainer.querySelectorAll('.mp-pw-picker-card').forEach(card => {
      card.addEventListener('click', () => {
        activeManualFormulaKey = card.getAttribute('data-formula-key');
        isManualOverride = true;
        toggleFormulaPicker(false);
        calculate();
      });
    });
  }

  function calculate() {
    const rawFtp = ftpInput ? ftpInput.value.trim() : '';
    const rawWeight = weightInput ? weightInput.value.trim() : '';

    const ftp = rawFtp !== '' ? parseInt(rawFtp, 10) : 0;
    const weight = rawWeight !== '' ? parseFloat(rawWeight) : 0;

    if (ftp <= 0) {
      if (cardContainer) {
        cardContainer.innerHTML = `<div class="mp-pw-empty-state">⚠️ Indtast venligst din FTP (watt) for at beregne zoner.</div>`;
      }
      if (basisBadge) basisBadge.textContent = 'Mangler FTP';
      if (formulaBar) {
        formulaBar.innerHTML = `<div style="font-size: 0.8rem; font-weight: 700; color: #64748b; padding: 0.2rem 0;">Indtast din FTP ovenfor</div>`;
      }
      return;
    }

    const autoRecKey = (currentSport === 'cycling') ? 'coggan_7zone' : 'stryd_run';
    let activeModelKey = (isManualOverride && activeManualFormulaKey) ? activeManualFormulaKey : autoRecKey;

    const activeModelCandidate = POWER_ZONE_MODELS[activeModelKey];
    if (activeModelCandidate && activeModelCandidate.sport !== currentSport) {
      isManualOverride = false;
      activeModelKey = autoRecKey;
    }

    const res = calculatePowerZones({ ftp, weight, modelKey: activeModelKey });
    const activeModelObj = POWER_ZONE_MODELS[activeModelKey];

    if (formulaBar && activeModelObj) {
      const isAuto = activeModelKey === autoRecKey;
      formulaBar.innerHTML = `
        <div class="mp-pw-badge-header">
          <div class="mp-pw-badge-title-group">
            <strong class="mp-pw-badge-title">${activeModelObj.name}</strong>
            ${isAuto ? '<span class="mp-pw-rec-tag">⭐ Anbefalet</span>' : ''}
          </div>
          <button type="button" class="js-pw-toggle-override mp-pw-btn-gear" title="Skift model">
            ⚙️
          </button>
        </div>
        <div style="font-size: 0.75rem; color: #475569; line-height: 1.35; margin-top: 0.2rem;">
          ${activeModelObj.formulaDesc}
        </div>
      `;

      const gearBtn = formulaBar.querySelector('.js-pw-toggle-override');
      if (gearBtn) {
        gearBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFormulaPicker();
        });
      }
    }

    if (basisBadge) {
      if (res.wattsPerKg) {
        basisBadge.textContent = `FTP: ${ftp} W | ${res.wattsPerKg} W/kg`;
      } else {
        basisBadge.textContent = `FTP: ${ftp} W`;
      }
      basisBadge.style.display = 'inline-block';
    }

    renderFormulaPicker(activeModelKey, autoRecKey);

    if (cardContainer) {
      let html = res.zones.map((z, idx) => `
        <div class="mp-pw-zone-card" style="border-left-color: ${z.color}; background: ${z.bgColor}; border-color: ${z.borderColor};" data-zone-index="${idx}">
          
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
            
            <div style="display: flex; flex-direction: column; gap: 0.15rem; flex: 1;">
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: ${z.color}; display: inline-block; flex-shrink: 0;"></span>
                <strong class="mp-pw-card-title" style="color: ${z.textColor};">${z.name}</strong>
              </div>
              
              <!-- RPE & SNAKKETEST -->
              <div style="display: flex; align-items: center; gap: 0.4rem; margin-top: 0.1rem; flex-wrap: wrap;">
                <span class="mp-pw-rpe-badge">${z.rpe}</span>
                <span style="font-weight: 700; font-size: 0.75rem; color: #334155;">💬 ${z.talkTest}</span>
              </div>
            </div>

            <!-- HØJRE KOLONNE: WATT OG PROCENT -->
            <div class="mp-pw-card-watt-container">
              <div class="mp-pw-card-watt">${z.fromWatt} – ${z.toWatt} W</div>
              <div style="text-align: right; margin-top: 3px;">
                <span class="mp-pw-pct-sub">${z.minPct}% – ${z.maxPct}% FTP</span>
              </div>
            </div>

          </div>

          <!-- TID I ZONE BADGE -->
          ${z.timeInZone ? `
            <div style="margin-top: 0.35rem;">
              <span class="mp-pw-time-badge">⏱️ Tid i zone: <strong>${z.timeInZone}</strong></span>
            </div>
          ` : ''}

          <!-- KORT BESKRIVELSE -->
          <div style="font-size: 0.775rem; color: #475569; margin-top: 0.35rem; line-height: 1.35;">
            ${z.desc}
          </div>

        </div>
      `).join('');

      // SWEET SPOT VISES KUN HVIS DEN VALGTE FORMEL DEFINERER SWEET SPOT (F.EKS. COGGAN)
      if (res.hasSweetSpot && res.sweetSpot) {
        html += `
          <div class="mp-pw-sweetspot-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; flex-wrap: wrap;">
              <div>
                <strong style="font-size: 0.95rem; color: #92400e; display: flex; align-items: center; gap: 0.35rem;">
                  🎯 Sweet Spot Zone (84% – 97% FTP)
                </strong>
                <div style="font-size: 0.75rem; color: #b45309; margin-top: 0.2rem; font-weight: 600;">
                  Opfundet af Frank Overton & Andy Coggan. Maksimal fysiologisk tilpasning med lav restitution.
                </div>
                <div style="margin-top: 0.35rem;">
                  <span class="mp-pw-time-badge" style="background: #fef3c7; color: #92400e;">⏱️ Anbefalet tid: <strong>20 min – 90 min</strong></span>
                </div>
              </div>

              <div style="text-align: right; flex-shrink: 0;">
                <div style="font-size: 1.35rem; font-weight: 900; color: #92400e;">
                  ${res.sweetSpot.fromWatt} – ${res.sweetSpot.toWatt} W
                </div>
                <div style="text-align: right; margin-top: 3px;">
                  <span class="mp-pw-pct-sub" style="background: #fef3c7; color: #92400e;">84% – 97% FTP</span>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      cardContainer.innerHTML = html;

      cardContainer.querySelectorAll('.mp-pw-zone-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-zone-index'), 10);
          const zoneObj = res.zones[idx];
          if (zoneObj) openZonePopover(zoneObj);
        });
      });
    }
  }

  if (zonePopoverCloseBtn) zonePopoverCloseBtn.addEventListener('click', closeZonePopover);

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => switchSport(btn.getAttribute('data-sport')));
  });

  container.querySelectorAll('.js-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSectionOverlay(btn);
    });
  });

  container.querySelectorAll('.js-info-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSectionOverlay(closeBtn);
    });
  });

  container.querySelectorAll('.js-pw-input').forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (ftpInput) ftpInput.value = '285';
      if (weightInput) weightInput.value = '75';

      switchSport('cycling');
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'wattzoner-rapport.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
          });
        }
      }, 100);
    });
  }

  calculate();
}

export const initCalculator = initPowerZoneCalculatorUI;