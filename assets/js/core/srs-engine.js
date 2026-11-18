(function() {
  // Undgå at køre scriptet flere gange
  if (window.MPSRS) return; 

  const STORAGE_KEY = 'motionsplan_flashcards';

  // Henter alle gemte flashcards fra langtidshukommelsen
  function getStoredData() {
    try { 
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; 
    } catch (e) { 
      return {}; 
    }
  }

  // Gemmer til langtidshukommelsen
  function saveData(data) {
    try { 
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); 
    } catch (e) {}
  }

  // Håndterer "Cloze deletion" (Huludfyldning: {{c1::svar}})
  function parseAnkiCloze(text) {
    if (!text) return null;
    const clozeRegex = /\{\{c\d+::([^:]+?)(?:::([^:]+?))?\}\}/g;
    if (!clozeRegex.test(text)) return null;

    clozeRegex.lastIndex = 0;
    const frontText = text.replace(clozeRegex, (match, answer, hint) => {
      const placeholder = hint ? `[${hint}]` : '[...]';
      return `<span class="mp-cloze-blank">${placeholder}</span>`;
    });

    clozeRegex.lastIndex = 0;
    const backText = text.replace(clozeRegex, (match, answer) => {
      return `<span class="mp-cloze-revealed">${answer}</span>`;
    });

    return { front: frontText, back: backText };
  }

  // SM-2 Spaced Repetition Algoritmen
  function calculateSM2(card, rating) {
    let ease = card.ease || 2.5;
    let reps = card.reps || 0;
    let interval = card.interval || 0;
    const nextReview = new Date();

    if (rating === 'hard') {
      reps = 0;
      interval = 0;
      ease = Math.max(1.3, ease - 0.2);
      // Sættes til repetition næsten med det samme
      nextReview.setSeconds(nextReview.getSeconds() - 1);
    } else if (rating === 'good') {
      reps += 1;
      interval = reps === 1 ? 1 : reps === 2 ? 6 : Math.round(interval * ease);
      nextReview.setDate(nextReview.getDate() + interval);
    } else if (rating === 'easy') {
      reps += 1;
      interval = reps === 1 ? 4 : Math.round(interval * ease * 1.3);
      ease += 0.15;
      nextReview.setDate(nextReview.getDate() + interval);
    }

    return { 
      ease: parseFloat(ease.toFixed(2)), 
      reps, 
      interval, 
      nextReview: nextReview.toISOString() 
    };
  }

  // Eksportér funtionerne globalt
  window.MPSRS = {
    getStoredData,
    saveData,
    parseAnkiCloze,
    calculateSM2
  };
})();