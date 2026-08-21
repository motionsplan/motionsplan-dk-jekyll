// assets/js/ui/inol-ui.js
import { EXERCISE_DATABASE, calculateWorkoutINOL, evaluateINOL, rpeToPercent } from '../core/inol.js';

export function initCalculator(container) {
  if (!container) return;

  const STORAGE_KEY = 'mp_inol_workout_state_v1';

  let timeFrame = 'session'; // 'session' eller 'weekly'
  let workoutList = [
    { id: 1, exerciseId: 'bench_press', inputType: 'pct', sets: 4, reps: 5, intensityPercent: 80, rpe: 8 },
    { id: 2, exerciseId: 'squat', inputType: 'pct', sets: 3, reps: 5, intensityPercent: 82.5, rpe: 8.5 }
  ];

  const tbody = container.querySelector('.js-inol-tbody');
  const addRowBtn = container.querySelector('.js-inol-add-row');
  const timeframeBtns = container.querySelectorAll('.js-inol-timeframe-btn');

  const resTotalVal = container.querySelector('.js-inol-total-val');
  const resEvalBtn = container.querySelector('.js-inol-eval-badge');
  const resEvalText = container.querySelector('.js-inol-eval-text');
  const marker = container.querySelector('.js-inol-continuum-marker');

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ workoutList, timeFrame }));
    } catch (e) {}
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.workoutList && Array.isArray(data.workoutList)) workoutList = data.workoutList;
        if (data.timeFrame) timeFrame = data.timeFrame;
      }
    } catch (e) {}
  }

  function renderRows() {
    if (!tbody) return;

    tbody.innerHTML = workoutList.map((item, index) => {
      const isRpe = item.inputType === 'rpe';
      const optionsHtml = EXERCISE_DATABASE.map(ex => 
        `<option value="${ex.id}" ${ex.id === item.exerciseId ? 'selected' : ''}>${ex.name}</option>`
      ).join('');

      let effPct = item.intensityPercent;
      if (isRpe) {
        effPct = rpeToPercent(item.reps, item.rpe);
      }

      return `
        <tr class="mp-inol-row-card" data-index="${index}">
          <td>
            <select class="mp-inol-select js-row-exercise">${optionsHtml}</select>
          </td>
          <td>
            <select class="mp-inol-select js-row-method">
              <option value="pct" ${!isRpe ? 'selected' : ''}>% 1RM</option>
              <option value="rpe" ${isRpe ? 'selected' : ''}>RPE</option>
            </select>
          </td>
          <td>
            <input type="number" class="mp-inol-input js-row-sets" min="1" max="20" value="${item.sets}">
          </td>
          <td>
            <input type="number" class="mp-inol-input js-row-reps" min="1" max="30" value="${item.reps}">
          </td>
          <td>
            ${isRpe ? `
              <input type="number" class="mp-inol-input js-row-rpe" min="5" max="10" step="0.5" value="${item.rpe}" placeholder="RPE">
              <div style="font-size:0.65rem; color:#64748b; font-weight:700; text-align:center; margin-top:2px;">≈ ${effPct}%</div>
            ` : `
              <input type="number" class="mp-inol-input js-row-pct" min="50" max="99" step="0.5" value="${item.intensityPercent}" placeholder="%">
            `}
          </td>
          <td style="text-align: center; font-weight: 900; font-size: 0.9rem; color: #1e3a8a;" class="js-row-inol-out">
            -
          </td>
          <td style="text-align: center;">
            <button type="button" class="js-row-remove" style="background:none; border:none; cursor:pointer; font-size:1rem; opacity:0.6;" title="Fjern">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');

    bindRowEvents();
  }

  function bindRowEvents() {
    const rows = tbody.querySelectorAll('.mp-inol-row-card');

    rows.forEach(tr => {
      const index = parseInt(tr.getAttribute('data-index'), 10);
      const exSelect = tr.querySelector('.js-row-exercise');
      const methodSelect = tr.querySelector('.js-row-method');
      const setsInput = tr.querySelector('.js-row-sets');
      const repsInput = tr.querySelector('.js-row-reps');
      const pctInput = tr.querySelector('.js-row-pct');
      const rpeInput = tr.querySelector('.js-row-rpe');
      const removeBtn = tr.querySelector('.js-row-remove');

      if (exSelect) exSelect.addEventListener('change', (e) => { workoutList[index].exerciseId = e.target.value; calculate(); });
      if (methodSelect) methodSelect.addEventListener('change', (e) => { 
        workoutList[index].inputType = e.target.value; 
        renderRows(); 
        calculate(); 
      });
      if (setsInput) setsInput.addEventListener('input', (e) => { workoutList[index].sets = e.target.value; calculate(); });
      if (repsInput) repsInput.addEventListener('input', (e) => { workoutList[index].reps = e.target.value; calculate(); });
      if (pctInput) pctInput.addEventListener('input', (e) => { workoutList[index].intensityPercent = e.target.value; calculate(); });
      if (rpeInput) rpeInput.addEventListener('input', (e) => { workoutList[index].rpe = e.target.value; calculate(); });

      if (removeBtn) {
        removeBtn.addEventListener('click', () => {
          workoutList.splice(index, 1);
          renderRows();
          calculate();
        });
      }
    });
  }

  function updateMuscleMap(muscleTotals) {
    const getMuscleColor = (val) => {
      const thresh = timeFrame === 'weekly' ? [2.0, 3.0, 4.0] : [0.4, 1.0, 2.0];
      if (val <= 0) return '#cbd5e1';
      if (val < thresh[0]) return '#94a3b8'; // Let
      if (val <= thresh[1]) return '#22c55e'; // Optimal
      if (val <= thresh[2]) return '#f97316'; // Hård
      return '#ef4444'; // Ekstrem
    };

    const map = {
      'muscle-chest': muscleTotals.chest,
      'muscle-abs': muscleTotals.abs,
      'muscle-biceps-l': muscleTotals.biceps,
      'muscle-biceps-r': muscleTotals.biceps,
      'muscle-quads-l': muscleTotals.quads,
      'muscle-quads-r': muscleTotals.quads,
      'muscle-back': muscleTotals.back,
      'muscle-triceps-l': muscleTotals.triceps,
      'muscle-triceps-r': muscleTotals.triceps,
      'muscle-glutes': muscleTotals.glutes,
      'muscle-hamstrings-l': muscleTotals.hamstrings,
      'muscle-hamstrings-r': muscleTotals.hamstrings,
      'muscle-delts-front-l': muscleTotals.delts,
      'muscle-delts-front-r': muscleTotals.delts
    };

    Object.keys(map).forEach(id => {
      const el = container.querySelector(`#${id}`);
      if (el) {
        el.style.fill = getMuscleColor(map[id]);
      }
    });
  }

  function calculate() {
    saveState();

    const result = calculateWorkoutINOL(workoutList);

    // Opdater enkeltrække-INOLer i DOM
    const rows = tbody.querySelectorAll('.mp-inol-row-card');
    result.exerciseResults.forEach((res, i) => {
      const outTd = rows[i]?.querySelector('.js-row-inol-out');
      if (outTd) outTd.textContent = res.exerciseINOL;
    });

    if (resTotalVal) resTotalVal.textContent = result.totalINOL;

    const evaluation = evaluateINOL(result.rawTotalINOL, timeFrame === 'weekly');

    if (resEvalBtn && resEvalText) {
      resEvalText.textContent = evaluation.label;
      resEvalBtn.style.backgroundColor = evaluation.color;
      resEvalBtn.style.color = '#ffffff';
    }

    if (marker) {
      let percent = Math.min(98, Math.max(2, (result.rawTotalINOL / (timeFrame === 'weekly' ? 5.0 : 2.5)) * 100));
      marker.style.left = `${percent}%`;
      marker.style.display = result.rawTotalINOL > 0 ? 'block' : 'none';
    }

    updateMuscleMap(result.muscleTotals);
  }

  if (addRowBtn) {
    addRowBtn.addEventListener('click', () => {
      workoutList.push({
        id: Date.now(),
        exerciseId: 'bench_press',
        inputType: 'pct',
        sets: 3,
        reps: 5,
        intensityPercent: 80,
        rpe: 8
      });
      renderRows();
      calculate();
    });
  }

  timeframeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeframeBtns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = '#64748b';
      });
      btn.classList.add('active');
      btn.style.background = '#ffffff';
      btn.style.color = '#0f172a';
      timeFrame = btn.getAttribute('data-timeframe');
      calculate();
    });
  });

  const resetBtn = container.querySelector('.js-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      workoutList = [
        { id: 1, exerciseId: 'bench_press', inputType: 'pct', sets: 4, reps: 5, intensityPercent: 80, rpe: 8 }
      ];
      renderRows();
      calculate();
    });
  }

  loadState();
  renderRows();
  calculate();
}

export const initINOL = initCalculator;
export default initCalculator;