// assets/js/ui/1rm-ui.js
import { estimate1RM } from '../core/1rm.js';

export function initCalculator(container) {
  const form = container.querySelector('form');
  if (!form) return;

  const formulaSelect = form.querySelector('[name="formula"]');
  const reynoldsField = container.querySelector('.mp-reynolds-field');

  // Lyt på skift af formel for at vise/skjule Reynolds kropsdel-valg
  if (formulaSelect && reynoldsField) {
    formulaSelect.addEventListener('change', () => {
      if (formulaSelect.value === 'reynolds') {
        reynoldsField.style.display = 'flex';
      } else {
        reynoldsField.style.display = 'none';
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const weight = parseFloat(data.get('weight'));
    const reps = parseInt(data.get('reps'), 10);
    const formula = data.get('formula') ?? 'brzycki';
    const bodyPart = data.get('bodypart') ?? 'lower';

    if (Number.isNaN(weight) || Number.isNaN(reps)) return;

    // Beregn RM
    const rm = estimate1RM(weight, reps, formula, bodyPart);
    const max1RM = rm.getRepMax(1);

    // Opdater overskrift
    const caption = container.querySelector('#formula-1rm-table-caption');
    const selectedOption = form.querySelector('[name="formula"] option:checked');
    if (caption && selectedOption) {
      caption.textContent = selectedOption.textContent.split(' (')[0];
    }

    // Opdater alle data-result felter i hele beregneren
    const resultElements = container.querySelectorAll('[data-result]');

    resultElements.forEach((el) => {
      const key = el.dataset.result; // fx "rm1", "rm5", "p3", "rm5avg"

      if (key.startsWith('p')) {
        // Håndter procenter (p1, p3, p5 osv.)
        const r = parseInt(key.replace('p', ''), 10);
        if (!Number.isNaN(r) && max1RM > 0) {
          const pct = (rm.getRepMax(r) / max1RM) * 100;
          el.textContent = `${pct.toFixed(0)}%`;
        }
      } else if (key.endsWith('avg')) {
        // Håndter gennemsnit (rm1avg, rm5avg osv.)
        const r = parseInt(key.replace('rm', '').replace('avg', ''), 10);
        if (!Number.isNaN(r)) {
          el.textContent = `${rm.getAverage(r).toFixed(1)} kg`;
        }
      } else if (key.startsWith('rm')) {
        // Håndter rene RM værdier (rm1, rm3, rm5 osv.)
        const r = parseInt(key.replace('rm', ''), 10);
        if (!Number.isNaN(r)) {
          el.textContent = `${rm.getRepMax(r).toFixed(1)} kg`;
        }
      }
    });
  });
}