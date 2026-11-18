// assets/js/ui/resting-hr-ui.js
import { evaluateRestingHr, getNormRow } from '../core/resting-hr.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_restinghr_state_v4';

  const inputs = container.querySelectorAll('.js-rhr-input');
  
  // Outputs
  const resEvalBtn = container.querySelector('.js-rhr-eval-badge');
  const resEvalText = container.querySelector('.js-rhr-eval-text');
  const resDesc = container.querySelector('.js-rhr-desc');
  const marker = container.querySelector('.js-rhr-continuum-marker');

  // Popup DOM
  const tableBtn = container.querySelector('.js-rhr-table-btn');
  const popup = container.querySelector('.js-rhr-popup');
  const popupTitle = container.querySelector('.js-rhr-popup-title');
  const popupClose = container.querySelector('.js-rhr-popup-close');
  const tableBody = container.querySelector('.js-rhr-table-body');

  function saveState() {
    try {
      const state = {
        bpm: container.querySelector('[name="rhr_bpm"]')?.value || '',
        age: container.querySelector('[name="rhr_age"]')?.value || '',
        gender: container.querySelector('input[name="rhr_gender"]:checked')?.value || 'male'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.bpm && container.querySelector('[name="rhr_bpm"]')) {
          container.querySelector('[name="rhr_bpm"]').value = state.bpm;
        }
        if (state.age && container.querySelector('[name="rhr_age"]')) {
          container.querySelector('[name="rhr_age"]').value = state.age;
        }
        if (state.gender) {
          const radio = container.querySelector(`input[name="rhr_gender"][value="${state.gender}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {}
  }

  function updateGenderUI() {
    const genderRadios = container.querySelectorAll('input[name="rhr_gender"]');
    genderRadios.forEach(r => {
      const box = r.nextElementSibling;
      if (box) {
        if (r.checked) {
          box.style.backgroundColor = '#2563eb';
          box.style.color = '#ffffff';
        } else {
          box.style.backgroundColor = 'transparent';
          box.style.color = '#475569';
        }
      }
    });
  }

  function renderPopupTable() {
    if (!tableBody || !popupTitle) return;

    const bpm = parseFloat(container.querySelector('[name="rhr_bpm"]')?.value || 0);
    const age = parseInt(container.querySelector('[name="rhr_age"]')?.value || 30, 10);
    const genderEl = container.querySelector('input[name="rhr_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const isMale = (gender === 'male');

    const row = getNormRow(age, gender);
    const res = evaluateRestingHr(bpm, age, gender);

    popupTitle.textContent = `Hvilepuls normer (${isMale ? 'Mænd' : 'Kvinder'}, ${row.label})`;

    const tableData = [
      { name: 'Top 10% (Fremragende)', range: `< ${row.p10} bpm`, color: '#3b82f6', key: 'top10' },
      { name: 'Top 25% (God)', range: `${row.p10 + 1} - ${row.p25} bpm`, color: '#22c55e', key: 'top25' },
      { name: '50% (Gennemsnit)', range: `${row.p25 + 1} - ${row.p50} bpm`, color: '#eab308', key: 'p50' },
      { name: '75% (Under gennemsnit)', range: `${row.p50 + 1} - ${row.p75} bpm`, color: '#f97316', key: 'p75' },
      { name: '90% (Høj / Utrænet)', range: `> ${row.p75} bpm`, color: '#ef4444', key: 'p90' }
    ];

    tableBody.innerHTML = '';
    tableData.forEach(item => {
      const isMatch = res.isValid && item.key === res.categoryKey;
      const bgStyle = isMatch ? 'background-color: #eff6ff;' : '';
      const fontStyle = isMatch ? 'font-weight: 800; color: #0f172a;' : 'color: #334155;';
      const dot = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${item.color}; margin-right:8px;"></span>`;
      
      let badgeHtml = '';
      if (isMatch) {
        badgeHtml = `<span style="display:inline-block; font-size:0.75rem; font-weight:800; background-color:#3b82f6; color:#fff; padding:2px 6px; border-radius:4px; margin-left:8px; vertical-align:middle;">Din Placering</span>`;
      }

      const tr = document.createElement('tr');
      tr.style = `border-bottom: 1px solid #e2e8f0; ${bgStyle}`;
      tr.innerHTML = `
        <td style="padding: 0.75rem 0.5rem; font-size: 0.9rem; ${fontStyle}">
          <div style="display:flex; align-items:center;">${dot}${item.name}</div>
        </td>
        <td style="padding: 0.75rem 0.5rem; text-align: right; font-size: 0.9rem; ${fontStyle}">
          ${item.range} ${badgeHtml}
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  function calculate() {
    saveState();
    updateGenderUI();

    const bpm = parseFloat(container.querySelector('[name="rhr_bpm"]')?.value || 0);
    const age = parseInt(container.querySelector('[name="rhr_age"]')?.value || 0, 10);
    const genderEl = container.querySelector('input[name="rhr_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'male';
    const isMale = (gender === 'male');

    const res = evaluateRestingHr(bpm, age, gender);
    const normRow = getNormRow(age, gender);

    if (res.isValid) {
      if (resEvalText) resEvalText.textContent = res.label;
      if (resEvalBtn) {
        resEvalBtn.style.backgroundColor = res.color;
        resEvalBtn.style.color = '#ffffff';
      }

      // ELEGANTE OG NATURLIGE SÆTNINGSSTRUKTUR
      const avgSpan = `${normRow.p25 + 1}–${normRow.p50} slag/min`;
      if (resDesc) {
        resDesc.innerHTML = `
          Din hvilepuls på <strong>${Math.round(bpm)} slag/min</strong> er ${res.shortEval} for ${isMale ? 'mænd' : 'kvinder'} i alderen ${normRow.label}. 
          Befolkningens gennemsnit for din aldersgruppe er <strong>${avgSpan}</strong>. 
          Dette er typisk for ${res.typicalFor}
        `;
      }

      // Continuum Marker position
      if (marker) {
        let percent = 50;
        if (res.categoryKey === 'top10') percent = 10;
        else if (res.categoryKey === 'top25') percent = 30;
        else if (res.categoryKey === 'p50') percent = 50;
        else if (res.categoryKey === 'p75') percent = 70;
        else if (res.categoryKey === 'p90') percent = 90;

        marker.style.left = `${percent}%`;
        marker.style.display = 'block';
      }
    } else {
      resetResults();
    }
  }

  function resetResults() {
    if (resEvalText) resEvalText.textContent = 'Mangler data';
    if (resEvalBtn) {
      resEvalBtn.style.backgroundColor = '#e2e8f0';
      resEvalBtn.style.color = '#64748b';
    }
    if (resDesc) resDesc.textContent = 'Indtast din hvilepuls for at få en samlet vurdering og sammenligning med din aldersgruppe.';
    if (marker) marker.style.display = 'none';
  }

  inputs.forEach(input => {
    ['input', 'change', 'keyup'].forEach(ev => input.addEventListener(ev, calculate));
  });

  if (tableBtn && popup && popupClose) {
    tableBtn.addEventListener('click', () => {
      renderPopupTable();
      popup.style.display = 'flex';
    });
    popupClose.addEventListener('click', () => popup.style.display = 'none');
  }

  const resetBtn = container.querySelector('.js-reset-btn');
  const downloadBtn = container.querySelector('.js-download-btn');

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      
      const bpmInput = container.querySelector('[name="rhr_bpm"]');
      const ageInput = container.querySelector('[name="rhr_age"]');
      const maleRadio = container.querySelector('input[name="rhr_gender"][value="male"]');

      if (bpmInput) bpmInput.value = '53';
      if (ageInput) ageInput.value = '30';
      if (maleRadio) maleRadio.checked = true;

      if (popup) popup.style.display = 'none';
      calculate();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (popup) popup.style.display = 'none';
      setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
          html2canvas(container, { scale: 2, backgroundColor: '#ffffff' }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'hvilepuls-rapport.png';
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

export const initRestingHr = initCalculator;
export default initCalculator;